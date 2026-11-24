import Reveal from "./Reveal";
import AnimatedTitle from "./AnimatedTitle";

// Efecto "imán": el botón se acerca un poco al cursor cuando pasas cerca
function attract(e) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
  const y = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function release(e) {
  e.currentTarget.style.transform = "";
}

function Contact() {
  return (
    <section className="contact" id="contact">

      <Reveal className="section-label">
        <span>( 03 )</span>
        <span>GET IN TOUCH</span>
      </Reveal>

      <div className="contact-content">

        <Reveal as="p" className="contact-intro">
          HAVE A PROJECT IN MIND?
        </Reveal>

        <AnimatedTitle lines={["LET'S WORK", <span>TOGETHER.</span>]} />

        <Reveal delay={300}>
          <a
            href="mailto:carl.gomezro@gmail.com"
            className="contact-button"
            onMouseMove={attract}
            onMouseLeave={release}
          >
            LET'S TALK <span>↗</span>
          </a>
        </Reveal>

      </div>

      <div className="contact-bottom">

        <div className="contact-socials">

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

          <a href="mailto:carl.gomezro@gmail.com">
            EMAIL ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;