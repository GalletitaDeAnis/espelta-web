"use client";
import * as React from "react";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";

/**
 * CuteHelloGate — Intro nocturno con cielo, fugaces y cometas
 * Props: ver tipos abajo.
 */

type ShooterCfg = {
  minEveryMs?: number;
  maxEveryMs?: number;
  speedScale?: number;
  baseAngleDeg?: number;
  angleJitterDeg?: number;
  durationRange?: [number, number];
  tailRange?: [number, number];
  spawnOnClick?: boolean;
};

type CometCfg = {
  enabled?: boolean;
  chance?: number;
  tailExtra?: number;
  color?: string;
  glow?: string;
};

type CuteHelloGateProps = {
  children: React.ReactNode;
  skipIfSeen?: boolean;
  minDuration?: number;
  theme?: "light" | "night" | "auto";
  starCount?: number;
  shooters?: ShooterCfg;
  comets?: CometCfg;
};

export default function CuteHelloGate({
  children,
  skipIfSeen = false,
  minDuration = 700,
  theme = "night",
  starCount = 140,
  shooters: userShooters,
  comets: userComets,
}: CuteHelloGateProps) {
  const [show, setShow] = React.useState(true);
  const [ready, setReady] = React.useState(false);
  const [pulses, setPulses] = React.useState<{ id: number; x: number; y: number }[]>([]);

  const reduced = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  // -----------------------
  // THEME (auto / manual)
  // -----------------------
  const isNight = React.useMemo(() => {
    if (theme === "auto") {
      const hr = new Date().getHours();
      return hr >= 19 || hr < 6;
    }
    return theme === "night";
  }, [theme]);

  // -----------------------
  // Defaults de fugaces y cometas
  // -----------------------
  const shootersCfg = React.useMemo<Required<ShooterCfg>>(
    () => ({
      minEveryMs: userShooters?.minEveryMs ?? 2200,
      maxEveryMs: userShooters?.maxEveryMs ?? 3800,
      speedScale: userShooters?.speedScale ?? 1,
      baseAngleDeg: userShooters?.baseAngleDeg ?? -16,
      angleJitterDeg: userShooters?.angleJitterDeg ?? 2,
      durationRange: userShooters?.durationRange ?? [1.1, 1.9],
      tailRange: userShooters?.tailRange ?? [160, 260],
      spawnOnClick: userShooters?.spawnOnClick ?? false,
    }),
    [userShooters]
  );

  const cometsCfg = React.useMemo<Required<CometCfg>>(
    () => ({
      enabled: userComets?.enabled ?? true,
      chance: userComets?.chance ?? 0.15,
      tailExtra: userComets?.tailExtra ?? 160,
      color: userComets?.color ?? "#b2d1ff",
      glow:
        userComets?.glow ??
        "0 0 10px rgba(180,210,255,.9), 0 0 24px rgba(150,190,255,.6), 0 0 36px rgba(120,160,255,.45)",
    }),
    [userComets]
  );

  // -----------------------
  // Saltar si ya se vio
  // -----------------------
  React.useEffect(() => {
    if (!skipIfSeen) return;
    try {
      if (sessionStorage.getItem("cute-hello-seen") === "1") {
        setShow(false);
      }
    } catch {
      // noop
    }
  }, [skipIfSeen]);

  // Duración mínima
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), minDuration);
    return () => clearTimeout(t);
  }, [minDuration]);

  const onEnter = React.useCallback(() => {
    if (!ready) return;
    if (skipIfSeen) {
      try {
        sessionStorage.setItem("cute-hello-seen", "1");
      } catch {
        // noop
      }
    }
    setShow(false);
  }, [ready, skipIfSeen]);

  // -----------------------
  // Click: pulso + (opcional) fugaz instantánea
  // -----------------------
  const [clickShots, setClickShots] = React.useState<number[]>([]);
  const onClickBG = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now() + Math.random();
      setPulses((p) => [...p, { id, x, y }]);
      setTimeout(() => setPulses((p) => p.filter((it) => it.id !== id)), 800);

      if (shootersCfg.spawnOnClick && isNight && !reduced) {
        const sid = Date.now() + Math.random();
        setClickShots((arr) => [...arr, sid]);
        setTimeout(() => setClickShots((arr) => arr.filter((v) => v !== sid)), 2200);
      }
    },
    [shootersCfg.spawnOnClick, isNight, reduced]
  );

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.section
            key="gate"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: easeInOut }}
            className="fixed inset-0 z-[9999] grid place-items-center bg-white overflow-hidden"
            aria-label="Bienvenida"
            role="dialog"
            aria-modal="true"
            onClick={onClickBG}
          >
            {isNight && (
              <StarsBG
                starCount={starCount}
                shootersCfg={shootersCfg}
                cometsCfg={cometsCfg}
                clickShots={clickShots}
              />
            )}

            {/* Pulsos de clic */}
            <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
              {pulses.map((p) => (
                <span
                  key={p.id}
                  className="absolute rounded-full bg-white/40"
                  style={{
                    left: p.x - 6,
                    top: p.y - 6,
                    width: 12,
                    height: 12,
                    animation: "pulseDot .8s ease-out forwards",
                  }}
                />
              ))}
            </div>

            {/* Contenido */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.6, ease: easeOut }}
              className="relative z-20 flex flex-col items-center gap-6 px-6 text-center"
            >
              <motion.h1
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: easeOut }}
                className={`text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent ${
                  isNight
                    ? "bg-gradient-to-b from-white to-slate-200"
                    : "bg-gradient-to-b from-neutral-900 to-neutral-700"
                }`}
              >
                Bienvenido a mi CV
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: easeOut }}
                className={`max-w-xl text-base md:text-lg ${
                  isNight ? "text-slate-200" : "text-neutral-700"
                }`}
              >
                Aquí encontrarás mi experiencia, habilidades y proyectos destacados. Este portal es
                un breve intro; presiona entrar para navegar y conocer mi trabajo.
              </motion.p>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 160, opacity: 1 }}
                transition={{ duration: 0.6, ease: easeInOut, delay: 0.15 }}
                className={`h-[3px] rounded-full ${
                  isNight ? "bg-white/80" : "bg-neutral-900/80"
                }`}
                aria-hidden
              />

              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <motion.button
                  onClick={onEnter}
                  disabled={!ready}
                  whileHover={reduced ? undefined : { y: -2 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  className={`group relative rounded-2xl px-5 py-3 font-semibold ring-1 shadow-sm disabled:opacity-60 ${
                    isNight
                      ? "ring-white/30 text-white hover:bg-white/5"
                      : "ring-neutral-300 text-neutral-900"
                  }`}
                  style={{
                    background: isNight
                      ? "transparent"
                      : ready
                      ? "linear-gradient(180deg,#fefefe,#f5f5f5)"
                      : "#f7f7f7",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {ready ? "Entrar al CV" : "Cargando…"}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,.08)" }}
                    aria-hidden
                  />
                </motion.button>

                <motion.a
                  href="#cv-descargar"
                  whileHover={reduced ? undefined : { y: -2 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  className={`rounded-2xl px-5 py-3 font-semibold ring-1 hover:bg-neutral-50 ${
                    isNight
                      ? "text-white ring-white/30 hover:bg-white/5"
                      : "text-neutral-800 ring-neutral-300"
                  }`}
                >
                  Descargar PDF
                </motion.a>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className={`text-xs ${isNight ? "text-slate-300" : "text-neutral-600"}`}
              >
                Consejo: haz click en el fondo — verás un pequeño destello ✨
              </motion.p>
            </motion.div>

            {isNight && (
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/10 to-transparent z-10"
                aria-hidden
              />
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {/* Keyframes globales para el pulso de clic */}
      <style>{`
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: .9; }
          100% { transform: scale(6); opacity: 0; }
        }
      `}</style>

      {/* Contenido real de la app */}
      {!show && children}
    </>
  );
}

/* ----------------------------------------------------------------
 * Fondo de estrellas (noche) con fugaces y cometas ocasionales
 * ---------------------------------------------------------------- */

type StrictShooters = Required<{
  minEveryMs: number;
  maxEveryMs: number;
  speedScale: number;
  baseAngleDeg: number;
  angleJitterDeg: number;
  durationRange: [number, number];
  tailRange: [number, number];
  spawnOnClick: boolean;
}>;

type StrictComets = Required<{
  enabled: boolean;
  chance: number;
  tailExtra: number;
  color: string;
  glow: string;
}>;

function StarsBG({
  starCount,
  shootersCfg,
  cometsCfg,
  clickShots,
}: {
  starCount: number;
  shootersCfg: StrictShooters;
  cometsCfg: StrictComets;
  clickShots: number[];
}) {
  // Estrellas fijas: calculadas una sola vez (no cambian)
  const stars = React.useMemo(
    () =>
      Array.from({ length: starCount }).map(() => ({
        left: Math.random() * 100, // vw
        top: Math.random() * 100, // vh
        size: 0.4 + Math.random() * 0.8, // px
        twinkle: 2 + Math.random() * 2.5, // s
        delay: Math.random() * 2, // s
        opacity: 0.6 + Math.random() * 0.4,
      })),
    [starCount]
  );

  type TrailBody = {
    id: number;
    top: number; // vh
    left: number; // vw
    duration: number; // s
    angle: number; // deg
    length: number; // px
    isComet?: boolean;
  };
  const [trails, setTrails] = React.useState<TrailBody[]>([]);

  // Spawner principal (fugaces + (chance) cometa)
  React.useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;

    const spawnOne = () => {
      if (!alive) return;
      const id = Date.now() + Math.random();
      const top = 12 + Math.random() * 56; // 12–68 vh
      const baseDur = randBetween(shootersCfg.durationRange[0], shootersCfg.durationRange[1]);
      const duration = baseDur / Math.max(shootersCfg.speedScale, 0.01);
      const angle =
        shootersCfg.baseAngleDeg +
        randBetween(-shootersCfg.angleJitterDeg, shootersCfg.angleJitterDeg);
      const length = randBetween(shootersCfg.tailRange[0], shootersCfg.tailRange[1]);

      const comet =
        cometsCfg.enabled && Math.random() < cometsCfg.chance
          ? { isComet: true as const, length: length + cometsCfg.tailExtra }
          : { isComet: false as const, length };

      setTrails((s) => [
        ...s,
        {
          id,
          top,
          left: -12,
          duration,
          angle,
          length: comet.length,
          isComet: comet.isComet,
        },
      ]);

      setTimeout(() => {
        setTrails((s) => s.filter((t) => t.id !== id));
      }, duration * 1000 + 400);
    };

    const loop = () => {
      spawnOne();
      const next =
        shootersCfg.minEveryMs +
        Math.random() * Math.max(0, shootersCfg.maxEveryMs - shootersCfg.minEveryMs);
      timer = setTimeout(loop, next);
    };

    timer = setTimeout(loop, 600);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [shootersCfg, cometsCfg]);

  // Spawn inmediato por click (si enabled desde el padre)
  React.useEffect(() => {
    if (!shootersCfg.spawnOnClick) return;
    if (!clickShots.length) return;

    const id = clickShots[clickShots.length - 1];
    const top = 20 + Math.random() * 40;
    const baseDur = randBetween(shootersCfg.durationRange[0], shootersCfg.durationRange[1]);
    const duration = baseDur / Math.max(shootersCfg.speedScale, 0.01);
    const angle =
      shootersCfg.baseAngleDeg +
      randBetween(-shootersCfg.angleJitterDeg, shootersCfg.angleJitterDeg);
    const length = randBetween(shootersCfg.tailRange[0], shootersCfg.tailRange[1]);

    setTrails((s) => [...s, { id, top, left: -12, duration, angle, length, isComet: false }]);
    const tid = setTimeout(() => {
      setTrails((s) => s.filter((t) => t.id !== id));
    }, duration * 1000 + 400);

    return () => clearTimeout(tid);
  }, [clickShots, shootersCfg]);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-slate-900 to-black" />

      {/* Estrellas fijas */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {stars.map((s, i) => (
          <span
            key={i}
            className="pointer-events-none absolute rounded-full bg-white"
            style={{
              left: `${s.left}vw`,
              top: `${s.top}vh`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animation: `twinkle ${s.twinkle}s ease-in-out ${s.delay}s infinite`,
              boxShadow: "0 0 6px rgba(255,255,255,.6)",
            }}
          />
        ))}
      </div>

      {/* Trails: fugaces y cometas */}
      <div className="absolute inset-0" aria-hidden>
        {trails.map((t) => (
          <TrailItem key={t.id} t={t} cometCfg={cometsCfg} />
        ))}
      </div>

      {/* Keyframes locales */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: .7; }
          50% { transform: scale(1.6); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/** Tipado seguro para CSS variables custom */
type CSSVars = React.CSSProperties & Record<"--dur" | "--len", string>;

function TrailItem({
  t,
  cometCfg,
}: {
  t: {
    id: number;
    top: number;
    left: number;
    duration: number;
    angle: number;
    length: number;
    isComet?: boolean;
  };
  cometCfg: StrictComets;
}) {
  const isComet = !!t.isComet;

  const wrapperStyle: CSSVars = {
    top: `${t.top}vh`,
    left: `${t.left}vw`,
    transform: `rotate(${t.angle}deg)`,
    "--dur": `${t.duration}s`,
    "--len": `${t.length}px`,
  };

  const railStyle: React.CSSProperties = {
    animation: "shootMove var(--dur) linear forwards",
    width: "var(--len)",
    height: 2,
  };

  return (
    <div className="pointer-events-none absolute" style={wrapperStyle}>
      <div className="relative" style={railStyle}>
        {/* Cola */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: isComet
              ? `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${cometCfg.color} 60%, ${cometCfg.color} 100%)`
              : "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.65) 55%, rgba(255,255,255,.95) 85%, #fff 100%)",
            filter: isComet
              ? "drop-shadow(0 0 10px rgba(255,255,255,.6))"
              : "drop-shadow(0 0 10px rgba(255,255,255,.7))",
            opacity: 0.95,
          }}
        />
        {/* Cabeza */}
        <div
          style={{
            position: "absolute",
            right: -3,
            top: -3,
            width: isComet ? 8 : 6,
            height: isComet ? 8 : 6,
            borderRadius: "9999px",
            background: isComet ? cometCfg.color : "#fff",
            boxShadow: isComet
              ? cometCfg.glow
              : "0 0 8px rgba(255,255,255,.9), 0 0 18px rgba(180,200,255,.65), 0 0 28px rgba(140,170,255,.45)",
            animation: "headPulse .8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Keyframes scoped */}
      <style>{`
        @keyframes shootMove {
          0%   { transform: translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          100% { transform: translateX(160vw); opacity: 0; }
        }
        @keyframes headPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: .9; }
        }
      `}</style>
    </div>
  );
}

/* ----------------
 * Utils
 * ---------------- */
function randBetween(min: number, max: number) {
  return min + Math.random() * Math.max(0, max - min);
}
