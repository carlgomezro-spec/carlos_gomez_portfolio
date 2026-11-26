import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies, getNextProject } from "../data/caseStudies";
import Reveal from "./Reveal";
import AnimatedTitle from "./AnimatedTitle";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";

function CaseStudy() {
  const { slug } = useParams();
  const project = caseStudies.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} — Carlos Gómez`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const { heroLines, meta, cover, showcase, wireframes, gallery, embed, github, intro, highlights } = project;

  // Numeración de secciones: la introducción es siempre la 01
  let sectionNumber = 1;
  const wireframesNumber = wireframes ? String(++sectionNumber).padStart(2, "0") : null;
  const galleryNumber = gallery ? String(++sectionNumber).padStart(2, "0") : null;
  const embedNumber = embed ? String(++sectionNumber).padStart(2, "0") : null;
  const highlightsNumber = String(++sectionNumber).padStart(2, "0");
  const next = getNextProject(project.slug);
  const longestLine = Math.max(...heroLines.map((l) => l.length));

  return (
    <main className="project-page">

      {/* HERO */}
      <section className="case-hero" style={{ "--chars": longestLine }}>

        <div className="case-heading">
          <span>SELECTED WORK — {project.number}</span>
          <span>{project.year}</span>
        </div>

        <AnimatedTitle
          as="h1"
          onLoad
          lines={heroLines.map((line, i) =>
            i === heroLines.length - 1 ? (
              <>
                {line}
                <span>.</span>
              </>
            ) : (
              line
            )
          )}
        />

        <div className="case-meta" style={{ "--cols": meta.length }}>
          {meta.map((group, i) => (
            <Reveal key={group.label} delay={i * 120}>
              <span>{group.label}</span>
              {group.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Reveal>
          ))}
        </div>

        {showcase ? (
          <Reveal className="case-showcase">
            <div className="case-showcase-panel" style={{ background: showcase.tint }}>
              {showcase.image ? (
                <img
                  className={`case-showcase-sheet${showcase.image.narrow ? " case-showcase-sheet--narrow" : ""}`}
                  src={showcase.image.src}
                  alt={showcase.image.alt}
                  fetchPriority="high"
                />
              ) : (
                <div className="devices devices--bare">
                  <LaptopMockup image={showcase.laptop.src} alt={showcase.laptop.alt} />
                  <PhoneMockup
                    className="phone--discover"
                    src={showcase.phones[0].src}
                    alt={showcase.phones[0].alt}
                    delay={200}
                  />
                  <PhoneMockup
                    className="phone--shop"
                    src={showcase.phones[1].src}
                    alt={showcase.phones[1].alt}
                    delay={350}
                  />
                </div>
              )}
            </div>
          </Reveal>
        ) : (
                   <div
            className={`case-cover${cover.fit === "contain" ? " case-cover--contain" : ""}${cover.dark ? " case-cover--dark" : ""}`}
          >
            <img
              src={cover.src}
              alt={cover.alt}
              fetchPriority="high"
              style={{
                objectFit: cover.fit || "cover",
                objectPosition: cover.position || "center",
              }}
            />
          </div>
        )}

      </section>

      {/* INTRODUCTION */}
      <section className="case-intro">

        <div className="case-section-label">
          <span>( 01 )</span>
          <span>THE PROJECT</span>
        </div>

        <div className="case-intro-content">

          <AnimatedTitle
            lines={intro.headline.map((line) =>
              line.split(/(\{[^}]+\})/).map((part, j) =>
                part.startsWith("{") ? <span key={j}>{part.slice(1, -1)}</span> : part
              )
            )}
          />

          <div className="case-intro-text">
            {intro.paragraphs.map((text, i) => (
              <Reveal as="p" key={text} delay={i * 150}>
                {text}
              </Reveal>
            ))}
          </div>

        </div>

      </section>

      {/* WIREFRAMES */}
      {wireframes && (
        <section className="case-visual-section">

          <div className="case-section-label">
            <span>( {wireframesNumber} )</span>
            <span>{wireframes.label}</span>
          </div>

          <div className="case-visual-heading">
            <AnimatedTitle
              lines={wireframes.heading.map((line) =>
                line.split(/(\{[^}]+\})/).map((part, j) =>
                  part.startsWith("{") ? <span key={j}>{part.slice(1, -1)}</span> : part
                )
              )}
            />

            <Reveal as="p" delay={200}>
              {wireframes.text}
            </Reveal>
          </div>

                  <div className="case-image case-wireframes-main case-wireframes-main--board">
            <img
              src={wireframes.image.src}
              alt={wireframes.image.alt}
              loading="lazy"
              decoding="async"
            />
          </div>

        </section>
      )}

      {/* GALLERY */}
      {gallery && (
        <section className="case-gallery">

          <div className="case-section-label">
            <span>( {galleryNumber} )</span>
            <span>{gallery.label}</span>
          </div>

          <div className={`case-gallery-grid${gallery.variant ? ` case-gallery-grid--${gallery.variant}` : ""}`}>
            {gallery.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 150}>
                <div className="case-gallery-image">
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <span className="case-gallery-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

        </section>
      )}

      {/* EMBED (Behance) */}
{embed && (
  <section className="case-embed">

    <div className="case-section-label">
      <span>( {embedNumber} )</span>
      <span>{embed.label}</span>
    </div>

    <Reveal className="case-embed-frame">
      <iframe
        src={embed.src}
        title={embed.title}
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      />
    </Reveal>

    <a className="case-embed-link" href={embed.href} target="_blank" rel="noreferrer">
      OPEN ON BEHANCE ↗
    </a>

  </section>
)}

      {/* HIGHLIGHTS */}
      <section className="case-features">

        <div className="case-section-label">
          <span>( {highlightsNumber} )</span>
          <span>{highlights.label}</span>
        </div>

        <div className="case-features-grid">
          {highlights.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 120}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

      </section>

      {/* FOOTER */}
      <section className="case-footer">

        <span>END OF PROJECT — {project.number}</span>

        <AnimatedTitle
          lines={[
            "THANK",
            <>
              YOU<span>.</span>
            </>,
          ]}
        />

        <Reveal className="case-footer-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              VIEW ON GITHUB ↗
            </a>
          )}
          <Link to={`/projects/${next.slug}`}>NEXT PROJECT: {next.title.toUpperCase()} →</Link>
          <Link to="/#projects">ALL PROJECTS</Link>
        </Reveal>

      </section>

    </main>
  );
}

export default CaseStudy;