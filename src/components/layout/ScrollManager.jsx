import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) {
        const target = document.querySelector(hash);

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    }, 40);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
