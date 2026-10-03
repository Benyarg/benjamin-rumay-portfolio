import { AppWindow, Cable, PanelsTopLeft, PenTool } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/ui/section-heading';

const icons = { web: PanelsTopLeft, systems: AppWindow, api: Cable, design: PenTool };
export function Services() {
  return (
    <section
      id="services"
      className="shell section-space"
      aria-labelledby="services-title"
    >
      <SectionHeading
        id="services-title"
        eyebrow="Áreas de trabajo"
        title="Cómo puedo aportar"
        description="Desarrollo, análisis y diseño aplicados a soluciones digitales funcionales y bien estructuradas."
      />
      <div className="services-grid">
        {services.map(({ title, description, icon, tags }, index) => {
          const Icon = icons[icon];
          return (
            <article key={title} className="panel service-card glass-card reveal">
              <div className="service-meta">
                <span className="service-number">0{index + 1}</span>
                <span className="tile-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
