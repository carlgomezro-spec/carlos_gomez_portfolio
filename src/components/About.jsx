import Reveal from "./Reveal";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-label">
        <span>( 01 )</span>
        <span>ABOUT ME</span>
      </div>

      <Reveal>
      <div className="about-content">

        <h2>
          I CREATE DIGITAL
          <br />
          EXPERIENCES THAT
          <br />
          <span>MAKE AN IMPACT.</span>
        </h2>

        <div className="about-description">

          <p>
            I'm Carlos, a digital creative based in Madrid,
            passionate about technology, design and building
            meaningful digital experiences.
          </p>

          <p>
            With a background in digital marketing and
            project management, combined with training
            in full-stack development, I bring a multidisciplinary
            perspective to every project.
          </p>

          <p>
            I enjoy turning ideas into functional, intuitive
            and visually engaging digital products.
          </p>

        </div>

       </div>
      </Reveal>

      <div className="about-details">

        <div className="about-detail">
          <span>LOCATION</span>
          <p>Madrid, Spain</p>
        </div>

        <div className="about-detail">
          <span>FOCUS</span>
          <p>Development / Design / Digital</p>
        </div>

        <div className="about-detail">
          <span>EXPERIENCE</span>
          <p>Marketing & Digital Projects</p>
        </div>

      </div>

    </section>
  );
}

export default About;
