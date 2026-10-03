import {
  existsSync,
} from 'node:fs';

import {
  resolve,
} from 'node:path';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  projects,
  getProject,
} from '@/data/projects';

import {
  isSafeExternalUrl,
} from '@/lib/site';

describe('Integridad de proyectos', () => {
  it('todos los proyectos tienen slugs únicos', () => {
    const slugs =
      projects.map(
        (project) =>
          project.slug,
      );

    expect(
      new Set(slugs).size,
    ).toBe(
      slugs.length,
    );
  });

  it('las imágenes configuradas existen', () => {
    for (
      const project
        of projects
    ) {
      if (
        project.logo
      ) {
        expect(
          existsSync(
            resolve(
              'public',
              project.logo.slice(
                1,
              ),
            ),
          ),
          `No existe ${project.logo}`,
        ).toBe(true);
      }

      if (
        project.preview
      ) {
        expect(
          existsSync(
            resolve(
              'public',
              project.preview.src.slice(
                1,
              ),
            ),
          ),
          `No existe ${project.preview.src}`,
        ).toBe(true);
      }

      for (
        const image
          of project.gallery
      ) {
        expect(
          existsSync(
            resolve(
              'public',
              image.src.slice(
                1,
              ),
            ),
          ),
          `No existe ${image.src}`,
        ).toBe(true);
      }
    }
  });

  it('los enlaces externos configurados son seguros', () => {
    for (
      const project
        of projects
    ) {
      for (
        const url of [
          project.github,
          project.demo,
        ]
      ) {
        if (url) {
          expect(
            isSafeExternalUrl(
              url,
            ),
          ).toBe(true);
        }
      }
    }
  });

  it('IA Cognitiva tiene sus ocho capturas', () => {
    expect(
      getProject(
        'ia-cognitiva',
      )?.gallery,
    ).toHaveLength(8);
  });

  it('devuelve undefined para un proyecto inexistente', () => {
    expect(
      getProject(
        'desconocido',
      ),
    ).toBeUndefined();
  });
});