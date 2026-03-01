import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Branding */}
          <div>
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">
              RAMÓN <span className="text-orange-500">DAZA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Trabajando por una Cochabamba con orden, servicios que funcionan y oportunidades para todos. 
              El Clima Perfecto es posible.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/biografia" className="hover:text-orange-500">Biografía</Link></li>
              <li><Link href="/clima-perfecto" className="hover:text-orange-500">Propuesta Clima Perfecto</Link></li>
              <li><Link href="/noticias" className="hover:text-orange-500">Noticias y Actualidad</Link></li>
              <li><Link href="/donaciones" className="hover:text-orange-500 text-orange-400 font-bold">Donaciones</Link></li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="text-orange-500" size={18} /> 
                Cochabamba, Bolivia
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500" size={18} /> 
                contacto@ramonalcalde.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500" size={18} /> 
                +591 4000-0000
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter / Alianza */}
          <div>
            <h4 className="font-bold text-lg mb-6">Alianza Patria</h4>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Movimiento Ciudadano</p>
            <div className="bg-orange-500 p-4 rounded-lg">
              <p className="text-sm font-bold text-black text-center">
                ¡Súmate al cambio!
              </p>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Ramón Daza Alcalde. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}