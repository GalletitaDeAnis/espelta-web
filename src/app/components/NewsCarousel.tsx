"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const newsItems = [
    {
        id: 1,
        category: "Boletines",
        date: "27 NOV. 2025",
        title: "Movimiento Ciudadano, fuerza electoral en crecimiento.",
        image: "/images/ramon-familia.jpg",
    },
    {
        id: 2,
        category: "Noticias",
        date: "19 NOV. 2025",
        title: "Convocatoria Campamento Foro Nacional.",
        image: "/images/ramon-daza-hero.png",
    },
    {
        id: 3,
        category: "Boletines",
        date: "28 OCT. 2025",
        title: "Movimiento Ciudadano se posiciona como alternativa.",
        image: "/images/ramon-familia.jpg",
    },
    {
        id: 4,
        category: "Boletines",
        date: "1 OCT. 2025",
        title: "México tiene futuro, una alternativa real.",
        image: "/images/ramon-daza-hero.png",
    },
    {
        id: 5,
        category: "Boletines",
        date: "25 SEP. 2025",
        title: "La juventud se levanta para construir futuro.",
        image: "/images/ramon-familia.jpg",
    },
];

export default function NewsCarousel() {
    const [width, setWidth] = useState(0);
    const [showLeftGradient, setShowLeftGradient] = useState(false);
    const [showRightGradient, setShowRightGradient] = useState(true);

    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useMotionValueEvent(x, "change", (latest) => {
        // Show left gradient if we have dragged a bit (e.g. < -10px)
        setShowLeftGradient(latest < -10);

        // Show right gradient if we haven't reached near the end
        // latest is negative. end is -width.
        // e.g. width = 1000, end = -1000.
        // if latest > -990, show gradient.
        setShowRightGradient(latest > -(width - 10));
    });

    return (
        <section className="bg-slate-50 py-10 overflow-hidden border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-6 mb-6 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                    Novedades <span className="text-orange-500">Recientes</span>
                </h2>

                {/* Navigation Hint */}
                <div className="hidden md:flex gap-2">
                    <div className={`h-1 w-12 rounded-full transition-colors duration-300 ${showLeftGradient ? 'bg-gray-300' : 'bg-orange-500'}`}></div>
                    <div className={`h-1 w-2 rounded-full transition-colors duration-300 ${!showLeftGradient ? 'bg-gray-300' : 'bg-orange-500'}`}></div>
                </div>
            </div>

            <div className="relative">
                {/* Left Gradient Mask */}
                <div
                    className={`absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showLeftGradient ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Right Gradient Mask */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showRightGradient ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Carousel Container */}
                <div ref={carouselRef} className="cursor-grab active:cursor-grabbing pl-6">
                    <motion.div
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        whileTap={{ cursor: "grabbing" }}
                        className="flex gap-4 pr-6"
                    >
                        {newsItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="relative min-w-[260px] md:min-w-[300px] h-[340px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 flex flex-col group hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative h-[180px] w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        draggable={false}
                                    />

                                    {/* Pill/Tag */}
                                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold text-gray-800 uppercase tracking-wider shadow-sm">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col justify-between flex-grow">
                                    <div>
                                        <span className="text-[10px] font-semibold text-orange-500 mb-1 block">
                                            {item.date}
                                        </span>
                                        <h3 className="text-sm md:text-base font-bold leading-snug text-gray-900 line-clamp-3">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <span className="text-gray-400 group-hover:text-orange-500 font-medium text-xs transition-colors flex items-center gap-1">
                                            Leer nota
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
