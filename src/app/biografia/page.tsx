import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiographyClient from "./BiographyClient";

export const metadata: Metadata = {
    title: "Biografía",
    description: "Conoce a Ramón Daza Salamanca, su trayectoria, su familia y su visión para Cochabamba.",
};

export default function BiographyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Space for fixed Navbar */}
            <div className="h-20 bg-white"></div>

            <BiographyClient />

            <Footer />
        </main>
    );
}
