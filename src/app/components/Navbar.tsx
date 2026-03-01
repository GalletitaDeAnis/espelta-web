"use client";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Biografía', href: '/biografia' },
    { name: 'Propuesta', href: '/clima-perfecto' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Medios', href: '/medios' },
    { name: 'Organigrama', href: '/organigrama' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-black text-2xl tracking-tighter text-gray-900">
                RAMÓN <span className="text-orange-500">DAZA</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-700 hover:text-orange-500 font-medium transition">
                  {link.name}
                </Link>
              ))}
              <Link href="/donaciones" className="bg-black text-white px-7 py-2.5 rounded-full font-bold hover:bg-orange-500 transition-colors shadow-lg hover:shadow-orange-500/20">
                DONACIONES
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/donaciones"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors"
              >
                DONACIONES
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}