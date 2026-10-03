// AnimationManager del portafolio original, adaptado al ciclo de vida de Next.js.
// Conserva typing, reveal, partículas, parallax, glow y jelly; destroy() los libera.
export class AnimationManager {
  constructor(root = document) {
    this.root = root;
    this.controller = new AbortController();
    this.cleanups = [];
    this.frames = new Set();
    this.timers = new Set();
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
    target.addEventListener(event, callback, {
      ...options,
      signal: this.controller.signal,
    });
  }

  frame(callback) {
    const id = requestAnimationFrame((time) => {
      this.frames.delete(id);
      callback(time);
    });
    this.frames.add(id);
    return id;
  }

  later(callback, delay) {
    const id = setTimeout(() => {
      this.timers.delete(id);
      callback();
    }, delay);
    this.timers.add(id);
  }

  initRevealAnimations() {
    const elements = [
      ...this.root.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .case-section, .gallery-item',
      ),
    ];
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
      // El contenido inicial y el SSR permanecen visibles: no penalizar el LCP.
      if (element.getBoundingClientRect().top < window.innerHeight - 24)
        element.classList.add('active');
      else {
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
      elements.forEach((element) => element.classList.remove('reveal-ready', 'active'));
    });
  }

  initTypingEffect() {
    const element = this.root.querySelector('.typing-text');
    if (!element) return;
    const texts = [
      'Software Developer',
      'Desarrollador Full Stack',
      'Desarrollo de Soluciones Web',
    ];
    let index = 0;
    let charIndex = texts[0].length;
    let isDeleting = true;
    const typeEffect = () => {
      const currentText = texts[index];
      charIndex += isDeleting ? -1 : 1;
      element.textContent = currentText.substring(0, charIndex);
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
      element.textContent = texts[0];
    });
  }

  initFloatingCards() {
    const cards = [...this.root.querySelectorAll('.floating-card')];
    cards.forEach((card, index) =>
      card.style.setProperty('--float-delay', index * 0.5 + 's'),
    );
    this.cleanups.push(() =>
      cards.forEach((card) => card.style.removeProperty('--float-delay')),
    );
  }

  initParticleBackground() {
    const compact = window.innerWidth < 768;
    const canvas = this.root.querySelector('[data-particles]');
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    this.on(window, 'resize', resize, { passive: true });
    const particles = Array.from({ length: compact ? 22 : 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.25 + 0.05,
    }));
    let previous = 0;
    const animate = (time) => {
      if (time - previous >= 1000 / (compact ? 24 : 30)) {
        const step = Math.min((time - previous) / 16.67, 3);
        previous = time;
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.x = (p.x + p.speedX * step + width) % width;
          p.y = (p.y + p.speedY * step + height) % height;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(174, 198, 255, ' + p.opacity + ')';
          ctx.fill();
        });
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x,
              dy = particles[i].y - particles[j].y;
            const distanceSquared = dx * dx + dy * dy;
            if (distanceSquared >= 14400) continue;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              'rgba(174, 198, 255, ' +
              0.06 * (1 - Math.sqrt(distanceSquared) / 120) +
              ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      this.frame(animate);
    };
    this.frame(animate);
    this.cleanups.push(() => ctx.clearRect(0, 0, width, height));
  }

  initParallaxEffect() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const glows = [...this.root.querySelectorAll('.glow-accent')];
    const image = this.root.querySelector('.hero-photo');
    let imageVisible = true;
    const observer = image
      ? new IntersectionObserver(([entry]) => {
          imageVisible = entry.isIntersecting;
        })
      : null;
    if (image) observer.observe(image);
    let pending = false,
      x = 0,
      y = 0;
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
          glows.forEach((glow, index) => {
            const speed = (1 + index * 0.5) * 0.4;
            glow.style.transform = 'translate(' + x * speed + 'px, ' + y * speed + 'px)';
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

  trackPointer(card, move, leave) {
    let rect,
      point,
      rectVersion = -1,
      pending = false;
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
          if (point) move(point);
        });
      },
      { passive: true },
    );
    this.on(card, 'pointerleave', () => {
      point = null;
      leave();
    });
    this.cleanups.push(leave);
  }

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

  initCardJellyEffect() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    this.root
      .querySelectorAll('.project-card, .cert-card, .service-card')
      .forEach((card) => {
        this.trackPointer(
          card,
          ({ x, y }) => {
            const deltaX = x * 2 - 1,
              deltaY = y * 2 - 1;
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

  destroy() {
    this.controller.abort();
    this.frames.forEach((id) => cancelAnimationFrame(id));
    this.timers.forEach((id) => clearTimeout(id));
    this.frames.clear();
    this.timers.clear();
    this.cleanups.forEach((cleanup) => cleanup());
    this.cleanups = [];
  }
}
