import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function Projects() {
  const prominentSlug = projects.find((p) => p.featured === true)?.slug;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 section-space"
    >
      <SectionHeading
        id="projects-title"
        eyebrow="Portafolio"
        title="Proyectos destacados"
        description="Una selección de proyectos donde aplico desarrollo, análisis y diseño para resolver necesidades reales."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            prominent={project.slug === prominentSlug}
          />
        ))}
      </div>
    </section>
  );
}