function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-top">

        <span className="hero-availability">
          <span className="availability-dot"></span>
         
        </span>
      </div>

      <div className="hero-content">

        <div className="hero-title">
          <h1>
            CARLOS
            <br />
            GÓMEZ<span>.</span>
          </h1>
        </div>

        <div className="hero-description">
          <p>
            I BUILD DIGITAL EXPERIENCES
            <br />
            THROUGH DESIGN & CODE.
          </p>

          <span className="hero-role">
            FRONTEND DEVELOPER
            <br />
            DIGITAL CREATIVE
          </span>
        </div>

      </div>

      <div className="hero-bottom">
        <span>PORTFOLIO 2026</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </div>

    </section>
  );
}

export default Hero;
