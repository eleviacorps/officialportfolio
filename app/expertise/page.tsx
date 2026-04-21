"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Layers,
  Server,
  Cpu,
  Palette,
  Wand2,
  Wrench,
  Sparkles,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";
import Link from "next/link";

const expertiseData = [
  {
    id: "ai",
    icon: Cpu,
    title: "AI / Machine Learning",
    description: "Implementing intelligent solutions using cutting-edge AI technologies.",
    skills: [
      { name: "Nexus AI", level: 90 },
      { name: "Project RT", level: 88 },
      { name: "Fine-tuning", level: 85 },
      { name: "OpenAI API", level: 92 },
      { name: "Quant Models", level: 80 },
    ],
    color: "from-white/40 to-white/20",
    glowColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    id: "automation",
    icon: Wand2,
    title: "AI Automation",
    description: "Building intelligent automation systems and workflow optimization.",
    skills: [
      { name: "Pipeline Automation", level: 92 },
      { name: "Workflow Optimization", level: 88 },
      { name: "AI Agents", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Task Orchestration", level: 87 },
    ],
    color: "from-white/50 to-white/30",
    glowColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    id: "frontend",
    icon: Layers,
    title: "Frontend Development",
    description: "Building responsive, performant, and accessible web applications.",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "Socket.io", level: 85 },
    ],
    color: "from-white/60 to-white/40",
    glowColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs and scalable server-side solutions.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 92 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 82 },
      { name: "WebSocket", level: 85 },
    ],
    color: "from-white/70 to-white/50",
    glowColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    id: "cli",
    icon: Wrench,
    title: "CLI / TUI Tools",
    description: "Advanced command-line workflows and terminal-based interfaces.",
    skills: [
      { name: "OpenCode", level: 95 },
      { name: "Claude Code", level: 92 },
      { name: "Terminal Workflows", level: 88 },
      { name: "Script Automation", level: 90 },
      { name: "Rust", level: 75 },
    ],
    color: "from-white/80 to-white/60",
    glowColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    id: "tools",
    icon: Palette,
    title: "Tools & DevOps",
    description: "Managing development workflows and deployment pipelines.",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS/Vercel", level: 88 },
      { name: "CI/CD", level: 82 },
      { name: "Linux", level: 90 },
    ],
    color: "from-white/90 to-white/70",
    glowColor: "rgba(255, 255, 255, 0.1)",
  },
];

export default function ExpertisePage() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeData = expertiseData.find((d) => d.id === activeCategory);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Expertise
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Skills & <span className="text-gradient">Technologies</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and intelligent applications
            </p>
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRef} className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Category List */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-3">
                {expertiseData.map((category, index) => (
                  <Reveal key={category.id} delay={0.1 * index}>
                    <motion.button
                      className={cn(
                        "w-full p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden group",
                        activeCategory === category.id
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      )}
                      onClick={() => setActiveCategory(category.id)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active Indicator */}
                      {activeCategory === category.id && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                        />
                      )}

                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                            activeCategory === category.id
                              ? "bg-white text-black"
                              : "bg-white/5 text-white/60 group-hover:text-white"
                          )}
                        >
                          <category.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={cn(
                              "font-display font-medium transition-colors",
                              activeCategory === category.id
                                ? "text-white"
                                : "text-white/60 group-hover:text-white"
                            )}
                          >
                            {category.title}
                          </h3>
                        </div>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 transition-all",
                            activeCategory === category.id
                              ? "text-white rotate-90"
                              : "text-white/30"
                          )}
                        />
                      </div>
                    </motion.button>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Skills Detail */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {activeData && (
                  <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl p-8 relative overflow-hidden"
                  >
                    {/* Glow Background */}
                    <div
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${activeData.glowColor}, transparent 70%)`,
                      }}
                    />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-8">
                        <div
                          className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center bg-white"
                          )}
                        >
                          <activeData.icon className="w-8 h-8 text-black" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-display font-bold text-white mb-2">
                            {activeData.title}
                          </h2>
                          <p className="text-white/60">{activeData.description}</p>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-6">
                        {activeData.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-white/50 text-sm">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  delay: 0.3 + index * 0.1,
                                  duration: 0.8,
                                  ease: "easeOut",
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
              Technologies I Work With
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "Next.js", "TypeScript", "Node.js", "TensorFlow", "PostgreSQL",
              "GraphQL", "PyTorch", "AWS", "Docker", "Git", "Redis",
            ].map((tech) => (
              <StaggerItem key={tech}>
                <motion.div
                  className="p-4 rounded-xl glass text-center group cursor-pointer"
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <Sparkles className="w-5 h-5 text-white mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {tech}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
