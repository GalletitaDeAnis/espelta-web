"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = carouselContainerRef.current;

    if (!container) {
      return;
    }

    let animationFrameId = 0;
    let latestContainerRect = container.getBoundingClientRect();
    let isVisible = true;

    const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
    const smoothstep = (value: number) => {
      const t = clamp01(value);
      return t * t * (3 - 2 * t);
    };

    const recalculateContainerRect = () => {
      latestContainerRect = container.getBoundingClientRect();
    };

    const updateCardsOpacity = () => {
      const containerRect = latestContainerRect;
      const fadeZone = Math.min(240, containerRect.width * 0.27);
      const visualBleed = 14;
      const safetyInset = 10;

      cardRefs.current.forEach((card) => {
        if (!card) {
          return;
        }

        const cardRect = card.getBoundingClientRect();
        const visualLeft = cardRect.left - visualBleed;
        const visualRight = cardRect.right + visualBleed;

        const leftDistance = visualRight - (containerRect.left + safetyInset);
        const rightDistance = (containerRect.right - safetyInset) - visualLeft;

        const leftOpacity = smoothstep(leftDistance / fadeZone);
        const rightOpacity = smoothstep(rightDistance / fadeZone);
        const opacity = clamp01(Math.min(leftOpacity, rightOpacity));
        const finalOpacity = opacity < 0.02 ? 0 : opacity;

        card.style.opacity = finalOpacity.toFixed(3);
      });
    };

    const loop = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      updateCardsOpacity();
      animationFrameId = requestAnimationFrame(loop);
    };

    const resizeObserver = new ResizeObserver(() => {
      recalculateContainerRect();
      updateCardsOpacity();
    });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible && animationFrameId === 0) {
          recalculateContainerRect();
          animationFrameId = requestAnimationFrame(loop);
        }

        if (!isVisible && animationFrameId !== 0) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
      },
      { threshold: 0.01 }
    );

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    recalculateContainerRect();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      if (animationFrameId !== 0) {
        cancelAnimationFrame(animationFrameId);
      }

      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 overflow-hidden">
      
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
          <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 sm:text-[36px]">
            NUESTRAS MARCAS
          </h2>
          <div className="mt-3 h-1 w-20 bg-primary rounded-full" />
          <p className="mt-4 max-w-2xl text-[15px] font-medium text-slate-600">
            Trabajamos con repuestos genuinos y alternativos de alta gama para las marcas más reconocidas del mercado a nivel global.
          </p>
        </div>

        {/* CONTENEDOR DEL CARRUSEL */}
        <div ref={carouselContainerRef} className="relative w-full overflow-hidden">
          
          {/* TRACK DEL CARRUSEL: Tiene el hover:[animation-play-state:paused] para detenerse al pasar el cursor */}
          <div className="relative z-10 flex w-max gap-5 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
            
            {duplicatedBrands.map((brand, idx) => (
              <div 
                // Usamos el index porque tenemos elementos duplicados con el mismo nombre
                key={`${brand.name}-${idx}`} 
                ref={(element) => {
                  cardRefs.current[idx] = element;
                }}
                className="group relative flex h-[120px] w-[200px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-600 bg-gradient-to-b from-slate-700 to-slate-800 shadow-md transition-all duration-300 [will-change:opacity,transform] hover:-translate-y-2 hover:border-primary/55 hover:shadow-[0_12px_30px_rgba(30,64,175,0.2)] cursor-pointer"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/20 opacity-70" />

                {failedImages[`${brand.name}-${idx}`] ? null : (
                  <Image
                    src={brand.logo}
                    alt={`Logo de repuestos ${brand.name}`}
                    width={128}
                    height={64}
                    className="relative z-10 mx-auto h-16 w-32 object-contain opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    onError={() => {
                      setFailedImages((previous) => ({ ...previous, [`${brand.name}-${idx}`]: true }));
                    }}
                  />
                )}
                <span
                  className={`absolute inset-0 z-10 flex items-center justify-center text-[15px] font-bold text-white/80 tracking-wider uppercase transition-opacity ${
                    failedImages[`${brand.name}-${idx}`] ? "opacity-100" : "opacity-0"
                  }`}
                >
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