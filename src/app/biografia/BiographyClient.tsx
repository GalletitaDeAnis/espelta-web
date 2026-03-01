"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BiographyClient() {
    return (
        <>
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2">Conoce al candidato</p>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            RAMÓN DAZA SALAMANCA
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/images/ramon-familia.jpg"
                                    alt="Ramón Daza con su familia"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decoration */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-500 rounded-2xl -z-10 hidden md:block"></div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-lg text-gray-700 leading-relaxed"
                        >
                            <p>
                                <span className="font-bold text-gray-900">Ramón Daza Salamanca</span> nació el 8 de abril de 1976 en la ciudad de Cochabamba.
                                Es padre de tres hijos, una condición que, según él mismo ha señalado, marca su forma de entender el presente y el futuro de la ciudad:
                                <span className="italic text-gray-900"> no como un ciclo corto de gestión, sino como una responsabilidad intergeneracional.</span>
                            </p>

                            <div className="pl-6 border-l-4 border-orange-500 py-2 my-8 bg-orange-50 rounded-r-lg">
                                <p className="text-gray-900 font-medium italic">
                                    &quot;Esta herencia no es para Daza un título simbólico, sino una exigencia ética: estar a la altura de una ciudad que siempre fue motor del país.&quot;
                                </p>
                            </div>

                            <p>
                                Proviene de una familia profundamente ligada a la historia y al desarrollo de Cochabamba, parte de una tradición cívica y pública que ha aportado al departamento a lo largo de distintas etapas. En ese legado se inscriben figuras históricas vinculadas al impulso institucional y al desarrollo regional, como Ramón Rivero, así como prefectos, alcaldes y actores clave de la vida pública cochabambina.
                            </p>

                            <p>
                                Realizó sus estudios escolares en el Colegio La Salle y cursó estudios universitarios en la Universidad Católica Boliviana, donde consolidó una formación orientada al análisis, la gestión y la toma de decisiones estratégicas.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-4">Trayectoria y Visión</h2>

                            <p>
                                En el ámbito institucional, fue presidente de la <span className="font-bold text-orange-500">Cámara de Industria, Comercio y Servicios de Cochabamba (ICAM)</span>, entidad creada en 2020 tras la fusión de la Cámara de Comercio y la Cámara Departamental de Industria. Desde ese espacio impulsó una visión de desarrollo basada en producción, competitividad y articulación entre el sector público y privado.
                            </p>

                            <p>
                                En 2026, Ramón Daza es candidato a la Alcaldía de Cochabamba por la Alianza Patria, con una propuesta denominada <span className="font-bold">“Clima Perfecto”</span>, que plantea un modelo de desarrollo urbano de largo plazo sustentado en tres pilares: <span className="font-bold">Kallpa</span> (fuerza productiva), <span className="font-bold">Yan</span> (conectividad estructural) y <span className="font-bold">Sumaj</span> (bienestar humano).
                            </p>

                            <div className="pt-6">
                                <p className="font-bold text-xl text-gray-900 mb-4">
                                    &quot;Para Daza, gobernar Cochabamba no es administrar la inercia, sino ordenar el futuro.&quot;
                                </p>
                                <p>
                                    Crear condiciones para que la ciudad vuelva a producir, atraer talento e inversión, y garantizar bienestar real a las familias cochabambinas, empezando por las generaciones que vienen.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
