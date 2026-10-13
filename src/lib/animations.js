// AnimationManager adaptado para Next.js
// Corregido: cleanup completo, sin conflictos con React, sin memory leaks

export class AnimationManager {
  constructor(root = document) {
    this.root = root;
    this.controller = new AbortController();
    this.cleanups = [];
    this.frames = new Set();
    this.timers = new Set();
    this._destroyed = false;
    this._particleFrame = null;
    this._resizeHandler = null;
    this.layoutVersion = 0;

    const invalidateLayout = () => {
      this.layoutVersion += 1;
    };
    this.on(window, 'scroll', invalidateLayout, { passive: true });
    this.on(window, 'resize', invalidateLayout, { passive: true });

    this.initRevealAnimations();
    this.initTypingEffect();
    this.initFloatingCards();
    this.initParticleBackground();
    this.initParallaxEffect();
    this.initCardBorderGlowEffect();
    this.initCardJellyEffect();
  }

  on(target, event, callback, options = {}) {
    if (!target || this._destroyed) return;
    target.addEventListener(event, callback, {
      ...options,
      signal: this.controller.signal,
    });
  }

  frame(callback) {
    if (this._destroyed) return null;
    const id = requestAnimationFrame((time) => {
      this.frames.delete(id);
      if (this._destroyed) return;
      callback(time);
    });
    this.frames.add(id);
    return id;
  }

  later(callback, delay) {
    if (this._destroyed) return null;
    const id = setTimeout(() => {
      this.timers.delete(id);
      if (this._destroyed) return;
      callback();
    }, delay);
    this.timers.add(id);
    return id;
  }

  // ============================================================
  // REVEAL ANIMATIONS
  // ============================================================
  initRevealAnimations() {
    const elements = [
      ...this.root.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .case-section, .gallery-item',
      ),
    ];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 24) {
        element.classList.add('active');
      } else {
        element.classList.add('reveal-ready');
        observer.observe(element);
      }
    });

    this.on(this.root, 'focusin', (event) => {
      let parent = event.target.closest('.reveal-ready');
      while (parent) {
        parent.classList.add('active');
        parent = parent.parentElement?.closest('.reveal-ready');
      }
    });

    this.cleanups.push(() => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove('reveal-ready');
        // ⚠️ NO removemos 'active' para evitar parpadeo en remount
      });
    });
  }

  // ============================================================
  // TYPING EFFECT
  // ============================================================
  initTypingEffect() {
    const element = this.root.querySelector('.typing-text');
    if (!element) return;

    // ⚠️ Guardamos el texto original para restaurarlo al destruir
    if (!element.dataset.originalText) {
      element.dataset.originalText = element.textContent.trim();
    }

    const texts = [
      'Software Developer',
      'Desarrollador Full Stack',
      'Desarrollo de Soluciones Web',
    ];

    let index = 0;
    let charIndex = texts[0].length;
    let isDeleting = true;
    let stopped = false;

    const typeEffect = () => {
      if (stopped || this._destroyed || !element.isConnected) return;

      const currentText = texts[index];
      charIndex += isDeleting ? -1 : 1;

      // ⚠️ Solo modificamos el textContent si el elemento sigue en el DOM
      if (element.isConnected) {
        element.textContent = currentText.substring(0, charIndex);
      }

      let speed = 80;
      if (!isDeleting && charIndex === currentText.length) {
        speed = 3000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 800;
      }
      this.later(typeEffect, speed);
    };

    this.later(typeEffect, 3000);

    this.cleanups.push(() => {
      stopped = true;
      // Restaurar el texto original para que React no detecte cambios
      const original = element.dataset.originalText;
      if (original && element.isConnected) {
        element.textContent = original;
      }
    });
  }

  // ============================================================
  // FLOATING CARDS
  // ============================================================
  initFloatingCards() {
    const cards = [...this.root.querySelectorAll('.floating-card')];
    if (!cards.length) return;
    cards.forEach((card, index) =>
      card.style.setProperty('--float-delay', index * 0.5 + 's'),
    );
    this.cleanups.push(() =>
      cards.forEach((card) => card.style.removeProperty('--float-delay')),
    );
  }

  // ============================================================
  // PARTICLE BACKGROUND (CORREGIDO)
  // ============================================================
  initParticleBackground() {
    if (window.innerWidth < 768) return;

    // ✅ Reutilizar el canvas que React ya renderizó
    let canvas = document.querySelector('canvas[data-particles]');

    // ⚠️ Si React aún no lo ha montado, esperar al siguiente frame
    if (!canvas) {
      this.frame(() => {
        if (this._destroyed) return;
        canvas = document.querySelector('canvas[data-particles]');
        if (canvas) this._setupParticles(canvas);
      });
      return;
    }

    this._setupParticles(canvas);
  }

  _setupParticles(canvas) {
    if (!canvas || this._destroyed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles = [];
    const count = 45;

    const resizeCanvas = () => {
      if (!canvas.isConnected) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // ⚠️ Guardar referencia del handler para poder limpiarlo
    this._resizeHandler = resizeCanvas;
    window.addEventListener('resize', resizeCanvas, {
      signal: this.controller.signal,
    });

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.25 + 0.05;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(174, 198, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const animateParticles = () => {
      if (this._destroyed || !canvas.isConnected) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(174, 198, 255, ${0.06 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // ⚠️ Usar this.frame() para que se registre y pueda cancelarse
      this._particleFrame = this.frame(animateParticles);
    };

    // Guardar contexto para cleanup
    this._particleCanvas = canvas;
    this._particleCtx = ctx;
    this._particles = particles;

    animateParticles();

    this.cleanups.push(() => {
      // Cancelar el frame si existe
      if (this._particleFrame) {
        cancelAnimationFrame(this._particleFrame);
        this._particleFrame = null;
      }
      // Limpiar el canvas
      if (canvas.isConnected) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      particles = [];
      this._particles = null;
    });
  }

  // ============================================================
  // PARALLAX
  // ============================================================
  initParallaxEffect() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const glows = [...this.root.querySelectorAll('.glow-accent')];
    const image = this.root.querySelector('.hero-photo');
    if (!glows.length && !image) return;

    let imageVisible = true;
    const observer = image
      ? new IntersectionObserver(([entry]) => {
          imageVisible = entry.isIntersecting;
        })
      : null;
    if (image) observer.observe(image);

    let pending = false;
    let x = 0;
    let y = 0;

    this.on(
      window,
      'pointermove',
      (event) => {
        if (event.pointerType !== 'mouse') return;
        x = (event.clientX / window.innerWidth - 0.5) * 15;
        y = (event.clientY / window.innerHeight - 0.5) * 15;
        if (pending) return;
        pending = true;
        this.frame(() => {
          pending = false;
          if (this._destroyed) return;
          glows.forEach((glow, index) => {
            const speed = (1 + index * 0.5) * 0.4;
            glow.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
          });
          if (image && imageVisible) {
            image.style.setProperty('--hero-rx', -y * 0.2 + 'deg');
            image.style.setProperty('--hero-ry', x * 0.2 + 'deg');
          }
        });
      },
      { passive: true },
    );

    this.cleanups.push(() => {
      observer?.disconnect();
      glows.forEach((glow) => glow.style.removeProperty('transform'));
      image?.style.removeProperty('--hero-rx');
      image?.style.removeProperty('--hero-ry');
    });
  }

  // ============================================================
  // TRACK POINTER
  // ============================================================
  trackPointer(card, move, leave) {
    if (!card || this._destroyed) return;

    let rect;
    let point;
    let rectVersion = -1;
    let pending = false;

    const measure = () => {
      rect = card.getBoundingClientRect();
      rectVersion = this.layoutVersion;
    };

    this.on(card, 'pointerenter', measure);
    this.on(
      card,
      'pointermove',
      (event) => {
        if (event.pointerType !== 'mouse') return;
        if (!rect || rectVersion !== this.layoutVersion) measure();
        point = {
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height,
        };
        if (pending) return;
        pending = true;
        this.frame(() => {
          pending = false;
          if (point && !this._destroyed) move(point);
        });
      },
      { passive: true },
    );
    this.on(card, 'pointerleave', () => {
      point = null;
      if (!this._destroyed) leave();
    });
    this.cleanups.push(leave);
  }

  // ============================================================
  // CARD BORDER GLOW
  // ============================================================
  initCardBorderGlowEffect() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    this.root
      .querySelectorAll(
        '.project-card, .glass-card:not(.contact-form), .certificate-card',
      )
      .forEach((card) => {
        card.classList.add('glow-card');

        const reset = () => {
          card.classList.remove('pointer-active');
          card.style.removeProperty('--glow-x');
          card.style.removeProperty('--glow-y');
        };

        this.trackPointer(
          card,
          ({ x, y }) => {
            card.style.setProperty('--glow-x', x * 100 + '%');
            card.style.setProperty('--glow-y', y * 100 + '%');
            card.classList.add('pointer-active');
          },
          reset,
        );

        this.cleanups.push(() => card.classList.remove('glow-card'));
      });
  }

  // ============================================================
  // CARD JELLY EFFECT
  // ============================================================
  initCardJellyEffect() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    this.root
      .querySelectorAll('.project-card, .cert-card, .service-card')
      .forEach((card) => {
        this.trackPointer(
          card,
          ({ x, y }) => {
            const deltaX = x * 2 - 1;
            const deltaY = y * 2 - 1;
            card.style.setProperty('--rotate-y', deltaX * 2.5 + 'deg');
            card.style.setProperty('--rotate-x', -deltaY * 2.5 + 'deg');
            card.style.setProperty(
              '--card-scale',
              String(1 + (1 - Math.min(Math.hypot(deltaX, deltaY), 1)) * 0.015),
            );
          },
          () => {
            ['--rotate-x', '--rotate-y', '--card-scale'].forEach((name) =>
              card.style.removeProperty(name),
            );
          },
        );
      });
  }

  // ============================================================
  // DESTROY — LIMPIEZA COMPLETA
  // ============================================================
  destroy() {
    if (this._destroyed) return;
    this._destroyed = true;

    // Cancelar particle frame
    if (this._particleFrame) {
      cancelAnimationFrame(this._particleFrame);
      this._particleFrame = null;
    }

    // Remover resize handler si fue agregado manualmente
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
      this._resizeHandler = null;
    }

    // Abortar todos los listeners registrados con signal
    this.controller.abort();

    // Cancelar frames pendientes
    this.frames.forEach((id) => cancelAnimationFrame(id));
    this.timers.forEach((id) => clearTimeout(id));
    this.frames.clear();
    this.timers.clear();

    // Ejecutar cleanups
    this.cleanups.forEach((cleanup) => {
      try {
        cleanup();
      } catch (e) {
        // Silenciar errores de cleanup para no romper React
      }
    });
    this.cleanups = [];

    // Limpiar referencias
    this._particleCanvas = null;
    this._particleCtx = null;
    this._particles = null;
  }
}