# Flujo de ramas recomendado (Espelta)

## Objetivo
Trabajar cambios en ramas seguras y desplegar a producción solo cuando esté validado.

## Ramas
- `main`: producción (estable).
- `develop`: integración de trabajo diario.
- `feature/*`: nuevas funcionalidades.
- `fix/*`: correcciones.
- `hotfix/*`: corrección urgente desde `main`.

## Flujo diario (feature)
1. Actualizar `develop`:

```bash
git checkout develop
git pull origin develop
```

2. Crear rama de trabajo:

```bash
git checkout -b feature/nombre-corto
```

3. Trabajar y commitear:

```bash
git add -A
git commit -m "feat: descripcion breve"
```

4. Subir rama:

```bash
git push -u origin feature/nombre-corto
```

5. Abrir PR: `feature/nombre-corto` -> `develop`.

6. Después de aprobado y mergeado, borrar rama:

```bash
git branch -d feature/nombre-corto
git push origin --delete feature/nombre-corto
```

## Flujo de release a producción
1. Asegurar que `develop` está estable y validado.
2. Abrir PR: `develop` -> `main`.
3. Ejecutar validaciones (`npm run typecheck`, `npm run lint`, `npm run build`).
4. Merge a `main` (esto dispara deploy productivo).

## Flujo de fix normal
- Crear desde `develop`: `fix/nombre-corto`.
- PR a `develop`.
- Entra a `main` en la siguiente release.

## Flujo de hotfix urgente
1. Crear rama desde `main`:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/nombre-corto
```

2. Corregir, commit, push y PR a `main`.
3. Después, abrir PR de `main` -> `develop` para sincronizar.

## Convenciones de commit (sugerido)
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `refactor:` mejora interna sin cambio funcional
- `docs:` documentación
- `chore:` tareas de mantenimiento

## Reglas prácticas
- No trabajar directo en `main`.
- No mergear con checks en rojo.
- PRs pequeños y claros.
- Mantener `CHANGELOG.md` al día en cambios relevantes.
