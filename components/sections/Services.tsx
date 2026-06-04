// components/sections/Services.tsx
import type { SalonConfig } from "@/config/salon.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS: Record<string, React.ReactNode> = {
  scissors: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
      <circle cx="6"  cy="6"  r="3" /><circle cx="6" cy="18" r="3" />
      <path strokeLinecap="round" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </svg>
  ),
  palette: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07A9.93 9.93 0 0012 22c1.1 0 2-.9 2-2v-1c0-.55.45-1 1-1h1c2.76 0 5-2.24 5-5 0-5.52-4.03-10-9-10z" />
      <circle cx="8.5"  cy="10.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="7.5"  r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  sparkles: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path strokeLinecap="round" d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" d="M12 21C12 21 3 14.5 3 8.5 3 5.42 5.42 3 8.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 6-9 12.5-9 12.5H12z" />
    </svg>
  ),
};

export function Services({ config }: { config: SalonConfig }) {
  return (
    <section id="services" className="bg-white py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Nos expertises"
          title="Services & Tarifs"
          subtitle="Chaque prestation est pensée pour sublimer votre style unique."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {config.services.map((s, i) => (
            <div
              key={i}
              className="group border border-[#eee] hover:border-[var(--gold-light)] p-6 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-[var(--gold-light)] group-hover:bg-[var(--gold)]/5 flex items-center justify-center mb-5 text-[var(--gold)] transition-colors">
                {ICONS[s.icon] ?? ICONS.sparkles}
              </div>
              <p className="font-serif text-[15px] mb-2">{s.name}</p>
              <p className="text-[var(--muted)] text-[12px] leading-6 mb-4">{s.description}</p>
              <p className="text-[var(--gold)] text-[13px] font-medium">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
