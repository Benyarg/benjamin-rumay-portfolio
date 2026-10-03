import type { Project } from '@/types/portfolio';

export const projects = [
  // =========================================================
  // 01. DETALLES BELIS
  // =========================================================
  {
    title: 'Detalles Belis',

    summary:
      'Sitio web para un negocio de regalos personalizados, con catálogo visual y contacto directo.',

    description:
      'Landing page desarrollada para presentar productos personalizados, facilitar consultas y conectar a los clientes directamente con el negocio.',

    category: 'Landing page',

    problem:
      'El emprendimiento necesitaba un espacio propio para presentar sus productos y facilitar el contacto con potenciales clientes.',

    solution:
      'Diseñé y desarrollé una landing responsive con catálogo visual, información del negocio, formulario de contacto y acceso directo a WhatsApp.',

    slug: 'detalles-belis',

    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],

    architecture: [
      'Landing page responsive organizada por secciones.',
      'Catálogo visual para presentar productos y categorías.',
      'Formulario y canales de contacto integrados.',
    ],

    result:
      'El negocio cuenta con un sitio web publicado en detallesbelis.com para presentar sus productos y recibir consultas de forma directa.',

    note: 'Proyecto desarrollado para un emprendimiento real, priorizando una experiencia sencilla, visual y orientada al contacto con clientes.',

    github: 'https://github.com/Benyarg/detallesbelis',

    demo: 'https://detallesbelis.com',

    featured: true,

    status: 'En producción',

    logo: '/projects/detalles-belis/detalles-belis-logo.webp',

    preview: {
      src: '/projects/detalles-belis/home-detallesbelis.png',
      alt: 'Presentación del inicio de Detalles Belis en un navegador',
      caption: 'Inicio y propuesta de valor',
      kind: 'mockup',
      width: 1440,
      height: 960,
    },

    gallery: [
      {
        src: '/projects/detalles-belis/responsive-desktop.png',
        alt: 'Presentación de Detalles Belis en computadora y teléfono',
        caption: 'Presentación desktop y móvil',
        kind: 'mockup',
        width: 1440,
        height: 960,
      },
      {
        src: '/projects/detalles-belis/catalogo-db.png',
        alt: 'Presentación del catálogo de regalos de Detalles Belis',
        caption: 'Catálogo visual de productos',
        kind: 'mockup',
        width: 1440,
        height: 960,
      },
      {
        src: '/projects/detalles-belis/detallepersonalizado-db.png',
        alt: 'Proceso para solicitar un detalle personalizado en Detalles Belis',
        caption: 'Guía para solicitar un detalle personalizado',
        kind: 'mockup',
        width: 1440,
        height: 960,
      },
      {
        src: '/projects/detalles-belis/contacto-db.png',
        alt: 'Sección de contacto de Detalles Belis',
        caption: 'Contacto directo para consultas',
        kind: 'mockup',
        width: 1440,
        height: 960,
      },
    ],
  },

  // =========================================================
  // 02. ATRIUM ACADEMY
  // =========================================================
  {
    slug: 'atrium',

    title: 'Atrium Academy',

    logo: '/projects/atrium/atrium-logo.png',

    summary:
      'Proyecto personal desarrollado a partir de una referencia académica, con identidad visual y enfoque propios.',

    description:
      'Plataforma web orientada a la presentación, aprendizaje y gestión de contenidos formativos.',

    category: 'Arquitectura y formación',

    status: 'En producción',

    featured: true,

    problem:
      'Replantear una referencia académica y convertirla en una propuesta personal con identidad, estructura y experiencia propias.',

    solution:
      'Reconstruí la experiencia con una nueva identidad visual, catálogo de cursos, vistas para estudiantes y herramientas de administración.',

    technologies: [
      'ASP.NET Core MVC',
      '.NET 9',
      'C#',
      'Entity Framework Core',
      'PostgreSQL',
      'Neon',
      'ASP.NET Core Identity',
      'Docker',
      'Vercel',
    ],

    architecture: [
      'Arquitectura organizada en Domain, Infrastructure, Web y Tests.',
      'Base de datos PostgreSQL alojada en Neon.',
      'Autenticación y roles con ASP.NET Core Identity.',
      'Almacenamiento persistente de imágenes con Neon Object Storage.',
      'Panel independiente para estudiantes y administración.',
      'Despliegue mediante Docker en Vercel.',
    ],

    result:
      'Atrium Academy cuenta con una versión finalizada y desplegada, con identidad propia y una experiencia orientada al aprendizaje y la gestión de contenidos.',

    note: 'El proyecto parte de una referencia académica previa y fue reconstruido como una propuesta personal independiente.',

    github: 'https://github.com/Benyarg/ATRIUM-Academy',

    demo: 'https://atrium-academy-rouge.vercel.app/',

    preview: {
      src: '/projects/atrium/home-atrium.png',
      alt: 'Página principal de Atrium Academy',
      caption: 'Página principal de Atrium Academy',
      kind: 'screenshot',
      width: 1920,
      height: 1080,
    },

    gallery: [
      {
        src: '/projects/atrium/home-atrium.png',
        alt: 'Página principal de Atrium Academy',
        caption: 'Página principal',
        kind: 'screenshot',
        width: 1920,
        height: 1080,
      },
      {
        src: '/projects/atrium/catalogo-atrium.png',
        alt: 'Catálogo de cursos de Atrium Academy',
        caption: 'Catálogo de cursos',
        kind: 'screenshot',
        width: 1920,
        height: 1080,
      },
      {
        src: '/projects/atrium/detallecurso-atrium.png',
        alt: 'Detalle de un curso en Atrium Academy',
        caption: 'Detalle de curso',
        kind: 'screenshot',
        width: 1920,
        height: 1080,
      },
      {
        src: '/projects/atrium/miscursos-atrium.png',
        alt: 'Vista de cursos y progreso del estudiante en Atrium Academy',
        caption: 'Mis cursos y progreso',
        kind: 'screenshot',
        width: 1920,
        height: 1080,
      },
      {
        src: '/projects/atrium/dashboard-atrium.png',
        alt: 'Dashboard administrativo de Atrium Academy',
        caption: 'Panel administrativo',
        kind: 'screenshot',
        width: 1920,
        height: 1080,
      },
      {
        src: '/projects/atrium/gestioncursos-atrium.png',
        alt: 'Gestión de cursos desde el panel administrativo de Atrium Academy',
        caption: 'Gestión de cursos',
        kind: 'screenshot',
        width: 1920,
        height: 1080,
      },
    ],
  },

  // =========================================================
  // 03. IA COGNITIVA
  // =========================================================
  {
    slug: 'ia-cognitiva',

    title: 'IA Cognitiva',

    summary:
      'Plataforma web con Machine Learning para analizar indicadores cognitivos y emocionales en estudiantes universitarios.',

    description:
      'Proyecto de investigación que integra evaluaciones cognitivas y emocionales, análisis de resultados y Machine Learning.',

    category: 'Investigación · Machine Learning',

    featured: true,

    status: 'Finalizado · Demo en Azure',

    technologies: [
      'C#',
      '.NET 10',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'ASP.NET Core Identity',
      'ML.NET',
      'SQL Server',
      'Azure SQL',
      'Microsoft Azure',
      'GitHub Actions',
    ],

    logo: '/projects/ia-cognitiva/logo.png',

    preview: {
      src: '/projects/ia-cognitiva/consentimiento.png',
      alt: 'Pantalla real de consentimiento y evaluación de investigación de IA Cognitiva',
      caption: 'Consentimiento e inicio de la evaluación',
      kind: 'screenshot',
      width: 1892,
      height: 906,
    },

    gallery: [
      {
        src: '/projects/ia-cognitiva/consentimiento.png',
        alt: 'Pantalla real de consentimiento y evaluación de investigación de IA Cognitiva',
        caption: 'Consentimiento e inicio de la evaluación',
        kind: 'screenshot',
        width: 1892,
        height: 906,
      },
      {
        src: '/projects/ia-cognitiva/test-reaccion.png',
        alt: 'Pantalla real del test de reacción de IA Cognitiva',
        caption: 'Test de reacción',
        kind: 'screenshot',
        width: 1890,
        height: 916,
      },
      {
        src: '/projects/ia-cognitiva/dass-21.png',
        alt: 'Pantalla real del cuestionario DASS-21 de IA Cognitiva',
        caption: 'Cuestionario DASS-21',
        kind: 'screenshot',
        width: 1892,
        height: 906,
      },
      {
        src: '/projects/ia-cognitiva/uso-ia.png',
        alt: 'Pantalla real del cuestionario sobre uso de inteligencia artificial',
        caption: 'Uso de inteligencia artificial',
        kind: 'screenshot',
        width: 1882,
        height: 917,
      },
      {
        src: '/projects/ia-cognitiva/usabilidad.png',
        alt: 'Pantalla real de la evaluación de usabilidad de IA Cognitiva',
        caption: 'Evaluación de usabilidad',
        kind: 'screenshot',
        width: 1886,
        height: 905,
      },
      {
        src: '/projects/ia-cognitiva/analisis-final.png',
        alt: 'Pantalla real del análisis final con su aviso de alcance no clínico',
        caption: 'Análisis final y alcance de los indicadores',
        kind: 'screenshot',
        width: 1887,
        height: 912,
      },
      {
        src: '/projects/ia-cognitiva/dashboard-iacognitiva.png',
        alt: 'Dashboard administrativo de IA Cognitiva en entorno de demostración',
        caption: 'Dashboard administrativo',
        kind: 'screenshot',
        width: 1892,
        height: 916,
      },
      {
        src: '/projects/ia-cognitiva/participantes-iacognitiva.png',
        alt: 'Gestión de participantes de IA Cognitiva en entorno de demostración',
        caption: 'Gestión de participantes',
        kind: 'screenshot',
        width: 1892,
        height: 916,
      },
    ],

    problem:
      'Analizar indicadores cognitivos y emocionales asociados al uso de inteligencia artificial generativa en estudiantes universitarios.',

    solution:
      'Desarrollé una plataforma que integra consentimiento, pruebas cognitivas, cuestionarios, análisis de resultados y administración de participantes.',

    architecture: [
      'ASP.NET Core MVC sobre .NET 10.',
      'Entity Framework Core con SQL Server y Azure SQL.',
      'ASP.NET Core Identity para autenticación y roles.',
      'ML.NET para Machine Learning y Azure para despliegue.',
    ],

    result:
      'La plataforma permite recopilar evaluaciones, analizar indicadores y administrar los datos del estudio desde un entorno web desplegado en Azure.',

    note: 'Proyecto académico de investigación. Los resultados son indicadores experimentales y no constituyen un diagnóstico clínico.',

    github: 'https://github.com/Benyarg/tesis-ia-cognitiva-ml',

    demo: 'https://plataformaia-f6gxc2bhc3g3e4cv.eastus2-01.azurewebsites.net',
  },

  // =========================================================
  // 04. PLANORIA
  // =========================================================
  {
    title: 'PlanorIA',

    summary: 'Aprendizaje autónomo con flashcards, quizzes e inteligencia artificial.',

    description:
      'Plataforma educativa con IA para organizar el estudio mediante flashcards y quizzes personalizados.',

    category: 'Aplicación educativa',

    problem:
      'Los estudiantes necesitan herramientas que les permitan organizar el estudio y practicar con contenido adaptado a sus temas.',

    solution:
      'Implementé una plataforma con generación de contenido personalizado y seguimiento del progreso de estudio.',

    slug: 'planoria',

    technologies: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Azure SQL'],

    status: 'En desarrollo · Disponible próximamente',

    note: 'Proyecto actualmente en desarrollo. Disponible próximamente.',

    result: 'La versión final del proyecto estará disponible próximamente.',

    featured: false,

    gallery: [
      {
        src: '/projects/planoria/planoria-dashboard.webp',
        alt: 'Diseño conceptual del panel de estudio de PlanorIA',
        caption: 'Panel de aprendizaje — propuesta visual',
        kind: 'concept',
        width: 1440,
        height: 960,
      },
    ],

    preview: {
      src: '/projects/planoria/planoria-dashboard.webp',
      alt: 'Diseño conceptual del panel de estudio de PlanorIA',
      caption: 'Panel de aprendizaje — propuesta visual',
      kind: 'concept',
      width: 1440,
      height: 960,
    },

    logo: '/projects/planoria/planoria-logo.webp',
  },

  // =========================================================
  // 05. KAPHIY
  // =========================================================
  {
    title: 'Kaphiy — Sistema de Gestión para Cafetería',

    shortTitle: 'Kaphiy',

    summary: 'Gestión de pedidos, inventario y ventas con aplicación web y móvil.',

    description:
      'Sistema de gestión para una cafetería, desarrollado en equipo, con una aplicación web y una app Android complementaria.',

    category: 'Sistema web + móvil',

    problem:
      'La cafetería necesitaba centralizar la información de pedidos, inventario y ventas.',

    solution:
      'Desarrollamos una aplicación web con Angular y Spring Boot, junto con una app Android para complementar el sistema.',

    slug: 'kaphiy',

    technologies: ['Java', 'Spring Boot', 'Angular', 'Android', 'MySQL'],

    status: 'En desarrollo · Disponible próximamente',

    note: 'Proyecto actualmente en desarrollo. Disponible próximamente.',

    result: 'La versión final del proyecto estará disponible próximamente.',

    featured: false,

    role: 'En equipo (vendlab)',

    gallery: [
      {
        src: '/projects/kaphiy/kaphiy-dashboard.webp',
        alt: 'Diseño conceptual del panel de gestión de Kaphiy',
        caption: 'Resumen del negocio — propuesta visual',
        kind: 'concept',
        width: 1440,
        height: 960,
      },
    ],

    preview: {
      src: '/projects/kaphiy/kaphiy-dashboard.webp',
      alt: 'Diseño conceptual del panel de gestión de Kaphiy',
      caption: 'Resumen del negocio — propuesta visual',
      kind: 'concept',
      width: 1440,
      height: 960,
    },

    logo: '/projects/kaphiy/kaphiy-logo.webp',
  },
] satisfies Project[];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
