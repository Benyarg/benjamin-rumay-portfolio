import { Code2, ListChecks } from 'lucide-react';

import { experience } from '@/data/experience';
import { SectionHeading } from '@/components/ui/section-heading';

export function Experience() {
  return (
    <section
      id="experience"
      className="shell section-space"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        id="experience-title"
        eyebrow="Trayectoria"
        title="Experiencia profesional"
        description="Experiencia en desarrollo de software, soluciones web y análisis de procesos orientados a necesidades reales."
      />

      <ol className="timeline">
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${item.role}`}
            className="timeline-item reveal-left"
          >
            <span
              className="timeline-marker"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <article className="experience-card panel timeline-card">
              <div className="experience-heading">
                <div>
                  {item.area && (
                    <p className="small-label">
                      {item.area}
                    </p>
                  )}

                  <h3>
                    {item.role}
                  </h3>

                  <p className="location">
                    <strong>
                      {item.company}
                    </strong>

                    <span aria-hidden="true">
                      ·
                    </span>

                    {item.location}
                  </p>
                </div>

                <p className="period">
                  <span aria-hidden="true" />
                  {item.period}
                </p>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              <ul className="responsibilities">
                {item.responsibilities.map(
                  (text, position) => (
                    <li key={text}>
                      <span className="responsibility-icon">
                        {position === 0 ? (
                          <Code2
                            size={18}
                            aria-hidden="true"
                          />
                        ) : (
                          <ListChecks
                            size={18}
                            aria-hidden="true"
                          />
                        )}
                      </span>

                      <p>
                        {text}
                      </p>
                    </li>
                  ),
                )}
              </ul>

              {item.tags && (
                <ul className="tags experience-tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}