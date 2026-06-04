// components/layout/Footer.tsx
import type { SalonConfig } from "@/config/salon.config";

export function Footer({ config }: { config: SalonConfig }) {
  return (
    <footer id="contact" className="bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Identité */}
        <div>
          <p className="font-serif text-[var(--gold)] text-lg tracking-[3px] uppercase mb-4">
            {config.name}
          </p>
          <p className="text-[#444] text-[13px] leading-7 mb-5">{config.tagline}</p>
          <a
            href={config.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--gold)] hover:opacity-70 text-[11px] tracking-[2px] uppercase transition-opacity"
          >
            Instagram →
          </a>
        </div>

        {/* Horaires */}
        <div>
          <p className="text-[10px] uppercase tracking-[2px] text-[var(--gold)] mb-5">Horaires</p>
          <ul className="space-y-2">
            {config.horaires.map((h) => (
              <li key={h.day} className="flex justify-between text-[12px]">
                <span className="text-[#555]">{h.day}</span>
                <span className={h.hours === "Fermé" ? "text-[#333]" : "text-[#444]"}>
                  {h.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] uppercase tracking-[2px] text-[var(--gold)] mb-5">Nous trouver</p>
          <address className="not-italic space-y-2 text-[13px]">
            <a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-[#444] hover:text-[var(--gold)] transition-colors"
            >
              {config.address}
            </a>
            <a
              href={`tel:${config.phone.replace(/\s/g, "")}`}
              className="block text-[#444] hover:text-[var(--gold)] transition-colors"
            >
              {config.phone}
            </a>
            <a
              href={`mailto:${config.email}`}
              className="block text-[#444] hover:text-[var(--gold)] transition-colors"
            >
              {config.email}
            </a>
          </address>
        </div>
      </div>

      {/* Barre bas */}
      <div className="border-t border-[#111] px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-[#333]">
        <span>© {new Date().getFullYear()} {config.name}. Tous droits réservés.</span>
        <div className="flex gap-5">
          <a href="/mentions-legales" className="hover:text-[#555] transition-colors">Mentions légales</a>
          <a href="/confidentialite"  className="hover:text-[#555] transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
