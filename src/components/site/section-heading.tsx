import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <p className="mb-4 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
        {index}
        {eyebrow ? `  /  ${eyebrow}` : ""}
      </p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
