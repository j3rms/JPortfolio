import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/section-heading";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(12, "A little more context helps"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Could not copy email");
    }
  }

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client");
    form.reset();
  }

  return (
    <section id="contact" className="scroll-mt-28 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let’s build something useful"
          description="Open to analyst, data, and full-stack roles — and to projects that need someone who can span the brief and the build."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-2xl bg-card p-6 shadow-card">
            <p className="font-display text-xl font-medium">Direct</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-foreground underline-offset-4 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="mt-0.5">{profile.location}</dd>
                </div>
              </div>
            </dl>
            <Button
              type="button"
              variant="outline"
              className="mt-6 w-full rounded-full"
              onClick={copyEmail}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy email"}
            </Button>
          </aside>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-2xl bg-card p-6 shadow-card"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={form.formState.errors.name?.message}>
                <Input id="name" autoComplete="name" {...form.register("name")} />
              </Field>
              <Field label="Email" htmlFor="email" error={form.formState.errors.email?.message}>
                <Input id="email" type="email" autoComplete="email" {...form.register("email")} />
              </Field>
            </div>
            <Field
              className="mt-4"
              label="Message"
              htmlFor="message"
              error={form.formState.errors.message?.message}
            >
              <Textarea id="message" rows={6} {...form.register("message")} />
            </Field>
            <Button type="submit" className="mt-5 rounded-full" disabled={form.formState.isSubmitting}>
              Send message
              <ArrowUpRight />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="mt-1.5">{children}</div>
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
