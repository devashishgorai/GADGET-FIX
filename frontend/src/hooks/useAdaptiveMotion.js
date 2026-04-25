import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function useAdaptiveMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(max-width: 768px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(max-width: 768px)");
    const updateMobileState = (event) => setIsMobile(event.matches);

    setIsMobile(media.matches);

    if (media.addEventListener) {
      media.addEventListener("change", updateMobileState);
      return () => media.removeEventListener("change", updateMobileState);
    }

    media.addListener(updateMobileState);
    return () => media.removeListener(updateMobileState);
  }, []);

  const reduceMotion = Boolean(prefersReducedMotion);
  const simplifyMotion = reduceMotion || isMobile;

  return {
    reduceMotion,
    isMobile,
    simplifyMotion,
  };
}
