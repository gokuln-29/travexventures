export default function SectionHeading({ label, title, subtitle }: { label: string, title: string, subtitle?: string }) {
    return (
        <div className="text-center mb-16 reveal">
            <span className="inline-block font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-6">
                — {label} —
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-brand-cream leading-snug mb-8">
                {title}
            </h2>
            <div className="mx-auto w-[60px] h-px bg-brand-gold" />
            {subtitle && (
                <p className="mt-8 text-brand-cream/70 font-light text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
