import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from '@/components/ui/brand-icons';
import { profile } from '@/data/profile';
import { ExternalLink } from '@/components/ui/external-link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-profile">
            <Link href="/" className="brand" aria-label="Benjamin Rumay, inicio">
              <Image
                src="/images/br-logo.png"
                width={49}
                height={64}
                sizes="49px"
                alt=""
              />
            </Link>
            <p>Software Developer · Egresado de Ingeniería de Sistemas Computacionales</p>
          </div>
          <nav aria-label="Enlaces del pie de página">
            <h2>Enlaces</h2>
            <ul>
              <li>
                <Link href="/#about">Sobre mí</Link>
              </li>
              <li>
                <Link href="/#projects">Proyectos</Link>
              </li>
              <li>
                <Link href="/#experience">Experiencia</Link>
              </li>
              <li>
                <Link href="/#contact">Contacto</Link>
              </li>
            </ul>
          </nav>
          <div className="footer-contact">
            <h2>Contacto</h2>
            <a href={'mailto:' + profile.email}>
              <Mail size={16} aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <p>
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </p>
          </div>
          <div>
            <h2>Redes</h2>
            <div className="footer-socials">
              <ExternalLink
                href={profile.linkedin}
                className="icon-button"
                aria-label="LinkedIn de Benjamin"
              >
                <Linkedin size={18} aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href={profile.github}
                className="icon-button"
                aria-label="GitHub de Benjamin"
              >
                <Github size={19} aria-hidden="true" />
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Benjamin Rumay. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
