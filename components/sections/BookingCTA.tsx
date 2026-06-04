// components/sections/BookingCTA.tsx
import type { SalonConfig } from "@/config/salon.config";

export function BookingCTA({ config }: { config: SalonConfig }) {
  return (
    <section className="bg-[var(--noir)] py-28 px-6 lg:px-10 text-center">
      {/* Trait vertical décoratif */}
      <div aria-hidden className="mx-auto mb-8 w-px h-12 bg-gradient-to-b from-transparent to-[var(--gold)]/40" />

      <p className="text-[var(--gold)] text-[10px] uppercase tracking-[3px] mb-5">
        Prêt à vous sublimer ?
      </p>

      <h2 className="font-serif text-white text-3xl lg:text-4xl mb-4">
        Réservez votre{" "}
        <em className="text-[var(--gold)] not-italic">rendez-vous</em>
      </h2>

      <p className="text-[#555] text-[13px] font-light mb-10 max-w-sm mx-auto leading-7">
        Choisissez votre créneau en ligne — c&apos;est simple et rapide.
      </p>

      <a
        href={config.booking.url || `mailto:${config.email}`}
        target={config.booking.url ? "_blank" : undefined}
        rel="noreferrer"
        className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--noir)] text-[11px] uppercase tracking-[2px] font-medium px-12 py-4 transition-colors duration-200"
      >
        {config.booking.label} →
      </a>

      {config.booking.note && (
        <p className="mt-4 text-[#3a3a3a] text-[11px]">{config.booking.note}</p>
      )}

      {/* Infos rapides */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-[11px] text-[#444] uppercase tracking-[1.5px]">
        <a href={config.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)] transition-colors">
          📍 {config.address}
        </a>
        <a href={`tel:${config.phone.replace(/\s/g,"")}`} className="hover:text-[var(--gold)] transition-colors">
          📞 {config.phone}
        </a>
        <a href={`mailto:${config.email}`} className="hover:text-[var(--gold)] transition-colors">
          ✉ {config.email}
        </a>
      </div>
    </section>
  );
}
