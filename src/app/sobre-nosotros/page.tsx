import type { Metadata } from "next";
import {
  AboutImagePlaceholder,
  AboutVideoSection,
  AboutWhyChooseUsSection,
} from "../components/about";
import { SiteFooterSection } from "../components/layout";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Espelta: repuestos compatibles, atención cercana y soluciones pensadas para el día a día de tu vehículo.",
};

/* Imágenes: reemplaza null por la ruta en /public para mostrar tus fotos.
   Dimensiones recomendadas para cada espacio:
   - heroImage:    900 × 675 px  (4:3)   — Equipo, local o ambiente de trabajo
   - galleryImage1: 600 × 400 px (3:2)   — Galería izquierda
   - galleryImage2: 600 × 400 px (3:2)   — Galería derecha
   - missionImage:  500 × 650 px (portrait) — Junto a Misión/Visión
*/
const IMAGES = {
  heroImage: "/images/sobreNosotros/heroImage.jpg",
  galleryImage1: "/images/sobreNosotros/galleryImage1.jpg",
  galleryImage2: "/images/sobreNosotros/galleryImage2.jpg",
  missionImage: "/images/sobreNosotros/missionImage.jpg",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Sobre Nosotros
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Cuidamos tu vehículo
              <span className="block text-primary">como si fuera nuestro</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              En Espelta creemos que un buen repuesto no es solo una pieza más. Es la tranquilidad de saber que tu auto
              responde cuando lo necesitás. Por eso te acompañamos con asesoría honesta, variedad de opciones y precios
              que respetan tu presupuesto.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Seguridad</p>
                <p className="mt-2 text-[13px] text-slate-600">
                  Productos que priorizan la seguridad del vehículo y de quienes viajan en él.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Rendimiento</p>
                <p className="mt-2 text-[13px] text-slate-600">
                  Repuestos de alta calidad pensados para un desempeño óptimo y duradero.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Acompañamiento</p>
                <p className="mt-2 text-[13px] text-slate-600">
                  Asistencia técnica cercana para ayudarte a elegir la mejor opción.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto overflow-hidden rounded-xl">
              <AboutImagePlaceholder
                src={IMAGES.heroImage}
                alt="Espelta - Equipo o instalaciones"
                dimensions="900 × 675 px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería - Imágenes de la empresa */}
      <section className="border-b border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Nuestra empresa
          </h2>
          <p className="mt-2 text-[14px] text-slate-600">
            Conocé nuestro espacio y equipo de trabajo.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
              <AboutImagePlaceholder
                src={IMAGES.galleryImage1}
                alt="Espelta - Instalaciones o equipo"
                dimensions="600 × 400 px"
              />
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
              <AboutImagePlaceholder
                src={IMAGES.galleryImage2}
                alt="Espelta - Instalaciones o equipo"
                dimensions="600 × 400 px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Objetivos */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Nuestra esencia
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Lo que nos mueve como equipo y como empresa
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
              Detrás de cada pedido, hay una historia. Nuestra misión, visión y objetivos nacen de escuchar esas
              historias y buscar la forma más simple y honesta de ayudar.
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Misión</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                  Estar cerca de quienes cuidan vehículos todos los días, ofreciendo repuestos compatibles y confiables,
                  explicados en un lenguaje simple, y con opciones que cuiden tanto la seguridad como el bolsillo.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Visión</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                  Que cuando alguien piense en repuestos compatibles, piense en Espelta como ese contacto de confianza
                  al que se recurre sin dudar, sin importar si está en una gran ciudad o en una zona más alejada.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">Objetivos estratégicos</h3>
                <ul className="mt-4 space-y-4 text-[14px] text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <div>
                      <strong className="text-slate-900">Satisfacción del cliente</strong>
                      <p className="mt-0.5 text-slate-600">
                        Que cada persona sienta que fue bien atendida y que el repuesto que se llevó realmente le sirvió.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <div>
                      <strong className="text-slate-900">Diversidad de stock</strong>
                      <p className="mt-0.5 text-slate-600">
                        Tener distintas marcas y alternativas para elegir con libertad según lo que el vehículo necesita.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <div>
                      <strong className="text-slate-900">Posicionamiento</strong>
                      <p className="mt-0.5 text-slate-600">
                        Ganarnos un lugar porque quienes ya nos probaron nos recomiendan y sienten que siempre alguien los atiende.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:pt-0">
              <div className="relative aspect-[5/6.5] w-full max-w-[400px] overflow-hidden rounded-xl lg:max-w-none">
                <AboutImagePlaceholder
                  src={IMAGES.missionImage}
                  alt="Espelta - Equipo o instalaciones"
                  dimensions="500 × 650 px"
                />
              </div>
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
