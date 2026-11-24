import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de ruta: sube arriba, o va a la sección indicada en el hash (#about…)
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      // "instant" evita que el scroll suave del CSS haga un recorrido visible hasta arriba
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    // Espera a que la nueva página esté pintada antes de buscar la sección
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollManager;