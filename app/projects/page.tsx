"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Layers,
  ArrowLeft,
  Cpu,
  Globe,
  Bot,
  LineChart,
  Wrench,
  MessageSquare,
  Download,
  Sparkles,
  Search,
  Filter,
  Brain,
  BookOpen,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "AI Research",
  "Automation",
  "Web Apps",
  "Quant/Finance",
  "Developer Tools",
];

const projects = [
  {
    id: 1,
    title: "Nexus AI",
    category: "AI Research",
    description:
      "Advanced quantitative models and AI systems for financial analysis and prediction. Implements neural network architectures for market analysis and automated trading strategies.",
    tags: ["Python", "TensorFlow", "Quant", "PyTorch"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Cpu,
    featured: true,
    year: "2025",
  },
  {
    id: 2,
    title: "Project RT",
    category: "AI Research",
    description:
      "Real-time AI processing system with optimized inference pipelines. Focuses on efficient AI usage and model optimization techniques for low-latency responses. Closed source research project.",
    tags: ["Python", "OpenAI", "Real-time", "WebSocket"],
    github: null, // Closed source
    live: "#",
    icon: Bot,
    featured: true,
    year: "2025",
  },
  {
    id: 3,
    title: "FrostChat",
    category: "Web Apps",
    description:
      "Full-featured chat application with rooms, invite codes, authentication, database, profiles, voice messages, text, and images. Modern real-time messaging platform.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    github: "https://github.com/eleviacorps/frostchat",
    live: "#",
    icon: MessageSquare,
    featured: true,
    year: "2024",
  },
  {
    id: 4,
    title: "Stexter",
    category: "Web Apps",
    description:
      "Room-based texting web application. Modern chat interface with real-time messaging capabilities and room management.",
    tags: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/eleviacorps/",
    live: "https://stexter.vercel.app/",
    icon: MessageSquare,
    featured: true,
    year: "2024",
  },
  {
    id: 5,
    title: "FrostTexter",
    category: "Web Apps",
    description:
      "Texting application with modern UI and real-time capabilities. Lightweight messaging solution.",
    tags: ["JavaScript", "WebSocket", "Express"],
    github: "https://github.com/eleviacorps/frosttexter",
    live: "#",
    icon: MessageSquare,
    featured: false,
    year: "2024",
  },
  {
    id: 6,
    title: "Personal AI",
    category: "AI Research",
    description:
      "Fine-tuned personal AI model trained on my messages and behavior patterns. Custom AI assistant with personalized responses.",
    tags: ["Python", "LLM", "Fine-tuning", "PyTorch"],
    github: "https://github.com/eleviacorps/perso_ai",
    live: "#",
    icon: Brain,
    featured: true,
    year: "2024",
  },
  {
    id: 7,
    title: "FR Downloader",
    category: "Developer Tools",
    description:
      "Specific website direct download link extractor and download manager. CLI tool for extracting direct media links.",
    tags: ["Python", "CLI", "Web Scraping"],
    github: "https://github.com/eleviacorps/fr_downloader",
    live: "#",
    icon: Download,
    featured: false,
    year: "2024",
  },
  {
    id: 8,
    title: "AI Study Pipeline",
    category: "AI Research",
    description:
      "Enhanced NCERT study assistant skill. Document ingestion and text extraction pipeline for educational content processing.",
    tags: ["Python", "NLP", "PDF Processing"],
    github: "https://github.com/eleviacorps/ai_studypipeline",
    live: "#",
    icon: BookOpen,
    featured: false,
    year: "2024",
  },
  {
    id: 9,
    title: "Quant Trading Bot",
    category: "Quant/Finance",
    description:
      "Algorithmic trading system with backtesting capabilities. Implements quantitative strategies with risk management and portfolio optimization.",
    tags: ["Python", "Pandas", "Finance", "NumPy"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: LineChart,
    featured: false,
    year: "2025",
  },
  {
    id: 10,
    title: "Automation Pipeline",
    category: "Automation",
    description:
      "End-to-end automation framework for AI workflows. Streamlines complex tasks with intelligent orchestration, error handling, and self-healing capabilities.",
    tags: ["Python", "Node.js", "Automation", "Redis"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Layers,
    featured: false,
    year: "2025",
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "Web Apps",
    description:
      "Modern, interactive portfolio built with Next.js and Framer Motion. Features smooth animations, premium glassmorphism design, and responsive layouts.",
    tags: ["Next.js", "TypeScript", "Motion", "Tailwind"],
    github: "https://github.com/eleviacorps/officialportfolio",
    live: "https://elenev.vercel.app/",
    icon: Globe,
    featured: false,
    year: "2024",
  },
  {
    id: 12,
    title: "CLI Toolkit",
    category: "Developer Tools",
    description:
      "Command-line utilities for developer productivity. Includes TUI components, automation scripts, and common workflow enhancers.",
    tags: ["Rust", "CLI", "TUI", "Bash"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Wrench,
    featured: false,
    year: "2024",
  },
];

const stats = [
  { value: "12+", label: "Projects" },
  { value: "6", label: "Categories" },
  { value: "4+", label: "Years" },
  { value: "100%", label: "Passion" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              All <span className="text-gradient">Projects</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              A complete collection of my work spanning AI research, automation
              systems, web development, and developer tools.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-white/60" />
              Featured Projects
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * index}>
                <motion.div
                  className="glass rounded-2xl p-6 h-full group hover:bg-white/[0.07] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {project.title}
                      </h3>
                      <span className="text-xs text-white/40">
                        {project.category} • {project.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-white/5 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeCategory === category
                        ? "bg-white text-black"
                        : "glass text-white/60 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full glass text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
            </div>
          </Reveal>

          {/* All Projects Grid */}
          <div ref={sectionRef}>
            <AnimatePresence mode="popLayout">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="glass rounded-2xl p-6 h-full group hover:bg-white/[0.07] transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                          <project.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white group-hover:text-gradient transition-all truncate">
                            {project.title}
                          </h3>
                          <span className="text-xs text-white/40">
                            {project.category} • {project.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/50 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded bg-white/5 text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-xs"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 text-white/30 text-xs">
                            <Github className="w-3.5 h-3.5" />
                            Private
                          </span>
                        )}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Filter className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/40">
                  No projects found matching your criteria
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Have a project in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 mb-8">
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              Let&apos;s Talk
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
