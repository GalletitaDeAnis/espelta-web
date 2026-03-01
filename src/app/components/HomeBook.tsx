"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────────────
   Tokens (paleta equilibrada y sombras)
   ──────────────────────────────────────────────────── */
// Colores suavizados y sombras revisadas para un look más ligero y accesible
const TOKENS = {
  // tonos azulados – ligeros navys para fondos y degradados
  navy900: "#0f2040",    // fondo oscuro suavizado
  navy800: "#19315e",    // tono para degradados en el héroe
  navy600: "#48668e",    // tono medio en botones y acentos
  // dorado más luminoso
  gold:    "#d8b147",
  // neutrales
  paper:   "#ffffff",
  gray950: "#1a293e",    // texto principal sobre blanco
  gray700: "#3b4a60",
  gray600: "#56657c",
  gray500: "#6b7b8f",
  gray100: "#f9fafc",
  gray150: "#f1f4f8",
  gray200: "#eaedf3",
  // sombras ajustadas – más suaves
  shadowCard:      "0 6px 16px rgba(17,32,52,.06)",
  shadowCardHover: "0 8px 22px rgba(17,32,52,.12)",
  shadowHero:      "0 12px 36px rgba(17,32,52,.18)",
};

export type Discipline = "Diseno" | "Motion" | "Filmmaker" | "Fotografia";

type MediaImage = {
  kind: "image";
  src: string;
  alt: string;
  w: number;
  h: number;
  caption?: string;
};

type MediaVideo = {
  kind: "video";
  src: string;
  poster?: string;
  caption?: string;
};

type Media = MediaImage | MediaVideo;

type ExternalLinkType =
  | "github"
  | "youtube"
  | "pinterest"
  | "freepik"
  | "behance"
  | "dribbble"
  | "website"
  | "instagram"
  | "tiktok"
  | "twitter"
  | "linkedin"
  | "vimeo";

type ExternalLink = {
  label: string;
  href: string;
  type?: ExternalLinkType;
};

type Project = {
  id: string;
  title: string;
  discipline: Discipline[];
  year: string;
  client?: string;
  cover: { src: string; w: number; h: number; alt: string };
  media: Media[];
  summary: string;
  role: string[];
  tools?: string[];
  metrics?: { label: string; value: string }[];
  tags?: string[];
  caseUrl?: string;
  links?: ExternalLink[];
};

/* ─────────────────────────────────────────────────────
   DATA (ejemplo)
   ──────────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    id: "san-rafael-branding",
    title: "Grupo San Rafael – Identidad & Social",
    discipline: ["Diseno", "Fotografia", "Filmmaker"],
    year: "2024",
    client: "Grupo San Rafael",
    cover: { src: "/images/logo-sanrafael.webp", w: 1200, h: 800, alt: "Identidad Grupo San Rafael" },
    media: [
      { kind: "image", src: "/images/sanrafael/brandboard.webp", w: 1920, h: 1080, alt: "Brandboard", caption: "Brandboard general" },
      { kind: "video", src: "/videos/sanrafael/reel.mp4", poster: "/videos/sanrafael/poster.jpg", caption: "Reel de campaña (45s)" },
    ],
    summary:
      "Sistema visual y línea de contenidos para campañas 360° con enfoque en resultados (CTR, alcance y NPS).",
    role: ["Dirección creativa", "Diseño", "Foto/Video"],
    tools: ["Photoshop", "Illustrator", "Premiere", "After Effects"],
    metrics: [
      { label: "Piezas", value: "+120" },
      { label: "Crecimiento RRSS", value: "+38%" },
    ],
    tags: ["Branding", "Redes", "Campaña"],
    caseUrl: "/es/portfolio/grupo-san-rafael",
    links: [
      { label: "YouTube – Reel", href: "https://youtube.com/", type: "youtube" },
      { label: "Behance", href: "https://behance.net/", type: "behance" },
      { label: "Website del cliente", href: "https://example.com", type: "website" },
    ],
  },
  {
    id: "tuto-alianza-libre",
    title: "Alianza Libre – Landing & Motion",
    discipline: ["Motion", "Diseno", "Filmmaker"],
    year: "2024",
    client: "Alianza Libre",
    cover: { src: "/images/tuto/hero.webp", w: 1200, h: 800, alt: "Landing Next.js Alianza Libre" },
    media: [
      { kind: "video", src: "/videos/tuto/spot.mp4", poster: "/images/tuto/hero.webp", caption: "Spot 15s" },
      { kind: "image", src: "/images/tuto/landing.webp", w: 1920, h: 1080, alt: "Landing", caption: "Landing – Above the fold" },
    ],
    summary:
      "Desarrollo de landing en Next.js + piezas motion para social. Narrativa clara orientada a conversión.",
    role: ["UX/UI", "Dev Front", "Motion"],
    tools: ["Next.js", "After Effects", "Premiere"],
    metrics: [
      { label: "Tiempo de carga", value: "<1.2s" },
      { label: "CTR", value: "+5.4%" },
    ],
    tags: ["Next.js", "Motion", "Civic"],
    caseUrl: "/es/portfolio/tuto-quiroga-campania",
    links: [
      { label: "GitHub – Landing", href: "https://github.com/", type: "github" },
      { label: "YouTube – Spot", href: "https://youtube.com/", type: "youtube" },
      { label: "Pinterest board", href: "https://pinterest.com/", type: "pinterest" },
    ],
  },
  {
    id: "recargas-mexia-3d",
    title: "Recargas Mexia – 3D & Social",
    discipline: ["Motion"],
    year: "2025",
    client: "Recargas Mexia",
    cover: { src: "/images/recargas-mexia/hero.webp", w: 1200, h: 800, alt: "3D y social" },
    media: [
      { kind: "image", src: "/images/recargas-mexia/mockup1.webp", w: 1920, h: 1080, alt: "Mockup 3D", caption: "Producto 3D – mockup hero" },
      { kind: "video", src: "/videos/recargas/reel.mp4", poster: "/images/recargas-mexia/hero.webp", caption: "Reel social" },
    ],
    summary: "Piezas 3D con renders realistas + adaptación para carruseles y reels.",
    role: ["Modelado 3D", "Render", "Motion"],
    tools: ["Blender", "After Effects"],
    metrics: [{ label: "Piezas", value: "+30" }],
    tags: ["3D", "Render", "Reels"],
    caseUrl: "/es/portfolio/recargas-mexia",
    links: [{ label: "Freepik pack", href: "https://freepik.com/", type: "freepik" }],
  },
];

const DISCIPLINES: { key: Discipline; label: string }[] = [
  { key: "Diseno", label: "Diseño" },
  { key: "Motion", label: "Motion" },
  { key: "Filmmaker", label: "Filmmaker" },
  { key: "Fotografia", label: "Fotografía" },
];

/* ─────────────────────────────────────────────────────
   Helpers UI
   ──────────────────────────────────────────────────── */
function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active ? "true" : "false"}
      className={[
        "px-4 py-2 rounded-full text-sm md:text-[15px] border transition-transform duration-150",
        active
          ? "bg-[#d8b147] text-[#111] border-[#cfac46] shadow-sm"
          : "bg-white text-[#1a293e] border-[#eaedf3] hover:bg-[#f9fafc]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b147] focus-visible:ring-offset-2",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
        style={{ color: TOKENS.gold }}
      >
        {value}
      </div>
      <div className="text-xs md:text-sm mt-1" style={{ color: TOKENS.gray500 }}>
        {label}
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="my-10 md:my-14">
      <div
        className="h-1 rounded-full"
        style={{ background: `linear-gradient(to right, transparent, ${TOKENS.gold}, transparent)` }}
      />
    </div>
  );
}

/* Iconos mínimos inline (sin librerías) */
type ExternalLinkTypeMap = Record<ExternalLinkType, string>;
function Icon({ type }: { type: ExternalLinkType }) {
  const map: ExternalLinkTypeMap = {
    github: "",
    youtube: "▶",
    pinterest: "📌",
    freepik: "★",
    behance: "Bē",
    dribbble: "●",
    website: "↗",
    instagram: "📷",
    tiktok: "♫",
    twitter: "𝕏",
    linkedin: "in",
    vimeo: "V",
  };
  return <span aria-hidden>{map[type] ?? "↗"}</span>;
}

/* ─────────────────────────────────────────────────────
   Página principal
   ──────────────────────────────────────────────────── */
export default function HomeBook() {
  type DisciplineAll = Discipline | "Todos";
  const [active, setActive] = useState<DisciplineAll>("Todos");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null); // modal de proyecto
  const [mediaIndex, setMediaIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // NUEVO: modal de elección "Ver más proyectos"
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  // Scroll suave y sombra en sticky en scroll
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Respeta reduced motion para el hero video
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  // Filtrado
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchDiscipline = active === "Todos" || p.discipline.includes(active as Discipline);
      const text = (p.title + " " + p.summary + " " + (p.tags?.join(" ") ?? "")).toLowerCase();
      const matchQ = query.length === 0 || text.includes(query);
      return matchDiscipline && matchQ;
    });
  }, [active, q]);

  // Proyecto abierto
  const opened = useMemo(
    () => (open ? PROJECTS.find((p) => p.id === open) ?? null : null),
    [open]
  );

  // Reinicia media al abrir
  useEffect(() => {
    if (open) setMediaIndex(0);
  }, [open]);

  // Longitud de media del proyecto
  const openedMediaLen = opened?.media.length ?? 0;

  // Navegación de media
  const next = useCallback(() => {
    if (!openedMediaLen) return;
    setMediaIndex((i) => (i + 1) % openedMediaLen);
  }, [openedMediaLen]);

  const prev = useCallback(() => {
    if (!openedMediaLen) return;
    setMediaIndex((i) => (i - 1 + openedMediaLen) % openedMediaLen);
  }, [openedMediaLen]);

  // Cerrar modal de proyecto con teclado / navegar media
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  // Bloquea scroll del body cuando el modal de proyecto está abierto
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Auto-scroll del thumbnail activo
  const thumbsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const el = thumbsRef.current?.querySelector<HTMLButtonElement>(`[data-idx="${mediaIndex}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [mediaIndex, open]);

  // Cerrar modal de elección con ESC
  useEffect(() => {
    if (!isProjectsModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProjectsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isProjectsModalOpen]);

  return (
    <main className="min-h-screen bg-white text-[#0f172a]">
      {/* Globales suaves (solo para esta page) */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      {/* WRAPPER CENTRAL */}
      <div className="mx-auto w-full max-w-[1320px] px-6">
        {/* HERO */}
        <section className="py-16 md:py-20">
          <div
            className="rounded-3xl shadow-2xl border p-8 md:p-10"
            style={{
              borderColor: "#1e3a5f",
              background: `linear-gradient(180deg, ${TOKENS.navy900} 0%, ${TOKENS.navy800} 100%)`,
              boxShadow: TOKENS.shadowHero,
              color: "rgba(255,255,255,.95)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Book de Diseño, Motion, Filmmaker y Fotografía
                </h1>

                <div
                  className="mt-3 h-1 rounded-full w-3/4"
                  style={{ background: "linear-gradient(to right, #d4af37, #f5d77c)" }}
                />

                <p className="mt-5 md:text-lg max-w-xl text-white/90">
                  Selección curada de proyectos con contexto, proceso y resultados.
                  <br />
                  <span className="text-[#f5d77c] font-medium">
                    Art that moves. Strategy that connects.
                  </span>
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="#grid"
                    className="px-6 py-3 rounded-xl font-semibold transition hover:brightness-105"
                    style={{ background: TOKENS.gold, color: "#111", boxShadow: "0 2px 0 rgba(0,0,0,.25)" }}
                  >
                    Ver trabajos
                  </Link>
                  <Link
                    href="https://www.paolopizarrostudio.studio/es"
                    className="px-6 py-3 rounded-xl font-semibold border transition hover:bg-white/10"
                    style={{ borderColor: "rgba(255,255,255,.35)", color: "#fff" }}
                  >
                    Agendar revisión
                  </Link>
                  <Link
                    href="/es/cv"
                    className="px-6 py-3 rounded-xl font-semibold transition hover:brightness-105"
                    style={{ background: "#f4d06f", color: "#111", boxShadow: "0 2px 0 rgba(0,0,0,.25)" }}
                  >
                    Ver CV
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
                  <Metric label="Clientes atendidos" value="+50" />
                  <Metric label="Piezas entregadas" value="+270" />
                  <Metric label="Años activos" value="6+" />
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/20">
                  <video
                    className="h-full w-full object-cover"
                    src="/videos/reel-general.mp4"
                    poster="/images/reel-poster.jpg"
                    autoPlay={!prefersReduced}
                    muted
                    loop={!prefersReduced}
                    playsInline
                    controls={prefersReduced}
                  />
                </div>
                <p className="text-xs text-white/85 mt-2 text-center">Showreel – corte 45s</p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FILTROS / BUSCADOR */}
        <section
          className="sticky top-0 z-30 backdrop-blur bg-white/90 border-y"
          style={{
            borderColor: TOKENS.gray200,
            boxShadow: showTop ? "0 6px 20px rgba(17,32,52,.08)" : "none",
          }}
        >
          <div className="mx-auto max-w-[1320px] px-0 py-3 flex flex-wrap items-center gap-3">
            <div className="flex gap-2 overflow-x-auto pr-2">
              <Chip active={active === "Todos"} onClick={() => setActive("Todos")}>
                Todos
              </Chip>
              {DISCIPLINES.map((d) => (
                <Chip key={d.key} active={active === d.key} onClick={() => setActive(d.key)}>
                  {d.label}
                </Chip>
              ))}
            </div>

            <div className="ml-auto w-full md:w-80">
              <label className="relative block">
                <span className="sr-only">Buscar</span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Buscar proyecto, tag, cliente…"
                  className="w-full py-2.5 pl-10 pr-3 text-sm outline-none rounded-xl bg-white border shadow-inner"
                  style={{ borderColor: TOKENS.gray200 }}
                  aria-label="Buscar proyecto, tag, cliente"
                  autoComplete="off"
                  onFocus={(e) => e.currentTarget.select()}
                />
                <span
                  aria-hidden
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: TOKENS.gray500 }}
                >
                  🔎
                </span>
              </label>
            </div>
          </div>
        </section>

        {/* GRID de proyectos */}
        <section id="grid" className="py-10 md:py-14">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p: Project) => (
              <article
                key={p.id}
                className="rounded-2xl border bg-white transition will-change-transform hover:-translate-y-[2px]"
                style={{ borderColor: TOKENS.gray200, boxShadow: TOKENS.shadowCardHover }}
              >
                <button
                  onClick={() => setOpen(p.id)}
                  className="text-left w-full focus:outline-none group"
                  aria-label={`Abrir proyecto ${p.title}`}
                >
                  <div className="relative">
                    <Image
                      src={p.cover.src}
                      alt={p.cover.alt}
                      width={p.cover.w}
                      height={p.cover.h}
                      className="h-56 w-full object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold leading-tight text-white drop-shadow">
                          {p.title}
                        </h3>
                        <p className="text-xs text-white/95 mt-1 drop-shadow">
                          {p.year} • {p.client ?? "Proyecto"}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {p.discipline.map((d: Discipline) => (
                          <span
                            key={d}
                            className="bg-[#112034]/90 text-white border border-white/20 px-2 py-1 rounded-full text-[10px]"
                            title={d}
                          >
                            {d === "Diseno" ? "Diseño" : d === "Fotografia" ? "Foto" : d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pt-3 pb-4 group-hover:translate-y-[-1px] transition">
                    <p className="text-sm" style={{ color: TOKENS.gray700 }}>
                      {p.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tags ?? []).slice(0, 4).map((t: string) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-1 rounded border"
                          style={{
                            background: TOKENS.gray100,
                            borderColor: TOKENS.gray200,
                            color: TOKENS.gray600,
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center mt-12" style={{ color: TOKENS.gray500 }}>
              Sin resultados. Prueba con otra búsqueda o categoría.
            </p>
          )}
        </section>

        {/* MODAL de proyecto */}
        {opened && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={opened.title}
            className="fixed inset-0 z-50 grid place-items-center p-4"
            style={{ background: "rgba(0,0,0,.6)", backdropFilter: "blur(2px)" }}
            onClick={() => setOpen(null)}
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
              style={{ color: TOKENS.gray950, border: `1px solid ${TOKENS.gray200}`, boxShadow: TOKENS.shadowHero }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full grid place-items-center"
                style={{
                  background: TOKENS.gray100,
                  border: `1px solid ${TOKENS.gray200}`,
                }}
                aria-label="Cerrar"
              >
                ✕
              </button>

              <div className="p-5 md:p-8">
                <div className="grid lg:grid-cols-[1fr_340px] gap-6">
                  {/* Media principal + controles */}
                  <div>
                    <div
                      className="relative overflow-hidden rounded-xl bg-white"
                      style={{ border: `1px solid ${TOKENS.gray200}` }}
                    >
                      <button
                        onClick={prev}
                        aria-label="Anterior"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full grid place-items-center text-white"
                        style={{ background: "rgba(17,32,52,.75)" }}
                      >
                        ‹
                      </button>
                      <button
                        onClick={next}
                        aria-label="Siguiente"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full grid place-items-center text-white"
                        style={{ background: "rgba(17,32,52,.75)" }}
                      >
                        ›
                      </button>

                      {(() => {
                        const m = opened.media[mediaIndex];
                        if (m.kind === "image") {
                          const img = m as MediaImage;
                          return (
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={img.w}
                              height={img.h}
                              className="w-full h-auto"
                              priority
                            />
                          );
                        } else {
                          const vid = m as MediaVideo;
                          return (
                            <video
                              className="w-full h-auto"
                              src={vid.src}
                              poster={vid.poster}
                              controls
                              autoPlay={!prefersReduced}
                              playsInline
                            />
                          );
                        }
                      })()}
                    </div>

                    {opened.media[mediaIndex]?.caption && (
                      <p className="text-xs mt-2" style={{ color: TOKENS.gray500 }}>
                        {opened.media[mediaIndex]?.caption}
                      </p>
                    )}

                    {/* Thumbnails */}
                    <div ref={thumbsRef} className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label="Miniaturas">
                      {opened.media.map((m, idx) => (
                        <button
                          key={idx}
                          data-idx={idx}
                          onClick={() => setMediaIndex(idx)}
                          className="shrink-0 rounded-lg overflow-hidden focus:outline-none"
                          style={{
                            border: `1px solid ${TOKENS.gray200}`,
                            outline: mediaIndex === idx ? `2px solid ${TOKENS.navy800}` : "none",
                          }}
                          aria-label={`Ir a media ${idx + 1}`}
                          title={m.kind === "image" ? (m as MediaImage).alt : m.caption ?? "Video"}
                        >
                          {m.kind === "image" ? (
                            <Image
                              src={(m as MediaImage).src}
                              alt={(m as MediaImage).alt}
                              width={128}
                              height={80}
                              className="h-20 w-32 object-cover"
                            />
                          ) : (
                            <div className="relative h-20 w-32 bg-[#f7f8fb] grid place-items-center">
                              {(m as MediaVideo).poster ? (
                                <Image
                                  src={(m as MediaVideo).poster as string}
                                  alt="Poster video"
                                  fill
                                  className="object-cover"
                                />
                              ) : null}
                              <span
                                className="relative z-10 text-sm px-2 py-1 rounded"
                                style={{ background: "rgba(17,32,52,.85)", color: "#fff" }}
                              >
                                ▶
                              </span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar info */}
                  <aside>
                    <h3 className="text-xl font-semibold leading-tight">{opened.title}</h3>
                    <p className="text-sm mt-2" style={{ color: TOKENS.gray700 }}>
                      {opened.summary}
                    </p>

                    <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <dt style={{ color: TOKENS.gray500 }}>Año</dt>
                      <dd>{opened.year}</dd>
                      <dt style={{ color: TOKENS.gray500 }}>Cliente</dt>
                      <dd>{opened.client ?? "—"}</dd>
                      <dt style={{ color: TOKENS.gray500 }}>Rol</dt>
                      <dd>{opened.role.join(", ")}</dd>
                      <dt style={{ color: TOKENS.gray500 }}>Herramientas</dt>
                      <dd>{opened.tools?.join(", ") ?? "—"}</dd>
                    </dl>

                    {opened.metrics?.length ? (
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {opened.metrics.map((m) => (
                          <Metric key={m.label} label={m.label} value={m.value} />
                        ))}
                      </div>
                    ) : null}

                    {/* Enlaces externos */}
                    {opened.links?.length ? (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold" style={{ color: TOKENS.gray950 }}>
                          Enlaces
                        </h4>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {opened.links.map((l, i) => (
                            <li key={i}>
                              <a
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full hover:bg-[#eef1f6]"
                                style={{
                                  background: TOKENS.gray100,
                                  border: `1px solid ${TOKENS.gray200}`,
                                  color: TOKENS.gray700,
                                }}
                              >
                                {l.type ? <Icon type={l.type} /> : <span aria-hidden>↗</span>}
                                <span>{l.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="mt-6 flex flex-col gap-2">
                      {opened.caseUrl && (
                        <Link
                          href={opened.caseUrl}
                          className="px-4 py-2 rounded-lg text-center font-semibold hover:brightness-105"
                          style={{ background: TOKENS.navy800, color: "#fff" }}
                        >
                          Ver estudio de caso
                        </Link>
                      )}
                      <Link
                        href="/es/agendar"
                        className="px-4 py-2 rounded-lg text-center font-semibold hover:bg-[#f7f8fb]"
                        style={{ border: `1px solid ${TOKENS.gray200}`, background: "#fff", color: TOKENS.gray700 }}
                      >
                        Solicitar una reunión
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        )}

        <SectionDivider />

        {/* TESTIMONIOS / CTA */}
        <section className="pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Excelente balance entre estética y resultados. Llega con propuestas y las ejecuta a tiempo.", "– Cliente B2B, 2024"],
              ["El reel nos ayudó a destrabar el pitch con un relato claro y visual.", "– Dirección Comercial"],
              ["Organizado, responde rápido y cuida la marca en cada detalle.", "– Dueña de marca retail"],
            ].map(([t, a], i) => (
              <blockquote
                key={i}
                className="rounded-2xl p-6 bg-white"
                style={{ border: `1px solid ${TOKENS.gray200}`, boxShadow: "0 6px 16px rgba(17,32,52,.06)" }}
              >
                <p className="text-sm" style={{ color: TOKENS.gray950 }}>
                  {t}
                </p>
                <footer className="mt-3 text-xs" style={{ color: TOKENS.gray500 }}>
                  {a}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
            <div
              className="rounded-3xl p-8 bg-white"
              style={{ border: `1px solid ${TOKENS.gray200}`, boxShadow: "0 6px 16px rgba(17,32,52,.06)" }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">¿Revisamos tu marca?</h2>
              <p className="mt-3" style={{ color: TOKENS.gray700 }}>
                Agenda una asesoría gratuita: diagnóstico visual + oportunidades rápidas de impacto.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://www.paolopizarrostudio.studio/es"
                  className="px-5 py-3 rounded-xl font-semibold hover:brightness-105"
                  style={{ background: TOKENS.navy800, color: "#fff" }}
                >
                  Reservar asesoría
                </Link>

                {/* AQUÍ CAMBIAMOS: antes era un Link directo, ahora botón que abre modal */}
                <button
                  type="button"
                  onClick={() => setIsProjectsModalOpen(true)}
                  className="px-5 py-3 rounded-xl font-semibold hover:bg-[#f7f8fb]"
                  style={{
                    border: `1px solid ${TOKENS.gray200}`,
                    background: "#fff",
                    color: TOKENS.gray700,
                  }}
                >
                  Ver más proyectos
                </button>
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ border: `1px solid ${TOKENS.gray200}`, background: TOKENS.gray100 }}
            >
              <h3 className="text-lg font-semibold">Stack creativo</h3>
              <ul className="mt-3 text-sm grid grid-cols-2 gap-x-6 gap-y-2" style={{ color: TOKENS.gray700 }}>
                <li>Photoshop · Illustrator</li>
                <li>Premiere · After Effects</li>
                <li>Blender (3D)</li>
                <li>Next.js (web)</li>
                <li>GA4 (KPI)</li>
                <li>Notion · Trello</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="text-center py-8"
          style={{ color: TOKENS.gray500, borderTop: `1px solid ${TOKENS.gray200}`, background: "#fafbfc" }}
        >
          © {new Date().getFullYear()} Paolo Pizarro Studio · Cochabamba, Bolivia ·{" "}
          <Link href="/es/politica-privacidad" className="underline decoration-dotted">
            Privacidad
          </Link>
        </footer>
      </div>

      {/* MODAL de elección de proyectos */}
      {isProjectsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,.45)", backdropFilter: "blur(2px)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Elegir tipo de proyectos"
          onClick={() => setIsProjectsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            style={{ border: `1px solid ${TOKENS.gray200}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsProjectsModalOpen(false)}
              className="absolute right-3 top-3 h-8 w-8 rounded-full grid place-items-center text-sm"
              style={{ background: TOKENS.gray100, border: `1px solid ${TOKENS.gray200}`, color: TOKENS.gray700 }}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              ¿Qué tipo de proyectos quieres ver?
            </h2>
            <p className="text-sm mb-5" style={{ color: TOKENS.gray600 }}>
              Elige si quieres explorar{" "}
              <span className="font-semibold">proyectos de software / programación</span> o{" "}
              <span className="font-semibold">proyectos de diseño creativo</span>.
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com/GalletitaDeAnis"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold hover:bg-gray-100"
                style={{
                  border: `1px solid ${TOKENS.gray200}`,
                  background: "#fff",
                  color: TOKENS.gray700,
                }}
              >
                Ver proyectos de software / programación (GitHub)
              </a>

              <a
                href="https://www.paolopizarrostudio.studio/es/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white hover:brightness-105"
                style={{
                  background: TOKENS.navy800,
                }}
              >
                Ver proyectos de diseño creativo
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsProjectsModalOpen(false)}
              className="mt-4 w-full text-center text-xs hover:text-gray-800"
              style={{ color: TOKENS.gray500 }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Botón “volver arriba” */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver arriba"
        className={[
          "fixed right-5 bottom-5 h-11 w-11 rounded-full grid place-items-center transition",
          showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{
          background: TOKENS.navy800,
          color: "#fff",
          boxShadow: "0 8px 20px rgba(17,32,52,.22)",
        }}
      >
        ↑
      </button>
    </main>
  );
}
