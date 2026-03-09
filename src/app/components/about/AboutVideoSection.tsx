import { PlayCircle } from "lucide-react";

const rawVideoUrl = process.env.NEXT_PUBLIC_HOME_VIDEO_URL?.trim() ?? "";

function getYoutubeEmbedUrl(url: string) {
  if (!url) {
    return null;
  }

  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  if (url.includes("youtube.com/watch?v=")) {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  if (url.includes("youtu.be/")) {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.pathname.replace("/", "");

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return null;
}

export function AboutVideoSection() {
  const embedUrl = getYoutubeEmbedUrl(rawVideoUrl);

  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 text-center">
          <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 sm:text-[36px]">
            CONOCE ESPELTA EN VIDEO
          </h2>
          <p className="mt-2 text-[15px] font-medium text-slate-600">
            {embedUrl
              ? "Mira cómo trabajamos: importación de repuestos, validación técnica y atención personalizada."
              : "Estamos preparando un video para mostrar nuestro proceso de importación y atención personalizada."}
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-primary/10" />

          {embedUrl ? (
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={embedUrl}
                  title="Video institucional Espelta"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="relative flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center">
              <PlayCircle size={64} className="text-primary" strokeWidth={1.6} />
              <p className="mt-5 text-[18px] font-extrabold uppercase tracking-wide text-slate-900">Video próximamente</p>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-slate-600">
                Cuando tengas el enlace, agrega la variable NEXT_PUBLIC_HOME_VIDEO_URL y se mostrará aquí automáticamente.
              </p>
              <a
                href="https://wa.me/59170706280"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 text-[14px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary-strong hover:shadow-[0_6px_18px_rgba(30,64,175,0.35)]"
              >
                Cotizar ahora
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
