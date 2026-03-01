"use client";

import { AlertCircle } from "lucide-react";

interface GoogleAdProps {
    format?: "horizontal" | "vertical" | "rectangle";
    className?: string;
}

export default function GoogleAd({ format = "rectangle", className = "" }: GoogleAdProps) {
    // Dimensions based on standard IAB formats
    const dimensions = {
        horizontal: "min-h-[120px] w-full", // Leaderboard flexible
        vertical: "min-h-[600px] w-full",   // Skyscraper
        rectangle: "min-h-[250px] w-full",  // Medium Rectangle
    };

    return (
        <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 p-4 ${dimensions[format]} ${className}`}>
            <span className="text-xs font-bold bg-gray-200 px-2 py-1 rounded mb-2 uppercase tracking-wide">
                Publicidad (Google Ads)
            </span>
            <div className="text-center">
                <p className="text-xs mb-1">Espacio reservado para {format}</p>
                <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                    <AlertCircle size={12} />
                    <span>Publisher ID Pendiente</span>
                </div>
            </div>
        </div>
    );
}
