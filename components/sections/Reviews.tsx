// components/sections/Reviews.tsx
import type { SalonConfig } from "@/config/salon.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Reviews({ config }: { config: SalonConfig }) {
  return (
    <section id="avis" className="bg-[var(--cream)] py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Ce qu'elles disent"
          title="Avis Clients"
          subtitle={`${config.reviews.length} avis vérifiés`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.reviews.map((r, i) => (
            <article key={i} className="bg-white border border-[#eee] p-6">
              {/* Étoiles */}
              <p className="text-[var(--gold)] text-[13px] tracking-[3px] mb-4" aria-label={`${r.rating} étoiles sur 5`}>
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>

              <blockquote className="text-[12px] text-[#555] leading-7 italic mb-5">
                "{r.text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-[var(--gold-light)] flex items-center justify-center text-[11px] font-medium text-[#7a6040] shrink-0"
                  aria-hidden
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-[12px] font-medium">{r.name}</p>
                  <p className="text-[11px] text-[var(--muted)]">{r.source} · {r.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
