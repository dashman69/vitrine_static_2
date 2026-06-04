// components/ui/SectionHeader.tsx
type Props = {
  eyebrow:   string;
  title:     string;
  subtitle?: string;
  dark?:     boolean;
};

export function SectionHeader({ eyebrow, title, subtitle, dark = false }: Props) {
  return (
    <div className="mb-10">
      <p className="text-[var(--gold)] text-[10px] uppercase tracking-[3px] mb-2">
        {eyebrow}
      </p>
      <h2 className={`font-serif text-2xl lg:text-3xl mb-3 ${dark ? "text-white" : "text-[var(--noir)]"}`}>
        {title}
      </h2>
      <div className="w-10 h-px bg-[var(--gold)]" />
      {subtitle && (
        <p className={`mt-3 text-[13px] font-light ${dark ? "text-[#666]" : "text-[var(--muted)]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
