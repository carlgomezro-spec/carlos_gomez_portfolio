import Reveal from "./Reveal";

// Móvil con una captura dentro de la pantalla, barra de estado incluida
function PhoneMockup({ src, alt, className = "", delay = 0, time = "9:41" }) {
  return (
    <Reveal className={`phone ${className}`} delay={delay}>
      <div className="phone-body">
        <span className="phone-island" aria-hidden="true" />
        <div className="phone-screen">

          <div className="phone-status" aria-hidden="true">
            <span className="phone-time">{time}</span>
            <span className="phone-icons">
              {/* señal */}
              <svg viewBox="0 0 17 11" fill="currentColor">
                <rect x="0" y="7" width="3" height="4" rx="0.8" />
                <rect x="4.7" y="5" width="3" height="6" rx="0.8" />
                <rect x="9.4" y="2.5" width="3" height="8.5" rx="0.8" />
                <rect x="14" y="0" width="3" height="11" rx="0.8" />
              </svg>
              {/* wifi */}
              <svg viewBox="0 0 16 11" fill="currentColor">
                <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1-1.1C13.1 1.7 10.7.6 8 .6S2.9 1.7 1 3.5l1 1.1c1.6-1.5 3.7-2.4 6-2.4z" />
                <path d="M8 5.4c1.4 0 2.6.5 3.6 1.4l1-1.1C11.4 4.6 9.8 4 8 4S4.6 4.6 3.4 5.7l1 1.1C5.4 5.9 6.6 5.4 8 5.4z" />
                <circle cx="8" cy="9" r="1.5" />
              </svg>
              {/* batería */}
              <svg viewBox="0 0 26 12" fill="none">
                <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.4" />
                <rect x="2" y="2" width="19" height="8" rx="1.8" fill="currentColor" />
                <path d="M24 4v4c.8-.3 1.5-1.1 1.5-2S24.8 4.3 24 4z" fill="currentColor" opacity="0.5" />
              </svg>
            </span>
          </div>

          <img src={src} alt={alt} loading="lazy" decoding="async" />

        </div>
      </div>
    </Reveal>
  );
}

export default PhoneMockup;