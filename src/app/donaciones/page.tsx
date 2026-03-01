import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonationsClient from './DonationsClient';

export const metadata: Metadata = {
    title: 'Hacer una Donación | Ramón Daza - Alcalde 2026',
    description: 'Tu aporte es fundamental para construir el futuro que nuestra ciudad merece. Súmate a la campaña de Ramón Daza.',
    openGraph: {
        title: 'Apoya a Ramón Daza - Alcalde 2026',
        description: 'Cada donación nos acerca más a la victoria. Contribuye hoy.',
    }
};

export default function DonationsPage() {
    return (
        <main className="min-h-screen bg-neutral-50 selection:bg-orange-100 selection:text-orange-900">
            <Navbar />

            {/* Spacer for fixed Navbar */}
            <div className="h-20 bg-white"></div>

            <DonationsClient />

            <Footer />
        </main>
    );
}
