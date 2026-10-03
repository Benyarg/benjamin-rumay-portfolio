# Validación de la entrega

Corrección visual revisada el 01/10/2026 (America/Bogota) con Node.js 24.19.0, producción de Next.js y Chromium. Referencia: https://benjaminrumay-portafolio.vercel.app/ y los archivos HTML, CSS y JavaScript originales.

| Comprobación                          | Resultado                                                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Instalación desde lockfile (`npm ci`) | Correcta                                                                                                                      |
| Prettier, ESLint y TypeScript strict  | Correctos                                                                                                                     |
| Vitest / React Testing Library        | 11 pruebas correctas                                                                                                          |
| Playwright                            | 19 pruebas correctas, sin reintentos ni pruebas omitidas                                                                      |
| Build                                 | Landing, cinco proyectos, robots, sitemap y 404 generados                                                                     |
| Dependencias (`npm audit`)            | 0 vulnerabilidades conocidas                                                                                                  |
| Axe                                   | Sin incidencias detectadas en las páginas y diálogos comprobados; incluye concordancia entre texto visible y nombre accesible |

## Responsive

La landing y el case study de IA Cognitiva se verificaron en **360, 390, 430, 768, 1024, 1280, 1366, 1440 y 1920 px**. Sin scroll horizontal, elementos recortados, imágenes rotas ni solapamientos en la cabecera. También se revisaron las otras cuatro páginas de proyecto en móvil.

Se comprobó navegación por teclado, foco del skip link, apertura/cierre de menú y galería, Escape, flechas, retorno del foco, validación del mensaje, enlaces preparados de WhatsApp, contenido sin JavaScript y 404 con código HTTP real. El contacto no envió mensajes durante las pruebas.

La foto original se conserva. IA Cognitiva utiliza las siete capturas adjuntas, con su tipo y alcance señalados. La formación y el CV muestran **Bachiller en proceso**. Angular aparece solo en Kaphiy, y Next.js está en el stack personal.

## Diseño y movimiento

- Inter local, pesos ligeros, paleta oscura y azul, retrato vertical y composición del portafolio original.
- Nombre del Hero en una línea en los nueve anchos comprobados; secciones con 40 px de espacio por lado en móvil y 48 px desde 768 px.
- Proyectos en filas con logo, tecnologías con sus logos locales y Atrium Academy con el archivo proporcionado.
- `animations.js` y `main.js` recuperan escritura, partículas conectadas, entrada al hacer scroll, parallax, brillo, inclinación de tarjetas y microinteracciones de botones, adaptados al ciclo de vida de React.
- Comprobados los cambios de fotograma del canvas en escritorio y móvil, hover, pausa, movimiento reducido y navegación entre rutas sin duplicar canvas ni controles.
- La franja de brillo anima `transform` para evitar desplazamientos de layout. Las fechas de experiencia conservan su tamaño compacto.
- Foto, logo de Atrium y siete capturas de IA verificados byte a byte frente a los archivos originales.

## Rendimiento de laboratorio

Lighthouse 13.5.0 sobre el servidor local de producción; móvil de 412 × 823 px, red lenta y CPU 4× simuladas. Última medición:

| Página       | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP   | CLS | TBT   |
| ------------ | ----------- | ------------- | ---------------- | --- | ----- | --- | ----- |
| Landing      | 94          | 100           | 100              | 100 | 3,1 s | 0   | 50 ms |
| IA Cognitiva | 98          | 100           | 100              | 100 | 2,4 s | 0   | 40 ms |

Los valores varían con servidor, dispositivo y red. El LCP de la landing sigue siendo el punto principal para vigilar tras el despliegue. **INP no tiene medición de campo todavía**: debe evaluarse con visitas reales; TBT no lo sustituye. Los ensayos de interacción no equivalen a datos de producción.

## Estado para publicar

Incluye headers de seguridad, canonical por proyecto, JSON-LD serializado, robots, sitemap, GitHub Actions, Dependabot y configuración de Vercel. La CSP permite inline para el bootstrap estático de Next.js; esa limitación se describe en la guía.

La entrega no realizó push, merge ni despliegue. El workflow se ejecutará en GitHub al subir la rama. Los enlaces externos conservan las URLs aportadas; las pruebas validaron su formato y atributos, sin garantizar la disponibilidad de servicios ajenos.

Atrium Academy incluye su identidad y logo actuales. El material de VIMOD-Academy está claramente presentado como antecedente; no se atribuyen funciones ni tecnologías históricas a la versión actual sin información confirmada.

Vistas de la entrega: [escritorio](capturas/desktop.png) y [móvil](capturas/mobile.png), capturadas con movimiento reducido para una comparación estable. Para instalar y mantener el proyecto, consulta [GUIA_PROYECTO.md](GUIA_PROYECTO.md).
