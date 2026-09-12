import { useMemo, useState } from "react";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/site/section-heading";

export function Skills() {
  const [groupId, setGroupId] = useState(skillGroups[0]?.id ?? "ba");
  const [active, setActive] = useState<string | null>(null);

  const group = useMemo(
    () => skillGroups.find((item) => item.id === groupId) ?? skillGroups[0],
    [groupId],
  );

  return (
    <section id="skills" className="scroll-mt-28 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="A stack that covers the brief"
          description="Select a category, then a skill — each one is something I have used in coursework, projects, or the internship."
        />

        <div className="mt-10 overflow-x-auto pb-2">
          <div
            className="mx-auto flex w-max min-w-full justify-center gap-2"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillGroups.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={groupId === item.id}
                onClick={() => {
                  setGroupId(item.id);
                  setActive(null);
                }}
                className={cn(
                  "min-h-11 shrink-0 rounded-full px-4 text-sm transition-colors duration-150",
                  groupId === item.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground",
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-card p-5 shadow-card sm:p-8">
          <div className="flex flex-wrap gap-2">
            {group?.items.map((skill) => {
              const selected = active === skill.name;
              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => setActive(selected ? null : skill.name)}
                  aria-pressed={selected}
                  className={cn(
                    "min-h-11 rounded-full px-3.5 text-sm transition-colors duration-150",
                    selected
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground hover:bg-secondary",
                  )}
                >
                  {skill.name}
                </button>
              );
            })}
          </div>

          <div className="mt-6 min-h-16 rounded-xl bg-muted/70 px-4 py-3">
            {active ? (
              <p className="text-sm leading-relaxed">
                <span className="font-medium">{active}. </span>
                {group?.items.find((item) => item.name === active)?.blurb}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Choose a skill to see how I use it.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
