import { Link, useRouterState } from "@tanstack/react-router";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { useTheme } from "@/lib/theme";
import { cn, scrollToId } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { theme, toggle, mounted } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function goTo(id: string) {
    setOpen(false);
    if (isHome) {
      scrollToId(id);
      return;
    }
    window.location.assign(`/#${id}`);
  }

  return (
    <header className="no-print pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center p-3 sm:p-4">
      <nav
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-full border border-border bg-background/80 px-2 py-1.5 pl-4 shadow-card backdrop-blur-md",
          scrolled && "bg-background/92",
        )}
        aria-label="Primary"
      >
        <Link
          to="/"
          className="font-display text-[15px] font-medium tracking-tight text-foreground"
          onClick={() => {
            setOpen(false);
            if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {profile.shortName}
        </Link>

        <ul className="mx-auto hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goTo(item.id)}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors duration-150",
                  active === item.id && isHome
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted && theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <div className="hidden sm:block">
            <Button asChild size="sm" className="rounded-full">
              <Link to="/resume">
                <FileText />
                Resume
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="pointer-events-auto absolute inset-x-3 top-16 z-50 rounded-2xl border border-border bg-card p-3 shadow-card lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={cn(
                    "flex min-h-11 w-full items-center rounded-xl px-3 text-left text-sm",
                    active === item.id ? "bg-muted text-foreground" : "text-foreground",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <Button asChild className="w-full rounded-xl">
                <Link to="/resume" onClick={() => setOpen(false)}>
                  <FileText />
                  Resume
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
