import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // Cambiamos bg-gray-50 por un degradado sutil o puedes añadir una imagen de fondo aquí
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-gray-100 pt-20">
      {/* Opcional: Imagen de fondo con opacidad baja */}
      {/* Opcional: Imagen de fondo con opacidad baja */}
      {/* <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/images/pattern-bg.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div> */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-12 md:flex-row md:pt-20">

        {/* Columna de Texto */}
        <div className="pb-12 md:w-1/2 md:pb-20 lg:pr-10">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-orange-500 md:text-base">
            COCHABAMBA 2026
          </p>

          {/* Reducimos de text-8xl a text-6xl/7xl para mejor balance */}
          <h1 className="mb-6 text-4xl font-black leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl">
            ORDEN Y <br />
            <span className="text-orange-500">CONFIANZA.</span>
          </h1>

          <p className="mb-10 max-w-md text-lg leading-relaxed text-gray-600 md:text-xl">
            &quot;No administramos la inercia, ordenamos el futuro para las próximas generaciones.&quot;
          </p>

          {/* Botones más refinados */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/es/ramon"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
            >
              VER PROPUESTA
            </Link>

            <Link
              href="/es/sumate"
              className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 px-7 py-3.5 text-sm font-bold text-orange-500 transition-all hover:bg-orange-50"
            >
              UNIRSE AL EQUIPO
            </Link>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="relative flex w-full items-end justify-center md:w-1/2 self-end">
          <div className="relative w-[110%] md:w-[120%] lg:w-[130%] max-w-3xl translate-y-1">
            <Image
              src="/images/ramon-daza-hero.png"
              alt="Ramón Daza candidato"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full object-contain align-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}