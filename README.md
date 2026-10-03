# Benjamin Rumay · Portafolio

Portafolio profesional de **Benjamin Rumay**, desarrollado con Next.js para presentar proyectos, experiencia, tecnologías y canales de contacto.

El sitio conserva la identidad visual **BR**, tipografía Inter, fondo oscuro, acentos azules, diseño responsive y animaciones propias, manteniendo una arquitectura organizada y preparada para producción.

![Vista de escritorio del portafolio](docs/capturas/desktop.png)

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- `next/font`
- `next/image`

## Características

- Landing page profesional y responsive.
- Diseño adaptado para escritorio, tablet y móvil.
- Navegación accesible y menú responsive.
- Animaciones de escritura, partículas, reveal, brillo y efectos visuales.
- Control para pausar animaciones.
- Compatibilidad con `prefers-reduced-motion`.
- Galerías de proyectos con visualización ampliada.
- Metadata, canonical, Open Graph, JSON-LD, sitemap y robots.
- Headers de seguridad configurados.
- Formulario de contacto conectado directamente con WhatsApp.
- El sitio no almacena los mensajes enviados desde el formulario.

## Proyectos

Actualmente el portafolio presenta cinco proyectos:

### Detalles Belis

Landing page desarrollada para un emprendimiento de regalos personalizados.

Incluye catálogo visual, información del negocio, contacto directo y diseño responsive.

**Estado:** En producción.

### Atrium Academy

Plataforma orientada al aprendizaje y gestión de contenidos formativos.

Incluye catálogo de cursos, seguimiento de progreso, área de estudiantes y panel administrativo.

**Estado:** En producción.

### IA Cognitiva

Plataforma académica de investigación que integra evaluaciones cognitivas y emocionales con Machine Learning.

Incluye consentimiento, pruebas, cuestionarios, análisis de resultados y administración de participantes.

La galería cuenta actualmente con **ocho capturas reales del sistema**.

**Estado:** Finalizado · Demo en Azure.

### PlanorIA

Plataforma educativa orientada al aprendizaje autónomo mediante flashcards, quizzes e inteligencia artificial.

**Estado:** En desarrollo · Disponible próximamente.

### Kaphiy

Sistema web y móvil para la gestión de pedidos, inventario y ventas de una cafetería.

**Estado:** En desarrollo · Disponible próximamente.

Los proyectos que aún están en desarrollo se muestran como **Disponible próximamente** y no presentan el botón principal de acceso utilizado por los proyectos publicados.

## Estructura principal

```text
.
├── .github/
├── docs/
├── public/
│   └── projects/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── types/
├── tests/
│   └── unit/
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── vercel.json
└── vitest.config.ts
```

## Ejecutar localmente

Requiere Node.js 24 y npm.

```bash
npm ci
npm run dev
```

Luego abre:

```text
http://localhost:3000
```

Para ejecutar una compilación de producción:

```bash
npm run build
npm run start
```

## Verificación

Antes de desplegar se recomienda ejecutar:

```bash
npm run test
npm run lint
npm run build
```

El proyecto utiliza:

- Vitest
- React Testing Library
- Playwright

Los tests principales comprueban contenido, formulario de contacto, integridad de proyectos, enlaces externos y existencia de recursos locales.

## Recursos de proyectos

Las imágenes utilizadas por cada proyecto se almacenan dentro de:

```text
public/projects/
```

La configuración central de los proyectos se encuentra en:

```text
src/data/projects.ts
```

Los tests verifican que las imágenes declaradas en esta configuración existan físicamente antes del despliegue.

## Seguridad

El proyecto incluye medidas básicas de seguridad para producción:

- Validación de URLs externas.
- `noopener` y `noreferrer` para enlaces externos.
- Content Security Policy.
- `X-Content-Type-Options`.
- Protección contra `frame-ancestors`.
- Eliminación del header `X-Powered-By`.
- Variables de entorno excluidas mediante `.gitignore`.

El archivo:

```text
.env.example
```

puede utilizarse únicamente como referencia y no debe contener credenciales reales.

## Despliegue

El proyecto está preparado para desplegarse en **Vercel**.

Configuración recomendada:

```text
Framework Preset: Next.js
Node.js: 24
Install Command: npm ci
Build Command: npm run build
```

No requiere secretos para funcionar actualmente.

`SITE_URL` es opcional y, en caso de utilizarse, debe coincidir con el dominio HTTPS definitivo del portafolio.

URL principal:

```text
https://benjaminrumay-portafolio.vercel.app
```

## Repositorio

El proyecto utiliza Git y GitHub para control de versiones.

Los archivos generados o locales como los siguientes no se incluyen en el repositorio:

```text
node_modules/
.next/
coverage/
playwright-report/
test-results/
.vercel/
.env*
*.log
*.bundle
```

## Documentación

La documentación adicional del proyecto se encuentra en:

- [Guía del proyecto](docs/GUIA_PROYECTO.md)
- [Validación](docs/VALIDACION.md)

## Estado actual

El portafolio se encuentra preparado para producción con:

- Código organizado.
- Recursos validados.
- Tests unitarios funcionales.
- Lint validado.
- Build de producción validado.
- Repositorio GitHub configurado.
- Configuración preparada para Vercel.

## Licencia

No se ha definido una licencia específica para el proyecto.

Las licencias correspondientes a tipografías, iconos y otros recursos externos se mantienen de acuerdo con sus respectivos autores y proveedores.
