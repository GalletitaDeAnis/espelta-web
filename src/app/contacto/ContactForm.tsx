"use client";

const WHATSAPP_NUMBER = "59170706280";

function buildWhatsAppMessage(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return [
    "*Consulta desde la web - Espelta*",
    "",
    `*Nombre:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Teléfono:* ${data.phone}`,
    `*Asunto:* ${data.subject}`,
    "",
    "*Mensaje:*",
    data.message,
  ].join("\n");
}

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const text = buildWhatsAppMessage(data);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
          Su Nombre <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Su nombre"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
          Su Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Su correo electrónico"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
          Teléfono <span className="text-primary">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Su teléfono"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
          Asunto <span className="text-primary">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Asunto del mensaje"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold text-slate-700">
          Mensaje <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Su mensaje"
          required
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition hover:bg-primary-strong hover:shadow-[0_6px_18px_rgba(37,99,235,0.4)] active:scale-[0.98]"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
