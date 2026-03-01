"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

// Data Structure
type OrgMember = {
    name: string;
    role: string;
    image?: string;
    children?: OrgMember[];
    color?: string;
};

const orgData: OrgMember = {
    name: "Ramón Daza",
    role: "Candidato a Alcalde",
    image: "/images/ramon-daza-hero.png",
    children: [
        {
            name: "",
            role: "Jefe de Campaña",
            color: "bg-gray-800",
            children: [
                {
                    name: "Estrategia Política",
                    role: "Dirección",
                    color: "bg-blue-600",
                    children: [
                        { name: "", role: "Coord. Alianzas" },
                        { name: "", role: "Análisis de Datos" },
                    ]
                },
                {
                    name: "Comunicación",
                    role: "Dirección",
                    color: "bg-orange-500",
                    children: [
                        { name: "", role: "Jefe de Prensa" },
                        { name: "", role: "Jefe Creativo" },
                        { name: "", role: "Equipo Digital" },
                    ]
                },
                {
                    name: "Territorio",
                    role: "Dirección",
                    color: "bg-green-600",
                    children: [
                        { name: "", role: "Coord. Distrito 1-5" },
                        { name: "", role: "Coord. Distrito 6-12" },
                    ]
                },
            ],
        },
    ],
};

function OrgNode({ member, depth = 0 }: { member: OrgMember; depth?: number }) {
    const hasChildren = member.children && member.children.length > 0;
    const cardColor = member.color || (depth === 0 ? "bg-black" : "bg-white");
    const textColor = depth === 0 || member.color ? "text-white" : "text-gray-900";
    const roleColor = depth === 0 || member.color ? "text-gray-200" : "text-orange-500";
    const borderClass = depth === 0 || member.color ? "border-transparent" : "border-gray-200";

    return (
        <div className="flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative z-10 flex flex-col items-center justify-center p-4 rounded-xl shadow-lg border ${borderClass} ${cardColor} min-w-[180px] md:min-w-[220px] max-w-[250px] text-center transition-transform hover:scale-105`}
            >
                {member.image && depth === 0 && (
                    <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-4 border-orange-500 shadow-sm bg-white">
                        <Image src={member.image} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
                    </div>
                )}

                {!member.image && (
                    <div className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center text-lg font-bold shadow-inner ${depth === 0 || member.color ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {member.name.charAt(0) || '?'}
                    </div>
                )}

                {member.name && <h3 className={`font-bold text-lg leading-tight ${textColor}`}>{member.name}</h3>}
                <p className={`text-xs uppercase font-bold tracking-wider mt-1 ${roleColor}`}>{member.role}</p>
            </motion.div>

            {hasChildren && (
                <>
                    <div className="w-px h-8 bg-gray-300"></div>

                    <div className="flex relative">
                        {member.children!.length > 1 && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-px bg-gray-300 transform -translate-y-px"></div>
                        )}

                        <div className="flex gap-8 md:gap-12 px-4">
                            {member.children!.map((child, index) => (
                                <div key={index} className="flex flex-col items-center relative">
                                    {member.children!.length > 1 && (
                                        <>
                                            <div className={`absolute top-0 w-[55%] h-px bg-gray-300 right-0 ${index === member.children!.length - 1 ? 'hidden' : ''}`}></div>
                                            <div className={`absolute top-0 w-[55%] h-px bg-gray-300 left-0 ${index === 0 ? 'hidden' : ''}`}></div>
                                        </>
                                    )}

                                    <div className="w-px h-8 bg-gray-300"></div>

                                    <OrgNode member={child} depth={depth + 1} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default function OrganigramaClient() {
    const constraintsRef = useRef(null);
    const [scale, setScale] = useState(1);

    const handleZoomIn = () => setScale(Math.min(scale + 0.2, 2));
    const handleZoomOut = () => setScale(Math.max(scale - 0.2, 0.5));
    const handleReset = () => setScale(1);

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-100/50 border-y border-gray-200">
            {/* Controls */}
            <div className="absolute bottom-6 right-6 z-50 flex flex-col gap-2 bg-white rounded-lg shadow-xl p-2 border border-gray-100">
                <button onClick={handleZoomIn} className="p-2 hover:bg-gray-100 rounded-md text-gray-700" title="Zoom In">
                    <ZoomIn size={20} />
                </button>
                <button onClick={handleReset} className="p-2 hover:bg-gray-100 rounded-md text-gray-700" title="Reset View">
                    <RotateCcw size={20} />
                </button>
                <button onClick={handleZoomOut} className="p-2 hover:bg-gray-100 rounded-md text-gray-700" title="Zoom Out">
                    <ZoomOut size={20} />
                </button>
            </div>

            {/* Hint Overlay */}
            <div className="absolute top-4 left-4 z-40 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-gray-500 pointer-events-none border border-gray-200 shadow-sm">
                Arrastra para mover • Usa los botones para zoom
            </div>

            {/* Constraints Container - Huge invisible area centered to allow large movement */}
            <div ref={constraintsRef} className="absolute w-[300vw] h-[300vh] -left-[100vw] -top-[100vh] pointer-events-none" />

            <motion.div
                className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center p-20"
            >
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    dragMomentum={false}
                    animate={{ scale }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ x: 0, y: 0 }}
                    className="flex justify-center touch-none origin-center"
                >
                    <OrgNode member={orgData} />
                </motion.div>
            </motion.div>
        </section>
    );
}
