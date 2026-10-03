import {
  render,
  screen,
  within,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import Home from '@/app/page';
import { Technologies } from '@/components/sections/technologies';

describe('Contenido principal', () => {
  it('muestra el perfil y los proyectos principales', () => {
    render(<Home />);

    expect(
      screen.getByRole('main'),
    ).toHaveAttribute(
      'id',
      'main-content',
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent(
      'Benjamin Rumay',
    );

    expect(
      screen.getByText(
        'Bachiller en proceso',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Detalles Belis',
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Atrium Academy',
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'IA Cognitiva',
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'PlanorIA',
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Kaphiy',
        level: 3,
      }),
    ).toBeInTheDocument();
  });

  it('muestra tres proyectos disponibles para visualizar', () => {
    render(<Home />);

    expect(
      screen.getAllByRole('link', {
        name: /^Ver proyecto$/,
      }),
    ).toHaveLength(3);
  });

  it('muestra Next.js en el stack personal', () => {
    render(<Technologies />);

    const section =
      screen.getByRole(
        'region',
        {
          name: 'Stack tecnológico',
        },
      );

    expect(
      within(section).getByText(
        'Next.js',
      ),
    ).toBeInTheDocument();
  });
});