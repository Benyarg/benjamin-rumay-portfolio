import { projects } from '@/data/projects';

import { ProjectCard } from '@/components/projects/project-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function Projects() {
  const prominentSlug =
    projects.find(
      (project) =>
        'featured' in project &&
        project.featured,
    )?.slug;

  return (
    <section
      id="projects"
      className="shell section-space"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        eyebrow="Portafolio"
        title="Proyectos destacados"
        description="Una selección de proyectos donde aplico desarrollo, análisis y diseño para resolver necesidades reales."
      />

      <div className="projects-grid">
        {projects.map(
          (project) => (
            <ProjectCard
              key={
                project.slug
              }
              project={
                project
              }
              prominent={
                project.slug ===
                prominentSlug
              }
            />
          ),
        )}
      </div>
    </section>
  );
}