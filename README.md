# Benjamin Rumay · Portafolio

Portafolio profesional de **Benjamin Rumay**, desarrollado con **Next.js** para presentar proyectos, experiencia, tecnologías y canales de contacto.

El sitio mantiene la identidad visual **BR**, tipografía Inter, fondo oscuro, acentos azules, diseño responsive y animaciones propias, con una arquitectura organizada y preparada para producción.

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
- Animaciones de escritura, partículas, reveal, brillo y microinteracciones.
- Control para pausar animaciones.
- Compatibilidad con `prefers-reduced-motion`.
- Galerías de proyectos con visualización ampliada.
- Metadata, canonical, Open Graph, JSON-LD, sitemap y robots.
- Headers de seguridad configurados.
- Formulario de contacto conectado directamente con WhatsApp.
- El sitio no almacena los mensajes enviados desde el formulario.

## Proyectos

Actualmente el portafolio presenta cinco proyectos.

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

Los proyectos que todavía están en desarrollo se muestran como **Disponible próximamente** y no presentan el botón principal `Ver proyecto` utilizado por los proyectos publicados.

## Estructura principal

```text
.
├── .github/
├── docs/
│   └── capturas/
├── public/
│   └── projects/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── types/
├── tests/
│   └── unit/
├── .env.example
├── .gitignore
├── .nvmrc
├── next.config.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── vercel.json
└── vitest.config.ts
```

## Ejecutar localmente

Requiere **Node.js 24** y npm.

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

Antes de cada despliegue se recomienda ejecutar las principales comprobaciones del proyecto:

```bash
npm run test
npm run lint
npm run build
```

Estas validaciones ayudan a comprobar que el portafolio se encuentre en un estado estable antes de publicar cambios.

### Pruebas unitarias

El proyecto utiliza **Vitest** y **React Testing Library** para validar aspectos principales de la aplicación.

Entre las comprobaciones actuales se incluyen:

- Renderizado del contenido principal.
- Presencia de los proyectos destacados.
- Funcionamiento básico del formulario de contacto.
- Generación del enlace de WhatsApp.
- Rechazo de mensajes demasiado cortos.
- Integridad de los slugs de proyectos.
- Existencia de imágenes y recursos locales declarados.
- Validación de enlaces externos.
- Comprobación de las ocho capturas de IA Cognitiva.
- Manejo de proyectos inexistentes.

Para ejecutar las pruebas:

```bash
npm run test
```

Para obtener información detallada de cada prueba:

```bash
npm run test -- --reporter=verbose
```

### ESLint

La calidad y consistencia del código se revisa mediante ESLint:

```bash
npm run lint
```

### Build de producción

Antes de desplegar se genera una compilación de producción:

```bash
npm run build
```

Esto permite comprobar que Next.js pueda compilar correctamente la aplicación y generar las rutas necesarias.

### Playwright

El proyecto mantiene configuración de **Playwright** para pruebas de navegador.

Cuando sea necesario:

```bash
npm run test:e2e
```

Si Chromium aún no se encuentra instalado:

```bash
npx playwright install chromium
```

## Recursos de proyectos

Las imágenes utilizadas por cada proyecto se almacenan principalmente en:

```text
public/projects/
```

La configuración central de los proyectos se encuentra en:

```text
src/data/projects.ts
```

Los tests de integridad comprueban que los recursos declarados existan físicamente antes del despliegue.

Al eliminar o renombrar una imagen también debe actualizarse su referencia en `src/data/projects.ts`.

## Contacto

El formulario permite ingresar:

- Nombre opcional.
- Mensaje.

El botón principal se presenta como:

```text
Enviar mensaje
```

Al utilizarlo, el sitio prepara una conversación en WhatsApp con el contenido ingresado.

El portafolio no almacena los mensajes enviados desde el formulario.

## Seguridad

El proyecto incluye medidas básicas de seguridad para producción:

- Validación de URLs externas.
- Uso de `noopener` y `noreferrer` en enlaces externos.
- Content Security Policy.
- `X-Content-Type-Options`.
- Protección contra `frame-ancestors`.
- Eliminación del header `X-Powered-By`.
- Serialización segura de JSON-LD.
- Variables de entorno excluidas mediante `.gitignore`.

El archivo:

```text
.env.example
```

puede utilizarse como referencia de configuración, pero no debe contener contraseñas, tokens ni credenciales reales.

Las variables con prefijo `NEXT_PUBLIC_` son visibles desde el navegador y no deben utilizarse para almacenar secretos.

## Repositorio

El proyecto utiliza Git y GitHub para control de versiones.

Los archivos generados o locales no se incluyen en el repositorio:

```text
node_modules/
.next/
out/
coverage/
playwright-report/
test-results/
.vercel/
.env*
*.tsbuildinfo
*.log
*.bundle
```

Antes de realizar un commit se recomienda revisar:

```bash
git status
```

Para revisar cambios específicos:

```bash
git diff
```

## Flujo de trabajo

Flujo recomendado antes de publicar cambios:

```bash
npm run test
npm run lint
npm run build
git status
git add .
git commit -m "Actualiza portafolio"
git push
```

## Despliegue

El proyecto está preparado para desplegarse en **Vercel**.

Configuración recomendada:

```text
Framework Preset: Next.js
Node.js: 24
Install Command: npm ci
Build Command: npm run build
```

El directorio de salida debe mantenerse con la configuración automática de Next.js.

`SITE_URL` es opcional y, si se utiliza, debe coincidir con el dominio HTTPS definitivo del portafolio.

URL principal:

```text
https://benjaminrumay-portafolio.vercel.app
```

Si el dominio cambia, se recomienda revisar:

- Metadata.
- Canonical.
- Open Graph.
- Sitemap.
- Robots.
- `SITE_URL`.

Cuando el repositorio está conectado con Vercel, un `push` a la rama de producción puede iniciar automáticamente un nuevo despliegue.

## Mantenimiento

Al actualizar el portafolio se recomienda revisar periódicamente:

- Información profesional.
- Proyectos y estados.
- Capturas y logos.
- CV.
- URLs externas.
- Dependencias.
- Tests.
- Lint.
- Build.
- Responsive.
- Metadata.
- Seguridad.
- Rendimiento.

Las métricas de rendimiento pueden variar según dispositivo, navegador, red y tráfico real.

## Licencia

No se ha definido una licencia específica para el proyecto.

Las licencias correspondientes a tipografías, iconos y demás recursos externos se mantienen de acuerdo con sus respectivos autores y proveedores.
