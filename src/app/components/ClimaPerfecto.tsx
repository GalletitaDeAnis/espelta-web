import { Leaf, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const pilares = [
  {
    titulo: "Clima Ambiental",
    desc: "Basura como economía circular y recuperación del Río Rocha.",
    icon: <Leaf className="text-green-500" size={40} />,
    color: "border-green-100"
  },
  {
    titulo: "Clima Institucional",
    desc: "Transparencia total y trámites digitales 24/7 sin filas.",
    icon: <ShieldCheck className="text-blue-500" size={40} />,
    color: "border-blue-100"
  },
  {
    titulo: "Clima Económico",
    desc: "Cochavalley: Tecnología, startups y apoyo al producto local.",
    icon: <TrendingUp className="text-orange-500" size={40} />,
    color: "border-orange-100"
  },
  {
    titulo: "Clima Social",
    desc: "Seguridad inteligente y protección a la familia y juventud.",
    icon: <Users className="text-purple-500" size={40} />,
    color: "border-purple-100"
  }
];

export default function ClimaPerfecto() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase">Clima <span className="text-orange-500">Perfecto</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            4 climas = 1 ciudad que funciona. Un modelo basado en Kallpa, Yan y Sumaj.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pilares.map((pilar, index) => (
            <div key={index} className={`p-8 border-2 ${pilar.color} rounded-2xl hover:shadow-xl transition-all group cursor-pointer`}>
              <div className="mb-4 group-hover:scale-110 transition-transform">{pilar.icon}</div>
              <h3 className="text-xl font-bold mb-2">{pilar.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pilar.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/propuesta-resumida.pdf" className="inline-flex items-center gap-2 text-orange-600 font-bold border-b-2 border-orange-600 pb-1 hover:text-orange-400">
            Descargar propuesta completa (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}