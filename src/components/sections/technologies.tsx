import { Boxes, Cloud, Code2, Database, Server, Wrench } from 'lucide-react';
import { technologies } from '@/data/technologies';
import { SectionHeading } from '@/components/ui/section-heading';
import { TechnologyIcon } from '@/components/ui/technology-icon';

const icons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  cloud: Cloud,
  tools: Wrench,
  architecture: Boxes,
};
const order = ['backend', 'frontend', 'database', 'cloud', 'tools', 'architecture'];
export function Technologies() {
  return (
    <section
      id="technologies"
      className="shell section-space"
      aria-labelledby="technologies-title"
    >
      <SectionHeading
        id="technologies-title"
        eyebrow="Perfil técnico"
        title="Stack tecnológico"
        centered
        description="Tecnologías, herramientas y prácticas que utilizo para desarrollar soluciones web estructuradas, mantenibles y preparadas para evolucionar."
      />
      <div className="stack-panel panel reveal">
        <div className="stack-panel-heading">
          <div>
            <p className="small-label">Core stack</p>
            <h3>Tecnologías principales</h3>
          </div>
          <span>Desarrollo web</span>
        </div>
        <div className="technologies-grid">
          {[...technologies]
            .sort((a, b) => order.indexOf(a.icon) - order.indexOf(b.icon))
            .map(({ title, description, icon, items }) => {
              const Icon = icons[icon];
              return (
                <article
                  key={title}
                  className={'technology-card skill-card technology-' + icon}
                >
                  <div className="technology-heading">
                    <span className="technology-category-icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <ul className="technology-items">
                    {items.map((tech) => (
                      <li key={tech} className="tech-icon-hover">
                        {icon !== 'architecture' && <TechnologyIcon name={tech} />}
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
