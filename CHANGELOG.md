# Changelog

## 2026-03-01

### Resumen
- Reorganización de componentes por dominio y mejora de arquitectura en `home`, `about` y `layout`.
- Implementación de la nueva página `sobre-nosotros` y conexión con navegación principal.
- Limpieza de componentes obsoletos y estandarización de imports mediante barrels (`index.ts`).

### Cambios principales
- Se creó `src/app/sobre-nosotros/page.tsx` con secciones dedicadas de presentación.
- Se movieron y renombraron componentes para mantener naming consistente:
  - `AboutWhyChooseUsSection`
  - `AboutVideoSection`
  - `SiteFooterSection`
- Se actualizaron rutas del header (`INICIO`, `SOBRE NOSOTROS`) con estado activo por pathname.
- Se agregaron exports por dominio:
  - `src/app/components/about/index.ts`
  - `src/app/components/home/index.ts`
  - `src/app/components/layout/index.ts`
- Se documentó convención de nombres en `docs/component-naming.md`.
- Se incorporaron logos de marcas en `public/logos/` para el carrusel de home.

### Limpieza técnica
- Eliminados componentes antiguos y rutas de import profundas no necesarias.
- Reducción de deuda técnica por estructura y nombres ambiguos.

### Referencia de publicación
- Commit publicado en `main`: `f9cd2af`
- Remote: `origin` (`https://github.com/GalletitaDeAnis/espelta-web.git`)
