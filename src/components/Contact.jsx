import Reveal from "./Reveal";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-label">
        <span>( 03 )</span>
        <span>GET IN TOUCH</span>
      </div>

      <Reveal>
        <div className="contact-content">

        <p className="contact-intro">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          LET'S WORK
          <br />
          <span>TOGETHER.</span>
        </h2>

        <a
          href="mailto:tuemail@gmail.com"
          className="contact-button"
        >
          LET'S TALK <span>↗</span>
        </a>

        </div>
        </Reveal>

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

        <span className="contact-location">
          MADRID, SPAIN
        </span>

      </div>

    </section>
  );
}

export default Contact;
