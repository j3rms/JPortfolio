import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as FileText, i as Sun, o as Moon, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { c as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as useTheme } from "./router-BluC30HL.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-enEm4vrT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	firstName: "Jeremy",
	lastName: "Quiroz",
	fullName: "Jeremy Ryan B. Quiroz",
	shortName: "Jeremy Quiroz",
	headline: "Business Analyst  ·  Data Analyst  ·  Full-Stack Developer",
	summary: "IT graduate who combines business analysis, data, automation, and software development to turn real-world problems into practical solutions.",
	location: "Philippines",
	availability: "Open to full-time roles",
	email: "hello@jeremyquiroz.com",
	education: {
		degree: "Bachelor of Science in Information Technology",
		honors: ["Cum Laude", "Dean's Lister"]
	}
};
var navItems = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var heroBadges = [
	"React",
	"Java",
	"SQL",
	"Power BI",
	"Python",
	"Alteryx",
	"Spring Boot",
	"Excel"
];
var aboutBody = ["I recently completed a BS in Information Technology as a Cum Laude graduate and Dean's Lister. The through-line in my work is translation: taking an operational problem, making the requirements explicit, and delivering something people can actually use — a dashboard, a workflow, or a working product.", "Internship work at Macquarie Group taught me to treat data quality as a product. Academic and project work taught me to ship software. Together they mean I can sit with stakeholders, document what matters, then build or automate the path from request to result."];
var whatIBring = [
	{
		title: "Business Analysis",
		body: "Requirements, process maps, and documentation that keep delivery aligned with how the business actually works.",
		icon: "ClipboardList"
	},
	{
		title: "Data & Reporting",
		body: "Clean, reconciled data and stakeholder-ready reports in Excel, SQL, Power BI, and Alteryx.",
		icon: "BarChart3"
	},
	{
		title: "Software Development",
		body: "Full-stack delivery with React, Java Spring Boot, and relational databases — from auth to booking flows.",
		icon: "Code2"
	},
	{
		title: "Automation",
		body: "Removing repetitive reporting and communication work with Power Automate, Alteryx, and Python.",
		icon: "Workflow"
	},
	{
		title: "Project Management",
		body: "Leading delivery with a clear scope, stakeholder cadence, and a bias toward finishing.",
		icon: "Kanban"
	}
];
var experience = {
	company: "Macquarie Group",
	role: "Procure Ops Analytics Intern",
	period: "January 2026 – May 2026",
	location: "Procurement Operations",
	summary: "Supported procure-ops reporting with trusted data, stakeholder-ready dashboards, and automation that reduced repetitive manual work.",
	bullets: [
		"Built and maintained operational reports and dashboards used by procurement stakeholders.",
		"Performed data validation, cleansing, reconciliation, and quality checks across invoice and requisition sources.",
		"Investigated discrepancies, improved data accuracy, and documented findings for reporting owners.",
		"Supported recurring stakeholder reporting requirements with clear, repeatable deliverables.",
		"Automated repetitive reporting and communication workflows to cut cycle time and reduce error."
	],
	stack: [
		"Excel",
		"SQL",
		"Alteryx",
		"Power BI",
		"Python",
		"Power Automate"
	]
};
var projectFilters = [
	"All",
	"Business Analysis",
	"Data Analytics",
	"Development",
	"Automation"
];
var projects = [
	{
		slug: "lakbay",
		name: "Lakbay",
		tagline: "Travel & tourism platform",
		description: "A full-stack travel and tourism platform with authentication and booking flows, designed so travelers can discover destinations and complete reservations in one product.",
		role: "Full-Stack Developer",
		categories: ["Development"],
		technologies: [
			"React.js",
			"Tailwind CSS",
			"Java Spring Boot",
			"REST APIs",
			"MySQL",
			"PostgreSQL"
		],
		features: [
			"Secure authentication and session handling",
			"Destination browsing and booking workflows",
			"REST API backend with relational data models",
			"Responsive interface built for real users, not demos"
		]
	},
	{
		slug: "aeroponics",
		name: "IoT Aeroponics Management System",
		tagline: "Crop operations, remotely",
		description: "An IoT and web-based aeroponics system designed to optimize crop scheduling and day-to-day management — from sensor readings to operator workflows.",
		role: "Project Manager  ·  Project Leader  ·  Full-Stack Developer",
		categories: [
			"Development",
			"Automation",
			"Business Analysis"
		],
		technologies: [
			"React.js",
			"Tailwind CSS",
			"Java Spring Boot",
			"MySQL",
			"NodeMCU",
			"IoT Sensors"
		],
		features: [
			"Real-time monitoring from IoT sensors",
			"Crop scheduling and growth tracking",
			"Remote management for operators",
			"Inventory and operational data tracking",
			"Hardware-to-web IoT integration"
		]
	},
	{
		slug: "procure-ops",
		name: "Procurement & Operations Dashboards",
		tagline: "Reporting the business can trust",
		description: "Analytics and reporting work delivered during the Macquarie Group internship — operational dashboards that made invoice, PO, and requisition activity inspectable.",
		role: "Procure Ops Analytics Intern",
		categories: ["Data Analytics", "Business Analysis"],
		technologies: [
			"Power BI",
			"Excel",
			"SQL",
			"Alteryx"
		],
		features: [
			"Invoice Lines",
			"Invoice Headers",
			"Invoice Approvals",
			"PO Lines",
			"Requisition Headers",
			"Requisition Approvals"
		]
	},
	{
		slug: "etl",
		name: "Data Quality & ETL Workflows",
		tagline: "Clean inputs, reliable outputs",
		description: "Hands-on data quality and transformation work: cleansing, validating, reconciling, and automating the path from raw operational extracts to report-ready datasets.",
		role: "Analytics Intern",
		categories: ["Data Analytics", "Automation"],
		technologies: [
			"Alteryx",
			"SQL",
			"Excel",
			"Python",
			"Power Automate"
		],
		features: [
			"Data cleansing and standardization",
			"Validation and quality checks",
			"Transformation and mapping",
			"Source-to-target reconciliation",
			"ETL workflow design",
			"Reporting automation"
		]
	}
];
var skillGroups = [
	{
		id: "ba",
		title: "Business Analysis",
		items: [
			{
				name: "Requirements Gathering",
				blurb: "Turning stakeholder conversations into scoped, testable needs."
			},
			{
				name: "Stakeholder Communication",
				blurb: "Clear status, decisions, and tradeoffs — written and spoken."
			},
			{
				name: "Process Analysis",
				blurb: "Finding where work actually happens versus where the process says it does."
			},
			{
				name: "Documentation",
				blurb: "Specs people can implement against, not slide decks that go stale."
			},
			{
				name: "BRD",
				blurb: "Business Requirements Documents that capture scope, rules, and success criteria."
			},
			{
				name: "RTM",
				blurb: "Requirements Traceability Matrices linking needs to design, build, and UAT."
			},
			{
				name: "UAT",
				blurb: "User acceptance planning and execution so delivery matches the business ask."
			},
			{
				name: "Process Mapping",
				blurb: "As-is and to-be flows that make handoffs and exceptions visible."
			},
			{
				name: "Agile / SDLC",
				blurb: "Working inside iterative delivery without losing the requirements thread."
			}
		]
	},
	{
		id: "data",
		title: "Data Analytics",
		items: [
			{
				name: "Excel",
				blurb: "Analysis, reconciliation, and reporting models used in production ops."
			},
			{
				name: "SQL",
				blurb: "Querying, joining, and validating operational datasets."
			},
			{
				name: "Power BI",
				blurb: "Stakeholder dashboards with a focus on trust and readability."
			},
			{
				name: "DAX",
				blurb: "Measures and models that keep report logic consistent."
			},
			{
				name: "Alteryx",
				blurb: "Repeatable workflows for prep, blend, and quality checks."
			},
			{
				name: "Python",
				blurb: "Scripting for validation, transformation, and light automation."
			},
			{
				name: "Pandas",
				blurb: "Tabular analysis and cleansing when the work outgrows a spreadsheet."
			},
			{
				name: "Data Cleaning",
				blurb: "Standardizing messy operational extracts before they hit a report."
			},
			{
				name: "Data Validation",
				blurb: "Checks that catch mismatches before stakeholders do."
			},
			{
				name: "ETL",
				blurb: "Extract, transform, and load paths that can be rerun, not one-off heroics."
			},
			{
				name: "Reporting",
				blurb: "Recurring operational packs designed around decisions, not decoration."
			}
		]
	},
	{
		id: "dev",
		title: "Development",
		items: [
			{
				name: "React.js",
				blurb: "Component-driven interfaces with a bias toward clarity and speed."
			},
			{
				name: "Java",
				blurb: "Typed backend logic for services that have to be reliable."
			},
			{
				name: "Spring Boot",
				blurb: "REST APIs, persistence, and service structure for real products."
			},
			{
				name: "JavaScript",
				blurb: "The language of the web UI layer, used deliberately."
			},
			{
				name: "Tailwind CSS",
				blurb: "Utility-first styling that stays consistent at scale."
			},
			{
				name: "REST APIs",
				blurb: "Contracts between frontend, backend, and the people who consume them."
			},
			{
				name: "MySQL",
				blurb: "Relational modeling and queries for transactional systems."
			},
			{
				name: "PostgreSQL",
				blurb: "Structured data when integrity and querying both matter."
			},
			{
				name: "HTML / CSS",
				blurb: "Accessible, semantic markup and layout as a baseline, not an afterthought."
			},
			{
				name: "Git",
				blurb: "Versioned collaboration and a clean history of what changed."
			}
		]
	},
	{
		id: "auto",
		title: "Automation",
		items: [
			{
				name: "Power Automate",
				blurb: "Workflow automation for reporting and communications that used to be manual."
			},
			{
				name: "Alteryx",
				blurb: "Scheduled, repeatable data pipelines instead of copy-paste rituals."
			},
			{
				name: "Python Scripting",
				blurb: "Small programs that close the gap between extract and insight."
			},
			{
				name: "Reporting Automation",
				blurb: "Taking recurring packs off the critical path of a person."
			},
			{
				name: "Process Workflows",
				blurb: "Encoding a known process so it runs the same way every time."
			}
		]
	},
	{
		id: "pm",
		title: "Project Management",
		items: [
			{
				name: "Project Leadership",
				blurb: "Owning scope, cadence, and the last mile of delivery."
			},
			{
				name: "Agile Delivery",
				blurb: "Short cycles, visible progress, and room to correct course."
			},
			{
				name: "Stakeholder Management",
				blurb: "Keeping decision-makers informed without drowning them in status."
			},
			{
				name: "Scope & Planning",
				blurb: "What we will ship, what we will not, and when we will know."
			},
			{
				name: "Risk Tracking",
				blurb: "Surfacing blockers early enough to do something about them."
			}
		]
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function scrollToId(id) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 96;
	window.scrollTo({
		top,
		behavior: "smooth"
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			outline: "bg-transparent text-foreground shadow-card hover:bg-card",
			ghost: "text-foreground hover:bg-muted",
			accent: "bg-accent text-accent-foreground hover:opacity-90",
			link: "text-accent underline-offset-4 hover:underline h-auto px-0"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	function goContact() {
		if (pathname === "/") {
			scrollToId("contact");
			return;
		}
		window.location.assign("/#contact");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "no-print border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"© ",
					year,
					" ",
					profile.fullName
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${profile.email}`,
						className: "text-muted-foreground transition-colors hover:text-foreground",
						children: profile.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-muted-foreground transition-colors hover:text-foreground",
						onClick: () => window.scrollTo({
							top: 0,
							behavior: "smooth"
						}),
						children: "Back to top"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-muted-foreground transition-colors hover:text-foreground",
						onClick: goContact,
						children: "Contact"
					})
				]
			})]
		})
	});
}
function Navbar() {
	const { theme, toggle, mounted } = useTheme();
	const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isHome) return;
		const ids = navItems.map((item) => item.id);
		const observers = [];
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const observer = new IntersectionObserver(([entry]) => {
				if (entry?.isIntersecting) setActive(id);
			}, {
				rootMargin: "-40% 0px -50% 0px",
				threshold: .1
			});
			observer.observe(el);
			observers.push(observer);
		});
		return () => observers.forEach((observer) => observer.disconnect());
	}, [isHome]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	function goTo(id) {
		setOpen(false);
		if (isHome) {
			scrollToId(id);
			return;
		}
		window.location.assign(`/#${id}`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "no-print pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center p-3 sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: cn("pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-full border border-border bg-background/80 px-2 py-1.5 pl-4 shadow-card backdrop-blur-md", scrolled && "bg-background/92"),
			"aria-label": "Primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-[15px] font-medium tracking-tight text-foreground",
					onClick: () => {
						setOpen(false);
						if (isHome) window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					},
					children: profile.shortName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto hidden items-center gap-0.5 lg:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => goTo(item.id),
						className: cn("rounded-full px-3 py-2 text-sm transition-colors duration-150", active === item.id && isHome ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"),
						children: item.label
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-10 rounded-full",
							onClick: toggle,
							"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
							children: mounted && theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden rounded-full sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resume",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {}), "Resume"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-10 rounded-full lg:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							"aria-label": open ? "Close menu" : "Open menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "pointer-events-auto absolute inset-x-3 top-16 z-50 rounded-2xl border border-border bg-card p-3 shadow-card lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col",
				children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => goTo(item.id),
					className: cn("flex min-h-11 w-full items-center rounded-xl px-3 text-left text-sm", active === item.id ? "bg-muted text-foreground" : "text-foreground"),
					children: item.label
				}) }, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pt-2 sm:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resume",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {}), "Resume"]
						})
					})
				})]
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only no-print focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { experience as a, projectFilters as c, skillGroups as d, whatIBring as f, cn as i, projects as l, SiteShell as n, heroBadges as o, aboutBody as r, profile as s, Button as t, scrollToId as u };
