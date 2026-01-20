# Portfolio de Antonio Regidor

Sitio personal construido con Vite + React + TypeScript para mostrar CV, habilidades y experiencia. Incluye soporte bilingüe (ES/EN) con detección automática del navegador y selector manual.

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm install` para instalar dependencias.
- `npm run dev` para entorno local.
- `npm run build` para generar versión de producción.
- `npm run preview` para previsualizar el build.
- `npm run lint` para ejecutar ESLint.
- `npm run format` para formatear con Prettier.

## Estructura
- `src/data/profile.ts`: datos editables (perfil, skills, experiencia, proyectos, educación, enlaces).
- `src/data/translations.ts`: textos ES/EN para todas las secciones.
- `src/context/LanguageContext.tsx`: contexto de idioma y detección del navegador.
- `src/App.tsx`: layout y secciones principales.
- `src/styles/global.css`: estilos base y paleta.
- `public/yo_3.jpeg`: foto usada en producción (ruta en `profile.photo`).
- `public/CV-Antonio-Regidor.pdf`: CV servido en producción (ruta en `profile.cvLink`).

## Personalización rápida
1. Actualiza `src/data/profile.ts` con tus enlaces reales de LinkedIn/GitHub y cualquier ajuste de texto.
2. Foto: sustituye `public/yo_3.jpeg` y mantén la ruta `/PersonalPage/yo_3.jpeg` en `profile.ts` (necesaria para GitHub Pages).
3. CV: coloca el PDF en `public/CV-Antonio-Regidor.pdf` y mantén la ruta `/PersonalPage/CV-Antonio-Regidor.pdf` en `profile.ts`.
4. Traducciones: ajusta textos en `src/data/translations.ts`.
5. Estilos: modifica `src/styles/global.css` para colores y layout.

## Despliegue (GitHub Pages)
- El `vite.config.ts` tiene `base: '/PersonalPage/'` para servir en GitHub Pages.
- Workflow: `.github/workflows/deploy.yml` construye y publica en la rama `gh-pages` al hacer push a `main`.
- En GitHub → Settings → Pages: Source = Deploy from a branch, Branch = `gh-pages` / `(root)`.
- Sitio publicado: https://gamellan.github.io/PersonalPage/
