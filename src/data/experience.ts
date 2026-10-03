import type { Experience } from '@/types/portfolio';

export const experience = [
  {
    role: 'Practicante de Desarrollo de Software',
    company: 'GEOGAM SPA',
    area: 'Desarrollo de software',
    tags: ['Desarrollo web', 'UI/UX', 'Scrum'],
    location: 'Santiago de Chile',
    period: 'Ene 2025 – Dic 2025',
    description:
      'Participé en el desarrollo y mantenimiento de plataformas web para clientes B2B, colaborando también en diseño de interfaces y entregas iterativas.',
    responsibilities: [
      'Desarrollo de funcionalidades web de principio a fin según los requerimientos del negocio.',
      'Diseño de interfaces UI/UX y colaboración en entregas bajo metodologías ágiles.',
    ],
  },
  {
    role: 'Analista de Procesos y TI',
    company: 'Polarizados J&R',
    area: 'Procesos y tecnología',
    tags: ['BPM', 'Análisis de procesos', 'Mejora continua'],
    location: 'Cajamarca, Perú',
    period: 'Ene 2024 – Dic 2024',
    description:
      'Analicé y documenté procesos de negocio, levantando requerimientos e identificando oportunidades de mejora operativa.',
    responsibilities: [
      'Análisis de procesos mediante BPM y documentación de requerimientos.',
      'Identificación de mejoras en procesos de venta y producción.',
    ],
  },
] satisfies Experience[];
