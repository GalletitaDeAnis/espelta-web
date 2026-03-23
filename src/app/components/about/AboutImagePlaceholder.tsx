interface AboutImagePlaceholderProps {
  /** Ruta de la imagen en /public. Ej: /images/sobreNosotros/hero.jpg */
  src?: string | null;
  alt: string;
  /** Dimensiones para crear la imagen. Ej: "900 × 675 px" */
  dimensions: string;
  className?: string;
}

export function AboutImagePlaceholder({
  src,
  alt,
  dimensions,
  className = "",
}: AboutImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`absolute inset-0 overflow-hidden rounded-xl bg-slate-100 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 text-slate-500 ${className}`}
      aria-label={`Espacio para imagen: ${dimensions}`}
    >
      <span className="text-[11px] font-medium uppercase tracking-wider">
        {dimensions}
      </span>
      <span className="mt-1 text-[10px] opacity-75">Imagen de la empresa</span>
    </div>
  );
}
