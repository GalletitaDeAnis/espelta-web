import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const navPills = [
  "Sobre nosotros",
  "Vehículos",
  "Importación de vehículos",
  "Inmuebles",
  "Repuestos a Pedido",
  "Blog",
  "Contacto",
];

export function HomeFooterSection() {
  return (
    <section className="border-t border-[#c9c9c9] bg-[#ebebeb] py-12">
      <div className="mx-auto grid w-full max-w-[1040px] gap-10 px-5 text-[#1f1f1f] md:grid-cols-[1.2fr_1.2fr_1fr]">
        <div>
          <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gradient-to-b from-[#df1116] to-[#001d7a] text-[24px] font-black text-white">
            MLA
          </div>
          <p className="mt-4 max-w-[360px] text-[38px] leading-snug text-[#2b2b2b]">
            Desarrollar y fortalecer una operación eficiente y confiable de importación de vehículos, ofreciendo un
            portafolio competitivo que responda a las necesidades del mercado, asegurando altos estándares de calidad,
            servicio y responsabilidad empresarial.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1d5ce5] px-4 py-2 text-[24px] font-semibold text-white"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
            Facebook
          </a>
        </div>

        <div className="rounded-2xl bg-[#dbe0f7] p-6 text-[#1b2853]">
          <h3 className="text-[37px] font-extrabold uppercase text-[#0f3d91]">CONTACTO</h3>
          <div className="mt-4 space-y-4 text-[33px] leading-snug">
            <p className="flex items-start gap-3">
              <Mail size={22} className="mt-1" /> contacto@espelta.com
            </p>
            <p className="flex items-start gap-3">
              <Phone size={22} className="mt-1" /> (+591) 70555556 - (+591) 67404445 - (+591) 70350744
            </p>
            <p className="flex items-start gap-3">
              <MapPin size={22} className="mt-1" /> Calle Araona Esquina Siriono Zona Villa Galindo, Cochabamba,
              Bolivia
            </p>
            <p className="flex items-start gap-3">
              <Clock3 size={22} className="mt-1" /> Lunes a viernes de 9:00 a 18:30 y los sábados de 9:00 a 16:00
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-[37px] font-extrabold uppercase text-[#0f3d91]">NAVEGACIÓN</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {navPills.map((item) => (
              <a key={item} href="#" className="rounded-full border border-[#2950a8] px-3 py-1 text-[31px] text-[#2950a8]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
