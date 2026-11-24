import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies, getNextProject } from "../data/caseStudies";
import Reveal from "./Reveal";
import AnimatedTitle from "./AnimatedTitle";

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

  const { heroLines, meta, cover, intro, highlights } = project;
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

        <Reveal
          className={`case-cover reveal--clip${cover.fit === "contain" ? " case-cover--contain" : ""}`}
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
        </Reveal>

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

      {/* HIGHLIGHTS */}
      <section className="case-features">

        <div className="case-section-label">
          <span>( 02 )</span>
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
          <Link to={`/projects/${next.slug}`}>NEXT PROJECT: {next.title.toUpperCase()} →</Link>
          <Link to="/#projects">ALL PROJECTS</Link>
        </Reveal>

      </section>

    </main>
  );
}

export default CaseStudy;