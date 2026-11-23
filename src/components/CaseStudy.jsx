import { Fragment, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies, getNextProject } from "../data/caseStudies";

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
  const longTitle = Math.max(...heroLines.map((l) => l.length)) > 8;

  return (
    <main className="project-page">

      {/* HERO */}
      <section className="case-hero">

        <div className="case-heading">
          <span>SELECTED WORK — {project.number}</span>
          <span>{project.year}</span>
        </div>

        <h1 className={longTitle ? "case-title-long" : undefined}>
          {heroLines.map((line, i) => (
            <Fragment key={line}>
              {line}
              {i < heroLines.length - 1 ? <br /> : <span>.</span>}
            </Fragment>
          ))}
        </h1>

        <div className="case-meta" style={{ "--cols": meta.length }}>
          {meta.map((group) => (
            <div key={group.label}>
              <span>{group.label}</span>
              {group.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>

        <div className={`case-cover${cover.fit === "contain" ? " case-cover--contain" : ""}`}>
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

      </section>

      {/* INTRODUCTION */}
      <section className="case-intro">

        <div className="case-section-label">
          <span>( 01 )</span>
          <span>THE PROJECT</span>
        </div>

        <div className="case-intro-content">

          <h2>
            {intro.headline.map((line, i) => (
              <Fragment key={line}>
                {line.split(/(\{[^}]+\})/).map((part, j) =>
                  part.startsWith("{") ? (
                    <span key={j}>{part.slice(1, -1)}</span>
                  ) : (
                    part
                  )
                )}
                {i < intro.headline.length - 1 && <br />}
              </Fragment>
            ))}
          </h2>

          <div className="case-intro-text">
            {intro.paragraphs.map((text) => (
              <p key={text}>{text}</p>
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
            <div key={item.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* FOOTER */}
      <section className="case-footer">

        <span>END OF PROJECT — {project.number}</span>

        <h2>
          THANK
          <br />
          YOU<span>.</span>
        </h2>

        <div className="case-footer-links">
          <Link to={`/projects/${next.slug}`}>NEXT PROJECT: {next.title.toUpperCase()} →</Link>
          <Link to="/#projects">ALL PROJECTS</Link>
        </div>

      </section>

    </main>
  );
}

export default CaseStudy;