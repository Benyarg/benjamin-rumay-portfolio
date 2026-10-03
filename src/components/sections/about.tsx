import { ArrowUpRight, CheckCheck, Code2, Lightbulb, ListChecks } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

export function About() {
  const steps = [
    { icon: Lightbulb, text: 'Comprendo la necesidad antes de proponer.' },
    { icon: Code2, text: 'Transformo ideas en productos funcionales.' },
    { icon: ListChecks, text: 'Refino cada entrega con mejora continua.' },
  ];
  return (
    <section id="about" className="shell section-space" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        eyebrow="Sobre mí"
        title="Desarrollo, análisis y"
        accent="aprendizaje continuo"
        description="Mi perfil, mi enfoque profesional y la forma en que afronto cada proyecto."
      />
      <div className="about-grid panel reveal">
        <article className="about-profile">
          <p className="small-label">Perfil profesional</p>
          <h3>Quién soy</h3>
          <p>
            Soy egresado de <strong>Ingeniería de Sistemas Computacionales</strong>, con
            interés en software, aplicaciones web y análisis de procesos.
          </p>
          <p>
            Busco seguir creciendo mediante nuevos retos que me permitan fortalecer mi
            experiencia y criterio técnico.
          </p>
          <div className="commitment">
            <CheckCheck size={22} aria-hidden="true" />
            <div>
              <strong>Compromiso con cada entrega</strong>
              <p>Organización, comunicación y atención al detalle.</p>
            </div>
          </div>
        </article>
        <article className="about-process">
          <p className="small-label">Mi forma de trabajar</p>
          <h3>Cómo abordo una solución</h3>
          <ol>
            {steps.map(({ icon: Icon, text }, i) => (
              <li key={text}>
                <span className="step-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <Icon size={21} aria-hidden="true" />
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <a href="#projects" className="text-link">
            Conoce este enfoque en mis proyectos
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}
