import type { Metadata } from "next";
import { AboutVideoSection, AboutWhyChooseUsSection } from "../components/about";
import { SiteFooterSection } from "../components/layout";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Espelta: repuestos compatibles, atención cercana y soluciones pensadas para el día a día de tu vehículo.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Hero */}
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
              Sobre Nosotros
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Cuidamos tu vehículo
              <span className="block text-sky-600">como si fuera nuestro</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              En Espelta creemos que un buen repuesto no es solo una pieza más. Es la tranquilidad de saber que tu auto
              responde cuando lo necesitás. Por eso te acompañamos con asesoría honesta, variedad de opciones y precios
              que respetan tu presupuesto.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-slate-800 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Seguridad
                </p>
                <p className="mt-2 text-[13px] text-slate-600">
                  Productos que priorizan la seguridad del vehículo y de quienes viajan en él.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Rendimiento
                </p>
                <p className="mt-2 text-[13px] text-slate-600">
                  Repuestos de alta calidad pensados para un desempeño óptimo y duradero.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Acompañamiento
                </p>
                <p className="mt-2 text-[13px] text-slate-600">
                  Asistencia técnica cercana para ayudarte a elegir la mejor opción para cada caso.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-[32px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-[1px] shadow-[0_18px_45px_rgba(15,23,42,0.15)]">
              <div className="relative h-full w-full rounded-[30px] bg-white p-6">
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.14),_transparent_55%)] opacity-90" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Espelta
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900">
                        Compromiso con cada repuesto
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] text-slate-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                      Stock en constante actualización
                    </div>
                  </div>
                  <div className="grid gap-4 text-xs text-slate-700 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Para quién trabajamos
                      </p>
                      <p className="mt-2 text-[13px] text-slate-800">
                        Trabajamos con personas, talleres y empresas que quieren soluciones claras, sin vueltas, y un
                        proveedor al que puedan llamar cuando surja algo inesperado.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Cómo lo hacemos
                      </p>
                      <p className="mt-2 text-[13px] text-slate-800">
                        Escuchamos cada caso, comparamos alternativas y buscamos el mejor equilibrio entre calidad,
                        seguridad y costo, sin promesas vacías ni soluciones a medias.
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Nos importa que entiendas qué estás comprando y por qué te lo recomendamos. La confianza se construye
                    pieza a pieza, conversación a conversación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Objetivos */}
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px] space-y-10">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
              Nuestra esencia
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Lo que nos mueve como equipo y como empresa
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Detrás de cada pedido, hay una historia: una urgencia, un proyecto, un trabajo en marcha. Nuestra misión,
              visión y objetivos nacen de escuchar esas historias y buscar la forma más simple y honesta de ayudar.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-[1px] shadow-sm">
                <div className="rounded-[22px] bg-white p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-700">
                    Misión
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-700 sm:text-[15.5px]">
                    Nuestra misión es estar cerca de quienes cuidan vehículos todos los días, ofreciendo repuestos
                    compatibles y confiables, explicados en un lenguaje simple, y con opciones que cuiden tanto la
                    seguridad como el bolsillo.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-[1px] shadow-sm">
                <div className="rounded-[22px] bg-white p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-700">
                    Visión
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-700 sm:text-[15.5px]">
                    Queremos que, cuando alguien piense en repuestos compatibles, piense en Espelta como ese contacto
                    de confianza al que se recurre sin dudar, sin importar si está en una gran ciudad o en una zona más
                    alejada.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <header>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Objetivos estratégicos
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Lo que buscamos conseguir junto a nuestros clientes
                </h3>
              </header>
              <ul className="mt-2 space-y-4 text-[14px] text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  <div>
                    <p className="font-semibold text-slate-900">Satisfacción del cliente</p>
                    <p className="mt-1 text-[13.5px] text-slate-600">
                      Que cada persona sienta que fue bien atendida, que entendió sus opciones y que el repuesto que se
                      llevó realmente le sirvió. Si hay un problema, lo hablamos y buscamos una salida juntos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  <div>
                    <p className="font-semibold text-slate-900">Diversidad de stock</p>
                    <p className="mt-1 text-[13.5px] text-slate-600">
                      Tener a mano distintas marcas y alternativas, para que puedas elegir con libertad según lo que tu
                      mecánico recomienda, lo que el vehículo necesita y lo que tu bolsillo permite en ese momento.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  <div>
                    <p className="font-semibold text-slate-900">Posicionamiento</p>
                    <p className="mt-1 text-[13.5px] text-slate-600">
                      Ganarnos un lugar en el mercado, no solo por el nombre, sino porque quienes ya nos probaron nos
                      recomiendan y sienten que en Espelta siempre alguien los atiende y se hace cargo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AboutWhyChooseUsSection />
      <AboutVideoSection />
      <SiteFooterSection />
    </main>
  );
}
