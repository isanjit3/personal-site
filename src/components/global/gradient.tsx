"use client";

import { useEffect } from "react";

export default function GradientReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const gradientLayer = document.getElementById("gradient-layer");

    const handleMouseMove = (e: MouseEvent) => {
      if (gradientLayer) {
        gradientLayer.style.setProperty("--mouse-x", `${e.clientX}px`);
        gradientLayer.style.setProperty("--mouse-y", `${e.clientY}px`);
        gradientLayer.style.opacity = "1";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (gradientLayer) {
        gradientLayer.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
        gradientLayer.style.transform = "scale(0)";
      }
    };

    const handleMouseOut = () => {
      if (gradientLayer) {
        gradientLayer.style.transform = "scale(1)";
      }
    };

    // TypeScript requires a cast to properly recognize event types
    document.addEventListener("mousemove", handleMouseMove as EventListener);
    document.querySelectorAll(".shrink-hover").forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver as EventListener);
      el.addEventListener("mouseout", handleMouseOut as EventListener);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as EventListener);
      document.querySelectorAll(".shrink-hover").forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver as EventListener);
        el.removeEventListener("mouseout", handleMouseOut as EventListener);
      });
    };
  }, []);

  return (
    <div className="relative">
      <div id="gradient-layer" className="fixed inset-0 pointer-events-none z-0 opacity-0"></div>
      {children}
    </div>
  );
}