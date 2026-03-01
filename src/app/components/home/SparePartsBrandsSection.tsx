"use client";

// Base de datos simulada de las marcas. 
// Guarda tus logos en la carpeta public/logos/ (ej: public/logos/toyota.png)
const brands = [
  { name: "Toyota", logo: "/logos/toyota.png" },
  { name: "Nissan", logo: "/logos/nissan.png" },
  { name: "Suzuki", logo: "/logos/suzuki.png" },
  { name: "Chevrolet", logo: "/logos/chevrolet.png" },
  { name: "Hyundai", logo: "/logos/hyundai.png" },
  { name: "Kia", logo: "/logos/kia.png" },
  { name: "Honda", logo: "/logos/honda.png" },
  { name: "Mazda", logo: "/logos/mazda.png" },
  { name: "Ford", logo: "/logos/ford.png" },
  { name: "Mitsubishi", logo: "/logos/mitsubishi.png" },
  { name: "Jeep", logo: "/logos/jeep.png" },
  { name: "Subaru", logo: "/logos/subaru.png" },
];

// Duplicamos el array para crear la ilusión de un carrusel infinito sin cortes
const duplicatedBrands = [...brands, ...brands];

export function SparePartsBrandsSection() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Inyectamos la animación CSS de forma segura.
        Traslada el contenedor exactamente un 50% hacia la izquierda (la longitud del primer array original).
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}} />

      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* ENCABEZADO */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-[28px] font-black uppercase tracking-tight text-white sm:text-[36px]">
            NUESTRAS MARCAS
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#e60000] rounded-full" /> {/* Pequeño detalle visual de separación */}
          <p className="mt-4 max-w-2xl text-[15px] font-medium text-white/60">
            Trabajamos con repuestos originales y alternativos de alta gama para las marcas más reconocidas del mercado a nivel global.
          </p>
        </div>

        {/* CONTENEDOR DEL CARRUSEL */}
        {/* La clase [mask-image:...] crea el efecto de desvanecimiento negro en los bordes izquierdo y derecho */}
        <div className="relative w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]">
          
          {/* TRACK DEL CARRUSEL: Tiene el hover:[animation-play-state:paused] para detenerse al pasar el cursor */}
          <div className="flex w-max gap-5 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
            
            {duplicatedBrands.map((brand, idx) => (
              <div 
                // Usamos el index porque tenemos elementos duplicados con el mismo nombre
                key={`${brand.name}-${idx}`} 
                className="group flex h-[120px] w-[200px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#e60000]/50 hover:bg-[#121212] hover:shadow-[0_12px_30px_rgba(230,0,0,0.2)] cursor-pointer"
              >
                <img 
                  src={brand.logo} 
                  alt={`Logo de repuestos ${brand.name}`} 
                  className="h-16 w-32 object-contain opacity-40 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    // Si falla la imagen, buscamos el span hermano y lo mostramos
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('opacity-0');
                  }}
                />
                <span className="absolute text-[15px] font-bold text-white/40 tracking-wider uppercase opacity-0 transition-opacity">
                  {brand.name}
                </span>
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}