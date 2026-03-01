# Guía de patrones de layout (Home Espelta)

## Objetivo
Estandarizar cómo se construyen secciones visuales en Home para evitar cortes, solapes inconsistentes y degradación de UI cuando fallan recursos externos.

## Principios base

### 1) Continuidad visual de página
- Definir un fondo base global para toda la página antes de diseñar secciones.
- Evitar alternar colores de fondo fuertes entre secciones consecutivas sin transición.
- Cuando una sección cambie de tono, usar gradiente o bloque puente explícito.

### 2) Integración por capas (no por bloques aislados)
- Diseñar Hero + Puente + Sección siguiente como una sola composición.
- Si hay superposición con `margin-top` negativo, la sección intermedia debe incluir transición de fondo.
- Verificar que cada capa tenga una jerarquía de `z-index` controlada y consistente.

### 3) Robustez ante fallos de recursos
- Para imágenes críticas de tarjetas, usar `next/image`.
- Definir fallback local para cuando falle una URL remota.
- Probar la vista con red lenta o bloqueos remotos para validar resiliencia visual.

## Patrón recomendado para Home

### Header fijo
- Mantener una sola fuente de verdad de altura del header.
- Ajustar separación superior del contenido con `padding-top` en el layout raíz.
- En mobile, añadir margen/padding adicional en el Hero para evitar texto pegado al header.

### Hero
- Debe ocupar alto suficiente para contener título + CTA sin colisión con navbar.
- Usar overlay oscuro para legibilidad del texto sobre imagen.
- Garantizar legibilidad en 3 tamaños: móvil bajo, tablet y desktop.

### Puente de categorías
- Puede usar superposición, pero siempre con fondo de transición hacia la sección de destino.
- El puente no debe dejar “franjas” vacías al reducir altura de viewport.
- Los cards del puente deben mantener contraste y sombra consistente con la paleta global.

### Sección de destacados
- Debe compartir tono de fondo con el final del puente.
- Las imágenes deben mantener proporción fija para evitar saltos de layout.
- El estado hover no debe romper alineación ni desbordar el grid.

## Tokens y consistencia visual
- Usar la misma familia de negros/grises de la marca en toda la parte superior de Home.
- Reservar rojo de marca para énfasis (CTA, acento, estado activo), no como fondo dominante.
- Mantener espaciados verticales consistentes entre secciones (ritmo visual).

## Antipatrones a evitar
- Mezclar fondos claros y oscuros sin transición.
- Hacer pruebas solo en desktop alto.
- Usar imágenes remotas en bloques críticos sin fallback.
- Ajustar solapes por “prueba y error” sin revisar `z-index`, padding y fondo en conjunto.

## Checklist de QA (obligatorio)

### Visual
- [ ] No hay franjas de color inesperadas entre secciones.
- [ ] Hero, puente y destacados se perciben como una sola narrativa visual.
- [ ] El contenido del Hero no queda oculto por el header fijo.

### Responsive
- [ ] Mobile (~667px alto): sin cortes ni superposiciones no deseadas.
- [ ] Tablet (~800px alto): jerarquía de contenido estable.
- [ ] Desktop (>=900px alto): equilibrio de blancos y alineación correcta.

### Robustez
- [ ] Si falla una imagen remota, se muestra fallback local sin romper tarjeta.
- [ ] El layout mantiene estabilidad (sin saltos abruptos de altura).

## Flujo de implementación recomendado
1. Definir fondo global y altura de header.
2. Implementar Hero con padding seguro para mobile.
3. Integrar puente con transición real de fondo.
4. Construir grid de destacados con imágenes resilientes.
5. Validar responsive + red lenta + QA checklist.

## Criterio de aceptación
La Home se considera correcta cuando:
- No existen cortes visuales entre Hero, puente y destacados.
- El header fijo no compromete legibilidad en ningún breakpoint principal.
- El fallo de imágenes remotas no degrada la percepción de calidad.
