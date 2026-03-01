# Caso de estudio: error visual del “puente” en Home

## Resumen ejecutivo
Se observó un corte visual entre el Hero y la sección de “Repuestos destacados”.
El síntoma principal fue una franja gris intermedia y sensación de bloques “despegados”, además de tarjetas con imágenes que en algunos casos no cargaban.

## Síntomas observados
- Franja gris visible entre el Hero y la sección siguiente.
- Tarjetas del bloque intermedio (puente) aparentaban flotar sin integrarse con el fondo.
- En algunas tarjetas de repuestos, la imagen no cargaba (quedaban rotas o vacías).

## Causa raíz
La causa fue una combinación de 3 factores:

1. **Inconsistencia de fondos entre secciones**
   - El contenedor principal (`main`) estaba en gris claro (`bg-[#ececec]`),
   - mientras Hero y “Repuestos destacados” estaban en paleta oscura.
   - Resultado: transición abrupta y corte perceptible.

2. **Composición del puente con margen negativo sin transición de fondo**
   - El puente usaba `-mt[...]` para superponerse al Hero,
   - pero no tenía un fondo/gradiente que fusionara visualmente con la sección de abajo.
   - Resultado: se percibía una capa intermedia desconectada.

3. **Dependencia de imágenes remotas sin fallback robusto**
   - Algunas URLs externas podían fallar (bloqueo, timeout, cambios remotos).
   - Resultado: tarjetas con aspecto roto, empeorando la percepción de integración.

## Qué se cambió exactamente

### 1) Fondo global unificado
- Archivo: `src/app/page.tsx`
- Cambio: `bg-[#ececec]` -> `bg-black`
- Efecto: continuidad visual real entre Hero, puente y sección destacada.

### 2) Integración visual del puente
- Archivo: `src/app/components/home/HomeCategoryBridge.tsx`
- Cambio: se aplicó `bg-gradient-to-b from-transparent via-black/80 to-black` y ajuste de `pb`.
- Efecto: transición suave del Hero hacia “Repuestos destacados”, sin corte abrupto.

### 3) Render de imágenes con fallback local
- Archivo: `src/app/components/home/FeaturedCardsSection.tsx`
- Cambios:
  - Se migró de `<img>` a `next/image`.
  - Se agregó estado `failedImages` para detectar error por tarjeta.
  - Si falla la remota, cae a `/imagenHeader1.jpg`.
- Efecto: ninguna tarjeta queda rota aunque falle una URL externa.

### 4) Ajuste fino adicional del Hero (header fijo)
- Archivo: `src/app/components/home/HomeTopSection.tsx`
- Cambio: en mobile se agregó `pt-28 sm:pt-32` y en `md+` vuelve a centrado.
- Efecto: evita que el título/claim quede demasiado pegado al header fijo en pantallas bajas.

## Por qué pasó (lección de arquitectura UI)
Este problema aparece mucho cuando una pantalla se arma por bloques independientes:
- cada bloque “se ve bien solo”,
- pero sin un criterio común de fondo, solapes y transiciones,
- la composición final pierde continuidad.

En resumen: **el bug no era de un componente aislado**, sino de **integración entre capas** (layout + spacing + fondo + cargas remotas).

## Cómo prevenirlo en próximos desarrollos

### Reglas prácticas
1. Definir una “estrategia de fondo” de página antes de estilizar secciones.
2. Si hay `-mt` o superposición, añadir gradiente/fondo puente explícito.
3. Para tarjetas críticas, usar `next/image` + fallback local.
4. Validar en al menos 3 alturas de pantalla (`~667`, `~800`, `~900+`).
5. Revisar composición en “modo red lenta” para detectar fallos de recursos remotos.

### Checklist rápido de QA visual
- [ ] ¿Hay cambios bruscos de color entre secciones adyacentes?
- [ ] ¿El bloque superpuesto mantiene continuidad visual al hacer scroll?
- [ ] ¿Todas las tarjetas mantienen layout aunque falle una imagen?
- [ ] ¿El Hero respeta el header fijo en mobile?
- [ ] ¿Desktop y mobile conservan jerarquía visual consistente?

## Validación realizada
- `npm run typecheck`: OK
- `npm run lint`: OK

## Conclusión
Se resolvió el error atacando la causa de integración (no solo un parche visual puntual). El resultado es una Home más robusta, continua y estable frente a fallos de recursos remotos.
