import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SiteShell } from "@/components/site/site-shell";
import { scrollToId } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToId(hash), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SiteShell>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </SiteShell>
  );
}
