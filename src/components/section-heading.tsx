type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}