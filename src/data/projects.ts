import type { Project } from '@/types/portfolio';

export const projects = [
  // =========================================================
  // 01. DETALLES BELIS
  // =========================================================
  {
    title: 'Detalles Belis',
    summary: 'Sitio web para un negocio de regalos personalizados, con catálogo visual y contacto directo.',
    description: 'Landing page de alto rendimiento desarrollada para presentar productos personalizados, optimizar el embudo de ventas y conectar a los clientes directamente con el negocio.',
    category: 'Landing page',
    problem: 'El emprendimiento dependía exclusivamente de redes sociales para mostrar su catálogo, lo que limitaba su profesionalismo, dispersaba la atención del cliente y generaba pérdida de consultas en los mensajes directos.',
    solution: 'Diseñé y desarrollé una landing page ultrarrápida (sin dependencias pesadas) con un catálogo visual organizado por categorías. Integré un formulario de contacto y un acceso directo a WhatsApp para eliminar la fricción en el proceso de compra.',
    slug: 'detalles-belis',
    // ✅ Stack actualizado: Frontend + Deploy
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Netlify'],
    architecture: [
      'Landing page responsive optimizada para carga rápida.',
      'Catálogo visual estructurado para presentar productos.',
      'Integración directa con WhatsApp para conversión inmediata.',
    ],
    result: 'El negocio ahora cuenta con una identidad digital profesional y un canal centralizado de ventas. La nueva web redujo el tiempo de respuesta y aumentó la tasa de conversión de visitantes a consultas directas.',
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
    summary: 'Plataforma de e-learning con identidad propia, diseñada para la gestión de contenidos formativos y experiencia de usuario.',
    description: 'Plataforma web orientada a la presentación, aprendizaje y gestión de contenidos formativos, construida con una arquitectura escalable.',
    category: 'Arquitectura y formación',
    status: 'En producción',
    featured: true,
    problem: 'La versión inicial (académica) presentaba una arquitectura fuertemente acoplada que dificultaba el mantenimiento y la escalabilidad. Además, carecía de una identidad visual atractiva y de herramientas de administración eficientes.',
    solution: 'Lideré una reconstrucción total aplicando Clean Architecture y ASP.NET Core. Implementé un sistema de autenticación robusto con Identity, almacenamiento en la nube para imágenes y un panel administrativo intuitivo. Todo el despliegue se automatizó con Docker.',
    // ✅ Stack actualizado: Full Stack
    technologies: [
      'HTML',
      'CSS',
      'C#',
      '.NET',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'Docker',
      'Vercel',
    ],
    architecture: [
      'Clean Architecture (Domain, Infrastructure, Web, Tests).',
      'Base de datos PostgreSQL en la nube (Neon).',
      'Autenticación, autorización y roles con ASP.NET Core Identity.',
      'Despliegue contenedorizado con Docker en Vercel.',
    ],
    result: 'Una plataforma robusta, segura y lista para producción. El nuevo diseño arquitectónico permite escalar el sistema y añadir funcionalidades sin afectar el núcleo, mejorando la experiencia tanto de estudiantes como de administradores.',
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
    summary: 'Plataforma de investigación con Machine Learning para analizar indicadores cognitivos y emocionales en estudiantes universitarios.',
    description: 'Proyecto de investigación que integra evaluaciones cognitivas, cuestionarios emocionales y modelos predictivos para el análisis de datos.',
    category: 'Investigación · Machine Learning',
    featured: true,
    status: 'Finalizado · Demo en Azure',
    // ✅ Stack actualizado: Backend + ML + DB + Cloud
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'C#',
      '.NET',
      'ML.NET',
      'SQL Server',
      'Microsoft Azure',
      'GitHub Actions',
    ],
    logo: '/projects/ia-cognitiva/logo.png',
    preview: {
      src: '/projects/ia-cognitiva/dashboard-iacognitiva.png',
      alt: 'Dashboard administrativo de IA Cognitiva',
      caption: 'Dashboard administrativo',
      kind: 'screenshot',
      width: 1892,
      height: 916,
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
    problem: 'La recolección y el análisis de indicadores cognitivos y emocionales (como los del test DASS-21) se realizaban de forma manual o mediante herramientas dispersas, lo que ralentizaba la investigación y limitaba el alcance del estudio.',
    solution: 'Construí una plataforma web integral en .NET 10 que centraliza las evaluaciones y utiliza ML.NET para procesar los datos automáticamente. La seguridad se gestiona con Identity, y el despliegue continuo (CI/CD) se realiza en Azure con GitHub Actions.',
    architecture: [
      'ASP.NET Core MVC sobre .NET 10.',
      'Entity Framework Core con SQL Server y Azure SQL.',
      'ML.NET para el modelado de Machine Learning.',
      'Despliegue automatizado en Azure vía GitHub Actions.',
    ],
    result: 'Un entorno digital seguro y escalable que permite procesar datos de investigación de forma masiva y automática. La plataforma agiliza la obtención de resultados experimentales, facilitando la toma de decisiones basadas en datos.',
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
    description: 'Plataforma educativa con IA para organizar el estudio mediante flashcards y quizzes personalizados.',
    category: 'Aplicación educativa',
    problem: 'Los estudiantes invierten demasiado tiempo organizando apuntes y creando material de estudio, lo que reduce las horas efectivas de repaso y práctica.',
    solution: 'Implementé una plataforma que utiliza inteligencia artificial para autogenerar contenido de estudio (flashcards y quizzes) a partir de textos, junto con un sistema de seguimiento del progreso.',
    slug: 'planoria',
    // (Se mantiene el stack que ya tenías definido)
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
    description: 'Sistema de gestión para una cafetería, desarrollado en equipo, con una aplicación web y una app Android complementaria.',
    category: 'Sistema web + móvil',
    problem: 'La cafetería operaba con procesos manuales para la toma de pedidos y el control de inventario, lo que generaba errores en el stock y retrasos en la atención al cliente.',
    solution: 'Desarrollamos una solución integral con una app web administrativa en Angular y Spring Boot, complementada con una app nativa en Android para que los meseros tomen pedidos en tiempo real.',
    slug: 'kaphiy',
    // (Se mantiene el stack que ya tenías definido)
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