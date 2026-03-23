import Image from "next/image";
import Link from "next/link";
import type { ProductoCatalogo } from "./rexternosCatalog";

export function ProductCard({ producto }: { producto: ProductoCatalogo }) {
  const precioFormateado = producto.precio.toLocaleString("es-BO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const query = new URLSearchParams({
    producto: producto.nombre,
    ref: producto.id,
  }).toString();

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-primary/40 hover:shadow-lg">
      <Link href={`/contacto?${query}`} className="block">
        <div className="relative aspect-square bg-slate-50">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {producto.marca} · {producto.modelo} · {producto.añoLabel}
          </p>
          <h3 className="mt-1 line-clamp-2 text-[14px] font-semibold text-slate-900 group-hover:text-primary">
            {producto.nombre}
          </h3>
          <p className="mt-1 text-[11px] font-medium text-slate-500">
            {producto.categoria} · {producto.tipoRepuesto}
          </p>
          <p className="mt-2 text-lg font-bold text-primary">
            Bs. {precioFormateado}
          </p>
          <span className="mt-3 inline-block text-[12px] font-medium text-primary">
            Cotizar →
          </span>
        </div>
      </Link>
    </article>
  );
}
