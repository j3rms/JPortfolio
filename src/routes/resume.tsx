import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";
import { experience, profile, projects, skillGroups } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/site-shell";

export const Route = createFileRoute("/resume")({ component: ResumePage });

function ResumePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/">
              <ArrowLeft />
              Back
            </Link>
          </Button>
          <Button className="rounded-full" onClick={() => window.print()}>
            <Printer />
            Print / Save PDF
          </Button>
        </div>

        <article className="rounded-2xl bg-card p-6 shadow-card sm:p-10 print:rounded-none print:bg-white print:p-0 print:shadow-none">
          <header className="border-b border-border pb-6">
            <h1 className="font-display text-4xl font-medium tracking-tight">{profile.fullName}</h1>
            <p className="mt-2 text-sm font-medium">{profile.headline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{profile.summary}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {profile.location}  ·  {profile.email}  ·  {profile.availability}
            </p>
          </header>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Education
            </h2>
            <p className="mt-2 font-medium">{profile.education.degree}</p>
            <p className="text-sm text-muted-foreground">{profile.education.honors.join("  ·  ")}</p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Experience
            </h2>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium">
                {experience.role}, {experience.company}
              </p>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Tools: {experience.stack.join(", ")}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Selected projects
            </h2>
            <div className="mt-3 space-y-5">
              {projects.map((project) => (
                <div key={project.slug}>
                  <p className="font-medium">
                    {project.name}  ·  {project.role}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-1 text-sm">{project.features.join("  ·  ")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Skills
            </h2>
            <div className="mt-3 space-y-2 text-sm">
              {skillGroups.map((group) => (
                <p key={group.id}>
                  <span className="font-medium">{group.title}: </span>
                  <span className="text-muted-foreground">
                    {group.items.map((item) => item.name).join(", ")}
                  </span>
                </p>
              ))}
            </div>
          </section>
        </article>
      </div>
    </SiteShell>
  );
}
