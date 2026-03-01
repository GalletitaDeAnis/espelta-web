"use client";

import Link from "next/link";
import { Heart, Users, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import GoogleAd from "../../components/GoogleAd";

export default function AdsSidebar() {
    return (
        <aside className="space-y-8 sticky top-24">

            {/* 1. Primary Ad: Donations */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

                <div className="relative z-10">
                    <div className="bg-white/10 w-fit p-3 rounded-xl mb-4 text-orange-400">
                        <Heart size={24} fill="currentColor" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">Tu aporte hace la diferencia</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        Ayúdanos a llevar el mensaje de orden y confianza a cada barrio de Cochabamba.
                    </p>

                    <Link
                        href="/donaciones"
                        className="block w-full bg-white text-black text-center font-bold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-lg"
                    >
                        Donar Ahora
                    </Link>
                </div>
            </div>

            {/* 2. Secondary Ad: Volunteer */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                        <Users size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Únete al Equipo</h3>
                        <p className="text-xs text-gray-500 mt-1">Se parte del cambio real.</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    Necesitamos voluntarios para la campaña en redes y en terreno.
                </p>
                <a
                    href="https://wa.me/59176900608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm"
                >
                    Escribir al WhatsApp
                    <ExternalLink size={16} />
                </a>
            </div>

            {/* 3. Upcoming Events (Placeholder) */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                    <Calendar size={18} className="text-orange-500" />
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Agenda</h3>
                </div>

                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <div className="flex-shrink-0 w-12 text-center bg-gray-50 rounded-lg py-1 border border-gray-200">
                            <span className="block text-xs font-bold text-gray-400">FEB</span>
                            <span className="block text-lg font-black text-gray-900 leading-none">02</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-800 leading-tight hover:text-orange-500 cursor-pointer transition-colors">
                                Visita Distrito 4
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">10:00 AM - Mercado Central</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <div className="flex-shrink-0 w-12 text-center bg-gray-50 rounded-lg py-1 border border-gray-200">
                            <span className="block text-xs font-bold text-gray-400">FEB</span>
                            <span className="block text-lg font-black text-gray-900 leading-none">15</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-800 leading-tight hover:text-orange-500 cursor-pointer transition-colors">
                                Foro Juventud
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">18:00 PM - Hotel Cochabamba</p>
                        </div>
                    </li>
                </ul>

                <button className="w-full text-center text-xs font-bold text-orange-500 mt-4 hover:underline">
                    Ver Calendario Completo
                </button>
            </div>

            {/* 4. Google Ad Placeholder (Vertical or Rectangle) */}
            <GoogleAd format="rectangle" />

        </aside>
    );
}
