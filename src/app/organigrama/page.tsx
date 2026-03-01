import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrganigramaClient from "./OrganigramaClient";

export const metadata: Metadata = {
    title: "Estructura de Campaña",
    description: "Conoce el equipo profesional y organizado detrás de la campaña de Ramón Daza.",
};

export default function OrganigramaPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Space for fixed Navbar */}
            <div className="h-20 bg-white"></div>

            <section className="bg-white py-12 md:py-20 border-b border-gray-100 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                    ESTRUCTURA DE <span className="text-orange-500">CAMPAÑA</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Un equipo organizado, profesional y comprometido con la visión de una Cochabamba ordenada y productiva.
                </p>
            </section>

            <OrganigramaClient />

            <Footer />
        </main>
    );
}
