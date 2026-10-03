import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowLeft, ArrowUpRight, Info, Layers } from 'lucide-react';

import { GithubIcon as Github } from '@/components/ui/brand-icons';

import { projects, getProject } from '@/data/projects';

import { ProjectGallery } from '@/components/projects/project-gallery';
import { ExternalLink } from '@/components/ui/external-link';
import { JsonLd } from '@/components/ui/json-ld';

import { absoluteUrl } from '@/lib/site';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

/* =========================================================
   GENERACIÓN DE RUTAS
   ========================================================= */

export function generateStaticParams() {
  return projects.map(({ slug }) => ({
    slug,
  }));
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = absoluteUrl(`/proyectos/${project.slug}`);

  const image = project.preview
    ? {
        url: project.preview.src,
        width: project.preview.width,
        height: project.preview.height,
        alt: project.preview.alt,
      }
    : {
        url: '/images/og-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Benjamin Rumay, Software Developer',
      };

  return {
    title: project.title,

    description: project.summary,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${project.title} | Benjamin Rumay`,
      description: project.summary,
      url,
      type: 'article',
      locale: 'es_PE',
      images: [image],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Benjamin Rumay`,
      description: project.summary,
      images: [image.url],
    },
  };
}

/* =========================================================
   PROJECT PAGE
   ========================================================= */

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter(({ slug }) => slug !== project.slug).slice(0, 2);

  return (
    <main id="main-content" tabIndex={-1} className="case-study shell">
      {/* ===================================================
          SEO - STRUCTURED DATA
          =================================================== */}

      <JsonLd
        data={{
          '@context': 'https://schema.org',

          '@type': 'CreativeWork',

          name: project.title,

          description: project.description,

          url: absoluteUrl(`/proyectos/${project.slug}`),

          author: {
            '@type': 'Person',
            name: 'Benjamin Rumay',
            url: absoluteUrl(),
          },

          ...(project.preview
            ? {
                image: absoluteUrl(project.preview.src),
              }
            : {}),
        }}
      />

      {/* ===================================================
          BREADCRUMBS
          =================================================== */}

      <nav aria-label="Ruta de navegación" className="breadcrumbs">
        <Link href="/">Inicio</Link>

        <span aria-hidden="true">/</span>

        <Link href="/#projects">Proyectos</Link>

        <span aria-hidden="true">/</span>

        <span aria-current="page">{project.shortTitle || project.title}</span>
      </nav>

      {/* ===================================================
          VOLVER
          =================================================== */}

      <Link href="/#projects" className="text-link back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Volver a proyectos
      </Link>

      {/* ===================================================
          CABECERA DEL PROYECTO
          =================================================== */}

      <header className="case-heading reveal">
        {project.logo && (
          <Image
            src={project.logo}
            width={project.slug === 'atrium' ? 220 : 144}
            height={project.slug === 'atrium' ? 140 : 108}
            sizes={
              project.slug === 'atrium'
                ? '(max-width: 639px) 175px, (max-width: 1099px) 190px, 205px'
                : '144px'
            }
            alt={'Logo de ' + project.title}
            className={
              project.slug === 'atrium'
                ? 'case-brand-logo case-brand-logo-atrium'
                : 'case-brand-logo'
            }
          />
        )}

        <p className="eyebrow">
          <span aria-hidden="true" />

          {project.category}
        </p>

        <h1>{project.title}</h1>

        <p className="case-introduction">{project.description}</p>

        {project.role && <p className="case-role">Desarrollo: {project.role}</p>}

        <div className="case-actions">
          {project.demo && (
            <ExternalLink href={project.demo} className="button button-primary">
              Ver demo
              <ArrowUpRight size={19} aria-hidden="true" />
            </ExternalLink>
          )}

          {project.github && (
            <ExternalLink href={project.github} className="button button-outline">
              <Github size={18} aria-hidden="true" />
              Repositorio
            </ExternalLink>
          )}

          {project.status && <span className="status-chip">{project.status}</span>}
        </div>
      </header>

      {/* ===================================================
          NOTA DEL PROYECTO
          =================================================== */}

      {project.note && (
        <aside className="project-note" aria-label="Alcance del proyecto">
          <Info size={22} aria-hidden="true" />

          <p>{project.note}</p>
        </aside>
      )}

      {/* ===================================================
          CONTEXTO Y SOLUCIÓN
          =================================================== */}

      {(project.problem || project.solution) && (
        <section className="case-context" aria-labelledby="context-title">
          <h2 id="context-title">Contexto y solución</h2>

          <div className="case-two-columns">
            {project.problem && (
              <article className="panel case-block">
                <p className="small-label">El problema</p>

                <h3>La necesidad</h3>

                <p>{project.problem}</p>
              </article>
            )}

            {project.solution && (
              <article className="panel case-block">
                <p className="small-label">La solución</p>

                <h3>El enfoque</h3>

                <p>{project.solution}</p>
              </article>
            )}
          </div>
        </section>
      )}

      {/* ===================================================
          TECNOLOGÍAS
          =================================================== */}

      {project.technologies.length > 0 && (
        <section className="case-section" aria-labelledby="stack-title">
          <h2 id="stack-title">Tecnologías utilizadas</h2>

          <ul className="tags case-tags">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ===================================================
          ARQUITECTURA
          =================================================== */}

      {project.architecture && (
        <section className="case-section" aria-labelledby="architecture-title">
          <h2 id="architecture-title">Arquitectura</h2>

          <ul className="architecture-list panel">
            {project.architecture.map((item) => (
              <li key={item}>
                <Layers size={20} aria-hidden="true" />

                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ===================================================
          PROCESO
          =================================================== */}

      {project.process && (
        <section className="case-section" aria-labelledby="process-title">
          <h2 id="process-title">Proceso</h2>

          <ol className="process-list">
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {/* ===================================================
          GALERÍA
          =================================================== */}

      {project.gallery.length > 0 && (
        <section className="case-section" aria-labelledby="screenshots-title">
          <h2 id="screenshots-title">
            {project.slug === 'ia-cognitiva'
              ? 'El sistema, por dentro'
              : 'Galería del proyecto'}
          </h2>

          <p className="gallery-description">
            {project.slug === 'ia-cognitiva'
              ? 'Capturas reales del flujo de evaluación y del panel de demostración.'
              : 'Material visual disponible del proyecto; cada imagen indica su tipo.'}{' '}
            Selecciona una imagen para ampliarla.
          </p>

          <ProjectGallery images={project.gallery} title={project.title} />
        </section>
      )}

      {/* ===================================================
          RESULTADO
          =================================================== */}

      {project.result && (
        <section
          className="case-section result-block panel"
          aria-labelledby="result-title"
        >
          <p className="small-label">Resultado</p>

          <h2 id="result-title">Qué aporta el proyecto</h2>

          <p>{project.result}</p>
        </section>
      )}

      {/* ===================================================
          OTROS PROYECTOS
          =================================================== */}

      <section className="case-section related-projects" aria-labelledby="related-title">
        <h2 id="related-title">Otros proyectos</h2>

        <div>
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/proyectos/${item.slug}`}
              className="panel related-link"
            >
              <span>
                <small>{item.category}</small>

                <strong>{item.shortTitle || item.title}</strong>
              </span>

              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
