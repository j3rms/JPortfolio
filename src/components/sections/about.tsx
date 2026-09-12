import {
  BarChart3,
  ClipboardList,
  Code2,
  Kanban,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aboutBody, profile, whatIBring } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";

const icons: Record<string, LucideIcon> = {
  ClipboardList,
  BarChart3,
  Code2,
  Workflow,
  Kanban,
};

export function About() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Business problems, technical follow-through"
          description="A graduate who can gather the requirement, inspect the data, and still ship the system."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl bg-card p-6 shadow-card lg:sticky lg:top-28">
            <p className="font-display text-4xl font-medium tracking-tight">JQ</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {profile.education.degree}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.education.honors.map((honor) => (
                <li
                  key={honor}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {honor}
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="text-right">Analysis, data, software</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="text-right">{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="text-right">{profile.availability}</dd>
              </div>
            </dl>
          </aside>

          <div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground">
              The result is someone who can understand a business requirement and the technical
              implementation it implies — without handing the hard part to someone else.
            </p>
          </div>
        </div>

        <h3 className="mt-16 font-display text-2xl font-medium tracking-tight">What I bring</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {whatIBring.map((item) => {
            const Icon = icons[item.icon] ?? ClipboardList;
            return (
              <Card key={item.title} className="h-full">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="size-4" />
                  </span>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
