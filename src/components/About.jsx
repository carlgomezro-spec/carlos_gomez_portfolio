import Reveal from "./Reveal";
import AnimatedTitle from "./AnimatedTitle";

function About() {
  return (
    <section className="about" id="about">

      <Reveal className="section-label">
        <span>( 01 )</span>
        <span>ABOUT ME</span>
      </Reveal>

      <div className="about-content">

        <AnimatedTitle
          lines={[
            "I CREATE DIGITAL",
            "EXPERIENCES THAT",
            <span>MAKE AN IMPACT.</span>,
          ]}
        />

        <div className="about-description">

          <Reveal delay={150}>
            <p>
              I'm Carlos, a digital creative based in Madrid,
              passionate about technology, design and building
              meaningful digital experiences.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p>
              With a background in digital marketing and
              project management, combined with training
              in full-stack development, I bring a multidisciplinary
              perspective to every project.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <p>
              I enjoy turning ideas into functional, intuitive
              and visually engaging digital products.
            </p>
          </Reveal>

        </div>

      </div>

      <div className="about-details">

        <Reveal className="about-detail">
          <span>LOCATION</span>
          <p>Madrid, Spain</p>
        </Reveal>

        <Reveal className="about-detail" delay={150}>
          <span>FOCUS</span>
          <p>Development / Design / Digital</p>
        </Reveal>

        <Reveal className="about-detail" delay={300}>
          <span>EXPERIENCE</span>
          <p>Marketing & Digital Projects</p>
        </Reveal>

      </div>

    </section>
  );
}

export default About;