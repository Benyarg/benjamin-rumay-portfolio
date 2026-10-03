import { Award, Bot, Brain, Globe, GraduationCap, Medal } from 'lucide-react';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { SectionHeading } from '@/components/ui/section-heading';
import { ExternalLink } from '@/components/ui/external-link';
import type { Certification } from '@/types/portfolio';

const certificateIcons: Record<string, typeof Award> = {
  '🏅': Medal,
  '🌐': Globe,
  '🤖': Bot,
};
function CertificateIcon({ icon }: { icon?: string }) {
  const Icon = certificateIcons[icon || ''] || Award;
  return <Icon size={30} aria-hidden="true" />;
}

export function Education() {
  return (
    <section
      id="education"
      className="shell section-space"
      aria-labelledby="education-title"
    >
      <SectionHeading
        id="education-title"
        eyebrow="Formación"
        title="Formación y certificaciones"
        description="Formación académica y aprendizaje continuo que fortalecen mi perfil técnico."
      />
      <article className="panel education-card glass-card reveal">
        <span className="education-icon">
          <GraduationCap size={35} aria-hidden="true" />
        </span>
        <div className="education-content">
          <p className="small-label">Formación académica</p>
          <h3>{education.degree}</h3>
          <p>{education.institution} (UPN)</p>
          <p className="academic-status">
            {education.period} <span aria-hidden="true">·</span>{' '}
            <span>{education.credentialStatus}</span>
          </p>
        </div>
        <span className="status-chip">{education.status}</span>
        <div className="education-highlights">
          <p>
            <Award size={19} aria-hidden="true" />
            {education.distinction}
          </p>
          <p>
            <Brain size={19} aria-hidden="true" />
            {education.research}
          </p>
        </div>
      </article>
      <div className="certifications-heading">
        <h3>Certificaciones</h3>
        <p>Formación complementaria en tecnología.</p>
      </div>
      <div className="certifications-grid">
        {certifications.map((certificate: Certification) => (
          <article
            key={certificate.title}
            className="panel certificate-card cert-card reveal"
          >
            <span className="certificate-icon" aria-hidden="true">
              <CertificateIcon icon={certificate.icon} />
            </span>
            <div className="certificate-content">
              <h4>{certificate.title}</h4>
              <p>{certificate.issuer}</p>
              <p className="certificate-date">Obtenida: {certificate.year}</p>
              {certificate.completed && (
                <span className="certificate-status">Completado</span>
              )}
            </div>
            {certificate.credentialUrl && (
              <ExternalLink href={certificate.credentialUrl} className="text-link">
                Ver credencial
              </ExternalLink>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
