"use client";
// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import type { SalonConfig } from "@/config/salon.config";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Galerie",  href: "#galerie"  },
  { label: "Avis",     href: "#avis"     },
  { label: "Contact",  href: "#contact"  },
];

export function Navbar({ config }: { config: SalonConfig }) {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.05)]" : ""
      } bg-[var(--noir)]`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 py-4">

        {/* Logo */}
        <a
          href="#"
          className="font-serif text-[var(--gold)] text-xl tracking-[3px] uppercase select-none"
        >
          {config.name}
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] uppercase tracking-[1.5px] text-[#999] hover:text-[var(--gold)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={config.booking.url || "#contact"}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--noir)] text-[11px] uppercase tracking-[1.5px] font-medium px-5 py-2.5 transition-colors duration-200"
        >
          {config.booking.label}
        </a>

        {/* Burger mobile */}
        <button
          className="md:hidden text-[#999] hover:text-[var(--gold)] transition-colors p-1"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open
              ? <><path d="M4 4l14 14M18 4L4 18" /></>
              : <><path d="M4 7h14M4 12h14M4 17h14" /></>
            }
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-[#111] border-t border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-5 list-none">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[13px] uppercase tracking-[1.5px] text-[#999] hover:text-[var(--gold)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={config.booking.url || "#contact"}
            className="mt-6 block text-center bg-[var(--gold)] text-[var(--noir)] text-[11px] uppercase tracking-[1.5px] font-medium py-3"
          >
            {config.booking.label}
          </a>
        </nav>
      )}
    </header>
  );
}
