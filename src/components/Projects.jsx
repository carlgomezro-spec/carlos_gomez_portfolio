import Reveal from "./Reveal";
import AnimatedTitle from "./AnimatedTitle";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Tattoo Booking App",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A booking platform for tattoo studios, built with React, Express and PostgreSQL.",
    image: "/images/tattoo-booking.webp",
    year: "2026",
    link: "/projects/tattoo-booking"
  },
  {
    number: "02",
    title: "Metropolis Underground",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A responsive landing page for a city mobility app concept, focused on a clear message and a clean interface.",
    image: "/images/metropolis.webp",
    year: "2026",
    link: "/projects/metropolis"
  },
  {
    number: "03",
    title: "Digital Marketing & Branding",
    category: "DIGITAL STRATEGY",
    description:
      "Brand identity and guidelines for Brooklyn Fitboxing, built around energy, bold type and a yellow and black palette.",
    image: "/images/branding.webp",
    year: "2025",
    link: "/projects/branding"
  },
  {
    number: "04",
    title: "Other Design Projects",
    category: "EDITORIAL & GRAPHIC DESIGN",
    description:
      "Editorial and graphic design pieces, from magazine covers to visual explorations.",
    image: "/images/otherprojects.webp",
    year: "2025",
    link: "/projects/other"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <Reveal className="section-label">
        <span>( 02 )</span>
        <span>SELECTED WORK</span>
      </Reveal>

      <div className="projects-header">

        <AnimatedTitle lines={["SELECTED", <span>PROJECTS.</span>]} />

        <Reveal as="p" delay={300}>
          A selection of projects combining
          technology, design and digital strategy.
        </Reveal>

      </div>

      <div className="projects-grid">

        {projects.map((project, i) => (
          <Reveal key={project.number} delay={(i % 2) * 150}>
            <Link to={project.link} className="project-card">

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

              <div className="project-info">

                <div>
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <span className="project-year">
                  {project.year}
                </span>

              </div>

            </Link>
          </Reveal>
        ))}

      </div>

    </section>
  );
}

export default Projects;