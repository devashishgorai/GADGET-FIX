import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
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
      <div className="app-shell relative isolate min-h-screen bg-[var(--apple-bg)] text-[var(--apple-text)]">
        <div aria-hidden className="top-light-main" />
        <div aria-hidden className="top-light-accent" />

        <div className="relative z-10">
          <Navbar />
          <Router />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
