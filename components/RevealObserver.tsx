"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal controller.
 * Any element carrying `data-reveal` (with a `.reveal`, `.reveal-l`,
 * `.reveal-r` or `.reveal-scale` class) fades in when it enters the viewport.
 */
export default function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
