import { useEffect, useRef } from "react";

function MarqueeItems() {
  return (
    <>
      {[0, 1].map((i) => (
        <span className="hero-marquee-item" key={i}>
          CARLOS GÓMEZ<span className="hero-marquee-square" />
        </span>
      ))}
    </>
  );
}

function Hero() {
  const trackRef = useRef(null);

  // El nombre acelera (y cambia de sentido) según la velocidad y dirección del scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = track.getAnimations()[0];
    if (!animation) return;

    let lastY = window.scrollY;
    let boost = 0;
    let direction = 1;
    let frame = null;

    const tick = () => {
      boost *= 0.93;
      if (boost < 0.02) {
        boost = 0;
        direction = 1;
        animation.playbackRate = 1;
        frame = null;
        return;
      }
      animation.playbackRate = direction * (1 + boost);
      frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const delta = window.scrollY - lastY;
      lastY = window.scrollY;
      if (delta === 0) return;
      direction = delta > 0 ? 1 : -1;
      boost = Math.min(boost + Math.abs(delta) * 0.04, 7);
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
      animation.playbackRate = 1;
    };
  }, []);

  return (
    <section className="hero" id="home">

      {/* FOTO CENTRADA */}
      <div className="hero-photo">
        <img
          src="/images/carlos-hero-wide.webp"
          alt="Carlos Gómez"
          fetchPriority="high"
        />
      </div>

      {/* UBICACIÓN */}
      <div className="hero-location">
        <p>
          Based
          <br />
          in Madrid,
          <br />
          Spain
        </p>
        <span className="hero-location-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="16" cy="16" r="13" />
            <ellipse cx="16" cy="16" rx="5.5" ry="13" />
            <path d="M3 16h26M5.5 9.5h21M5.5 22.5h21" />
          </svg>
        </span>
      </div>

      {/* ROL */}
      <div className="hero-role">
        <span className="hero-role-arrow" aria-hidden="true">↘</span>
        <p>
          Frontend Developer
          <br />
          &amp; Digital Creative
        </p>
      </div>

      {/* NOMBRE EN LOOP */}
      <h1 className="hero-marquee" aria-label="Carlos Gómez">
        <div className="hero-marquee-track" aria-hidden="true" ref={trackRef}>
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </h1>

      <div className="hero-bottom">
        <span>PORTFOLIO 2026</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </div>

    </section>
  );
}

export default Hero;