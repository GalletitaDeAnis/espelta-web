/**
 * Catálogo sincronizado con public/images/items/rexternos
 * Añadir aquí nuevas entradas al incorporar imágenes en esa carpeta.
 */

export type ProductoCatalogo = {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  marca: string;
  modelo: string;
  añoLabel: string;
  categoria: string;
  tipoRepuesto: string;
  /** Años en los que aplica el repuesto (para filtro por año) */
  years: readonly number[];
};

function expandYearRange(from: number, to: number): number[] {
  const out: number[] = [];
  for (let y = from; y <= to; y += 1) out.push(y);
  return out;
}

/** Productos = archivos en rexternos (metadatos según nombre de archivo) */
export const REXTERNOS_PRODUCTOS: readonly ProductoCatalogo[] = [
  {
    id: "nissan-note-2013-stop",
    nombre: "Luz de stop Nissan Note 2013",
    precio: 380,
    imagen: "/images/items/rexternos/Nissan_Note_2013_STOP.webp",
    marca: "Nissan",
    modelo: "Note",
    añoLabel: "2013",
    categoria: "Iluminación",
    tipoRepuesto: "Luz de stop",
    years: expandYearRange(2013, 2013),
  },
  {
    id: "toyota-corolla-2017-stop",
    nombre: "Luz de stop Toyota Corolla 2017",
    precio: 420,
    imagen: "/images/items/rexternos/Toyota_Corolla_2017_STOP.webp",
    marca: "Toyota",
    modelo: "Corolla",
    añoLabel: "2017",
    categoria: "Iluminación",
    tipoRepuesto: "Luz de stop",
    years: expandYearRange(2017, 2017),
  },
  {
    id: "toyota-hiace-2001-stop",
    nombre: "Luz de stop Toyota Hiace 2001",
    precio: 450,
    imagen: "/images/items/rexternos/Toyota_Hiace_2001_STOP.webp",
    marca: "Toyota",
    modelo: "Hiace",
    añoLabel: "2001",
    categoria: "Iluminación",
    tipoRepuesto: "Luz de stop",
    years: expandYearRange(2001, 2001),
  },
  {
    id: "suzuki-jimmy-farol",
    nombre: "Farol delantero Suzuki Jimmy 1995-2018",
    precio: 1180,
    imagen: "/images/items/rexternos/Suzuki_Jimmy_1995-2018_FAROL.webp",
    marca: "Suzuki",
    modelo: "Jimmy",
    añoLabel: "1995-2018",
    categoria: "Iluminación",
    tipoRepuesto: "Farol",
    years: expandYearRange(1995, 2018),
  },
  {
    id: "subaru-impreza-farol",
    nombre: "Farol delantero Subaru Impreza 2008-2011",
    precio: 1350,
    imagen: "/images/items/rexternos/Subaru_Impreza_2008-2011_FAROL.webp",
    marca: "Subaru",
    modelo: "Impreza",
    añoLabel: "2008-2011",
    categoria: "Iluminación",
    tipoRepuesto: "Farol",
    years: expandYearRange(2008, 2011),
  },
  {
    id: "toyota-rav4-stop",
    nombre: "Luz de stop Toyota RAV4 2014-2018",
    precio: 520,
    imagen: "/images/items/rexternos/Toyota_Raner_2014-2018_STOP.webp",
    marca: "Toyota",
    modelo: "RAV4",
    añoLabel: "2014-2018",
    categoria: "Iluminación",
    tipoRepuesto: "Luz de stop",
    years: expandYearRange(2014, 2018),
  },
  {
    id: "nissan-altima-stop",
    nombre: "Luz de stop Nissan Altima 2013-2015",
    precio: 490,
    imagen: "/images/items/rexternos/Nissan_Altima_2013-2015_STOP.webp",
    marca: "Nissan",
    modelo: "Altima",
    añoLabel: "2013-2015",
    categoria: "Iluminación",
    tipoRepuesto: "Luz de stop",
    years: expandYearRange(2013, 2015),
  },
  {
    id: "suzuki-vitara-farol",
    nombre: "Farol delantero Suzuki Vitara 2005",
    precio: 980,
    imagen: "/images/items/rexternos/Suzuki_Vitara_2005_FAROL.webp",
    marca: "Suzuki",
    modelo: "Vitara",
    añoLabel: "2005",
    categoria: "Iluminación",
    tipoRepuesto: "Farol",
    years: expandYearRange(2005, 2005),
  },
  {
    id: "toyota-noah-retrovisor",
    nombre: "Retrovisor exterior Toyota Noah 1996-1998",
    precio: 680,
    imagen: "/images/items/rexternos/Toyota_Noah_1996-1998_RETROVISOR.webp",
    marca: "Toyota",
    modelo: "Noah",
    añoLabel: "1996-1998",
    categoria: "Carrocería",
    tipoRepuesto: "Retrovisor",
    years: expandYearRange(1996, 1998),
  },
] as const;

export function getMarcasFromCatalog(): string[] {
  return [...new Set(REXTERNOS_PRODUCTOS.map((p) => p.marca))].sort();
}

export function getModelosByMarca(marca: string | null): string[] {
  const list = marca
    ? REXTERNOS_PRODUCTOS.filter((p) => p.marca === marca)
    : REXTERNOS_PRODUCTOS;
  return [...new Set(list.map((p) => p.modelo))].sort();
}

export function getAñosFromCatalog(): string[] {
  const set = new Set<number>();
  REXTERNOS_PRODUCTOS.forEach((p) => p.years.forEach((y) => set.add(y)));
  return [...set].sort((a, b) => b - a).map(String);
}

export function getCategoriasFromCatalog(): string[] {
  return [...new Set(REXTERNOS_PRODUCTOS.map((p) => p.categoria))].sort();
}

export function getTiposRepuestoFromCatalog(): string[] {
  return [...new Set(REXTERNOS_PRODUCTOS.map((p) => p.tipoRepuesto))].sort();
}
