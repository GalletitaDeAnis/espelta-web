import { Clock3, Mail, MapPin, Phone, Facebook } from "lucide-react";

const navPills = [
  "Inicio",
  "Sobre nosotros",
  "Productos",
  "Repuestos a Pedido",
  "Cliente Espelta",
  "Contacto",
];

export function SiteFooterSection() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 px-5 text-white/90 flex flex-col gap-12">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 md:grid-cols-[1.2fr_1.2fr_1fr]">
        <div className="flex flex-col items-start">
          <a href="/" className="mb-6 block transition-transform duration-300 hover:scale-105">
            <img
              src="/logoEspelta.png"
              alt="Logo Espelta Importaciones"
              className="h-[70px] w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
            />
          </a>

          <p className="max-w-[360px] text-[14px] leading-relaxed text-white/60">
            Nuestra misión es proveer a Bolivia de repuestos genuinos y alternativos
            de la más alta calidad para todas las marcas. Brindamos un servicio personalizado
            para asegurar el rendimiento óptimo de tu vehículo.
          </p>

          <a
            href="#"
            className="mt-8 flex w-fit items-center gap-2.5 rounded-full border-2 border-[#e60000] px-6 py-2.5 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_0_20px_rgba(230,0,0,0.4)] active:scale-95"
          >
            <Facebook size={18} />
            Síguenos en Facebook
          </a>
        </div>

        <div className="rounded-2xl bg-[#0a0a0a] p-8 text-white/90 border border-white/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#e60000] to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

          <h3 className="text-[17px] font-black uppercase tracking-widest text-white mb-6">
            Contacto Directo
          </h3>
          <div className="space-y-5 text-[14px] font-medium leading-relaxed text-white/70">
            <a href="mailto:contacto@espelta.com" className="flex items-start gap-4 transition-colors hover:text-white">
              <Mail size={20} className="mt-0.5 text-[#e60000] shrink-0" />
              contacto@espelta.com
            </a>
            <a href="https://wa.me/59170706280" target="_blank" rel="noreferrer" className="flex items-start gap-4 transition-colors hover:text-white">
              <Phone size={20} className="mt-0.5 text-[#e60000] shrink-0" />
              (+591) 70706280
            </a>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="mt-0.5 text-[#e60000] shrink-0" />
              <span>Av. América Oeste Nro 123<br/>Zona Cala Cala, Cochabamba</span>
            </div>
            <div className="flex items-start gap-4">
              <Clock3 size={20} className="mt-0.5 text-[#e60000] shrink-0" />
              <span>Lun - Vie: 08:30 a 18:30<br/>Sábados: 09:00 a 13:00</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start md:pl-6">
          <h3 className="text-[17px] font-black uppercase tracking-widest text-white">
            Explorar
          </h3>
          <div className="flex flex-wrap gap-3 max-w-[320px] justify-center md:justify-start">
            {navPills.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full bg-white/5 border border-transparent px-4 py-2 text-[13px] font-semibold text-white/70 transition-all duration-300 hover:bg-[#e60000] hover:text-white hover:border-[#e60000] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(230,0,0,0.3)] whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[13px] text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Espelta Importaciones. Todos los derechos reservados.</p>
          <a href="#" className="flex items-center gap-1.5 transition-colors duration-300 hover:text-white group">
            Desarrollado por
            <span className="font-bold text-white/60 transition-colors duration-300 group-hover:text-[#e60000]">
              Kodamo estudio
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
