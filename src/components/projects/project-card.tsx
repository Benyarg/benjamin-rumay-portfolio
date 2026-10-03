import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import type { Project } from '@/types/portfolio';

export function ProjectCard({
  project,
  prominent = false,
}: {
  project: Project;
  prominent?: boolean;
}) {
  const title = project.shortTitle || project.title;

  const isComingSoon =
    project.slug === 'planoria' ||
    project.slug === 'kaphiy';

  return (
    <article
      className={[
        'project-card',
        'panel',
        'reveal',
        prominent ? 'project-prominent' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className={
          'project-brand' +
          (project.slug === 'atrium'
            ? ' project-brand-dark'
            : '')
        }
        aria-label={`Ver proyecto ${title}`}
      >
        {project.logo ? (
          <Image
            src={project.logo}
            width={88}
            height={88}
            sizes="(max-width: 639px) 66px, 88px"
            alt={`Logo de ${title}`}
          />
        ) : (
          <span>
            {title.slice(0, 2)}
          </span>
        )}
      </Link>

      <div className="project-content">
        <div className="project-labels">
          <p className="small-label">
            {project.category}
          </p>

          {project.status && !isComingSoon && (
            <span className="status-chip">
              {project.status}
            </span>
          )}
        </div>

        <h3>
          <Link href={`/proyectos/${project.slug}`}>
            {title}
          </Link>
        </h3>

        <p>
          {project.summary}
        </p>

        {project.technologies.length > 0 && (
          <ul
            className="tags"
            aria-label={`Tecnologías de ${project.title}`}
          >
            {project.technologies
              .slice(0, 4)
              .map((tech) => (
                <li key={tech}>
                  {tech}
                </li>
              ))}

            {project.technologies.length > 4 && (
              <li>
                +{project.technologies.length - 4}
              </li>
            )}
          </ul>
        )}
      </div>

      <div className="project-actions">
        {isComingSoon ? (
          <div className="project-coming-soon">
            <span
              className="coming-soon-dot"
              aria-hidden="true"
            />

            <div className="coming-soon-content">
              <strong>
                Disponible próximamente
              </strong>

              <span>
                Proyecto actualmente en desarrollo
              </span>
            </div>
          </div>
        ) : (
          <Link
            href={`/proyectos/${project.slug}`}
            className="button project-button btn-ripple"
          >
            Ver proyecto

            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </article>
  );
}