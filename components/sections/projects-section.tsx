"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, ArrowRight, Cpu, Globe, Bot, LineChart, Wrench, MessageSquare, Brain, Download, BookOpen } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";

const categories = ["All", "AI Research", "Web Apps", "Developer Tools"];

const projects = [
  {
    id: 1,
    title: "Nexus AI",
    category: "AI Research",
    description: "Advanced quantitative models and AI systems for financial analysis and prediction. Implements neural network architectures.",
    tags: ["Python", "TensorFlow", "Quant"],
    github: "https://github.com/eleviacorps/",
    live: "#",
    icon: Cpu,
    color: "from-white/20 to-white/5",
  },
  {
    id: 2,
    title: "Project RT",
    category: "AI Research",
    description: "Real-time AI processing system with optimized inference pipelines. Closed source research project focusing on efficient AI usage.",
    tags: ["Python", "OpenAI", "Real-time"],
    github: null, // Closed source
    live: "#",
    icon: Bot,
    color: "from-white/20 to-white/5",
  },
  {
    id: 3,
    title: "Personal AI",
    category: "AI Research",
    description: "Fine-tuned personal AI model trained on my messages and behavior patterns. Custom AI assistant with personalized responses.",
    tags: ["Python", "LLM", "Fine-tuning"],
    github: "https://github.com/eleviacorps/perso_ai",
    live: "#",
    icon: Brain,
    color: "from-white/20 to-white/5",
  },
  {
    id: 4,
    title: "FrostChat",
    category: "Web Apps",
    description: "Full-featured chat application with rooms, invite codes, auth, database, profiles, voice messages, text, and images.",
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/eleviacorps/frostchat",
    live: "#",
    icon: MessageSquare,
    color: "from-white/20 to-white/5",
  },
  {
    id: 5,
    title: "Stexter",
    category: "Web Apps",
    description: "Room-based texting web application. Modern chat interface with real-time messaging capabilities.",
    tags: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/eleviacorps/",
    live: "https://stexter.vercel.app/",
    icon: MessageSquare,
    color: "from-white/20 to-white/5",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Web Apps",
    description: "Modern, interactive portfolio built with Next.js and Framer Motion. Features smooth animations and premium glassmorphism design.",
    tags: ["Next.js", "TypeScript", "Motion"],
    github: "https://github.com/eleviacorps/officialportfolio",
    live: "https://elenev.vercel.app/",
    icon: Globe,
    color: "from-white/20 to-white/5",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

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

        {/* Category Filter */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "glass text-white/60 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid - Fixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.1 * index}>
              <motion.div
                className="glass rounded-2xl overflow-hidden group h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card Header with Icon */}
                <div className={`p-6 bg-gradient-to-br ${project.color} border-b border-white/10`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{project.title}</h3>
                      <span className="text-xs text-white/50">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-white/60 text-sm mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-white/30 text-sm">
                        <Github className="w-4 h-4" />
                        Private
                      </span>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* View All Link */}
        <Reveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
