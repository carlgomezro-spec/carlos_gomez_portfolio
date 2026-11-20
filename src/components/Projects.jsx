
const projects = [
  {
    number: "01",
    title: "Tattoo Booking App",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A booking platform for tattoo studios, built with React, Express and PostgreSQL.",
    image: "/images/tattoo-booking.webp",
    year: "2026",
    link: "#"
  },
  {
    number: "02",
    title: "Metropolis Underground",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A digital experience exploring urban architecture through interactive design.",
    image: "/images/metropolis.webp",
    year: "2026",
    link: "#"
  },
  {
    number: "03",
    title: "Digital Marketing & Branding",
    category: "DIGITAL STRATEGY",
    description:
      "Digital campaigns, brand identity and creative strategies focused on meaningful results.",
    image: "/images/branding.webp",
    year: "2026",
    link: "#"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-label">
        <span>( 02 )</span>
        <span>SELECTED WORK</span>
      </div>

      <div className="projects-header">
        <h2>
          SELECTED
          <br />
          <span>PROJECTS.</span>
        </h2>

        <p>
          A selection of projects combining
          technology, design and digital strategy.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <a
            href={project.link}
            className="project-card"
            key={project.number}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
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

          </a>

        ))}

      </div>

    </section>
  );
}

export default Projects;
