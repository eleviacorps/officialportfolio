"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, ArrowRight, Cpu, Globe, Bot, LineChart, Wrench } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PinContainer } from "@/components/ui/3d-pin";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Research", "Automation", "Web Apps", "Quant/Finance", "Developer Tools"];

const projects = [
  {
    id: 1,
    title: "Nexus AI",
    category: "AI Research",
    description: "Advanced quantitative models and AI systems for financial analysis and prediction. Implements neural network architectures for market analysis.",
    tags: ["Python", "TensorFlow", "Quant"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Cpu,
    featured: true,
  },
  {
    id: 2,
    title: "Project RT",
    category: "AI Research",
    description: "Real-time AI processing system with optimized inference pipelines. Focuses on efficient AI usage and model optimization techniques.",
    tags: ["Python", "OpenAI", "Real-time"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Bot,
    featured: true,
  },
  {
    id: 3,
    title: "Automation Pipeline",
    category: "Automation",
    description: "End-to-end automation framework for AI workflows. Streamlines complex tasks with intelligent orchestration and error handling.",
    tags: ["Python", "Node.js", "Automation"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Layers,
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Apps",
    description: "Modern, interactive portfolio built with Next.js and Framer Motion. Features smooth animations and premium glassmorphism design.",
    tags: ["Next.js", "TypeScript", "Motion"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Globe,
    featured: false,
  },
  {
    id: 5,
    title: "Quant Trading Bot",
    category: "Quant/Finance",
    description: "Algorithmic trading system with backtesting capabilities. Implements quantitative strategies with risk management.",
    tags: ["Python", "Pandas", "Finance"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: LineChart,
    featured: false,
  },
  {
    id: 6,
    title: "CLI Toolkit",
    category: "Developer Tools",
    description: "Command-line utilities for developer productivity. Includes TUI components and automation scripts for common workflows.",
    tags: ["Rust", "CLI", "TUI"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Wrench,
    featured: false,
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Projects
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-white/50">
              A selection of projects spanning AI research, automation systems, 
              web development, and developer tools.
            </p>
          </Reveal>
        </div>

        {/* Featured Projects with 3D Pin */}
        <div className="mb-20">
          <Reveal>
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="w-6 h-6 text-white/60" />
              Featured Projects
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * index}>
                <PinContainer
                  title={project.title}
                  href={project.github}
                  className="w-full"
                >
                  <div className="flex flex-col p-6 tracking-tight w-full h-[340px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white/80" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{project.title}</h3>
                        <span className="text-xs text-white/40">{project.category}</span>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-white/10 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </PinContainer>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
        </Reveal>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects
              .filter((p) => !p.featured || activeCategory !== "All")
              .map((project, index) => (
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
                      <div>
                        <h3 className="font-bold text-white group-hover:text-gradient transition-all">
                          {project.title}
                        </h3>
                        <span className="text-xs text-white/40">{project.category}</span>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-white/5 text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* View All Link */}
        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/eleviacorps/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              View all projects on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
