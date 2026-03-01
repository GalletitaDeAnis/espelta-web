"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ShieldCheck, Heart, Wallet, ArrowRight, QrCode, User, Mail, Phone, DollarSign } from 'lucide-react';
import DonationCounter from './components/DonationCounter';

export default function DonationsClient() {
    const [activeTab, setActiveTab] = useState<'transfer' | 'qr'>('qr'); // Default to QR since transfer is disabled
    const [copiedField, setCopiedField] = useState<string | null>(null);

    // Form State
    const [amount, setAmount] = useState<string>('10');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const amounts = [
        { label: 'Bs 10', value: '10' },
        { label: 'Bs 50', value: '50' },
        { label: 'Bs 100', value: '100' },
        { label: 'Otro', value: 'custom' },
    ];

    const bankDetails = {
        banco: "Banco Nacional",
        cuenta: "123-456789-00",
        cci: "001-123-45678900-88",
        titular: "Campaña Ramón Daza",
        rut: "12.345.678-9"
    };

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const getWhatsAppLink = () => {
        const finalAmount = amount === 'custom' ? customAmount : amount;
        const formattedAmount = new Intl.NumberFormat('es-BO', { style: 'currency', currency: 'BOB' }).format(Number(finalAmount) || 0);

        const message = `Hola, mi nombre es ${formData.name || 'Anónimo'}. He realizado una donación de ${formattedAmount} a la campaña. Mis datos de contacto son: ${formData.email} / ${formData.phone}.`;

        return `https://wa.me/59176900608?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row gap-12 items-start"
            >

                {/* Left Column: Persuasion */}
                <div className="lg:w-1/2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">
                            Tu Aporte Cuenta
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                            Invierte en el <br />
                            <span className="text-orange-500">Futuro de Todos</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Esta campaña no se financia con grandes grupos de poder, sino con el esfuerzo de ciudadanos comprometidos como tú.
                            Cada peso que donas se convierte en volantes, anuncios y visitas a los barrios que más nos necesitan.
                        </p>

                        <div className="mb-8">
                            {/* Temporary Dummy Data - Will be connected to DB later */}
                            <DonationCounter
                                currentAmount={0}
                                targetAmount={10000}
                                donorCount={0}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-3">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <ShieldCheck size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900">100% Transparente</h3>
                                <p className="text-sm text-gray-500">Todas las donaciones son reportadas y auditadas según la ley electoral.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-3">
                                <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                                    <Heart size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900">Impacto Real</h3>
                                <p className="text-sm text-gray-500">Tu ayuda llega directamente a las actividades de terreno de la campaña.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Donation Card */}
                <div className="lg:w-1/2 w-full">
                    <motion.div
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 sticky top-28"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="bg-gray-900 p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
                            <h2 className="text-2xl font-bold text-white relative z-10">Realizar Aporte</h2>
                            <p className="text-gray-400 text-sm mt-2 relative z-10">Completa tus datos y selecciona un método.</p>
                        </div>

                        <div className="p-8 space-y-8">

                            {/* 1. Suggestion Grid */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">¿Cuánto deseas aportar?</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {amounts.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setAmount(opt.value)}
                                            className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all ${amount === opt.value
                                                ? 'bg-orange-500 text-white border-orange-500 shadow-md ring-2 ring-orange-200'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                                                }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                                {amount === 'custom' && (
                                    <div className="mt-3 relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <DollarSign size={16} />
                                        </div>
                                        <input
                                            type="number"
                                            placeholder="Ingresa el monto (Bs)"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* 2. Donor Data Form */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-gray-700">Tus Datos</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre Completo"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Correo Electrónico"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="WhatsApp / Teléfono"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-6"></div>

                            {/* 3. Payment Method Tabs & Content */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">Método de Pago</label>
                                <div className="flex bg-gray-100 p-1.5 rounded-xl mb-6">
                                    <button
                                        disabled
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-gray-400 bg-gray-100 cursor-not-allowed opacity-50"
                                    >
                                        <Wallet size={18} />
                                        Transferencia (Pronto)
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('qr')}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold bg-white text-gray-900 shadow-sm transition-all"
                                    >
                                        <QrCode size={18} />
                                        QR / Pago Fácil
                                    </button>
                                </div>

                                {activeTab === 'transfer' && (
                                    <div className="space-y-3 animate-[fadeIn_0.3s_ease-out]">
                                        {Object.entries(bankDetails).map(([key, value]) => (
                                            <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors group">
                                                <div>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{key}</p>
                                                    <p className="font-mono text-gray-900 font-medium text-sm">{value}</p>
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(value, key)}
                                                    className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                                                    title="Copiar"
                                                >
                                                    {copiedField === key ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'qr' && (
                                    <div className="flex flex-col items-center justify-center py-4 animate-[fadeIn_0.3s_ease-out]">
                                        <div className="bg-white border-2 border-gray-900 p-3 rounded-xl shadow-lg mb-4">
                                            <div className="w-56 h-auto bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                                {/* Requires the image to be in public/images/ */}
                                                <img
                                                    src="/images/qr-bcp-ramon-daza-donacion.jpeg"
                                                    alt="QR Banco Ramón Daza"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 font-medium text-sm text-center">
                                            Escanea este QR desde tu App del Banco (BCP, BNB, Mercantil, etc.)
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* 4. Action Button */}
                            <div className="pt-2">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 w-full justify-center text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 ${(!formData.name || !amount)
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gray-900 hover:bg-orange-600'
                                        }`}
                                >
                                    Reportar Aporte en WhatsApp
                                    <ArrowRight size={18} />
                                </a>
                                <p className="text-center text-xs text-gray-400 mt-3">
                                    Serás redirigido a WhatsApp para confirmar tu transferencia.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                            <p className="text-xs text-gray-400">
                                Al donar aceptas nuestra <a href="#" className="underline hover:text-gray-600">Política de Privacidad</a>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

