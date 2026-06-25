import { o as __toESM } from "../_runtime.mjs";
import { _ as require_react, a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as AnimatePresence, n as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as ArrowUpRight, a as Smartphone, b as Layers, c as MessageCircle, d as Instagram, f as Globe, g as Check, h as ChevronDown, i as Star, l as Mail, m as ExternalLink, n as Workflow, o as Phone, p as Github, r as Twitter, s as Palette, t as X, u as Linkedin, v as ArrowRight, x as CodeXml, y as Sparkles } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CwJb5EWn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var fadeUp = {
	initial: {
		opacity: 0,
		y: 28
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}
};
function Portfolio() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoading(false), 700);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .5 },
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { rotate: 360 },
					transition: {
						duration: 1.4,
						repeat: Infinity,
						ease: "linear"
					},
					className: "h-10 w-10 rounded-full border-2 border-accent border-t-transparent"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { scaleX: progress },
				className: "fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				richColors: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-2rem))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex items-center justify-between rounded-full px-3 py-2.5 transition-all ${scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 pl-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-full bg-ink text-background text-[11px] font-semibold tracking-wider",
						children: "YS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg leading-none",
						children: "Yasir Shaikh"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1 text-sm",
					children: [
						["About", "#about"],
						["Skills", "#skills"],
						["Services", "#services"],
						["Projects", "#projects"],
						["Pricing", "#pricing"],
						["Contact", "#contact"]
					].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "rounded-full px-3 py-1.5 text-ink-soft transition hover:text-ink",
						children: label
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "btn-dark btn-dark-hover !py-2 !px-4 text-xs",
					children: ["Book Free Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			]
		})
	});
}
function Hero() {
	const [typedText, setTypedText] = (0, import_react.useState)("");
	const fullText = "I help startups, businesses, and entrepreneurs craft high-performance websites, web applications, and custom software systems that scale beautifully and convert relentlessly.";
	(0, import_react.useEffect)(() => {
		let index = 0;
		const interval = setInterval(() => {
			if (index <= 174) {
				setTypedText(fullText.slice(0, index));
				index++;
			} else clearInterval(interval);
		}, 12);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden bg-[#0a0a0a] text-white pt-32 pb-24 md:pt-40 md:pb-32 rounded-b-[2.5rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.08]",
					style: {
						backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
						backgroundSize: "34px 34px"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -left-40 top-20 h-[520px] w-[520px] rounded-full opacity-[0.55] blur-[120px]",
					style: { background: "radial-gradient(circle, #C89B6D 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full opacity-40 blur-[140px]",
					style: { background: "radial-gradient(circle, #C89B6D 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.04]",
					style: {
						backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
						backgroundSize: "80px 80px"
					}
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-[#C89B6D] opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative h-1.5 w-1.5 rounded-full bg-[#C89B6D]" })]
						}), "Full Stack Software Developer · Available for projects"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							],
							delay: .05
						},
						className: "font-display text-[clamp(2.5rem,5.4vw,4.6rem)] leading-[1.02] tracking-tight",
						children: [
							"Transforming ideas into",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic animate-shine",
								style: {
									background: "linear-gradient(120deg,#e8c79b,#C89B6D,#e8c79b,#C89B6D)",
									backgroundSize: "200% 100%",
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									color: "transparent"
								},
								children: "powerful digital products."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/65 min-h-[4.5rem]",
						children: [typedText, typedText.length < 174 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-pulse",
							children: "|"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .28
						},
						className: "mt-9 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#C89B6D] hover:-translate-y-0.5",
							children: ["View My Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-[#C89B6D] hover:text-[#C89B6D]",
							children: "Book Free Consultation"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .42
						},
						className: "mt-12 grid max-w-md grid-cols-4 gap-4 border-t border-white/10 pt-6",
						children: [
							{
								k: "3+",
								v: "Years building"
							},
							{
								k: "20+",
								v: "Products shipped"
							},
							{
								k: "15+",
								v: "Happy clients"
							},
							{
								k: "3+",
								v: "Industries"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl text-white",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-[10.5px] uppercase tracking-wider text-white/45",
							children: s.v
						})] }, s.v))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .8,
					rotateY: -15
				},
				animate: {
					opacity: 1,
					scale: 1,
					rotateY: 0
				},
				transition: {
					duration: 1.4,
					ease: [
						.22,
						1,
						.36,
						1
					],
					delay: .2
				},
				className: "relative mx-auto flex h-[520px] w-full max-w-[560px] items-end justify-center md:h-[640px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-[55%] rounded-full md:h-[500px] md:w-[500px]",
						style: {
							background: "radial-gradient(circle, rgba(200,155,109,0.55) 0%, rgba(200,155,109,0.15) 40%, transparent 70%)",
							filter: "blur(20px)"
						},
						animate: {
							scale: [
								1,
								1.1,
								1
							],
							opacity: [
								.5,
								.7,
								.5
							]
						},
						transition: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 bottom-14 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-white/10 md:h-[400px] md:w-[400px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 bottom-14 h-[260px] w-[260px] -translate-x-1/2 rounded-full border border-white/5 md:h-[340px] md:w-[340px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: "/yasir.png",
						alt: "Yasir Shaikh — Full Stack Software Developer",
						width: 1024,
						height: 1536,
						initial: {
							y: 50,
							opacity: 0,
							scale: .9
						},
						animate: {
							y: [
								0,
								-8,
								0
							],
							opacity: 1,
							scale: 1
						},
						transition: {
							y: {
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							},
							opacity: {
								duration: 1.2,
								ease: [
									.22,
									1,
									.36,
									1
								],
								delay: .3
							},
							scale: {
								duration: 1.2,
								ease: [
									.22,
									1,
									.36,
									1
								],
								delay: .3
							}
						},
						className: "relative z-10 h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
					})
				]
			})]
		})]
	});
}
function Marquee() {
	const items = [
		"Healthcare",
		"Fintech",
		"E-commerce",
		"Education",
		"Logistics",
		"SaaS",
		"Real Estate",
		"Hospitality",
		"Media",
		"Manufacturing"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative border-y border-ink/5 bg-surface py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs uppercase tracking-[0.2em] text-ink-soft",
				children: "Trusted by clients across the globe"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee gap-12",
					children: [...items, ...items].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl text-ink/70 whitespace-nowrap",
						children: it
					}, i))
				})
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Technical Expertise",
		title: "The toolkit behind every product I ship",
		subtitle: "A curated stack — chosen for outcomes, not trends.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5",
			children: [
				{
					no: "01",
					title: "Frontend",
					tag: "Interface Engineering",
					desc: "Pixel-precise interfaces with motion, accessibility and performance baked in.",
					items: [
						"React",
						"Next.js",
						"TypeScript",
						"Vue.js",
						"Tailwind CSS",
						"Motion",
						"HTML5",
						"CSS3"
					],
					span: "lg:col-span-3"
				},
				{
					no: "02",
					title: "Backend",
					tag: "Server & APIs",
					desc: "Robust APIs, auth flows and business logic built to scale.",
					items: [
						"Node.js",
						"Express",
						"Laravel",
						"Python",
						"Flask",
						"REST",
						"GraphQL"
					],
					span: "lg:col-span-2"
				},
				{
					no: "03",
					title: "Database",
					tag: "Data Layer",
					desc: "Modeled, indexed and tuned for real workloads.",
					items: [
						"PostgreSQL",
						"MySQL",
						"MongoDB",
						"Supabase",
						"Redis"
					],
					span: "lg:col-span-2"
				},
				{
					no: "04",
					title: "Cloud & Tools",
					tag: "Ship & Operate",
					desc: "Continuous delivery, observability and infrastructure I trust in production.",
					items: [
						"AWS",
						"Vercel",
						"Netlify",
						"Docker",
						"GitHub Actions",
						"Git",
						"Figma"
					],
					span: "lg:col-span-3"
				}
			].map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .8,
					delay: gi * .08,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				whileHover: { y: -6 },
				className: `group relative overflow-hidden rounded-3xl bg-[#0a0a0a] p-7 text-white ${g.span}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-700 group-hover:opacity-100",
						style: { background: "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), rgba(200,155,109,0.25), transparent 60%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-[0.05]",
						style: {
							backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
							backgroundSize: "22px 22px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.22em] text-[#C89B6D]",
							children: g.tag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl",
							children: g.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl leading-none text-white/15 transition group-hover:text-[#C89B6D]/60",
							children: g.no
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative z-10 mt-4 max-w-md text-sm leading-relaxed text-white/55",
						children: g.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mt-6 flex flex-wrap gap-2",
						children: g.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 10
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .4,
								delay: gi * .08 + i * .03
							},
							className: "rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 backdrop-blur transition group-hover:border-[#C89B6D]/50 hover:bg-[#C89B6D] hover:text-black",
							children: it
						}, it))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-6 bottom-6 h-px w-12 bg-gradient-to-r from-transparent to-[#C89B6D]/60" })
				]
			}, g.title))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "services",
		eyebrow: "What I Do",
		title: "Services built around real business outcomes",
		subtitle: "End-to-end design and engineering — from a single landing page to a full platform.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					icon: Globe,
					title: "Website Development",
					desc: "Business websites, portfolios and company sites built to convert."
				},
				{
					icon: Layers,
					title: "Web Applications",
					desc: "Custom dashboards, portals, internal tools and SaaS products."
				},
				{
					icon: CodeXml,
					title: "Software Development",
					desc: "Tailor-made software engineered around your operations."
				},
				{
					icon: Smartphone,
					title: "Mobile App Development",
					desc: "Cross-platform iOS and Android applications."
				},
				{
					icon: Palette,
					title: "UI / UX Design",
					desc: "Modern interfaces focused on clarity and conversion."
				},
				{
					icon: Workflow,
					title: "Business Automation",
					desc: "Workflows and integrations that remove manual work."
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				transition: {
					...fadeUp.transition,
					delay: i * .05
				},
				className: "group relative overflow-hidden rounded-2xl border border-ink/8 bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition group-hover:opacity-100",
						style: {
							background: "color-mix(in oklab, var(--accent) 25%, transparent)",
							filter: "blur(40px)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
						className: "h-7 w-7 text-ink",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-2xl",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink-soft",
						children: s.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 inline-flex items-center gap-1 text-xs font-medium text-ink-soft transition group-hover:text-accent",
						children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})
				]
			}, s.title))
		})
	});
}
function Projects() {
	const [expandLevel, setExpandLevel] = (0, import_react.useState)(0);
	const [mousePosition, setMousePosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [hoveredProject, setHoveredProject] = (0, import_react.useState)(null);
	const updateMousePosition = (e, container) => {
		const rect = container.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	};
	const mainProjects = [
		{
			id: 1,
			name: "ScaleSight",
			cat: "Websites",
			desc: "Supporting businesses with Virtual CFO services, financial planning, and strategic guidance.",
			stack: [
				"React",
				"Tailwind CSS",
				"Node.js"
			],
			link: "https://www.scalesight.in",
			hasLivePreview: true
		},
		{
			id: 2,
			name: "Firdaus Makeover",
			cat: "Websites",
			desc: "A high-end, responsive beauty service platform designed for Firdaus Beauty Suite.",
			stack: [
				"React",
				"Tailwind CSS",
				"Vite"
			],
			link: "https://firdaus-beauty-suite.vercel.app",
			hasLivePreview: true
		},
		{
			id: 3,
			name: "Shaden House",
			cat: "Websites",
			desc: "A modern, elegant website for a Saudi Arabian luxury property.",
			stack: [
				"React",
				"Vite",
				"Tailwind CSS"
			],
			link: "https://www.shadenhouse.com",
			hasLivePreview: true
		},
		{
			id: 4,
			name: "Islamic Deeds Tracker",
			cat: "Web Apps",
			desc: "A minimal and spiritually focused web app designed to help Muslims track daily good deeds.",
			stack: [
				"Python",
				"React",
				"PostgreSQL"
			],
			link: "https://islamic-deeds-tracker.vercel.app/",
			hasLivePreview: true
		},
		{
			id: 5,
			name: "NOVA",
			cat: "Web Apps",
			desc: "A modern and responsive e-commerce web app for a smooth shopping experience.",
			stack: [
				"Node.js",
				"React",
				"Express"
			],
			link: "https://nova-ecommerce-website.netlify.app/",
			hasLivePreview: true
		},
		{
			id: 6,
			name: "Sagir Trader",
			cat: "Web Apps",
			desc: "A powerful trading dashboard that enables users to track market movements in real time.",
			stack: [
				"React",
				"Node.js",
				"PostgreSQL"
			],
			link: "https://sagir-trader.netlify.app",
			hasLivePreview: true
		}
	];
	const additionalProjects = [
		{
			id: 7,
			name: "LifeSync",
			cat: "Mobile Apps",
			desc: "LifeSync is an all-in-one personal productivity and tracking mobile app that helps users manage daily tasks, build habits, maintain journals, and track expenses in one place.",
			stack: [
				"React Native",
				"Firebase",
				"Node.js"
			],
			link: "#",
			image: "/project6.png",
			hasLivePreview: false
		},
		{
			id: 8,
			name: "E-Commerce App",
			cat: "Mobile Apps",
			desc: "Online shopping app with product listing, cart & checkout, and modern UI.",
			stack: [
				"React Native",
				"Node.js",
				"MongoDB"
			],
			link: "#",
			image: "/project8.png",
			hasLivePreview: false
		},
		{
			id: 9,
			name: "Grass Hawk Mole Trap",
			cat: "Websites",
			desc: "Creative workflows with team collaboration, asset management and brand consistency.",
			stack: [
				"React",
				"Tailwind CSS",
				"CMS"
			],
			link: "#",
			image: "/project5.png",
			hasLivePreview: false
		},
		{
			id: 10,
			name: "Habit Tracker",
			cat: "Web Apps",
			desc: "Daily habit tracking with streak & consistency system, calendar-based habit view and minimal UI.",
			stack: [
				"React",
				"TypeScript",
				"LocalStorage"
			],
			link: "#",
			image: "/project7.png",
			hasLivePreview: false
		},
		{
			id: 11,
			name: "LifeLync",
			cat: "Websites",
			desc: "Easy customization with interactive elements, retina ready graphics and high performance.",
			stack: [
				"React",
				"Next.js",
				"Tailwind CSS"
			],
			link: "#",
			image: "/project3.png",
			hasLivePreview: false
		},
		{
			id: 12,
			name: "Vibgyor Maple",
			cat: "Software",
			desc: "Cloud integration with real-time analytics, secure architecture and scalable infrastructure.",
			stack: [
				"Python",
				"AWS",
				"PostgreSQL"
			],
			link: "#",
			image: "/project4.png",
			hasLivePreview: false
		}
	];
	let allDisplayedProjects = [...mainProjects];
	if (expandLevel >= 1) allDisplayedProjects = [...allDisplayedProjects, ...additionalProjects];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		eyebrow: "Featured Projects",
		title: "Selected work",
		subtitle: "A glimpse of products I've designed and engineered.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: allDisplayedProjects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					layout: true,
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -10
					},
					transition: {
						duration: .5,
						delay: i % 6 * .04
					},
					className: "group relative overflow-hidden rounded-2xl border border-ink/8 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-accent/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] cursor-pointer",
						onMouseMove: (e) => updateMousePosition(e, e.currentTarget),
						onMouseEnter: () => setHoveredProject(p.id),
						onMouseLeave: () => setHoveredProject(null),
						onClick: () => p.link !== "#" && window.open(p.link, "_blank", "noopener,noreferrer"),
						children: [
							p.hasLivePreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: p.link,
								title: `${p.name} - Live Preview`,
								className: "absolute border-0",
								style: {
									width: "1440px",
									height: "900px",
									transform: "scale(0.29)",
									transformOrigin: "top left",
									pointerEvents: "none"
								},
								sandbox: "allow-scripts allow-same-origin",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/40 backdrop-blur-sm flex items-center gap-1.5 z-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-green-400 font-medium",
									children: "Live"
								})]
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
								loading: "lazy",
								onError: (e) => {
									const target = e.target;
									target.style.display = "none";
									const parent = target.parentElement;
									if (parent) parent.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#3a3a3a] flex items-center justify-center"><div class="text-center px-6"><div class="text-4xl mb-3">📷</div><p class="text-white/70 text-sm font-medium">${p.name}</p></div></div>`;
								}
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredProject === p.id && p.link !== "#" ? "opacity-100" : "opacity-0"}` }),
							p.link !== "#" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `absolute pointer-events-none z-30 transition-opacity duration-200 ${hoveredProject === p.id ? "opacity-100" : "opacity-0"}`,
								style: {
									left: mousePosition.x - 50,
									top: mousePosition.y - 20,
									transform: "translate(-50%, -50%)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-4 py-2 bg-white text-black rounded-full font-semibold text-sm shadow-lg whitespace-nowrap",
									children: "View Now"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 left-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur",
									children: p.cat
								})
							}),
							p.link !== "#" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									target: "_blank",
									rel: "noreferrer",
									href: p.link,
									onClick: (e) => e.stopPropagation(),
									className: "grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink hover:bg-white transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-ink-soft line-clamp-2",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft",
									children: s
								}, s))
							})
						]
					})]
				}, p.id))
			})
		}), expandLevel < 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .6,
				delay: .3
			},
			className: "mt-12 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setExpandLevel(1),
				className: "inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-background transition hover:bg-accent hover:text-ink hover:-translate-y-1 shadow-lg",
				children: ["View More Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "How I Work",
		title: "A calm, predictable process",
		subtitle: "Six structured steps from idea to a polished, supported product.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-10",
				children: [
					["Discovery & Consultation", "Understanding goals, audience and success metrics."],
					["Planning & Design", "Wireframes, UI design and a clear roadmap."],
					["Development", "Clean, scalable code with weekly progress demos."],
					["Testing", "QA, performance, accessibility and security checks."],
					["Deployment", "Smooth launch with monitoring and analytics."],
					["Support & Maintenance", "Ongoing improvements and reliable support."]
				].map(([title, desc], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: i * .05
					},
					className: `relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative md:[direction:ltr]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-2 top-1 grid h-6 w-6 place-items-center rounded-full border border-ink/15 bg-background text-[10px] font-semibold md:left-[calc(100%-12px)] md:translate-x-0",
							children: String(i + 1).padStart(2, "0")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:[direction:ltr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: desc
						})]
					})]
				}, title))
			})]
		})
	});
}
function Pricing() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [planName, setPlanName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "pricing",
		eyebrow: "Pricing",
		title: "Simple, transparent plans",
		subtitle: "Pick what fits today — upgrade as your product grows.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-3",
			children: [
				{
					name: "Starter Website",
					price: "₹9,999",
					features: [
						"Responsive Website",
						"Contact Form",
						"SEO Setup",
						"Hosting Guidance"
					],
					cta: "Get Started",
					popular: false
				},
				{
					name: "Professional Website",
					price: "₹24,999",
					features: [
						"Premium Design",
						"Admin Panel",
						"Database Integration",
						"Performance Optimization"
					],
					cta: "Get Started",
					popular: true
				},
				{
					name: "Custom Software",
					price: "From ₹49,999",
					features: [
						"Full Custom Development",
						"Dashboard & Auth",
						"Database & APIs",
						"Deployment Support"
					],
					cta: "Request Quote",
					popular: false
				}
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				transition: {
					...fadeUp.transition,
					delay: i * .07
				},
				className: `relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-1 ${p.popular ? "border-ink bg-ink text-background shadow-[var(--shadow-glow)]" : "border-ink/10 bg-card shadow-[var(--shadow-card)]"}`,
				children: [
					p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink",
						children: "Most Popular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: `font-display text-2xl ${p.popular ? "text-background" : ""}`,
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mt-4 font-display text-4xl ${p.popular ? "text-background" : ""}`,
						children: p.price
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm",
						children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `flex items-center gap-2 ${p.popular ? "text-white/80" : "text-ink-soft"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: `h-4 w-4 ${p.popular ? "text-accent" : "text-accent"}` }), f]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setPlanName(p.name);
							setOpen(true);
						},
						className: `mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${p.popular ? "bg-background text-ink hover:bg-accent" : "bg-ink text-background hover:bg-accent hover:text-ink"}`,
						children: [
							p.cta,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				]
			}, p.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryModal, {
			open,
			onOpenChange: setOpen,
			plan: planName
		})]
	});
}
function InquiryModal({ open, onOpenChange, plan }) {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const fd = new FormData(e.currentTarget);
		const subject = encodeURIComponent(`New Inquiry: ${plan}`);
		const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nMobile: ${fd.get("mobile")}\nCompany: ${fd.get("company")}\nService: ${plan}\nBudget: ${fd.get("budget")}\n\nDetails:\n${fd.get("details")}`);
		window.location.href = `mailto:hello@yasirshaikh.dev?subject=${subject}&body=${body}`;
		setTimeout(() => {
			setLoading(false);
			onOpenChange(false);
			toast.success("Thank you! Your inquiry has been submitted successfully. I will contact you shortly.");
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-w-lg rounded-2xl border-ink/10 p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl",
					children: "Tell me about your project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-ink-soft",
					children: plan ? `Plan: ${plan}` : "Share a few details and I'll get back within 24 hours."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "name",
							placeholder: "Your name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							type: "email",
							placeholder: "Email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "mobile",
							placeholder: "Mobile number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "company",
							placeholder: "Company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "budget",
							placeholder: "Estimated budget",
							className: "sm:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "details",
							rows: 4,
							required: true,
							placeholder: "Project details…",
							className: "sm:col-span-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: loading,
							className: "btn-dark btn-dark-hover sm:col-span-2 justify-center",
							children: [
								loading ? "Sending…" : "Submit inquiry",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					]
				})]
			})
		})
	});
}
function Field(props) {
	const { className = "", ...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...rest,
		className: `w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent ${className}`
	});
}
function Testimonials() {
	const items = [
		{
			name: "Aarav Mehta",
			company: "Founder, Northwind Labs",
			quote: "Yasir shipped a polished platform faster than any agency we tried. The attention to detail is unreal."
		},
		{
			name: "Priya Kapoor",
			company: "COO, Lumen Health",
			quote: "Our internal tools went from chaotic spreadsheets to a beautiful dashboard the team actually loves."
		},
		{
			name: "Daniel Roy",
			company: "CEO, Atlas Logistics",
			quote: "Communication is excellent and the work consistently raises our product bar. Highly recommend."
		},
		{
			name: "Sara Khan",
			company: "CMO, Verve Studio",
			quote: "Our new website doubled conversions in the first month. Strategy, design and code — all on point."
		}
	];
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
		return () => clearInterval(t);
	}, [items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Client Feedback",
		title: "Trusted by founders & teams",
		subtitle: "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border border-ink/8 bg-card p-10 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-40 blur-3xl",
						style: { background: "color-mix(in oklab, var(--accent) 40%, transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -12
							},
							transition: { duration: .5 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-0.5 text-accent",
									children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 font-display text-2xl leading-snug text-ink md:text-3xl",
									children: [
										"\"",
										items[i].quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-6 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: items[i].name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-ink-soft",
										children: items[i].company
									})]
								})
							]
						}, i)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-1.5",
						children: items.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setI(k),
							className: `h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-ink" : "w-4 bg-ink/15"}`,
							"aria-label": `Slide ${k + 1}`
						}, k))
					})
				]
			})
		})
	});
}
function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const projectType = fd.get("projectType") || "General Inquiry";
		const subject = encodeURIComponent(`${projectType} - Portfolio Contact`);
		const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nProject Type: ${projectType}\n\n${fd.get("message")}`);
		window.location.href = `mailto:yasirazimshaikh5440@gmail.com?subject=${subject}&body=${body}`;
		toast.success("Thank you! I'll get back within 24 hours.");
		e.target.reset();
	};
	const info = [
		{
			icon: Phone,
			label: "PHONE",
			value: "+91 879 913 2161",
			link: "tel:+918799132161",
			color: "#10B981"
		},
		{
			icon: Mail,
			label: "EMAIL",
			value: "yasirazimshaikh5440@gmail.com",
			link: "mailto:yasirazimshaikh5440@gmail.com",
			color: "#C89B6D"
		},
		{
			icon: Instagram,
			label: "INSTAGRAM",
			value: "@yasir_shaikh_24",
			link: "https://www.instagram.com/yasir_shaikh_24",
			color: "#E1306C"
		},
		{
			icon: Linkedin,
			label: "LINKEDIN",
			value: "yasir-shaikh",
			link: "https://www.linkedin.com/in/yasir-shaikh-6264452b0",
			color: "#0A66C2"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Get In Touch",
		title: "Let's build something amazing together",
		subtitle: "Have a project in mind? Tell me a little about it and I'll be in touch shortly.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "rounded-3xl border border-accent/20 bg-card p-8 shadow-[0_0_30px_rgba(200,155,109,0.15)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "Contact information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: "Fast replies, clear scope, honest advice."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: info.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
							whileHover: {
								x: 4,
								transition: { duration: .2 }
							},
							className: "group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: it.link,
								target: it.link.startsWith("http") ? "_blank" : void 0,
								rel: it.link.startsWith("http") ? "noreferrer" : void 0,
								className: "flex items-center gap-3 text-sm cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "grid h-11 w-11 place-items-center rounded-full transition-all duration-300",
									style: {
										backgroundColor: `${it.color}15`,
										border: `1px solid ${it.color}30`
									},
									whileHover: {
										backgroundColor: it.color,
										boxShadow: `0 0 20px ${it.color}60`,
										scale: 1.1
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
										className: "h-5 w-5 transition-colors duration-300 group-hover:text-white",
										style: { color: it.color }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-wider text-ink-soft",
									children: it.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium group-hover:text-accent transition-colors",
									children: it.value
								})] })]
							})
						}, it.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				...fadeUp,
				transition: {
					...fadeUp.transition,
					delay: .1
				},
				onSubmit: handleSubmit,
				className: "rounded-3xl border-2 border-accent/30 bg-card p-8 shadow-[0_0_40px_rgba(200,155,109,0.2)] relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "name",
							placeholder: "Name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							type: "email",
							placeholder: "Email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							placeholder: "Phone number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "projectType",
								required: true,
								className: "w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent appearance-none cursor-pointer",
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Project Type *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Web Application",
										children: "Web Application"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Mobile Application",
										children: "Mobile Application"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Software Development",
										children: "Software Development"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Website Development",
										children: "Website Development"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "E-Commerce",
										children: "E-Commerce"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "UI/UX Design",
										children: "UI/UX Design"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Other",
										children: "Other"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft pointer-events-none",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M19 9l-7 7-7-7"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							required: true,
							placeholder: "Your message…",
							className: "sm:col-span-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "btn-dark btn-dark-hover sm:col-span-2 justify-center group relative overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative z-10 flex items-center gap-2",
								children: ["Send Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })]
						})
					]
				})]
			})]
		})
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "FAQ",
		title: "Frequently asked questions",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "space-y-3",
				children: [
					["How long does a project take?", "Most websites take 2–4 weeks. Custom software typically runs 6–12 weeks depending on scope. I share weekly demos throughout."],
					["What technologies do you use?", "Mostly React, Next.js, Node.js, Laravel, Python and PostgreSQL — chosen based on what's right for your product, not what's trendy."],
					["Do you provide support after delivery?", "Yes. Every project includes a 30-day support window, with optional monthly retainers for ongoing improvements."],
					["Can you build custom software?", "Absolutely — dashboards, internal tools, CRMs, marketplaces and automation systems are my core work."],
					["Do you provide hosting support?", "Yes. I help configure hosting on Vercel, Netlify, AWS or your existing infrastructure, with monitoring and backups."]
				].map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					className: "rounded-2xl border border-ink/10 bg-card px-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-5 text-left font-display text-lg hover:no-underline",
						children: q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-5 text-sm text-ink-soft",
						children: a
					})]
				}, i))
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-20 overflow-hidden border-t border-ink/8 bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 h-px",
				style: { background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-ink text-background text-xs font-semibold",
							children: "YS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl",
							children: "Yasir Shaikh"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-ink-soft",
						children: "Building scalable digital experiences and software solutions for ambitious teams."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-wider text-ink-soft",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							"Home",
							"About",
							"Projects",
							"Services",
							"Pricing",
							"Contact"
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${l.toLowerCase()}`,
							className: "text-ink transition hover:text-accent",
							children: l
						}) }, l))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-wider text-ink-soft",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2",
						children: [
							Github,
							Linkedin,
							Instagram,
							Twitter,
							MessageCircle
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-accent hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ink/8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-ink-soft md:flex-row lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Yasir Shaikh. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crafted with care · Made in India" })]
				})
			})
		]
	});
}
function Section({ id, eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "mx-auto mb-14 max-w-2xl text-center",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-accent" }),
							" ",
							eyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[15px] text-ink-soft",
						children: subtitle
					})
				]
			}), children]
		})
	});
}
//#endregion
export { Portfolio as component };
