import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import AnimatedTitle from "./AnimatedTitle";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";

function TattooBooking() {
  return (
    <main className="project-page">

      {/* HERO */}
      <section className="case-hero">

        <div className="case-heading">
          <span>SELECTED WORK — 01</span>
          <span>2026</span>
        </div>

        <AnimatedTitle
          as="h1"
          onLoad
          lines={[
            "NTO",
            <>
              BOOKING<span>.</span>
            </>,
          ]}
        />

        <div className="case-meta">

          <Reveal delay={0}>
            <span>ROLE / SERVICES</span>
            <p>Product Design</p>
            <p>UX/UI Design</p>
            <p>Full Stack Development</p>
          </Reveal>

          <Reveal delay={120}>
            <span>TOOLS</span>
            <p>Figma</p>
            <p>React / Vite</p>
            <p>Node.js / Express</p>
            <p>PostgreSQL</p>
          </Reveal>

          <Reveal delay={240}>
            <span>PROJECT TYPE</span>
            <p>Personal Project</p>
            <p>End-to-end development</p>
          </Reveal>

          <Reveal delay={360}>
            <span>YEAR / LOCATION</span>
            <p>2026</p>
            <p>Madrid, Spain</p>
          </Reveal>

        </div>

          <img className="case-cover reveal--clip"
            src="/images/tattoo-booking.webp"
            alt="NTO Booking application presentation"
            fetchPriority="high"
          />

      </section>

      {/* INTRODUCTION */}
      <section className="case-intro">

        <div className="case-section-label">
          <span>( 01 )</span>
          <span>THE PROJECT</span>
        </div>

        <div className="case-intro-content">

          <AnimatedTitle
            lines={[
              "A BETTER WAY",
              <>
                TO <span>BOOK.</span>
              </>,
            ]}
          />

          <Reveal className="case-intro-text" delay={200}>
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
          </Reveal>

        </div>

      </section>

      {/* UX PROCESS */}
      <section className="case-visual-section">

        <div className="case-section-label">
          <span>( 02 )</span>
          <span>UX / WIREFRAMING</span>
        </div>

        <div className="case-visual-heading">
          <AnimatedTitle
            lines={[
              "FROM IDEA",
              <>
                TO <span>WIREFRAMES.</span>
              </>,
            ]}
          />

          <Reveal as="p" delay={200}>
            I started by defining the structure of the
            application in Figma, mapping the main
            user journeys and organizing the key screens
            before moving into development.
          </Reveal>
        </div>

          <img className="case-image case-wireframes-main reveal--clip"
            src="/images/ux-flow.webp"
            loading="lazy"
            decoding="async"
            alt="NTO Booking wireframe flow: welcome, register, discover, search, book and confirmation"
          />
    

      </section>

      {/* DEVELOPMENT */}
      <section className="case-development">

        <div className="case-section-label">
          <span>( 03 )</span>
          <span>DEVELOPMENT</span>
        </div>

        <div className="case-development-content">
          <AnimatedTitle
            lines={[
              "FROM DESIGN",
              <>
                TO <span>CODE.</span>
              </>,
            ]}
          />

          <Reveal as="p" delay={200}>
            Once the structure and user experience
            were defined, I brought the concept to life
            by developing the complete application.
            I worked across the frontend, backend,
            database and external integrations.
          </Reveal>
        </div>

              <div className="devices">

          <LaptopMockup
            src="/videos/nto-booking-demo.mp4"
            poster="/images/nto-booking-demo-poster.webp"
            label="SCREEN RECORDING — LOGIN, BOOKING AND GOOGLE CALENDAR SYNC"
          />

          <PhoneMockup
            className="phone--discover"
            src="/images/nto-phone-discover.webp"
            alt="NTO Booking discover screen on mobile"
            delay={200}
          />

          <PhoneMockup
            className="phone--shop"
            src="/images/nto-phone-shop.webp"
            alt="NTO Booking shop screen on mobile"
            delay={350}
          />

        </div>

        <div className="case-tech-list">
          <Reveal as="span" delay={0}>REACT</Reveal>
          <Reveal as="span" delay={80}>NODE.JS</Reveal>
          <Reveal as="span" delay={160}>EXPRESS</Reveal>
          <Reveal as="span" delay={240}>POSTGRESQL</Reveal>
          <Reveal as="span" delay={320}>GOOGLE OAUTH</Reveal>
          <Reveal as="span" delay={400}>GOOGLE CALENDAR</Reveal>
        </div>

      </section>

      {/* FEATURES */}
      <section className="case-features">

        <div className="case-section-label">
          <span>( 04 )</span>
          <span>KEY FEATURES</span>
        </div>

        <div className="case-features-grid">

          <Reveal delay={0}>
            <span>01</span>
            <h3>Authentication</h3>
            <p>
              Account registration, login and
              Google authentication.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <span>02</span>
            <h3>Tattoo Discovery</h3>
            <p>
              Browse tattoo designs and explore
              available options.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <span>03</span>
            <h3>Appointment Booking</h3>
            <p>
              Select dates and manage tattoo
              appointment reservations.
            </p>
          </Reveal>

          <Reveal delay={0}>
            <span>04</span>
            <h3>Google Calendar</h3>
            <p>
              Synchronize appointments with
              Google Calendar.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <span>05</span>
            <h3>User Profiles</h3>
            <p>
              Manage personal information
              and account details.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <span>06</span>
            <h3>Admin Dashboard</h3>
            <p>
              Manage registered users and
              appointments.
            </p>
          </Reveal>

        </div>

      </section>

      {/* FOOTER */}
      <section className="case-footer">

        <span>END OF PROJECT — 01</span>

        <AnimatedTitle
          lines={[
            "THANK",
            <>
              YOU<span>.</span>
            </>,
          ]}
        />

        <Reveal className="case-footer-links">
          <a
            href="https://github.com/carlgomezro-spec/nto-booking-app"
            target="_blank"
            rel="noreferrer"
          >
            VIEW ON GITHUB ↗
          </a>
          <Link to="/projects/metropolis">NEXT PROJECT: METROPOLIS UNDERGROUND →</Link>
          <Link to="/#projects">ALL PROJECTS</Link>
        </Reveal>

      </section>

    </main>
  );
}

export default TattooBooking;