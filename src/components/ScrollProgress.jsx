import { useEffect, useRef } from "react";

// Barra fina en la parte superior que indica cuánto has bajado en la página
function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      frame = null;
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}

export default ScrollProgress;