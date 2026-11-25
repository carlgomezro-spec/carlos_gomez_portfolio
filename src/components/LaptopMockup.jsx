import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

// Portátil con un vídeo (src) o una imagen estática (image) dentro de la pantalla.
// El vídeo solo se carga y se reproduce cuando está a la vista, y se pausa al salir.
function LaptopMockup({ src, poster, image, alt = "", label }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [reduceMotion]);

  // Clic en la pantalla: pausa / reanuda
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <Reveal className="laptop-wrap">
      <div className="laptop" ref={frameRef}>

        <div className="laptop-lid">
          <span className="laptop-camera" aria-hidden="true" />
          <div className="laptop-screen">
            {image ? (
              <img src={image} alt={alt} loading="lazy" decoding="async" />
            ) : (
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                preload="none"
                controls={reduceMotion}
                aria-label={label}
                onClick={toggle}
              />
            )}
          </div>
        </div>

        <div className="laptop-base" aria-hidden="true">
          <span className="laptop-notch" />
        </div>

      </div>

      {label && <p className="laptop-caption">{label}</p>}
    </Reveal>
  );
}

export default LaptopMockup;