// components/sections/Gallery.tsx
import Image from "next/image";
import type { SalonConfig } from "@/config/salon.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Placeholder SVG affiché si l'image n'existe pas encore
function Placeholder({ label, beforeAfter }: { label: string; beforeAfter: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#242424] flex items-center justify-center">
      <svg className="text-[#333]" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      {beforeAfter && (
        <span className="absolute top-3 right-3 bg-[var(--gold)] text-[var(--noir)] text-[9px] uppercase tracking-[1px] px-2.5 py-1">
          Avant / Après
        </span>
      )}
      <p className="absolute bottom-3 left-3 text-white/40 text-[11px] tracking-wide">{label}</p>
    </div>
  );
}

function GalleryItem({
  item,
  className,
}: {
  item: SalonConfig["gallery"][number];
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden group ${className ?? ""}`}>
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent pointer-events-none" />
      {item.beforeAfter && (
        <span className="absolute top-3 right-3 bg-[var(--gold)] text-[var(--noir)] text-[9px] uppercase tracking-[1px] px-2.5 py-1">
          Avant / Après
        </span>
      )}
      <p className="absolute bottom-3 left-3 text-white text-[11px] tracking-wide opacity-75">
        {item.label}
      </p>
    </div>
  );
}

export function Gallery({ config }: { config: SalonConfig }) {
  const [first, ...rest] = config.gallery;

  return (
    <section id="galerie" className="bg-[var(--noir-soft)] py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Avant / Après"
          title="Notre Galerie"
          subtitle="Nos réalisations parlent d'elles-mêmes."
          dark
        />
        
        {/* Grille asymétrique : grande image à gauche, 4 petites à droite */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[320px] lg:h-[420px]">
          {first && (
            <GalleryItem
              item={first}
              className="col-span-1 row-span-2 bg-[#2a2a2a]"
            />
          )}
          {rest.slice(0, 4).map((item, i) => (
            <GalleryItem
              key={i}
              item={item}
              className="bg-[#2a2a2a]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
