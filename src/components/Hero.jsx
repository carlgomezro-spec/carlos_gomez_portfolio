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
  return (
    <section className="hero" id="home">

      {/* FOTO CENTRADA */}
      <div className="hero-photo">
        <img src="/images/carlos-hero-wide.webp" alt="Carlos Gómez" fetchPriority="high" />
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
        <div className="hero-marquee-track" aria-hidden="true">
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