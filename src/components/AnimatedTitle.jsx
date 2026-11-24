import { useEffect, useRef } from "react";

// Titular que sube línea a línea desde una máscara.
// lines: array con una entrada por línea (texto o JSX).
// onLoad: true para animar al cargar (arriba de la página); false al entrar en pantalla.
function AnimatedTitle({
  as: Tag = "h2",
  lines,
  className = "",
  delay = 0,
  onLoad = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (onLoad) {
      const frame = requestAnimationFrame(() => el.classList.add("is-visible"));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onLoad]);

  return (
    <Tag
      ref={ref}
      className={`split-title ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {lines.map((line, i) => (
        <span className="split-line" key={i}>
          <span className="split-line-inner" style={{ "--i": i }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export default AnimatedTitle;