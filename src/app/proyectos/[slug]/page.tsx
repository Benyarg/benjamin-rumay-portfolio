import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { GithubIcon as Github } from '@/components/ui/brand-icons';
import { projects, getProject } from '@/data/projects';
import { ProjectGallery } from '@/components/projects/project-gallery';
import { ExternalLink } from '@/components/ui/external-link';
import { JsonLd } from '@/components/ui/json-ld';
import { TechnologyIcon } from '@/components/ui/technology-icon';
import { absoluteUrl } from '@/lib/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) {
    return { title: 'Proyecto no encontrado', robots: { index: false, follow: false } };
  }

  const url = absoluteUrl(`/proyectos/${project.slug}`);
  const image = project.preview
    ? { url: project.preview.src, width: project.preview.width, height: project.preview.height, alt: project.preview.alt }
    : { url: '/images/og-portfolio.png', width: 1200, height: 630, alt: 'Benjamin Rumay, Software Developer' };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
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

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);

  if (!project) notFound();

  const related = projects.filter(({ slug }) => slug !== project.slug).slice(0, 2);
  const heroImage = project.preview || project.gallery[0];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="case-study mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-24"
    >
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: absoluteUrl(`/proyectos/${project.slug}`),
          author: { '@type': 'Person', name: 'Benjamin Rumay', url: absoluteUrl() },
          ...(project.preview ? { image: absoluteUrl(project.preview.src) } : {}),
        }}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-white/10 pb-6">
        <nav aria-label="Ruta de navegación" className="breadcrumbs">
          <Link href="/" className="transition-colors hover:text-white">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#projects" className="transition-colors hover:text-white">Proyectos</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{project.shortTitle || project.title}</span>
        </nav>

        <Link
          href="/#projects"
          className="text-link transition-transform duration-300 hover:-translate-x-1 inline-flex items-center gap-2 text-sm text-[#aec6ff]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver a proyectos
        </Link>
      </div>

      <header className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-32">
        <div className="lg:col-span-7 reveal flex flex-col gap-6">
          <div className="flex items-center gap-5 mb-2">
            {project.logo && (
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center transition-transform duration-500 hover:scale-105 shadow-xl overflow-visible">
                <Image
                  src={project.logo}
                  width={project.slug === 'atrium' ? 140 : 96}
                  height={project.slug === 'atrium' ? 140 : 96}
                  alt={'Logo de ' + project.title}
                  className={`object-contain w-full h-full ${
                    project.slug === 'atrium' ? 'scale-125' : ''
                  }`}
                />
              </div>
            )}
            <div>
              <p className="eyebrow mb-1 text-[#aec6ff] tracking-widest text-[11px] font-bold uppercase">
                <span aria-hidden="true" className="mr-2" />
                {project.category}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight m-0 leading-tight">
                {project.title}
              </h1>
            </div>
          </div>

          <p className="case-introduction text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl m-0">
            {project.description}
          </p>

          {project.role && (
            <p className="case-role text-sm text-gray-500 m-0">
              <strong className="text-gray-300">Rol:</strong> {project.role}
            </p>
          )}

          {project.technologies.length > 0 && (
            <div className="mt-6">
              <ul className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="group flex items-center h-9 gap-2 px-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-medium text-gray-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:border-[#aec6ff]/40 hover:shadow-[0_8px_20px_-8px_rgba(174,198,255,0.3)] cursor-default"
                  >
                    <div className="flex items-center justify-center w-4 h-4 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
                      <TechnologyIcon name={tech} />
                    </div>
                    <span className="leading-none pt-[1px]">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 items-center mt-4">
            {project.demo && (
              <ExternalLink href={project.demo} className="button button-primary h-11 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                Ver demo <ArrowUpRight size={16} aria-hidden="true" />
              </ExternalLink>
            )}
            {project.github && (
              <ExternalLink href={project.github} className="button button-outline h-11 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-white/30">
                <Github size={16} aria-hidden="true" /> Repositorio
              </ExternalLink>
            )}
            {project.status && <span className="status-chip ml-1">{project.status}</span>}
          </div>
        </div>

        {heroImage && (
          <div className="lg:col-span-5 reveal w-full lg:sticky lg:top-28">
            <div className="relative w-full aspect-[4/3] rounded-2xl p-1.5 bg-white/[0.02] border border-white/10 shadow-2xl group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0c0e0f]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        )}
      </header>

      {(project.problem || project.solution) && (
        <section className="mb-24 pt-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {project.problem && (
              <article className="panel case-block p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] group">
                <h3 className="text-xl font-medium text-white mb-4 m-0">La necesidad</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base m-0">
                  {project.problem}
                </p>
              </article>
            )}

            {project.solution && (
              <article className="panel case-block p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] group">
                <h3 className="text-xl font-medium text-white mb-4 m-0">El enfoque</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base m-0">
                  {project.solution}
                </p>
              </article>
            )}
          </div>
        </section>
      )}

      {project.process && (
        <section className="case-section" aria-labelledby="process-title">
          <h2 id="process-title">Proceso</h2>
          <ol className="process-list">
            {project.process.map((step) => (
              <li key={step} className="transition-transform duration-200 hover:translate-x-1 hover:text-white">
                {step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className="case-section" aria-labelledby="screenshots-title">
          <h2 id="screenshots-title">
            {project.slug === 'ia-cognitiva' ? 'El sistema, por dentro' : 'Galería del proyecto'}
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

      {project.result && (
        <section className="case-section result-block panel transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]" aria-labelledby="result-title">
          <p className="small-label">Impacto</p>
          <h2 id="result-title">Resultados del proyecto</h2>
          <p>{project.result}</p>
        </section>
      )}

      <section className="case-section related-projects" aria-labelledby="related-title">
        <h2 id="related-title">Otros proyectos</h2>

        <div>
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/proyectos/${item.slug}`}
              className="panel related-link transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] group"
            >
              <div className="flex items-center gap-4">
                {item.logo && (
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={item.logo}
                      width={28}
                      height={28}
                      alt={`Logo de ${item.title}`}
                      className="object-contain"
                    />
                  </div>
                )}
                <span>
                  <small className="transition-colors duration-300 group-hover:text-[#aec6ff]">{item.category}</small>
                  <strong className="transition-colors duration-300 group-hover:text-white">{item.shortTitle || item.title}</strong>
                </span>
              </div>

              <ArrowUpRight size={22} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#aec6ff]" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}