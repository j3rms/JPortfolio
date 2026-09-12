import { experience } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Work that had to be right"
          description="Operational reporting, data quality, and automation inside a real procurement environment."
        />

        <div className="relative mx-auto mt-14 max-w-3xl pl-6 sm:pl-8">
          <div className="absolute top-2 bottom-2 left-0 w-px bg-border" aria-hidden="true" />
          <span
            className="absolute top-3 left-0 size-2.5 -translate-x-1/2 rounded-full bg-accent"
            aria-hidden="true"
          />

          <article className="rounded-2xl bg-card p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {experience.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm text-foreground">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{experience.summary}</p>

            <ul className="mt-6 space-y-3 text-sm leading-relaxed">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
