# 🚀 Benjamin Rumay | Software Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" /></a>
</p>

> Portafolio personal desarrollado para presentar mi perfil profesional, experiencia y proyectos mediante una experiencia web moderna, accesible y responsive.

<p align="center">
  <img src="docs/capturas/desktop.png" alt="Vista de escritorio del portafolio de Benjamin Rumay" width="100%" />
</p>

<p align="center">
  <a href="https://benjaminrumay-portafolio.vercel.app">Ver sitio web</a>
</p>

---

## 📑 Contenido

- [Descripción](#-descripción)
- [Características](#-características-principales)
- [Tecnologías](#️-tecnologías)
- [Arquitectura](#️-arquitectura-del-proyecto)
- [Proyectos destacados](#-proyectos-destacados)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Pruebas y calidad](#-pruebas-y-calidad)
- [Seguridad y SEO](#-seguridad-y-seo)
- [Despliegue](#-despliegue)
- [Licencia](#-licencia)

---

## 📖 Descripción

Este portafolio reúne mi perfil como **Software Developer** y una selección de proyectos desarrollados con distintas tecnologías. Está construido con **Next.js 16, React 19 y TypeScript**, priorizando una arquitectura modular, rendimiento, accesibilidad y una interfaz visual coherente.

El sitio combina diseño responsive, animaciones optimizadas, navegación intuitiva y contenido estructurado para mostrar proyectos, habilidades y experiencia de forma clara en dispositivos móviles y de escritorio.

## ✨ Características principales

- **Diseño UI/UX:** identidad visual basada en tonos oscuros, acentos azules, tipografía Inter y componentes con efectos sutiles de glassmorphism.
- **Responsive design:** enfoque Mobile First con ajustes para smartphones, tablets, laptops y pantallas de alta resolución.
- **Animaciones e interacciones:** efectos de entrada mediante `IntersectionObserver`, partículas con Canvas API, typing effect, microinteracciones y navegación activa por secciones.
- **Accesibilidad:** compatibilidad con `prefers-reduced-motion` y control para pausar animaciones.
- **Contacto con WhatsApp:** formulario que genera un mensaje estructurado y abre WhatsApp sin almacenar los datos en un servidor.
- **SEO técnico:** metadatos, canonical URL, Open Graph, Twitter Cards, datos estructurados JSON-LD, `sitemap.xml` y `robots.txt`.
- **Optimización de recursos:** uso de `next/image` y `next/font` para gestionar imágenes y tipografías.
- **Código mantenible:** componentes reutilizables, TypeScript estricto, hooks personalizados y separación de datos y lógica.

## 🛠️ Tecnologías

| Tecnología | Aplicación |
| --- | --- |
| **Next.js 16** | Framework, App Router y renderizado de la aplicación |
| **React 19** | Componentes e interfaces interactivas |
| **TypeScript** | Tipado estático y seguridad en el desarrollo |
| **Tailwind CSS 4** | Estilos y diseño responsive |
| **CSS / Canvas API** | Animaciones, efectos visuales y partículas |
| **Vitest** | Pruebas unitarias |
| **React Testing Library** | Pruebas de componentes e interacción |
| **Playwright** | Pruebas end-to-end (E2E) con Chromium |
| **ESLint** | Análisis estático y consistencia del código |
| **Vercel** | Despliegue y publicación |
| **Git & GitHub** | Control de versiones y alojamiento del repositorio |

## 🏗️ Arquitectura del proyecto

La aplicación está organizada por responsabilidades para facilitar su mantenimiento y evolución:

```text
.
├── .github/                 # Configuración y flujos de GitHub
├── docs/
│   └── capturas/            # Capturas para la documentación
├── public/
│   └── projects/            # Imágenes de los proyectos
├── src/
│   ├── app/                 # App Router, páginas y estilos globales
│   ├── components/          # Componentes y secciones de la interfaz
│   ├── data/                # Información de proyectos, perfil y certificaciones
│   ├── hooks/               # Hooks personalizados
│   ├── lib/                 # Utilidades y lógica compartida
│   └── types/               # Tipos e interfaces de TypeScript
├── tests/
│   └── unit/                # Pruebas unitarias
├── .env.example             # Referencia de variables de entorno
├── LICENSE                 # Licencia del proyecto
├── next.config.ts           # Configuración de Next.js
├── playwright.config.ts     # Configuración de Playwright
└── package.json             # Dependencias y scripts
```

## 🚀 Proyectos destacados

| Proyecto | Descripción | Estado |
| --- | --- | --- |
| **Detalles Belis** | Landing page para un emprendimiento de regalos personalizados, con catálogo y contacto por WhatsApp. | En producción |
| **Atrium Academy** | Plataforma e-learning con catálogo de cursos, seguimiento del progreso y panel administrativo. | En producción |
| **IA Cognitiva** | Plataforma académica que integra evaluaciones cognitivas y Machine Learning. | Finalizado · Demo en Azure |
| **PlanorIA** | Plataforma educativa con inteligencia artificial, flashcards y cuestionarios. | En desarrollo |
| **Kaphiy** | Sistema web y móvil para la gestión de pedidos, inventario y ventas. | En desarrollo |

Los proyectos en desarrollo se presentan como **próximamente** y no incluyen enlaces de demostración hasta que estén disponibles.

## 💻 Instalación y ejecución

### Requisitos

- Node.js y npm.
- Git.

### Configuración local

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd <CARPETA_DEL_PROYECTO>
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno tomando como referencia `.env.example`, si corresponde.

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

> Sustituye `<URL_DEL_REPOSITORIO>` y `<CARPETA_DEL_PROYECTO>` por los datos reales del repositorio.

## 🧪 Pruebas y calidad

El proyecto incluye herramientas para validar componentes, mantener la consistencia del código y comprobar el build de producción.

| Proceso | Comando | Propósito |
| --- | --- | --- |
| Pruebas unitarias | `npm run test` | Verificar componentes, utilidades y comportamientos principales |
| Análisis de código | `npm run lint` | Detectar problemas y mantener convenciones |
| Build | `npm run build` | Comprobar la compilación de producción |
| Pruebas E2E | `npm run test:e2e` | Validar flujos en navegador con Playwright |

## 🔒 Seguridad y SEO

- Validación de URLs externas y uso de `noopener` / `noreferrer` cuando corresponde.
- Cabeceras de seguridad, incluyendo `X-Content-Type-Options` y políticas de control de contenido.
- Serialización segura de datos JSON-LD.
- Metadatos para buscadores y redes sociales, canonical URL y archivos de rastreo.
- `.env.example` como referencia de configuración. Las variables `NEXT_PUBLIC_*` se exponen al navegador y no deben contener credenciales ni secretos.

## 🌐 Despliegue

El sitio está publicado en **Vercel**:

**[benjaminrumay-portafolio.vercel.app](https://benjaminrumay-portafolio.vercel.app)**

El flujo de despliegue está integrado con el repositorio. Los cambios enviados a la rama `main` activan el proceso de construcción y publicación configurado en Vercel.

Para actualizar los proyectos o certificaciones, revisa que las rutas de las imágenes en `public/projects/` coincidan con los datos definidos en `src/data/projects.ts`.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para conocer los términos de uso, modificación y distribución.

---

<p align="center">
  Desarrollado por <strong>Benjamin Rumay</strong>
  <br />
  <a href="https://benjaminrumay-portafolio.vercel.app">Portafolio web</a>
</p>
