import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { type Project, type ProjectFilter, projectFilters, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/components/site/section-heading";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="scroll-mt-28 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected work"
          description="Software, analytics, and the operational systems in between."
        />

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "min-h-11 rounded-full px-4 text-sm transition-colors duration-150",
                filter === item
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <Card key={project.slug} className="flex flex-col">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                      {project.role}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="muted">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 ? (
                    <Badge variant="muted">+{project.technologies.length - 4}</Badge>
                  ) : null}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSelected(project)}
                  >
                    View details
                  </Button>
                  <ProjectLinks project={project} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        {selected ? (
          <DialogContent>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {selected.role}
            </p>
            <DialogTitle className="mt-1">{selected.name}</DialogTitle>
            <DialogDescription className="mt-2">{selected.description}</DialogDescription>
            <div className="mt-5">
              <p className="text-sm font-medium">Key features</p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {selected.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {selected.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <ProjectLinks project={selected} />
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.githubUrl ? (
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github />
            GitHub
          </a>
        </Button>
      ) : (
        <Button variant="ghost" size="sm" className="rounded-full" disabled>
          <Github />
          Source on request
        </Button>
      )}
      {project.liveUrl ? (
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink />
            Live Demo
          </a>
        </Button>
      ) : null}
    </>
  );
}
