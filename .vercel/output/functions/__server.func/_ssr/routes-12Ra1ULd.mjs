import { i as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ClipboardList, b as ArrowUpRight, c as MapPin, d as Github, g as CodeXml, h as Copy, l as Mail, m as ExternalLink, n as Workflow, p as FileDown, t as X, u as Kanban, v as Check, x as ArrowRight, y as ChartColumn } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as experience, c as projectFilters, d as skillGroups, f as whatIBring, i as cn, l as projects, n as SiteShell, o as heroBadges, r as aboutBody, s as profile, t as Button, u as scrollToId } from "./site-shell-zpt7kC4R.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-12Ra1ULd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl bg-card text-card-foreground shadow-card", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-6", className),
		...props
	});
}
function SectionHeading({ index, eyebrow, title, description, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto max-w-2xl text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase",
				children: [index, eyebrow ? `  /  ${eyebrow}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: description
			}) : null
		]
	});
}
var icons = {
	ClipboardList,
	BarChart3: ChartColumn,
	Code2: CodeXml,
	Workflow,
	Kanban
};
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-28 px-6 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "01",
					eyebrow: "About",
					title: "Business problems, technical follow-through",
					description: "A graduate who can gather the requirement, inspect the data, and still ship the system."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-2xl bg-card p-6 shadow-card lg:sticky lg:top-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl font-medium tracking-tight",
								children: "JQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: profile.education.degree
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 flex flex-wrap gap-2",
								children: profile.education.honors.map((honor) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent",
									children: honor
								}, honor))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Focus"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right",
											children: "Analysis, data, software"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Based in"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right",
											children: profile.location
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right",
											children: profile.availability
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5 text-base leading-relaxed text-muted-foreground",
						children: aboutBody.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-foreground",
						children: "The result is someone who can understand a business requirement and the technical implementation it implies — without handing the hard part to someone else."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-16 font-display text-2xl font-medium tracking-tight",
					children: "What I bring"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
					children: whatIBring.map((item) => {
						const Icon = icons[item.icon] ?? ClipboardList;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex h-full flex-col gap-3 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-9 items-center justify-center rounded-lg bg-muted text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: item.body
									})
								]
							})
						}, item.title);
					})
				})
			]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground", "transition-[box-shadow,border-color] duration-150 ease-out", "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-md border border-border bg-card px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground", "transition-[box-shadow,border-color] duration-150 ease-out", "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var schema = object({
	name: string().min(2, "Please enter your name"),
	email: string().email("Enter a valid email"),
	message: string().min(12, "A little more context helps")
});
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			message: ""
		}
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
	function onSubmit(values) {
		const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
		const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
		toast.success("Opening your email client");
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-28 px-6 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "05",
				eyebrow: "Contact",
				title: "Let’s build something useful",
				description: "Open to analyst, data, and full-stack roles — and to projects that need someone who can span the brief and the build."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[0.85fr_1.15fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-2xl bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-medium",
							children: "Direct"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 space-y-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${profile.email}`,
										className: "text-foreground underline-offset-4 hover:underline",
										children: profile.email
									})
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5",
									children: profile.location
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "mt-6 w-full rounded-full",
							onClick: copyEmail,
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy email"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: form.handleSubmit(onSubmit),
					className: "rounded-2xl bg-card p-6 shadow-card",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								htmlFor: "name",
								error: form.formState.errors.name?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									autoComplete: "name",
									...form.register("name")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								htmlFor: "email",
								error: form.formState.errors.email?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									autoComplete: "email",
									...form.register("email")
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							className: "mt-4",
							label: "Message",
							htmlFor: "message",
							error: form.formState.errors.message?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								rows: 6,
								...form.register("message")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "mt-5 rounded-full",
							disabled: form.formState.isSubmitting,
							children: ["Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					]
				})]
			})]
		})
	});
}
function Field({ label, htmlFor, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5",
				children
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-destructive",
				children: error
			}) : null
		]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-border bg-card text-foreground",
		muted: "border-transparent bg-muted text-muted-foreground",
		accent: "border-transparent bg-accent/10 text-accent"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "scroll-mt-28 px-6 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "02",
				eyebrow: "Experience",
				title: "Work that had to be right",
				description: "Operational reporting, data quality, and automation inside a real procurement environment."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-14 max-w-3xl pl-6 sm:pl-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-2 bottom-2 left-0 w-px bg-border",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-3 left-0 size-2.5 -translate-x-1/2 rounded-full bg-accent",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-card p-6 shadow-card sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase",
										children: experience.period
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl font-medium tracking-tight",
										children: experience.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-foreground",
										children: experience.company
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: experience.location
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: experience.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3 text-sm leading-relaxed",
								children: experience.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
								}, bullet))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: experience.stack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: tech }, tech))
							})
						]
					})
				]
			})]
		})
	});
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 12,
		filter: "blur(4px)"
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)"
	}
};
function Hero() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-wash pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grid pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduce ? false : "hidden",
					animate: "visible",
					variants: { visible: { transition: { staggerChildren: reduce ? 0 : .08 } } },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "mb-5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2.5 rounded-full bg-accent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase",
								children: profile.availability
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							variants: fadeUp,
							className: "font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: profile.fullName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mt-4 text-base font-medium text-foreground sm:text-lg",
							children: profile.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: profile.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "rounded-full",
								onClick: () => scrollToId("projects"),
								children: ["View My Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-full bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/resume",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, {}), "Download Resume"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							className: "mt-8 flex flex-wrap gap-2",
							children: heroBadges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: badge
							}, badge))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-md lg:max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStage, {})
				})]
			})
		]
	});
}
function HeroStage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[420px] sm:h-[460px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "float-a absolute top-2 right-2 left-8 rounded-2xl bg-card p-5 shadow-card sm:left-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
						children: "Procure Ops"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Invoice accuracy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-3xl font-medium tabular-nums",
							children: "99.4%"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "accent",
							children: "Live"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-11/12 rounded-full bg-accent" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "PO lines reconciled this cycle"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "float-b absolute top-40 left-0 w-[78%] rounded-2xl bg-card p-4 shadow-card sm:w-72",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
					children: "Requirements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						"BRD",
						"RTM",
						"UAT"
					].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-5 items-center justify-center rounded-md bg-muted font-mono text-[10px] text-muted-foreground",
							children: i + 1
						}), step]
					}, step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "float-c absolute right-0 bottom-2 w-[70%] rounded-2xl bg-card p-4 shadow-card sm:w-64",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
						children: "IoT  ·  Crop bay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: "Nutrient cycle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-accent",
							children: "OK"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-4 gap-1.5",
						children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-8 rounded-md bg-muted",
							style: { opacity: .45 + i % 4 * .15 }
						}, i))
					})
				]
			})
		]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(40rem,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card p-6 text-card-foreground shadow-card", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", "max-h-[min(88vh,44rem)] overflow-y-auto", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-4 right-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm leading-relaxed text-muted-foreground", className),
		...props
	});
}
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const visible = (0, import_react.useMemo)(() => {
		if (filter === "All") return projects;
		return projects.filter((project) => project.categories.includes(filter));
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "scroll-mt-28 px-6 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "03",
					eyebrow: "Projects",
					title: "Selected work",
					description: "Software, analytics, and the operational systems in between."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-2",
					role: "tablist",
					"aria-label": "Filter projects",
					children: projectFilters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === item,
						onClick: () => setFilter(item),
						className: cn("min-h-11 rounded-full px-4 text-sm transition-colors duration-150", filter === item ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"),
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex h-full flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-start justify-between gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
											children: project.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl font-medium tracking-tight",
											children: project.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: project.tagline
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: project.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: [project.technologies.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "muted",
										children: tech
									}, tech)), project.technologies.length > 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "muted",
										children: ["+", project.technologies.length - 4]
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										className: "rounded-full",
										onClick: () => setSelected(project),
										children: "View details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectLinks, { project })]
								})
							]
						})
					}, project.slug))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(selected),
			onOpenChange: (open) => !open && setSelected(null),
			children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
					children: selected.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "mt-1",
					children: selected.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-2",
					children: selected.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Key features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-2 text-sm text-muted-foreground",
						children: selected.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), feature]
						}, feature))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-1.5",
					children: selected.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: tech }, tech))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectLinks, { project: selected })
				})
			] }) : null
		})]
	});
}
function ProjectLinks({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [project.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "ghost",
		size: "sm",
		className: "rounded-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: project.githubUrl,
			target: "_blank",
			rel: "noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {}), "GitHub"]
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		className: "rounded-full",
		disabled: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {}), "Source on request"]
	}), project.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "ghost",
		size: "sm",
		className: "rounded-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: project.liveUrl,
			target: "_blank",
			rel: "noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), "Live Demo"]
		})
	}) : null] });
}
function Skills() {
	const [groupId, setGroupId] = (0, import_react.useState)(skillGroups[0]?.id ?? "ba");
	const [active, setActive] = (0, import_react.useState)(null);
	const group = (0, import_react.useMemo)(() => skillGroups.find((item) => item.id === groupId) ?? skillGroups[0], [groupId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "scroll-mt-28 px-6 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "04",
					eyebrow: "Skills",
					title: "A stack that covers the brief",
					description: "Select a category, then a skill — each one is something I have used in coursework, projects, or the internship."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-x-auto pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex w-max min-w-full justify-center gap-2",
						role: "tablist",
						"aria-label": "Skill categories",
						children: skillGroups.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": groupId === item.id,
							onClick: () => {
								setGroupId(item.id);
								setActive(null);
							},
							className: cn("min-h-11 shrink-0 rounded-full px-4 text-sm transition-colors duration-150", groupId === item.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"),
							children: item.title
						}, item.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 max-w-4xl rounded-2xl bg-card p-5 shadow-card sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: group?.items.map((skill) => {
							const selected = active === skill.name;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActive(selected ? null : skill.name),
								"aria-pressed": selected,
								className: cn("min-h-11 rounded-full px-3.5 text-sm transition-colors duration-150", selected ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-secondary"),
								children: skill.name
							}, skill.name);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 min-h-16 rounded-xl bg-muted/70 px-4 py-3",
						children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: [active, ". "]
							}), group?.items.find((item) => item.name === active)?.blurb]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Choose a skill to see how I use it."
						})
					})]
				})
			]
		})
	});
}
function Home() {
	(0, import_react.useEffect)(() => {
		const hash = window.location.hash.replace("#", "");
		if (!hash) return;
		const timer = window.setTimeout(() => scrollToId(hash), 80);
		return () => window.clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Home as component };
