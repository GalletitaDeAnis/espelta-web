"use client";
import { useEffect } from "react";

/**
 * Endurece interacciones de copia/inspección dentro de un rootSelector (por defecto <main>.
 * - Bloquea menú contextual, drag&drop y select/copy dentro del root.
 * - Intercepta atajos comunes (Ctrl/Cmd + C/X/S/P/U/A y Shift+Ctrl/Cmd+I/J/C).
 * - Marca body con .devtools-open cuando detecta heurística de DevTools.
 */
export default function useAntiCopy(rootSelector: string = "main") {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const root = document.querySelector(rootSelector) as HTMLElement | null;
    if (!root) return;
    root.classList.add("nocopy");

    // Utilidad para bloquear y detener propagación
    const prevent = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // 1) Menú contextual + drag&drop
    const onContextMenu = (e: MouseEvent) => prevent(e);
    const onDragStart = (e: DragEvent) => prevent(e);
    const onDrop = (e: DragEvent) => prevent(e);

    document.addEventListener("contextmenu", onContextMenu, true);
    document.addEventListener("dragstart", onDragStart, true);
    document.addEventListener("drop", onDrop, true);

    // 2) Selección y copiado dentro del root
    const onSelectStart = (e: Event) => {
      const target = e.target as Node | null;
      if (target && root.contains(target)) prevent(e);
    };

    const onCopy = (e: ClipboardEvent) => {
      const target = e.target as Node | null;
      if (!target || !root.contains(target)) return;
      prevent(e);
      e.clipboardData?.setData("text/plain", "Contenido protegido — Paolo Pizarro");
    };

    document.addEventListener("selectstart", onSelectStart, true);
    document.addEventListener("copy", onCopy, true);

    // 3) Bloquear atajos comunes y F11
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const cmd = e.ctrlKey || e.metaKey;

      const blocksCmd =
        cmd && ["c", "x", "s", "p", "u", "a"].includes(k); // copiar, cortar, guardar, imprimir, ver código, select all
      const blocksDevTools =
        e.shiftKey && cmd && ["i", "j", "c"].includes(k); // DevTools combos
      const blocksFullscreen = k === "f11";

      if (blocksCmd || blocksDevTools || blocksFullscreen) prevent(e);
    };
    window.addEventListener("keydown", onKeyDown, true);

    // 4) Heurística de DevTools (size threshold)
    let devtoolsOpen = false;
    const checkDevtools = () => {
      const threshold = 160;
      const opened =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;
      if (opened !== devtoolsOpen) {
        devtoolsOpen = opened;
        document.body.classList.toggle("devtools-open", devtoolsOpen);
      }
    };
    const devtoolsTimer = window.setInterval(checkDevtools, 800);

    // 5) Si entran a fullscreen, salir inmediatamente (best-effort)
    const onFullscreenChange = () => {
      if (document.fullscreenElement) {
        void document.exitFullscreen?.();
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange, true);

    // 6) Botón medio/derecho: bloquear
    const onMouseDown = (e: MouseEvent) => {
      // 0 = left, 1 = middle, 2 = right
      if (e.button !== 0) prevent(e);
    };
    const onAuxClick = (e: MouseEvent) => {
      if (e.button !== 0) prevent(e);
    };

    document.addEventListener("mousedown", onMouseDown, true);
    document.addEventListener("auxclick", onAuxClick, true);

    // Limpieza
    return () => {
      document.removeEventListener("contextmenu", onContextMenu, true);
      document.removeEventListener("dragstart", onDragStart, true);
      document.removeEventListener("drop", onDrop, true);
      document.removeEventListener("selectstart", onSelectStart, true);
      document.removeEventListener("copy", onCopy, true);
      window.removeEventListener("keydown", onKeyDown, true);
      window.clearInterval(devtoolsTimer);
      document.removeEventListener("fullscreenchange", onFullscreenChange, true);
      document.removeEventListener("mousedown", onMouseDown, true);
      document.removeEventListener("auxclick", onAuxClick, true);
      root.classList.remove("nocopy");
      document.body.classList.remove("devtools-open");
    };
  }, [rootSelector]);
}
