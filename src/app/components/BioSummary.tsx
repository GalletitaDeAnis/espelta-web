import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BioSummary() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Imagen / Decoración */}
          <div className="relative lg:w-1/2">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-orange-500"
            />

            {/* Contenedor relativo para Image con fill */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-br-[80px] shadow-2xl">
              <Image
                src="/images/ramon-familia.jpg"
                alt="Ramón Daza en Cochabamba"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-orange-500 p-8 text-white shadow-xl md:block">
              <p className="text-3xl font-black">2026</p>
              <p className="text-sm font-bold uppercase tracking-widest">
                El año del cambio
              </p>
            </div>
          </div>

          {/* Texto Biográfico */}
          <div className="lg:w-1/2">
            <p className="mb-2 font-bold uppercase tracking-widest text-orange-500">
              Conoce al candidato
            </p>
            <h2 className="mb-6 text-4xl font-black text-gray-900">
              ¿Quién es Ramón Daza?
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              Cochabambino de nacimiento y formado en el{" "}
              <strong>Colegio La Salle</strong> y la <strong>UCB</strong>, Ramón es
              un líder que entiende la gestión pública no como un ciclo corto,
              sino como una responsabilidad intergeneracional.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Feature
                icon={<Heart size={20} />}
                title="Padre de 3 hijos"
                desc="Motivación por el futuro de la ciudad."
              />
              <Feature
                icon={<Briefcase size={20} />}
                title="Ex-Presidente ICAM"
                desc="Impulsor del desarrollo industrial."
              />
              <Feature
                icon={<GraduationCap size={20} />}
                title="Gestión Estratégica"
                desc="Especialista en inversión y competitividad."
              />
              <Feature
                icon={<Award size={20} />}
                title="Alianza Patria"
                desc="Liderando el proyecto Clima Perfecto."
              />
            </div>

            <Link
              href="/biografia"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-10 py-4 font-bold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              LEER BIOGRAFÍA COMPLETA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-orange-100 p-2 text-orange-600">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
