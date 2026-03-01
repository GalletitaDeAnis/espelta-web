
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdsSidebar from "./components/AdsSidebar";
import GoogleAd from "../components/GoogleAd";

// Reusing the data structure, this would ideally come from a CMS or API
const allNewsItems = [
    {
        id: 1,
        category: "Boletines",
        date: "27 NOV. 2025",
        title: "Movimiento Ciudadano, fuerza electoral en crecimiento.",
        excerpt: "El crecimiento sostenido del movimiento demuestra que la ciudadanía busca alternativas reales y concretas para el futuro.",
        image: "/images/ramon-familia.jpg",
    },
    {
        id: 2,
        category: "Noticias",
        date: "19 NOV. 2025",
        title: "Convocatoria Campamento Foro Nacional.",
        excerpt: "Jóvenes de todo el país se reunirán para debatir sobre gobernanza, participación ciudadana y el rol de las nuevas generaciones.",
        image: "/images/ramon-daza-hero.png",
    },
    {
        id: 3,
        category: "Boletines",
        date: "28 OCT. 2025",
        title: "Movimiento Ciudadano se posiciona como alternativa.",
        excerpt: "Las últimas encuestas reflejan un apoyo creciente a las propuestas de orden y confianza que impulsamos.",
        image: "/images/ramon-familia.jpg",
    },
    {
        id: 4,
        category: "Boletines",
        date: "1 OCT. 2025",
        title: "México tiene futuro, una alternativa real.",
        excerpt: "Construir un futuro mejor es posible si trabajamos unidos con una visión clara y pragmática.",
        image: "/images/ramon-daza-hero.png",
    },
    {
        id: 5,
        category: "Boletines",
        date: "25 SEP. 2025",
        title: "La juventud se levanta para construir futuro.",
        excerpt: "No somos el futuro, somos el presente que está tomando acción para transformar nuestra realidad.",
        image: "/images/ramon-familia.jpg",
    },
    {
        id: 6,
        category: "Prensa",
        date: "15 SEP. 2025",
        title: "Entrevista Exclusiva: La visión de Cochabamba 2030.",
        excerpt: "Ramón Daza detalla los puntos clave de su plan maestro para la modernización de la ciudad.",
        image: "/images/ramon-daza-hero.png",
    },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Noticias y Boletines",
    description: "Mantente informado sobre las actividades de campaña, propuestas y noticias de Ramón Daza.",
};

export default function NoticiasPage() {
    // Featured Item (First one)
    const featuredNews = allNewsItems[0];
    const otherNews = allNewsItems.slice(1);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Space */}
            <div className="h-20 bg-white"></div>

            {/* Page Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">
                        Noticias
                    </h1>
                    <p className="text-gray-500">
                        Actualidad y novedades de la campaña.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-12 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: News Feed (8 cols on large screens) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Featured Article - Big Card */}
                        <Link href={`/noticias/${featuredNews.id}`} className="group block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64 md:h-[400px] w-full overflow-hidden">
                                <Image
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                                        Destacado
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3 group-hover:text-orange-200 transition-colors">
                                        {featuredNews.title}
                                    </h2>
                                    <p className="text-gray-200 text-sm md:text-base line-clamp-2 max-w-2xl">
                                        {featuredNews.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Recent News - Grid Layout */}
                        <div className="space-y-8">
                            <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                                Lo más reciente
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {otherNews.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <Link href={`/noticias/${item.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-gray-800 uppercase tracking-wider">
                                                    {item.category}
                                                </div>
                                            </div>
                                            <div className="p-5 flex flex-col flex-grow">
                                                <div className="text-xs font-bold text-orange-500 mb-2">{item.date}</div>
                                                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-grow">
                                                    {item.excerpt}
                                                </p>
                                                <div className="mt-auto border-t border-gray-50 pt-3">
                                                    <span className="text-xs font-bold text-gray-400 group-hover:text-orange-500 transition-colors flex items-center gap-1">
                                                        LEER NOTA
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Inject Ad after the 2nd item (index 1) - Spanning full width */}
                                        {index === 1 && (
                                            <div className="col-span-1 md:col-span-2 py-4">
                                                {/* Adjusted padding/style for better horizontal fit */}
                                                <GoogleAd format="horizontal" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Load More */}
                        <div className="text-center pt-8">
                            <button className="inline-block border-2 border-gray-100 bg-white text-gray-500 font-bold py-3 px-8 rounded-xl hover:border-black hover:text-black transition-all">
                                Ver archivos anteriores
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (4 cols on large screens) */}
                    <div className="lg:col-span-4">
                        <AdsSidebar />
                    </div>

                </div>
            </section>

            <Footer />
        </main >
    );
}
