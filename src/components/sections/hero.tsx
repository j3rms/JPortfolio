import { Link } from "@tanstack/react-router";
import { ArrowRight, FileDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { heroBadges, profile } from "@/data/portfolio";
import { scrollToId } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="hero-wash pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.fullName}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base font-medium text-foreground sm:text-lg"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full" onClick={() => scrollToId("projects")}>
              View My Work
              <ArrowRight />
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-card">
              <Link to="/resume">
                <FileDown />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <Badge key={badge} variant="muted">
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}

function HeroStage() {
  return (
    <div className="relative h-[420px] sm:h-[460px]">
      <article className="float-a absolute top-2 right-2 left-8 rounded-2xl bg-card p-5 shadow-card sm:left-16">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          Procure Ops
        </p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Invoice accuracy</p>
            <p className="mt-1 font-display text-3xl font-medium tabular-nums">99.4%</p>
          </div>
          <Badge variant="accent">Live</Badge>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-11/12 rounded-full bg-accent" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">PO lines reconciled this cycle</p>
      </article>

      <article className="float-b absolute top-40 left-0 w-[78%] rounded-2xl bg-card p-4 shadow-card sm:w-72">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          Requirements
        </p>
        <ol className="mt-3 space-y-2 text-sm">
          {["BRD", "RTM", "UAT"].map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-md bg-muted font-mono text-[10px] text-muted-foreground">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </article>

      <article className="float-c absolute right-0 bottom-2 w-[70%] rounded-2xl bg-card p-4 shadow-card sm:w-64">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          IoT  ·  Crop bay
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm">Nutrient cycle</span>
          <span className="font-mono text-xs text-accent">OK</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="h-8 rounded-md bg-muted"
              style={{ opacity: 0.45 + (i % 4) * 0.15 }}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
