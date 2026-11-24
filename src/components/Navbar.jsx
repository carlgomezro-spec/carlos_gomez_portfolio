import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/#about", label: "ABOUT" },
  { to: "/#projects", label: "WORK" },
  { to: "/#contact", label: "CONTACT" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  // Cierra el menú al navegar
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash, location.key]);

  // Oculta la barra al bajar y la vuelve a mostrar al subir
  useEffect(() => {
    let last = window.scrollY;
    let frame = null;

    const update = () => {
      const y = window.scrollY;
      const delta = y - last;
      if (y < 120) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      last = y;
      frame = null;
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // Bloquea el scroll con el menú abierto, cierra con Escape o al pasar a escritorio
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const media = window.matchMedia("(min-width: 769px)");
    const onChange = (e) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onChange);
    };
  }, [open]);

  const navClass = [
    "navbar",
    hidden && !open ? "navbar--hidden" : "",
    open ? "navbar--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>

        <Link to="/" className="navbar-logo" aria-label="Home">
          <span>.</span>
        </Link>

        <div className="navbar-links">
          {links.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-status">
          <span></span>
          AVAILABLE
        </div>

        <button
          type="button"
          className="navbar-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

      </nav>

      {/* MENÚ MÓVIL (fuera del <nav> para que no lo afecte su backdrop-filter) */}
      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {links.map((link, i) => (
            <li key={link.label} style={{ "--i": i }}>
              <Link to={link.to} onClick={() => setOpen(false)}>
                {link.label}
                <small>( 0{i + 1} )</small>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-status">
            <span></span>
            AVAILABLE FOR NEW PROJECTS
          </p>

          <div>
            <a href="mailto:carl.gomezro@gmail.com">EMAIL ↗</a>
            <a
              href="https://www.linkedin.com/in/carlos-gomez-rodriguez/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://github.com/carlgomezro-spec"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;