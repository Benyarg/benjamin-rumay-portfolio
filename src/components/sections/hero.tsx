import Image from 'next/image';
import { FolderKanban, Terminal, UserRound } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="shell hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability">
          <span aria-hidden="true" />
          Disponible para oportunidades
        </p>
        <h1 id="hero-title" className="hero-title">
          Benjamin Rumay
        </h1>
        <div className="typing-container hero-role">
          <span className="sr-only">{profile.role}</span>
          <span aria-hidden="true">
            <span className="typing-text">{profile.role}</span>
            <span className="cursor-blink">|</span>
          </span>
        </div>
        <p className="hero-description">
          Desarrollo soluciones web y software orientadas a{' '}
          <strong>resolver necesidades reales.</strong> Transformo ideas y procesos en
          productos digitales funcionales, mantenibles y preparados para crecer.
        </p>
        <ul className="hero-stack" aria-label="Tecnologías principales">
          {['C#', '.NET', 'React', 'Next.js', 'SQL'].map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="hero-buttons">
          <a href="#projects" className="button button-primary btn-ripple">
            <FolderKanban size={20} aria-hidden="true" />
            Ver mis proyectos
          </a>
          <a href="#about" className="button button-outline btn-ripple">
            <UserRound size={20} aria-hidden="true" />
            Conocer mi perfil
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <figure className="hero-photo">
          <div className="photo-image image-container">
            <Image
              src="/images/benjamin-rumay.webp"
              alt="Benjamin Rumay trabajando con una laptop"
              width={1264}
              height={848}
              sizes="(max-width: 639px) 170vw, (max-width: 1023px) 800px, 850px"
              quality={85}
              loading="eager"
              fetchPriority="high"
              className="profile-image profile-photo"
            />
            <span className="image-shine" aria-hidden="true" />
          </div>
          <figcaption className="floating-card">
            <span className="photo-icon">
              <Terminal size={21} aria-hidden="true" />
            </span>
            <span>
              <strong>Disponible</strong>
              <span>Software Developer</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
