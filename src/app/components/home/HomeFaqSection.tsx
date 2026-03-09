const faqItems = [
  {
    question: "¿Hacen envíos a todo Bolivia?",
    answer:
      "Sí. Coordinamos envíos nacionales con transportadora y te compartimos tiempo estimado y seguimiento.",
  },
  {
    question: "¿Qué pasa si la pieza no es compatible?",
    answer:
      "Antes de confirmar la compra validamos marca, modelo, año y versión para minimizar errores. Si surge algún inconveniente, te asistimos con la gestión correspondiente.",
  },
  {
    question: "¿Ofrecen devoluciones o cambios?",
    answer:
      "Sí, según el tipo de repuesto y condición del producto. Te explicamos las políticas al momento de cotizar para que compres con total claridad.",
  },
  {
    question: "¿En cuánto tiempo responden una cotización?",
    answer:
      "Nuestro objetivo es responder en minutos durante horario de atención, con opciones de precio y disponibilidad real.",
  },
];

export function HomeFaqSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 sm:text-[36px]">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="mt-2 text-[15px] font-medium text-slate-600">
            Resolvemos las dudas más comunes para que avances con tu compra sin fricciones.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-white p-5 open:border-primary/60"
            >
              <summary className="cursor-pointer list-none pr-7 text-[15px] font-bold text-slate-900 marker:content-none">
                {item.question}
                <span className="float-right text-primary transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
