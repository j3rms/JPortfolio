import { useRouterState } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { scrollToId } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  function goContact() {
    if (pathname === "/") {
      scrollToId("contact");
      return;
    }
    window.location.assign("/#contact");
  }

  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.fullName}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
          <button
            type="button"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </button>
          <button
            type="button"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={goContact}
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
