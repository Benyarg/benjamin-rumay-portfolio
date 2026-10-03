# Guía práctica

## Stack y arquitectura

Next.js App Router genera las páginas; React compone la interfaz, TypeScript valida datos y Tailwind CSS 4 proporciona la base del sistema visual. Inter se sirve localmente con `next/font`; `next/image` optimiza las imágenes. Lucide aporta iconos de interfaz. Los logos de tecnologías se sirven como SVG locales de Devicon; se conserva su licencia.

| Directorio        | Contenido                                                       |
| ----------------- | --------------------------------------------------------------- |
| `src/app/`        | Landing, layout, case studies, 404, metadata, robots y sitemap. |
| `src/components/` | Layout, secciones, proyectos y componentes visuales.            |
| `src/data/`       | Información profesional tipada. Sin fetch a JSON local.         |
| `src/types/`      | Tipos de proyectos, imágenes, experiencia y certificados.       |
| `src/lib/`        | Efectos JavaScript, URLs, serialización y mensajes.             |
| `src/hooks/`      | Bloqueo del scroll mientras un diálogo está abierto.            |
| `public/`         | Foto, logos, capturas, CV y licencias de recursos.              |
| `tests/`          | Tests unitarios y de navegador.                                 |

Las secciones son Server Components. Navegación, galería, formulario y el controlador de efectos se ejecutan en el cliente. No hay tracking, CMS, base de datos ni backend de contacto.

`src/proxy.ts` valida los slugs para resolver una 404 estática también sin JavaScript. Playwright usa un servidor nuevo en el puerto 3100 para verificar siempre el build actual.

## Comandos

| Comando                                   | Uso                                                     |
| ----------------------------------------- | ------------------------------------------------------- |
| `npm ci`                                  | Instalar exactamente el lockfile entregado.             |
| `npm run dev`                             | Desarrollo local.                                       |
| `npm run build` / `npm run start`         | Compilar / servir producción.                           |
| `npm run lint` / `npm run typecheck`      | Calidad de código / TypeScript.                         |
| `npm run test` / `npm run test:watch`     | Vitest y React Testing Library.                         |
| `npm run test:e2e`                        | Playwright; compila y sirve producción automáticamente. |
| `npm run format` / `npm run format:check` | Aplicar / comprobar formato.                            |
| `npm run check`                           | Formato, lint, tipos, tests unitarios y build.          |

Instala Chromium una vez con `npx playwright install chromium`. Usa Node.js 24 (`.nvmrc`). Para añadir o actualizar dependencias utiliza npm y conserva `package-lock.json`.

## Añadir un proyecto

1. Crea `public/projects/mi-proyecto/` con imágenes reales y nombres claros.
2. Añade una entrada en `src/data/projects.ts`, validada con `satisfies Project[]`.
3. Usa un slug único como `mi-proyecto`. Completa nombre, descripción, categoría, tecnologías y galería. Los detalles adicionales son opcionales.
4. Indica `width`, `height`, `alt`, `caption` y `kind` en cada imagen. Usa `screenshot` para una captura real, `mockup` para un montaje y `concept` para una propuesta visual.
5. Añade GitHub/demo únicamente si conoces sus URLs HTTPS. Omite los campos desconocidos.
6. Comprueba `/proyectos/mi-proyecto`, los tests y el build. La card, metadata, ruta y sitemap se generan desde esa misma entrada.

## Modificar mi información

- Perfil, contactos y CV: `src/data/profile.ts` y `public/docs/benjamin-rumay-cv.pdf`.
- Tecnologías actuales: `src/data/technologies.ts`; las de cada proyecto viven en `projects.ts`.
- Experiencia, servicios, formación y certificados: sus archivos en `src/data/`.
- Texto del Hero y de Sobre mí: componentes en `src/components/sections/`.
- Colores, responsive y estilos: `src/app/globals.css`.

El grado continúa como **Bachiller en proceso**, también en el CV corregido. Angular se conserva únicamente como tecnología histórica de Kaphiy. Atrium Academy incluye el logo proporcionado. Los recursos y el stack de VIMOD-Academy están rotulados como antecedente. Completa los detalles actuales de Atrium únicamente con información confirmada.

## Animaciones y diseño original

`src/lib/animations.js` conserva los efectos del `AnimationManager` original; `src/lib/main.js` mantiene el borde del menú y las microinteracciones. `VisualEffects` los monta al navegar y llama a su limpieza al salir. Menú, formulario y galería conservan sus controladores React.

La escritura usa las tres frases originales; las partículas se limitan a 45 y 30 fps en escritorio, y a 22 y 24 fps en móvil. Parallax y tilt actúan con ratón. Los efectos se detienen al ocultar la pestaña, activar movimiento reducido o pulsar el botón de pausa. Sin JavaScript, el contenido permanece visible. Duraciones, colores y estilos están en `globals.css`; las velocidades de escritura y partículas, en `animations.js`.

El recorte vertical del Hero utiliza la foto original y una fuente de mayor resolución para mantener nitidez. El nombre se mantiene en una línea. Las secciones usan 40 px de espacio vertical por lado en móvil y 48 px desde 768 px. Los proyectos vuelven a filas con logo; las capturas se consultan en sus páginas.

## Seguridad y privacidad

No subas `.env`, tokens ni credenciales. `SITE_URL` es público; `NEXT_PUBLIC_*` tampoco sirve para ocultar secretos. El número de WhatsApp es público. El formulario prepara enlaces y no guarda ni envía mensajes desde este sitio.

Los headers se configuran en `next.config.ts`. La CSP bloquea framing, objetos y fuentes remotas, pero permite scripts inline para la hidratación estática de Next.js; no es una política estricta con nonce. Evita HTML sin escapar y revisa de nuevo la política si añades scripts externos. Solo JSON-LD usa `dangerouslySetInnerHTML`, con serialización que escapa `<`.

Revisa Dependabot, Actions y `npm audit` antes de actualizar. ESLint 9 se mantiene por compatibilidad con los plugins del preset estable de Next.js; revisa ese conjunto antes de cambiar su versión mayor.

## Vercel y mantenimiento

Importa el repositorio, selecciona Next.js y Node.js 24. `vercel.json` define `npm ci` y `npm run build`. Mantén el output por defecto. Si cambias de dominio, configura `SITE_URL` antes de compilar. Verifica preview, rutas, imágenes, CV, 404, headers, sitemap y robots; publica después de que los checks pasen. La entrega no realiza un despliegue ni un push.

Periódicamente revisa dependencias, links, datos profesionales, imágenes, tests, build y Lighthouse. LCP, CLS e INP en producción necesitan mediciones con visitas reales; un ensayo local no garantiza esos valores.

## Historial de la entrega

El ZIP contiene el código y `historial-portfolio.bundle`. Para recuperar los commits y la rama de migración, desde el directorio extraído ejecuta:

```bash
git clone -b fix/original-visual-design historial-portfolio.bundle ../portfolio-con-historial
```

`refactor/nextjs` conserva la primera migración; `fix/original-visual-design` contiene la corrección visual. `main` conserva el estado original; `baseline/portfolio-original` y la etiqueta `baseline-pre-nextjs` preservan el ZIP recibido. Revisa el diff de la migración antes de integrarla en tu repositorio. No se ha usado force push.
