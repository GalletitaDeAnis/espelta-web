"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";

interface DonationCounterProps {
    currentAmount: number;
    targetAmount: number;
    donorCount: number;
}

export default function DonationCounter({ currentAmount, targetAmount, donorCount }: DonationCounterProps) {
    // Calculate percentage, capped at 100%
    const percentage = Math.min((currentAmount / targetAmount) * 100, 100);

    // Format currency
    const formatMoney = (amount: number) => {
        return new Intl.NumberFormat('es-BO', { style: 'currency', currency: 'BOB', maximumFractionDigits: 0 }).format(amount);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                        <TrendingUp size={20} />
                    </div>
                    <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Meta de Campaña</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Users size={16} />
                    <span>{donorCount} Donantes</span>
                </div>
            </div>

            <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-gray-900 leading-none">
                    {formatMoney(currentAmount)}
                </span>
                <span className="text-gray-400 font-medium mb-1">
                    de {formatMoney(targetAmount)}
                </span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden relative">
                {/* Animated Progress Bar */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full relative"
                >
                    {/* Glossy effect */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                </motion.div>
            </div>

            <div className="mt-2 text-right">
                <span className="text-xs font-bold text-orange-600">{percentage.toFixed(0)}% Completado</span>
            </div>
        </div>
    );
}
