// src/app/components/NoSaveImg.tsx
"use client";
import * as React from "react";

type Aspect =
  | `${number}/${number}`
  | "auto";

export type NoSaveImgProps = {
  /** URL de la imagen */
  src: string;
  /** Texto alternativo para accesibilidad (se usa en aria-label) */
  alt?: string;
  /** Clase extra opcional */
  className?: string;
  /** Estilos inline adicionales (se fusionan) */
  style?: React.CSSProperties;
  /** Relación de aspecto CSS. Ej: "16/9", "1/1", "auto" */
  ratio?: Aspect;
};

/**
 * Renderiza la imagen como background dentro de un <div>.
 * Incluye overlay para capturar clic derecho y eventos de arrastre.
 * - Sin inline `WebkitUserDrag` (se maneja por clase CSS `.nodrag`).
 * - Tipado estricto, sin `any`/`ts-ignore`.
 * - Accesible: role="img" + aria-label con `alt`.
 */
export default function NoSaveImg({
  src,
  alt,
  className,
  style,
  ratio = "16/9",
}: NoSaveImgProps) {
  const label = alt ?? "";

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    aspectRatio: ratio === "auto" ? undefined : ratio,
    width: "100%",
    height: ratio === "auto" ? "100%" : "auto",
    userSelect: "none",
    WebkitUserSelect: "none",
    pointerEvents: "none",
    // NOTA: no poner WebkitUserDrag aquí; se hace por clase CSS `.nodrag`
  };

  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`relative overflow-hidden nodrag noselect ${className ?? ""}`}
      style={style}
      onContextMenu={onContextMenu}
      onDragStart={onDragStart}
      draggable={false}
    >
      {/* Capa visual con la imagen de fondo */}
      <div
        aria-label={label}
        role="img"
        className="w-full"
        style={backgroundStyle}
      />

      {/* Overlay capturador (bloquea interacción directa) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 img-guard"
      />
    </div>
  );
}
