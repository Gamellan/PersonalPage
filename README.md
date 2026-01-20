# Portfolio de Antonio Regidor

Sitio personal construido con Vite + React + TypeScript para mostrar CV, habilidades y experiencia.

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
- `src/App.tsx`: layout y secciones principales.
- `src/styles/global.css`: estilos base y paleta.
- `public/profile-placeholder.svg`: imagen temporal; reemplaza por tu foto real.
- `public/CV-Antonio-Regidor.pdf`: coloca aquí el CV actualizado y mantén el nombre o ajusta `cvLink` en `profile.ts`.

## Personalización rápida
1. Actualiza `src/data/profile.ts` con tus enlaces reales de LinkedIn/GitHub y cualquier ajuste de texto.
2. Sustituye `public/profile-placeholder.svg` por tu fotografía.
3. Copia tu CV actualizado a `public/CV-Antonio-Regidor.pdf` o cambia la ruta en `profile.ts`.
4. Ajusta colores/estilos en `src/styles/global.css` si quieres otra estética.

## Despliegue
Construye con `npm run build` y sirve el contenido de `dist/` en tu hosting preferido.
