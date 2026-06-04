// components/sections/Hero.tsx
import type { SalonConfig } from "@/config/salon.config";

export function Hero({ config }: { config: SalonConfig }) {
  const { promo } = config;

  return (
    <section className="relative bg-[var(--noir)] overflow-hidden">
      {/* Cercles décoratifs */}
      <span aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full border border-[var(--gold)]/10" />
      <span aria-hidden className="pointer-events-none absolute top-0 -right-6  w-[280px] h-[280px] rounded-full border border-[var(--gold)]/05" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 flex flex-col lg:flex-row items-start lg:items-center gap-14">

        {/* Texte */}
        <div className="flex-1">
          <p className="anim-fade-up text-[var(--gold)] text-[11px] uppercase tracking-[3px] mb-6">
            {config.address}
          </p>
          <h1 className="anim-fade-up anim-d1 font-serif text-white text-4xl lg:text-5xl xl:text-[56px] leading-[1.1] mb-6">
            {config.tagline.split("beauté").map((part, i) =>
              i === 0
                ? <span key={i}>{part}beauté </span>
                : <em key={i} className="text-[var(--gold)] not-italic">{part}</em>
            )}
          </h1>
          <p className="anim-fade-up anim-d2 text-[#777] text-[14px] font-light leading-[1.85] max-w-md mb-10">
            {config.description}
          </p>
          <div className="anim-fade-up anim-d3 flex flex-wrap gap-4">
            <a
              href={config.booking.url || "#contact"}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--noir)] text-[11px] uppercase tracking-[2px] font-medium px-8 py-4 transition-colors duration-200"
            >
              {config.booking.label}
            </a>
            <a
              href="#services"
              className="inline-block border border-white/15 hover:border-white/30 text-[#bbb] hover:text-white text-[11px] uppercase tracking-[2px] px-8 py-4 transition-colors duration-200"
            >
              Découvrir
            </a>
          </div>
        </div>

        {/* Carte promo */}
        {promo.active && (
          <div className="anim-fade-up anim-d4 w-full lg:w-auto shrink-0 lg:min-w-[230px] border border-[var(--gold)]/25 bg-[var(--gold)]/8 p-7 backdrop-blur-sm">
            <span className="inline-block bg-[var(--gold)] text-[var(--noir)] text-[10px] font-medium uppercase tracking-[1px] px-3 py-1 mb-4">
              Promo du mois
            </span>
            <p className="font-serif text-white text-lg mb-2">{promo.title}</p>
            <p className="text-[#777] text-[12px] leading-6 mb-4">{promo.description}</p>
            <p className="font-serif text-[var(--gold)] text-3xl">
              {promo.priceCurrent} €
              <span className="font-sans text-[13px] text-[#555] line-through ml-2">
                {promo.priceOriginal} €
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
