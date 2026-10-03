import { ArrowUpRight, Mail, MapPin, BriefcaseBusiness } from 'lucide-react';

import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from '@/components/ui/brand-icons';

import { profile } from '@/data/profile';

import { ExternalLink } from '@/components/ui/external-link';
import { SectionHeading } from '@/components/ui/section-heading';

import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="shell section-space" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div className="contact-copy reveal-left">
          <SectionHeading
            id="contact-title"
            eyebrow="Contacto"
            title="Abierto a nuevas"
            accent="oportunidades y colaboraciones"
            description="Si buscas incorporar un desarrollador a tu equipo o necesitas apoyo en un proyecto tecnológico, escríbeme para que podamos conversar."
          />

          <a href={`mailto:${profile.email}`} className="contact-email">
            <Mail size={21} aria-hidden="true" />

            <span>{profile.email}</span>

            <ArrowUpRight size={19} aria-hidden="true" />
          </a>

          <div className="contact-detail">
            <MapPin size={21} aria-hidden="true" />

            <div>
              <span>Ubicación</span>

              <p>{profile.location}</p>
            </div>
          </div>

          <div className="contact-detail">
            <BriefcaseBusiness size={21} aria-hidden="true" />

            <div>
              <span>Disponibilidad</span>

              <p>Proyectos y oportunidades profesionales</p>
            </div>
          </div>

          <div className="contact-socials">
            <ExternalLink href={profile.linkedin} className="button button-outline">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </ExternalLink>

            <ExternalLink href={profile.github} className="button button-outline">
              <Github size={18} aria-hidden="true" />
              GitHub
            </ExternalLink>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
