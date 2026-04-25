import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Router from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;

    const applyGpuLiteMode = () => {
      const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;
      const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const memory = navigator.deviceMemory ?? 8;
      const cores = navigator.hardwareConcurrency ?? 8;
      const saveData = Boolean(navigator.connection?.saveData);

      const lowEndDevice = memory <= 4 || cores <= 6 || saveData;
      const enableGpuLite = isMobileViewport && isCoarsePointer && lowEndDevice;

      root.classList.toggle("gpu-lite", enableGpuLite);
    };

    applyGpuLiteMode();
    window.addEventListener("resize", applyGpuLiteMode);

    return () => {
      window.removeEventListener("resize", applyGpuLiteMode);
      root.classList.remove("gpu-lite");
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell relative isolate min-h-screen bg-[var(--apple-bg)] pb-24 text-[var(--apple-text)] md:pb-0">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div aria-hidden className="top-light-main" />
        <div aria-hidden className="top-light-accent" />

        <div className="relative z-10">
          <Navbar />
          <div id="main-content" tabIndex={-1}>
            <Router />
          </div>
          <Footer />
        </div>

        <div className="fixed inset-x-0 bottom-3 z-[60] px-4 md:hidden">
          <Link to="/contact" className="block">
            <button type="button" className="mobile-sticky-cta w-full">
              Book Demo
            </button>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
