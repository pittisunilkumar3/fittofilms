"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#vision", label: "Vision" },
  { href: "#pillars", label: "Categories" },
  { href: "#journey", label: "Journey" },
  { href: "#awards", label: "Awards" },
  { href: "#rules", label: "Rules" },
  { href: "#challenges", label: "Enter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle background deepen on scroll (as in the original site)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        className="nav"
        style={
          scrolled ? { background: "rgba(245,241,234,0.97)" } : undefined
        }
      >
        <div className="nav-inner">
          <a href="#" className="logo">
            FIT TO FILMS<span className="tm">™</span>
          </a>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#pillars" className="nav-cta">
            Enter Now
          </a>
          <button
            type="button"
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bars" />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`nav-menu${open ? " open" : ""}`}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#pillars"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Enter Now
        </a>
      </div>
    </>
  );
}
