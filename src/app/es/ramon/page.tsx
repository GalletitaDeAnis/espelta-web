"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Sparkles,
  MonitorSmartphone,
  QrCode,
  MapPin,
  Phone,
  Globe,
  CheckCircle2,
  Info,
  Printer,
  LayoutGrid,
} from "lucide-react";

/**
 * Panfleto A5 doble cara (anverso/reverso) en TSX
 * - Vista previa en pantalla
 * - Listo para imprimir (A5) con estilos @media print
 * - Incluye opción de guías (corte/sangrado) y placeholder de QR
 *
 * Cómo usar:
 * - Pega este componente en tu app (Next.js/React).
 * - Renderiza <PanfletoRamonDaza />
 * - Ajusta textos, teléfonos, redes y QR.
 */

const Brand = {
  candidate: "RAMÓN DAZA",
  place: "Cochabamba",
  year: "2026",
  slogan: "CLIMA PERFECTO",
  tagline:
    "Orden, servicios que funcionan, oportunidades, seguridad y confianza.",
};

type Block = {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  accent: string; // tailwind class
};

const blocks: Block[] = [
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Clima Ambiental Perfecto",
    bullets: [
      "Basura con economía circular y separación en casa",
      "Agua segura: menos fugas, monitoreo 24/7",
      "PTAR y control de descargas ilegales",
      "Río Rocha: reforestación y corredor verde",
      "Aire limpio: control de emisiones, polvo y ruido",
    ],
    accent: "from-emerald-500/25 to-emerald-500/0",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Clima Institucional Perfecto",
    bullets: [
      "Transparencia total: contratos, obras, presupuesto",
      "Trámites 24/7: municipio sin papeles",
      "Gestión con datos: KPIs y tablero de metas",
      "Meritocracia, ética y control anticorrupción",
      "App municipal: denuncias georreferenciadas",
    ],
    accent: "from-sky-500/25 to-sky-500/0",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Clima Económico, Creativo y Humano",
    bullets: [
      "Empleo: incentivos y ventanilla ágil",
      "Marca \"Hecho en Cocha\" para impulsar producción",
      "Economía Naranja: distrito creativo y festivales",
      "COCHA Valley: incubadora, becas y hackathons",
      "Salud y educación STEM: telemedicina y laboratorios",
    ],
    accent: "from-fuchsia-500/25 to-fuchsia-500/0",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Clima Social Perfecto",
    bullets: [
      "Seguridad inteligente: centro de control y prevención",
      "Iluminación segura y vigilancia tecnológica",
      "Protección integral a mujeres, niñez y juventudes",
      "Eventos y nocturnidad con protocolos y verificación",
      "Gestión de riesgos: incendios, riadas, deslizamientos",
    ],
    accent: "from-amber-500/25 to-amber-500/0",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function A5Sheet({
  children,
  showGuides,
}: {
  children: React.ReactNode;
  showGuides: boolean;
}) {
  return (
    <div
      className={cn(
        "relative bg-white text-zinc-900 shadow-2xl",
        "w-[148mm] h-[210mm]",
        "overflow-hidden",
        showGuides && "outline outline-1 outline-dashed outline-zinc-300"
      )}
    >
      {showGuides && (
        <>
          {/* Sangrado sugerido (3mm) */}
          <div className="pointer-events-none absolute inset-[3mm] border border-dashed border-zinc-200" />
          {/* Marcas de corte simples */}
          <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-zinc-400" />
          <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-zinc-400" />
          <div className="pointer-events-none absolute left-0 bottom-0 h-3 w-3 border-l border-b border-zinc-400" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-3 w-3 border-r border-b border-zinc-400" />
        </>
      )}
      {children}
    </div>
  );
}

function Pill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/80 px-2.5 py-1 text-[10.5px] font-medium tracking-tight text-zinc-700">
      <span className="opacity-80">{icon}</span>
      {label}
    </span>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
          <span className="text-[11.5px] leading-snug text-zinc-800">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function MiniQR({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/75 p-3">
      <div className="grid h-12 w-12 place-items-center rounded-lg border border-zinc-200 bg-zinc-50">
        <QrCode className="h-7 w-7 opacity-70" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold leading-tight text-zinc-900">
          {label}
        </p>
        <p className="text-[10.5px] leading-tight text-zinc-600">
          (Reemplaza este bloque por tu QR real)
        </p>
      </div>
    </div>
  );
}

function FrontFace() {
  return (
    <A5Sheet showGuides={false}>
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_0%_0%,rgba(14,165,233,0.10),transparent_50%),radial-gradient(900px_circle_at_100%_0%,rgba(217,70,239,0.10),transparent_50%),radial-gradient(900px_circle_at_50%_120%,rgba(16,185,129,0.10),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Contenido */}
      <div className="relative flex h-full flex-col p-[12mm]">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[10.5px] font-semibold tracking-[0.18em] text-zinc-500">
              {Brand.place.toUpperCase()} • {Brand.year}
            </p>
            <h1 className="mt-2 text-[30px] font-black leading-[0.95] tracking-tight">
              {Brand.candidate}
            </h1>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5 text-white">
              <span className="text-[11px] font-semibold tracking-[0.14em]">
                {Brand.slogan}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="text-[11px] font-medium opacity-90">
                4 ejes, 1 rumbo
              </span>
            </div>
            <p className="mt-4 max-w-[70mm] text-[12.5px] leading-snug text-zinc-700">
              {Brand.tagline}
            </p>
          </div>

          {/* Sello */}
          <div className="shrink-0">
            <div className="relative grid h-[48mm] w-[48mm] place-items-center rounded-[22px] border border-zinc-200 bg-white/70 shadow-sm">
              <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(120px_circle_at_30%_30%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(120px_circle_at_70%_20%,rgba(217,70,239,0.16),transparent_55%),radial-gradient(140px_circle_at_50%_90%,rgba(16,185,129,0.16),transparent_55%)]" />
              <div className="relative p-4 text-center">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-zinc-600">
                  PROPUESTA
                </p>
                <p className="mt-2 text-[22px] font-black leading-none">2026</p>
                <p className="mt-2 text-[11px] font-medium text-zinc-600">
                  Gestión con resultados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quién es */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white/65 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-white">
              <Info className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-zinc-900">
                ¿Quién es Ramón Daza?
              </p>
              <p className="mt-1 text-[11.5px] leading-snug text-zinc-700">
                Administrador (UCB) + Maestría en Dirección Empresarial (Escuela
                Europea). Especialista en costos y gestión de inversiones. +20
                años liderando proyectos y modernización en sectores
                estratégicos.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill icon={<LayoutGrid className="h-3.5 w-3.5" />} label="Plan + Orden" />
                <Pill icon={<MonitorSmartphone className="h-3.5 w-3.5" />} label="Municipio moderno" />
                <Pill icon={<Sparkles className="h-3.5 w-3.5" />} label="Oportunidades" />
                <Pill icon={<Shield className="h-3.5 w-3.5" />} label="Seguridad" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 ejes en tarjetas compactas */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className={cn(
                "rounded-2xl border border-zinc-200 bg-white/70 p-3 shadow-sm",
                "relative overflow-hidden"
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl",
                  "bg-gradient-to-br",
                  b.accent
                )}
              />
              <div className="relative flex items-start gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-zinc-900 text-white">
                  {b.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[11.5px] font-extrabold leading-tight">
                    {b.title}
                  </p>
                  <p className="mt-1 text-[10.5px] leading-snug text-zinc-700">
                    {b.bullets[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-4">
            <div className="text-[10.5px] text-zinc-600">
              <p className="font-semibold text-zinc-800">Conoce el plan completo</p>
              <p className="mt-0.5">Escanea el QR • Redes • WhatsApp</p>
            </div>
            <MiniQR label="Programa completo + contacto" />
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {Brand.place}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              +591 XXX XXX XX
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              @ramondaza
            </span>
          </div>
        </div>
      </div>
    </A5Sheet>
  );
}

function BackFace() {
  return (
    <A5Sheet showGuides={false}>
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_100%_0%,rgba(14,165,233,0.10),transparent_55%),radial-gradient(900px_circle_at_0%_20%,rgba(245,158,11,0.10),transparent_55%),radial-gradient(900px_circle_at_50%_120%,rgba(217,70,239,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative flex h-full flex-col p-[12mm]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.18em] text-zinc-500">
              PROPUESTAS RESUMIDAS
            </p>
            <h2 className="mt-2 text-[22px] font-black leading-none tracking-tight">
              {Brand.slogan}: 4 climas, 1 ciudad que funciona
            </h2>
            <p className="mt-2 max-w-[92mm] text-[11.5px] leading-snug text-zinc-700">
              Un municipio que facilita, planifica, ejecuta y mide resultados,
              con el ciudadano al centro.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl border border-zinc-200 bg-white/75 px-3 py-2">
            <p className="text-[10px] font-semibold tracking-[0.14em] text-zinc-600">
              {Brand.candidate}
            </p>
            <p className="mt-1 text-[11.5px] font-extrabold text-zinc-900">
              {Brand.place} {Brand.year}
            </p>
          </div>
        </div>

        {/* Grid de propuestas */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className={cn(
                "relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/75 p-4 shadow-sm"
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl",
                  "bg-gradient-to-br",
                  b.accent
                )}
              />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-white">
                    {b.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-extrabold leading-tight">
                      {b.title}
                    </p>
                    <p className="mt-0.5 text-[10.5px] font-medium text-zinc-600">
                      5 medidas concretas
                    </p>
                  </div>
                </div>
                <BulletList items={b.bullets} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <div className="grid grid-cols-3 gap-3">
            <MiniQR label="Plan completo" />
            <div className="col-span-2 rounded-2xl border border-zinc-200 bg-white/75 p-4">
              <p className="text-[12px] font-extrabold text-zinc-900">
                Súmate al Clima Perfecto
              </p>
              <p className="mt-1 text-[11.5px] leading-snug text-zinc-700">
                Participa, denuncia y propone desde tu distrito. Un gobierno
                municipal cercano, con respuesta rápida.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10.5px] text-zinc-700">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1">
                  <Phone className="h-3.5 w-3.5" /> +591 XXX XXX XX
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1">
                  <Globe className="h-3.5 w-3.5" /> @ramondaza
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1">
                  <MapPin className="h-3.5 w-3.5" /> Cochabamba
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[9.5px] leading-snug text-zinc-500">
            Nota: Este diseño es una maqueta. Reemplaza el QR, teléfono y redes
            con datos oficiales antes de imprimir.
          </p>
        </div>
      </div>
    </A5Sheet>
  );
}

export default function PanfletoRamonDaza() {
  const [side, setSide] = useState<"front" | "back" | "both">("both");
  const [guides, setGuides] = useState(false);

  const preview = useMemo(() => {
    const faces = {
      front: <FrontFace />,
      back: <BackFace />,
    };
    if (side === "front") return [faces.front];
    if (side === "back") return [faces.back];
    return [faces.front, faces.back];
  }, [side]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Controles (no se imprimen) */}
      <div className="mx-auto max-w-6xl px-4 py-6 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-black tracking-tight">
              Panfleto A5 doble cara – {Brand.candidate}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Vista previa y exportación por impresión (Ctrl/Cmd + P).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={side === "both" ? "default" : "secondary"}
              onClick={() => setSide("both")}
            >
              Ver ambas
            </Button>
            <Button
              variant={side === "front" ? "default" : "secondary"}
              onClick={() => setSide("front")}
            >
              Anverso
            </Button>
            <Button
              variant={side === "back" ? "default" : "secondary"}
              onClick={() => setSide("back")}
            >
              Reverso
            </Button>
            <Button
              variant={guides ? "default" : "secondary"}
              onClick={() => setGuides((v) => !v)}
            >
              <LayoutGrid className="mr-2 h-4 w-4" /> Guías
            </Button>
            <Button onClick={() => window.print()}>
              <Printer className="mr-2 h-4 w-4" /> Imprimir
            </Button>
          </div>
        </div>
      </div>

      {/* Lienzo */}
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-2">
          {preview.map((face, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="mb-3 text-xs text-white/70">
                  {idx === 0 && (side === "back" ? "Reverso" : "Anverso")}
                  {idx === 1 && "Reverso"}
                </div>
                <div
                  className={cn(
                    "mx-auto w-fit",
                    guides && "[&>div]:outline [&>div]:outline-1 [&>div]:outline-dashed [&>div]:outline-white/20"
                  )}
                >
                  {/* Re-render with guides */}
                  {guides ? (
                    <A5Sheet showGuides={true}>
                      <div className="absolute inset-0" />
                      {/* We mount the face again by calling the component directly */}
                      {idx === 0
                        ? side === "back"
                          ? BackFace()
                          : FrontFace()
                        : BackFace()}
                    </A5Sheet>
                  ) : (
                    face
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Estilos de impresión */}
      <style>{`
        @page { size: A5; margin: 0; }
        @media print {
          html, body { background: white !important; }
          .print\\:hidden { display: none !important; }
          /* Si estás imprimiendo doble cara, imprime página 1 = anverso y página 2 = reverso.
             En el diálogo de impresión: escala 100%, sin márgenes, y "voltear por borde corto" (short-edge) */
          .shadow-2xl { box-shadow: none !important; }
          .bg-zinc-950 { background: white !important; }
          .text-white { color: #111827 !important; }
        }
      `}</style>
    </div>
  );
}
