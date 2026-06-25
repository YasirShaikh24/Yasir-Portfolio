import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Star, Sparkles, Code2, Layers, Smartphone, Palette,
  Workflow, Globe, Github, Linkedin, Instagram, Facebook, Twitter, MessageCircle,
  Mail, Phone, MapPin, Check, X, Plus, Minus, ExternalLink,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yasir Shaikh — Full Stack Software Developer" },
      { name: "description", content: "Premium portfolio of Yasir Shaikh. I build modern websites, scalable web apps, custom software and business automation systems." },
      { property: "og:title", content: "Yasir Shaikh — Full Stack Software Developer" },
      { property: "og:description", content: "Transforming ideas into powerful digital products." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ---------- Motion helpers ---------- */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

/* ---------- Page ---------- */
function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="h-10 w-10 rounded-full border-2 border-accent border-t-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
      />

      <Toaster position="top-center" richColors />
      <Nav />
      <Hero />
      <Marquee />
      <Skills />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"], ["Skills", "#skills"], ["Services", "#services"],
    ["Projects", "#projects"], ["Pricing", "#pricing"], ["Contact", "#contact"],
  ] as const;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-2rem))]"
    >
      <div className={`flex items-center justify-between rounded-full px-3 py-2.5 transition-all ${scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"}`}>
        <a href="#top" className="flex items-center gap-2 pl-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-ink text-background text-[11px] font-semibold tracking-wider">YS</div>
          <span className="font-display text-lg leading-none">Yasir Shaikh</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="rounded-full px-3 py-1.5 text-ink-soft transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-dark btn-dark-hover !py-2 !px-4 text-xs">
          Book Free Call <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I help startups, businesses, and entrepreneurs craft high-performance websites, web applications, and custom software systems that scale beautifully and convert relentlessly.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0a0a0a] text-white pt-32 pb-24 md:pt-40 md:pb-32 rounded-b-[2.5rem]">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "34px 34px" }} />
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full opacity-[0.55] blur-[120px]"
          style={{ background: "radial-gradient(circle, #C89B6D 0%, transparent 70%)" }} />
        <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full opacity-40 blur-[140px]"
          style={{ background: "radial-gradient(circle, #C89B6D 0%, transparent 70%)" }} />
        {/* faint grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 items-center">
        {/* Left */}
        <div className="relative z-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#C89B6D] opacity-80" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#C89B6D]" />
            </span>
            Full Stack Software Developer · Available for projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="font-display text-[clamp(2.5rem,5.4vw,4.6rem)] leading-[1.02] tracking-tight"
          >
            Transforming ideas into{" "}
            <em className="italic animate-shine" style={{ background: "linear-gradient(120deg,#e8c79b,#C89B6D,#e8c79b,#C89B6D)", backgroundSize: "200% 100%", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              powerful digital products.
            </em>
          </motion.h1>

          <div className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/65 min-h-[4.5rem]">
            {typedText}
            {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#C89B6D] hover:-translate-y-0.5">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-[#C89B6D] hover:text-[#C89B6D]">
              Book Free Consultation
            </a>
          </motion.div>

          {/* stat row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-12 grid max-w-md grid-cols-4 gap-4 border-t border-white/10 pt-6"
          >
            {[
              { k: "3+", v: "Years building" },
              { k: "20+", v: "Products shipped" },
              { k: "15+", v: "Happy clients" },
              { k: "3+", v: "Industries" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-white">{s.k}</div>
                <div className="mt-0.5 text-[10.5px] uppercase tracking-wider text-white/45">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — transparent portrait floating over black */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-end justify-center md:h-[640px]"
        >
          {/* gold halo behind subject */}
          <motion.div 
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-[55%] rounded-full md:h-[500px] md:w-[500px]"
            style={{ background: "radial-gradient(circle, rgba(200,155,109,0.55) 0%, rgba(200,155,109,0.15) 40%, transparent 70%)", filter: "blur(20px)" }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* subtle disc behind shoulders for grounding */}
          <div className="pointer-events-none absolute left-1/2 bottom-14 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-white/10 md:h-[400px] md:w-[400px]" />
          <div className="pointer-events-none absolute left-1/2 bottom-14 h-[260px] w-[260px] -translate-x-1/2 rounded-full border border-white/5 md:h-[340px] md:w-[340px]" />

          <motion.img
            src="/yasir.png"
            alt="Yasir Shaikh — Full Stack Software Developer"
            width={1024}
            height={1536}
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ 
              y: [0, -8, 0],
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
              scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
            }}
            className="relative z-10 h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Marquee / Trust ---------- */
function Marquee() {
  const items = ["Healthcare", "Fintech", "E-commerce", "Education", "Logistics", "SaaS", "Real Estate", "Hospitality", "Media", "Manufacturing"];
  return (
    <section id="about" className="relative border-y border-ink/5 bg-surface py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-soft">Trusted by clients across the globe</p>
        <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {[...items, ...items].map((it, i) => (
              <div key={i} className="font-display text-2xl text-ink/70 whitespace-nowrap">{it}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const groups = [
    {
      no: "01", title: "Frontend", tag: "Interface Engineering",
      desc: "Pixel-precise interfaces with motion, accessibility and performance baked in.",
      items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Motion", "HTML5", "CSS3"],
      span: "lg:col-span-3",
    },
    {
      no: "02", title: "Backend", tag: "Server & APIs",
      desc: "Robust APIs, auth flows and business logic built to scale.",
      items: ["Node.js", "Express", "Laravel", "Python", "Flask", "REST", "GraphQL"],
      span: "lg:col-span-2",
    },
    {
      no: "03", title: "Database", tag: "Data Layer",
      desc: "Modeled, indexed and tuned for real workloads.",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis"],
      span: "lg:col-span-2",
    },
    {
      no: "04", title: "Cloud & Tools", tag: "Ship & Operate",
      desc: "Continuous delivery, observability and infrastructure I trust in production.",
      items: ["AWS", "Vercel", "Netlify", "Docker", "GitHub Actions", "Git", "Figma"],
      span: "lg:col-span-3",
    },
  ];

  return (
    <Section id="skills" eyebrow="Technical Expertise" title="The toolkit behind every product I ship" subtitle="A curated stack — chosen for outcomes, not trends.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl bg-[#0a0a0a] p-7 text-white ${g.span}`}
          >
            {/* gold sweep on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-700 group-hover:opacity-100"
              style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), rgba(200,155,109,0.25), transparent 60%)" }} />
            {/* grain */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "22px 22px" }} />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#C89B6D]">{g.tag}</div>
                <h3 className="mt-2 font-display text-3xl">{g.title}</h3>
              </div>
              <div className="font-display text-5xl leading-none text-white/15 transition group-hover:text-[#C89B6D]/60">{g.no}</div>
            </div>

            <p className="relative z-10 mt-4 max-w-md text-sm leading-relaxed text-white/55">{g.desc}</p>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2">
              {g.items.map((it, i) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 + i * 0.03 }}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 backdrop-blur transition group-hover:border-[#C89B6D]/50 hover:bg-[#C89B6D] hover:text-black"
                >
                  {it}
                </motion.span>
              ))}
            </div>

            {/* corner mark */}
            <div className="absolute right-6 bottom-6 h-px w-12 bg-gradient-to-r from-transparent to-[#C89B6D]/60" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: Globe, title: "Website Development", desc: "Business websites, portfolios and company sites built to convert." },
    { icon: Layers, title: "Web Applications", desc: "Custom dashboards, portals, internal tools and SaaS products." },
    { icon: Code2, title: "Software Development", desc: "Tailor-made software engineered around your operations." },
    { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform iOS and Android applications." },
    { icon: Palette, title: "UI / UX Design", desc: "Modern interfaces focused on clarity and conversion." },
    { icon: Workflow, title: "Business Automation", desc: "Workflows and integrations that remove manual work." },
  ];
  return (
    <Section id="services" eyebrow="What I Do" title="Services built around real business outcomes" subtitle="End-to-end design and engineering — from a single landing page to a full platform.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition group-hover:opacity-100"
              style={{ background: "color-mix(in oklab, var(--accent) 25%, transparent)", filter: "blur(40px)" }} />
            <s.icon className="h-7 w-7 text-ink" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-ink-soft transition group-hover:text-accent">
              Learn more <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const [expandLevel, setExpandLevel] = useState(0); // 0 = first 6, 1 = +6 more
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const updateMousePosition = (e: React.MouseEvent, container: HTMLElement) => {
    const rect = container.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Main 6 projects with live previews
  const mainProjects = [
    {
      id: 1,
      name: "ScaleSight",
      cat: "Websites",
      desc: "Supporting businesses with Virtual CFO services, financial planning, and strategic guidance.",
      stack: ["React", "Tailwind CSS", "Node.js"],
      link: "https://www.scalesight.in",
      hasLivePreview: true,
    },
    {
      id: 2,
      name: "Firdaus Makeover",
      cat: "Websites",
      desc: "A high-end, responsive beauty service platform designed for Firdaus Beauty Suite.",
      stack: ["React", "Tailwind CSS", "Vite"],
      link: "https://firdaus-beauty-suite.vercel.app",
      hasLivePreview: true,
    },
    {
      id: 3,
      name: "Shaden House",
      cat: "Websites",
      desc: "A modern, elegant website for a Saudi Arabian luxury property.",
      stack: ["React", "Vite", "Tailwind CSS"],
      link: "https://www.shadenhouse.com",
      hasLivePreview: true,
    },
    {
      id: 4,
      name: "Islamic Deeds Tracker",
      cat: "Web Apps",
      desc: "A minimal and spiritually focused web app designed to help Muslims track daily good deeds.",
      stack: ["Python", "React", "PostgreSQL"],
      link: "https://islamic-deeds-tracker.vercel.app/",
      hasLivePreview: true,
    },
    {
      id: 5,
      name: "NOVA",
      cat: "Web Apps",
      desc: "A modern and responsive e-commerce web app for a smooth shopping experience.",
      stack: ["Node.js", "React", "Express"],
      link: "https://nova-ecommerce-website.netlify.app/",
      hasLivePreview: true,
    },
    {
      id: 6,
      name: "Sagir Trader",
      cat: "Web Apps",
      desc: "A powerful trading dashboard that enables users to track market movements in real time.",
      stack: ["React", "Node.js", "PostgreSQL"],
      link: "https://sagir-trader.netlify.app",
      hasLivePreview: true,
    },
  ];

  // Additional 6 projects with static images
  const additionalProjects = [
    {
      id: 7,
      name: "LifeSync",
      cat: "Mobile Apps",
      desc: "LifeSync is an all-in-one personal productivity and tracking mobile app that helps users manage daily tasks, build habits, maintain journals, and track expenses in one place.",
      stack: ["React Native", "Firebase", "Node.js"],
      link: "#",
      image: "/project6.png",
      hasLivePreview: false,
    },
    {
      id: 8,
      name: "E-Commerce App",
      cat: "Mobile Apps",
      desc: "Online shopping app with product listing, cart & checkout, and modern UI.",
      stack: ["React Native", "Node.js", "MongoDB"],
      link: "#",
      image: "/project8.png",
      hasLivePreview: false,
    },
    {
      id: 9,
      name: "Grass Hawk Mole Trap",
      cat: "Websites",
      desc: "Creative workflows with team collaboration, asset management and brand consistency.",
      stack: ["React", "Tailwind CSS", "CMS"],
      link: "#",
      image: "/project5.png",
      hasLivePreview: false,
    },
    {
      id: 10,
      name: "Habit Tracker",
      cat: "Web Apps",
      desc: "Daily habit tracking with streak & consistency system, calendar-based habit view and minimal UI.",
      stack: ["React", "TypeScript", "LocalStorage"],
      link: "#",
      image: "/project7.png",
      hasLivePreview: false,
    },
    {
      id: 11,
      name: "LifeLync",
      cat: "Websites",
      desc: "Easy customization with interactive elements, retina ready graphics and high performance.",
      stack: ["React", "Next.js", "Tailwind CSS"],
      link: "#",
      image: "/project3.png",
      hasLivePreview: false,
    },
    {
      id: 12,
      name: "Vibgyor Maple",
      cat: "Software",
      desc: "Cloud integration with real-time analytics, secure architecture and scalable infrastructure.",
      stack: ["Python", "AWS", "PostgreSQL"],
      link: "#",
      image: "/project4.png",
      hasLivePreview: false,
    },
  ];

  let allDisplayedProjects = [...mainProjects];
  if (expandLevel >= 1) {
    allDisplayedProjects = [...allDisplayedProjects, ...additionalProjects];
  }

  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work" subtitle="A glimpse of products I've designed and engineered.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {allDisplayedProjects.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-accent/40"
            >
              {/* Project Preview */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] cursor-pointer"
                onMouseMove={(e) => updateMousePosition(e, e.currentTarget)}
                onMouseEnter={() => setHoveredProject(p.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => p.link !== "#" && window.open(p.link, '_blank', 'noopener,noreferrer')}
              >
                {p.hasLivePreview ? (
                  <>
                    {/* Live iframe preview */}
                    <iframe
                      src={p.link}
                      title={`${p.name} - Live Preview`}
                      className="absolute border-0"
                      style={{
                        width: '1440px',
                        height: '900px',
                        transform: 'scale(0.29)',
                        transformOrigin: 'top left',
                        pointerEvents: 'none',
                      }}
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/40 backdrop-blur-sm flex items-center gap-1.5 z-10">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Live</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Static image preview */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#3a3a3a] flex items-center justify-center"><div class="text-center px-6"><div class="text-4xl mb-3">📷</div><p class="text-white/70 text-sm font-medium">${p.name}</p></div></div>`;
                        }
                      }}
                    />
                  </>
                )}

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredProject === p.id && p.link !== "#" ? 'opacity-100' : 'opacity-0'}`} />

                {/* Mouse-following View Now button */}
                {p.link !== "#" && (
                  <div
                    className={`absolute pointer-events-none z-30 transition-opacity duration-200 ${hoveredProject === p.id ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      left: mousePosition.x - 50,
                      top: mousePosition.y - 20,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm shadow-lg whitespace-nowrap">
                      View Now
                    </div>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                    {p.cat}
                  </span>
                </div>

                {/* External link icon only */}
                {p.link !== "#" && (
                  <div className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={p.link}
                      onClick={(e) => e.stopPropagation()}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink hover:bg-white transition"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="mt-1.5 text-sm text-ink-soft line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {expandLevel < 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setExpandLevel(1)}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-background transition hover:bg-accent hover:text-ink hover:-translate-y-1 shadow-lg"
          >
            View More Projects <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </Section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    ["Discovery & Consultation", "Understanding goals, audience and success metrics."],
    ["Planning & Design", "Wireframes, UI design and a clear roadmap."],
    ["Development", "Clean, scalable code with weekly progress demos."],
    ["Testing", "QA, performance, accessibility and security checks."],
    ["Deployment", "Smooth launch with monitoring and analytics."],
    ["Support & Maintenance", "Ongoing improvements and reliable support."],
  ];
  return (
    <Section eyebrow="How I Work" title="A calm, predictable process" subtitle="Six structured steps from idea to a polished, supported product.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {steps.map(([title, desc], i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={`relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="relative md:[direction:ltr]">
                <div className="absolute left-2 top-1 grid h-6 w-6 place-items-center rounded-full border border-ink/15 bg-background text-[10px] font-semibold md:left-[calc(100%-12px)] md:translate-x-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="md:[direction:ltr]">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const [open, setOpen] = useState(false);
  const [planName, setPlanName] = useState("");
  const plans = [
    {
      name: "Starter Website", price: "₹9,999",
      features: ["Responsive Website", "Contact Form", "SEO Setup", "Hosting Guidance"],
      cta: "Get Started", popular: false,
    },
    {
      name: "Professional Website", price: "₹24,999",
      features: ["Premium Design", "Admin Panel", "Database Integration", "Performance Optimization"],
      cta: "Get Started", popular: true,
    },
    {
      name: "Custom Software", price: "From ₹49,999",
      features: ["Full Custom Development", "Dashboard & Auth", "Database & APIs", "Deployment Support"],
      cta: "Request Quote", popular: false,
    },
  ];

  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple, transparent plans" subtitle="Pick what fits today — upgrade as your product grows.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.07 }}
            className={`relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-1 ${p.popular ? "border-ink bg-ink text-background shadow-[var(--shadow-glow)]" : "border-ink/10 bg-card shadow-[var(--shadow-card)]"}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                Most Popular
              </span>
            )}
            <h3 className={`font-display text-2xl ${p.popular ? "text-background" : ""}`}>{p.name}</h3>
            <div className={`mt-4 font-display text-4xl ${p.popular ? "text-background" : ""}`}>{p.price}</div>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className={`flex items-center gap-2 ${p.popular ? "text-white/80" : "text-ink-soft"}`}>
                  <Check className={`h-4 w-4 ${p.popular ? "text-accent" : "text-accent"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => { setPlanName(p.name); setOpen(true); }}
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${p.popular ? "bg-background text-ink hover:bg-accent" : "bg-ink text-background hover:bg-accent hover:text-ink"}`}
            >
              {p.cta} <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>

      <InquiryModal open={open} onOpenChange={setOpen} plan={planName} />
    </Section>
  );
}

function InquiryModal({ open, onOpenChange, plan }: { open: boolean; onOpenChange: (v: boolean) => void; plan: string }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New Inquiry: ${plan}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nMobile: ${fd.get("mobile")}\nCompany: ${fd.get("company")}\nService: ${plan}\nBudget: ${fd.get("budget")}\n\nDetails:\n${fd.get("details")}`
    );
    window.location.href = `mailto:hello@yasirshaikh.dev?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Thank you! Your inquiry has been submitted successfully. I will contact you shortly.");
    }, 600);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-2xl border-ink/10 p-0">
        <div className="p-7">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Tell me about your project</DialogTitle>
            <DialogDescription className="text-ink-soft">
              {plan ? `Plan: ${plan}` : "Share a few details and I'll get back within 24 hours."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field name="name" placeholder="Your name" required />
            <Field name="email" type="email" placeholder="Email" required />
            <Field name="mobile" placeholder="Mobile number" />
            <Field name="company" placeholder="Company" />
            <Field name="budget" placeholder="Estimated budget" className="sm:col-span-2" />
            <textarea name="details" rows={4} required placeholder="Project details…" className="sm:col-span-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent" />
            <button disabled={loading} className="btn-dark btn-dark-hover sm:col-span-2 justify-center">
              {loading ? "Sending…" : "Submit inquiry"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={`w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent ${className}`}
    />
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { name: "Aarav Mehta", company: "Founder, Northwind Labs", quote: "Yasir shipped a polished platform faster than any agency we tried. The attention to detail is unreal." },
    { name: "Priya Kapoor", company: "COO, Lumen Health", quote: "Our internal tools went from chaotic spreadsheets to a beautiful dashboard the team actually loves." },
    { name: "Daniel Roy", company: "CEO, Atlas Logistics", quote: "Communication is excellent and the work consistently raises our product bar. Highly recommend." },
    { name: "Sara Khan", company: "CMO, Verve Studio", quote: "Our new website doubled conversions in the first month. Strategy, design and code — all on point." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <Section eyebrow="Client Feedback" title="Trusted by founders & teams" subtitle="">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-ink/8 bg-card p-10 shadow-[var(--shadow-card)]">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-40 blur-3xl" style={{ background: "color-mix(in oklab, var(--accent) 40%, transparent)" }} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 font-display text-2xl leading-snug text-ink md:text-3xl">"{items[i].quote}"</p>
              <footer className="mt-6 text-sm">
                <div className="font-medium">{items[i].name}</div>
                <div className="text-ink-soft">{items[i].company}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex gap-1.5">
            {items.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-ink" : "w-4 bg-ink/15"}`} aria-label={`Slide ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const projectType = fd.get("projectType") || "General Inquiry";
    const subject = encodeURIComponent(`${projectType} - Portfolio Contact`);
    const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nProject Type: ${projectType}\n\n${fd.get("message")}`);
    window.location.href = `mailto:yasirazimshaikh5440@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Thank you! I'll get back within 24 hours.");
    (e.target as HTMLFormElement).reset();
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
    },
  ];

  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's build something amazing together" subtitle="Have a project in mind? Tell me a little about it and I'll be in touch shortly.">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Side - Contact Information */}
        <motion.div {...fadeUp} className="rounded-3xl border border-accent/20 bg-card p-8 shadow-[0_0_30px_rgba(200,155,109,0.15)]">
          <h3 className="font-display text-2xl">Contact information</h3>
          <p className="mt-1 text-sm text-ink-soft">Fast replies, clear scope, honest advice.</p>
          <ul className="mt-6 space-y-4">
            {info.map((it) => (
              <motion.li 
                key={it.label}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group"
              >
                <a
                  href={it.link}
                  target={it.link.startsWith('http') ? '_blank' : undefined}
                  rel={it.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3 text-sm cursor-pointer"
                >
                  <motion.span 
                    className="grid h-11 w-11 place-items-center rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: `${it.color}15`,
                      border: `1px solid ${it.color}30`
                    }}
                    whileHover={{ 
                      backgroundColor: it.color,
                      boxShadow: `0 0 20px ${it.color}60`,
                      scale: 1.1
                    }}
                  >
                    <it.icon 
                      className="h-5 w-5 transition-colors duration-300 group-hover:text-white" 
                      style={{ color: it.color }}
                    />
                  </motion.span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ink-soft">{it.label}</div>
                    <div className="font-medium group-hover:text-accent transition-colors">{it.value}</div>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form 
          {...fadeUp} 
          transition={{ ...fadeUp.transition, delay: 0.1 }} 
          onSubmit={handleSubmit} 
          className="rounded-3xl border-2 border-accent/30 bg-card p-8 shadow-[0_0_40px_rgba(200,155,109,0.2)] relative overflow-hidden"
        >
          {/* Golden glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="name" placeholder="Name" required />
            <Field name="email" type="email" placeholder="Email" required />
            <Field name="phone" placeholder="Phone number" />
            
            {/* Project Type Dropdown */}
            <div className="relative">
              <select
                name="projectType"
                required
                className="w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Project Type *</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Software Development">Software Development</option>
                <option value="Website Development">Website Development</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <textarea 
              name="message" 
              rows={5} 
              required 
              placeholder="Your message…" 
              className="sm:col-span-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent resize-none" 
            />
            
            <button className="btn-dark btn-dark-hover sm:col-span-2 justify-center group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    ["How long does a project take?", "Most websites take 2–4 weeks. Custom software typically runs 6–12 weeks depending on scope. I share weekly demos throughout."],
    ["What technologies do you use?", "Mostly React, Next.js, Node.js, Laravel, Python and PostgreSQL — chosen based on what's right for your product, not what's trendy."],
    ["Do you provide support after delivery?", "Yes. Every project includes a 30-day support window, with optional monthly retainers for ongoing improvements."],
    ["Can you build custom software?", "Absolutely — dashboards, internal tools, CRMs, marketplaces and automation systems are my core work."],
    ["Do you provide hosting support?", "Yes. I help configure hosting on Vercel, Netlify, AWS or your existing infrastructure, with monitoring and backups."],
  ];
  return (
    <Section eyebrow="FAQ" title="Frequently asked questions">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-ink/10 bg-card px-5 shadow-[var(--shadow-card)]">
              <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-ink-soft">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const links = ["Home", "About", "Projects", "Services", "Pricing", "Contact"];
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-ink/8 bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-ink text-background text-xs font-semibold">YS</div>
            <span className="font-display text-xl">Yasir Shaikh</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">Building scalable digital experiences and software solutions for ambitious teams.</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-ink-soft">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-ink transition hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-ink-soft">Connect</h4>
          <div className="mt-4 flex gap-2">
            {[Github, Linkedin, Instagram, Twitter, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-accent hover:text-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ink/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-ink-soft md:flex-row lg:px-10">
          <span>© 2026 Yasir Shaikh. All Rights Reserved.</span>
          <span>Crafted with care · Made in India</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section primitive ---------- */
function Section({
  id, eyebrow, title, subtitle, children,
}: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <Sparkles className="h-3 w-3 text-accent" /> {eyebrow}
            </div>
          )}
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-[15px] text-ink-soft">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
