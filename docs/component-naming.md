# Guía de naming y organización de componentes

## Objetivo
Mantener una estructura clara, escalable y consistente para reducir deuda técnica y facilitar cambios futuros.

## Estructura de carpetas
- `src/app/components/home`: componentes exclusivos de la página de inicio.
- `src/app/components/about`: componentes exclusivos de `sobre-nosotros`.
- `src/app/components/layout`: componentes compartidos de estructura global (header, footer, wrappers).
- `src/components/ui`: componentes base reutilizables de interfaz.

## Convención de nombres
- Componentes de Home: prefijo `Home`.
  - Ejemplo: `HomeTopSection`, `HomeFaqSection`.
- Componentes de About: prefijo `About`.
  - Ejemplo: `AboutVideoSection`, `AboutWhyChooseUsSection`.
- Componentes globales de layout: prefijo `Site` o nombre semántico global.
  - Ejemplo: `SiteFooterSection`, `GlobalHeader`.
- Archivos y nombre del componente deben coincidir en `PascalCase`.

## Reglas de uso
- Si un componente solo vive en una página, ubicarlo en su dominio (`home`, `about`, etc.).
- Si se reutiliza en varias páginas, moverlo a `layout` o `ui` según su rol.
- Evitar prefijos de página en componentes globales.
- Evitar duplicar componentes con mismo propósito en distintas carpetas.

## Barrels (`index.ts`)
- Cada carpeta de dominio debe tener su `index.ts` exportando sus componentes.
- Importar desde el barrel y no desde rutas profundas.
  - ✅ `import { HomeTopSection } from "./components/home"`
  - ❌ `import { HomeTopSection } from "./components/home/HomeTopSection"`

## Checklist antes de crear un componente nuevo
1. ¿Es exclusivo de una página o compartido?
2. ¿Su nombre refleja claramente su dominio?
3. ¿Ya existe uno similar que puedas reutilizar?
4. ¿Se exportó en el `index.ts` correcto?
5. ¿Se mantiene el mismo estilo visual del proyecto?
