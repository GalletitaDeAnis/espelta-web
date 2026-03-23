import type { Metadata } from "next";
import { Briefcase, Clock3, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiteFooterSection } from "../components/layout";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para cotizaciones, consultas sobre repuestos y atención personalizada. Sucursales en Cochabamba Centro y Norte.",
};

const stores = [
  {
    name: "Sucursal Centro",
    address: "Gral. Acha #452 entre Tumusla y Tarapaca (acera norte)",
    phone: "77490707",
    phoneFull: "+591 77490707",
    mapsUrl: "https://www.google.com/maps/place/ESPELTA+IMPORTADORA/data=!4m7!3m6!1s0x93e373f46a35e4f1:0xd49c832750c496b5!8m2!3d-17.3932627!4d-66.1622145!16s%2Fg%2F11gy1ysc4x!19sChIJ8eQ1avRz45MRtZbEUCeDnNQ",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2!2d-66.1622145!3d-17.3932627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373f46a35e4f1%3A0xd49c832750c496b5!2sESPELTA+IMPORTADORA!5e0!3m2!1ses!2sbo!4v1710000000000",
  },
  {
    name: "Sucursal Norte",
    address: "Av. Simon Lopez #854 entre Calampampa y Mercedes Anaya (acera norte)",
    phone: "77410063",
    phoneFull: "+591 77410063",
    mapsUrl: "https://www.google.com/maps/place/ESPELTA+IMPORTADORA/data=!4m7!3m6!1s0x93e373be46b3840b:0xda7c342b30b70bfc!8m2!3d-17.4158889!4d-66.1694335!16s%2Fg%2F11rbfn_jw3!19sChIJC4SzRr5z45MR_Au3MCs0fNo",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2!2d-66.1694335!3d-17.4158889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373be46b3840b%3A0xda7c342b30b70bfc!2sESPELTA+IMPORTADORA!5e0!3m2!1ses!2sbo!4v1710000000000",
  },
];

const phones = [
  { number: "79386505", full: "+591 79386505" },
  { number: "70706280", full: "+591 70706280" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61588335440872", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/espeltaimportadora/", label: "Instagram" },
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contacto
          </p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Contáctanos
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] font-medium text-slate-600 sm:text-base">
            ¿Listo para cotizar tu repuesto? Escríbenos o agenda una conversación y te respondemos a la brevedad.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Formulario */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Dejenos su Mensaje
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
              Si desea más información de nuestros productos, servicios, formas de pago u otro requisito no dude en contactarnos desde el siguiente formulario de contacto.
            </p>
            <ContactForm />
          </div>

          {/* Información de contacto - Una sola tarjeta como antes */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Información de contacto
            </h2>
            <div className="mt-6 space-y-5">
              {/* Nuestras Tiendas */}
              {stores.map((store) => (
                <div key={store.name} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin size={20} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Cochabamba · {store.name}
                    </p>
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 block text-[14px] font-medium text-slate-800 hover:text-primary hover:underline"
                    >
                      {store.address}
                    </a>
                    <a
                      href={`https://wa.me/591${store.phone}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-[13px] font-medium text-primary hover:underline"
                    >
                      Cel: {store.phoneFull}
                    </a>
                  </div>
                </div>
              ))}

              {/* Teléfonos principales */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={20} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Teléfono / WhatsApp
                  </p>
                  <div className="mt-0.5 flex flex-wrap gap-x-4 gap-y-1">
                    {phones.map((p) => (
                      <a
                        key={p.number}
                        href={`https://wa.me/591${p.number}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[14px] font-medium text-slate-800 hover:text-primary hover:underline"
                      >
                        {p.full}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock3 size={20} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Horarios de atención
                  </p>
                  <p className="mt-0.5 text-[14px] font-medium text-slate-800">
                    Lunes - Sábado: 8:30-12:30 AM · 14:00-18:00 PM
                  </p>
                </div>
              </div>

              {/* Trabajo */}
              <a
                href="mailto:Imporpec23@Gmail.com"
                className="flex items-start gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={20} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Trabajo
                  </p>
                  <p className="mt-0.5 text-[14px] font-medium text-slate-800">
                    Si está interesado en trabajar con nosotros: Imporpec23@Gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-[13px] font-semibold text-slate-700">Síguenos en redes:</p>
              <div className="mt-3 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapas - Una por sucursal */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
          {stores.map((store) => (
            <div
              key={store.name}
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full">
                <iframe
                  src={store.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Espelta Importadora - ${store.name}`}
                  className="absolute inset-0"
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-900">{store.name}</p>
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-primary-strong"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooterSection />
    </main>
  );
}
