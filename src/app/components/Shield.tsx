"use client";
import { useState } from "react";

/** Capa invisible que captura clics/selecciones encima de un contenedor */
export default function Shield({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative">
      {/* Contenido real */}
      <div aria-hidden={false}>{children}</div>

      {/* Escudo */}
      <div
        aria-hidden
        className="shield-layer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />

      {/* Tooltip sutil */}
      <div className={`shield-tip ${hover ? "opacity-100" : "opacity-0"}`}>
        Contenido protegido
      </div>

      <style jsx>{`
        .shield-layer {
          position: absolute; inset: 0;
          background: transparent;
          pointer-events: auto;
          /* Captura todos los clics/selección/drag */
        }
        .shield-tip {
          position: absolute; right: 10px; bottom: 10px;
          transition: opacity .2s ease;
          font-size: 11px;
          padding: 6px 8px; border-radius: 8px;
          background: rgba(0,0,0,.6); color:#fff;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
