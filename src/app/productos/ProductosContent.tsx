"use client";

import { useEffect, useMemo, useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { SiteFooterSection } from "../components/layout";
import { ProductCard } from "./ProductCard";
import {
  REXTERNOS_PRODUCTOS,
  getAñosFromCatalog,
  getCategoriasFromCatalog,
  getMarcasFromCatalog,
  getModelosByMarca,
  getTiposRepuestoFromCatalog,
} from "./rexternosCatalog";

const MARCAS = getMarcasFromCatalog();
const AÑOS = getAñosFromCatalog();
const CATEGORIAS = getCategoriasFromCatalog();
const TIPOS_REPUESTO = getTiposRepuestoFromCatalog();

const PRECIOS = REXTERNOS_PRODUCTOS.map((p) => p.precio);
const PRECIO_MIN_DEFAULT = Math.floor(Math.min(...PRECIOS) * 0.9);
const PRECIO_MAX_DEFAULT = Math.ceil(Math.max(...PRECIOS) * 1.25);

export function ProductosContent() {
  const [precioMin, setPrecioMin] = useState(PRECIO_MIN_DEFAULT);
  const [precioMax, setPrecioMax] = useState(PRECIO_MAX_DEFAULT);
  const [marca, setMarca] = useState<string | null>(null);
  const [modelo, setModelo] = useState<string | null>(null);
  const [año, setAño] = useState<string | null>(null);
  const [categoria, setCategoria] = useState<string | null>(null);
  const [repuesto, setRepuesto] = useState<string | null>(null);
  const [ordenar, setOrdenar] = useState("default");

  useEffect(() => {
    if (!marca || !modelo) return;
    const válidos = getModelosByMarca(marca);
    if (!válidos.includes(modelo)) setModelo(null);
  }, [marca, modelo]);

  const toggleFilter = (
    key: "marca" | "modelo" | "año" | "categoria" | "repuesto",
    value: string
  ) => {
    const setters = { marca: setMarca, modelo: setModelo, año: setAño, categoria: setCategoria, repuesto: setRepuesto };
    const current = { marca, modelo, año, categoria, repuesto }[key];
    setters[key](current === value ? null : value);
  };

  const clearFilters = () => {
    setPrecioMin(PRECIO_MIN_DEFAULT);
    setPrecioMax(PRECIO_MAX_DEFAULT);
    setMarca(null);
    setModelo(null);
    setAño(null);
    setCategoria(null);
    setRepuesto(null);
  };

  const activeTags = [marca, modelo, año, categoria, repuesto].filter(Boolean) as string[];

  const añoNum = año ? Number.parseInt(año, 10) : null;

  const productosFiltrados = useMemo(() => {
    return REXTERNOS_PRODUCTOS.filter((p) => {
      if (p.precio < precioMin || p.precio > precioMax) return false;
      if (marca && p.marca !== marca) return false;
      if (modelo && p.modelo !== modelo) return false;
      if (categoria && p.categoria !== categoria) return false;
      if (repuesto && p.tipoRepuesto !== repuesto) return false;
      if (añoNum !== null && !Number.isNaN(añoNum) && !p.years.includes(añoNum)) return false;
      return true;
    });
  }, [precioMin, precioMax, marca, modelo, categoria, repuesto, añoNum]);

  const productosOrdenados = useMemo(() => {
    const list = [...productosFiltrados];
    if (ordenar === "precio-asc") list.sort((a, b) => a.precio - b.precio);
    else if (ordenar === "precio-desc") list.sort((a, b) => b.precio - a.precio);
    return list;
  }, [productosFiltrados, ordenar]);

  const modelosUnicos = getModelosByMarca(marca);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Productos
          </h1>
          <p className="mt-1 text-[14px] text-slate-600">
            Encontrá el repuesto que necesitás para tu vehículo.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] gap-0">
        {/* Sidebar Filtros */}
        <aside className="hidden w-[280px] shrink-0 border-r border-slate-200 bg-white py-6 lg:block">
          <div className="sticky top-[120px] space-y-6 px-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Filtros
              </h2>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Vaciar filtros
              </button>
            </div>

            {/* Precio */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Precio (Bs.)
              </h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={precioMin}
                  onChange={(e) => setPrecioMin(Number(e.target.value) || 0)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
                <span className="flex items-center text-slate-400">-</span>
                <input
                  type="number"
                  value={precioMax}
                  onChange={(e) => setPrecioMax(Number(e.target.value) || 0)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Marca */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Marca
              </h3>
              <div className="space-y-1.5">
                {MARCAS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleFilter("marca", m)}
                    className={`block w-full rounded-lg border px-3 py-2 text-left text-[13px] transition ${
                      marca === m
                        ? "border-primary bg-primary/10 font-medium text-primary"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Modelo */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Modelo
              </h3>
              <div className="space-y-1.5">
                {modelosUnicos.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleFilter("modelo", m)}
                    className={`block w-full rounded-lg border px-3 py-2 text-left text-[13px] transition ${
                      modelo === m
                        ? "border-primary bg-primary/10 font-medium text-primary"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Año */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Año
              </h3>
              <div className="flex max-h-44 flex-wrap gap-1.5 overflow-y-auto pr-1">
                {AÑOS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => toggleFilter("año", a)}
                    className={`rounded-lg border px-2.5 py-1.5 text-[12px] transition ${
                      año === a
                        ? "border-primary bg-primary/10 font-medium text-primary"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Categoría */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Categoría
              </h3>
              <div className="space-y-1.5">
                {CATEGORIAS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleFilter("categoria", c)}
                    className={`block w-full rounded-lg border px-3 py-2 text-left text-[13px] transition ${
                      categoria === c
                        ? "border-primary bg-primary/10 font-medium text-primary"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Datos del repuesto */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Tipo de repuesto
              </h3>
              <div className="space-y-1.5">
                {TIPOS_REPUESTO.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => toggleFilter("repuesto", r)}
                    className={`block w-full rounded-lg border px-3 py-2 text-left text-[13px] transition ${
                      repuesto === r
                        ? "border-primary bg-primary/10 font-medium text-primary"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Contenido principal */}
        <div className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {/* Botón filtros móvil */}
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium"
            >
              <SlidersHorizontal size={18} />
              Filtros
            </button>
          </div>

          {/* Tags activos */}
          {activeTags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {activeTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[13px] font-medium text-primary"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => {
                      if (marca === tag) setMarca(null);
                      else if (modelo === tag) setModelo(null);
                      else if (año === tag) setAño(null);
                      else if (categoria === tag) setCategoria(null);
                      else if (repuesto === tag) setRepuesto(null);
                    }}
                    aria-label={`Quitar ${tag}`}
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Hero imágenes del vehículo */}
          {(marca || modelo) && (
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="flex h-full items-center justify-center text-slate-500">
                  <span className="text-sm font-medium">Foto de Frente</span>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="flex h-full items-center justify-center text-slate-500">
                  <span className="text-sm font-medium">Foto de Atrás</span>
                </div>
              </div>
            </div>
          )}

          {/* Header productos */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Repuestos de vehículos
              </h2>
              <p className="text-[13px] text-slate-600">
                Mostrando {productosOrdenados.length}{" "}
                {productosOrdenados.length === 1 ? "resultado" : "resultados"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="ordenar" className="text-[13px] text-slate-600">
                Ordenar por
              </label>
              <select
                id="ordenar"
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-[13px]"
              >
                <option value="default">Por defecto</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
              </select>
            </div>
          </div>

          {/* Grid de productos */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {productosOrdenados.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        </div>
      </div>

      <SiteFooterSection />
    </main>
  );
}
