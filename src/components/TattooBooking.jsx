import { Link } from "react-router-dom";

function TattooBooking() {
  return (
    <main className="project-page">

      {/* HERO */}
      <section className="case-hero">

        <div className="case-heading">
          <span>SELECTED WORK — 01</span>
          <span>2026</span>
        </div>

        <h1>
          NTO
          <br />
          BOOKING<span>.</span>
        </h1>

        <div className="case-meta">

          <div>
            <span>ROLE / SERVICES</span>
            <p>Product Design</p>
            <p>UX/UI Design</p>
            <p>Full Stack Development</p>
          </div>

          <div>
            <span>TOOLS</span>
            <p>Figma</p>
            <p>React / Vite</p>
            <p>Node.js / Express</p>
            <p>PostgreSQL</p>
          </div>

          <div>
            <span>PROJECT TYPE</span>
            <p>Personal Project</p>
            <p>End-to-end development</p>
          </div>

          <div>
            <span>YEAR / LOCATION</span>
            <p>2026</p>
            <p>Madrid, Spain</p>
          </div>

        </div>

        <div className="case-cover">
          <img
            src="/images/tattoo-booking.webp"
            alt="NTO Booking application presentation"
          />
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="case-intro">

        <div className="case-section-label">
          <span>( 01 )</span>
          <span>THE PROJECT</span>
        </div>

        <div className="case-intro-content">

          <h2>
            A BETTER WAY
            <br />
            TO <span>BOOK.</span>
          </h2>

          <div className="case-intro-text">
            <p>
              NTO Booking is a digital product designed
              to simplify appointment management for
              tattoo studios.
            </p>

            <p>
              The idea came from a real situation:
              a tattoo artist I know was struggling to
              organize client appointments efficiently.
              I saw an opportunity to create a solution
              that could make this process easier.
            </p>

            <p>
              I independently took the project from
              the initial concept and UX/UI design
              to the complete full-stack development.
            </p>
          </div>

        </div>

      </section>

      {/* UX PROCESS */}
      <section className="case-visual-section">

        <div className="case-section-label">
          <span>( 02 )</span>
          <span>UX / WIREFRAMING</span>
        </div>

        <div className="case-visual-heading">
          <h2>
            FROM IDEA
            <br />
            TO <span>WIREFRAMES.</span>
          </h2>

          <p>
            I started by defining the structure of the
            application in Figma, mapping the main
            user journeys and organizing the key screens
            before moving into development.
          </p>
        </div>

        <div className="case-image case-wireframes-main">
          <img
            src="/images/ux-register.webp"
            alt="NTO Booking initial wireframes in Figma"
          />
        </div>

        <div className="case-image-pair">

          <div className="case-image">
            <img
              src="/images/ux-discover.webp"
              alt="Tattoo discovery wireframes"
            />
          </div>

          <div className="case-image">
            <img
              src="/images/ux-booking.webp"
              alt="Search and booking wireframes"
            />
          </div>

        </div>

      </section>

      {/* DEVELOPMENT */}
      <section className="case-development">

        <div className="case-section-label">
          <span>( 03 )</span>
          <span>DEVELOPMENT</span>
        </div>

        <div className="case-development-content">
          <h2>
            FROM DESIGN
            <br />
            TO <span>CODE.</span>
          </h2>

          <p>
            Once the structure and user experience
            were defined, I brought the concept to life
            by developing the complete application.
            I worked across the frontend, backend,
            database and external integrations.
          </p>
        </div>

        <div className="case-tech-list">
          <span>REACT</span>
          <span>NODE.JS</span>
          <span>EXPRESS</span>
          <span>POSTGRESQL</span>
          <span>GOOGLE OAUTH</span>
          <span>GOOGLE CALENDAR</span>
        </div>

      </section>

      {/* FEATURES */}
      <section className="case-features">

        <div className="case-section-label">
          <span>( 04 )</span>
          <span>KEY FEATURES</span>
        </div>

        <div className="case-features-grid">

          <div>
            <span>01</span>
            <h3>Authentication</h3>
            <p>
              Account registration, login and
              Google authentication.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Tattoo Discovery</h3>
            <p>
              Browse tattoo designs and explore
              available options.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Appointment Booking</h3>
            <p>
              Select dates and manage tattoo
              appointment reservations.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Google Calendar</h3>
            <p>
              Synchronize appointments with
              Google Calendar.
            </p>
          </div>

          <div>
            <span>05</span>
            <h3>User Profiles</h3>
            <p>
              Manage personal information
              and account details.
            </p>
          </div>

          <div>
            <span>06</span>
            <h3>Admin Dashboard</h3>
            <p>
              Manage registered users and
              appointments.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <section className="case-footer">

        <span>END OF PROJECT — 01</span>

        <h2>
          THANK
          <br />
          YOU<span>.</span>
        </h2>

                <div className="case-footer-links">
          <a
            href="https://github.com/carlgomezro-spec/nto-booking-app"
            target="_blank"
            rel="noreferrer"
          >
            VIEW ON GITHUB ↗
          </a>
          <Link to="/projects/metropolis">NEXT PROJECT: METROPOLIS UNDERGROUND →</Link>
          <Link to="/#projects">ALL PROJECTS</Link>
        </div>

      </section>

    </main>
  );
}

export default TattooBooking;
