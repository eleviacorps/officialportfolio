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
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";
import { cn } from "@/lib/utils";

const expertiseData = [
  {
    id: "frontend",
    icon: Layers,
    title: "Frontend Development",
    description: "Building responsive, performant, and accessible web applications with modern frameworks.",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "Three.js/WebGL", level: 75 },
    ],
    color: "from-neon-blue to-neon-cyan",
    glowColor: "rgba(0, 240, 255, 0.2)",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs and scalable server-side solutions.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 78 },
    ],
    color: "from-neon-purple to-neon-magenta",
    glowColor: "rgba(184, 41, 221, 0.2)",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI / Machine Learning",
    description: "Implementing intelligent solutions using cutting-edge AI technologies.",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "OpenAI API", level: 92 },
      { name: "LangChain", level: 88 },
      { name: "Hugging Face", level: 82 },
    ],
    color: "from-neon-magenta to-neon-pink",
    glowColor: "rgba(255, 0, 128, 0.2)",
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces with user-centric approaches.",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Design Systems", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "User Research", level: 80 },
      { name: "Motion Design", level: 85 },
    ],
    color: "from-neon-cyan to-neon-blue",
    glowColor: "rgba(0, 229, 255, 0.2)",
  },
  {
    id: "motion",
    icon: Wand2,
    title: "Motion Design",
    description: "Creating captivating animations and interactive experiences.",
    skills: [
      { name: "GSAP", level: 92 },
      { name: "Framer Motion", level: 95 },
      { name: "Three.js", level: 78 },
      { name: "WebGL", level: 72 },
      { name: "Lottie", level: 85 },
    ],
    color: "from-neon-violet to-neon-purple",
    glowColor: "rgba(139, 92, 246, 0.2)",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools & DevOps",
    description: "Managing development workflows and deployment pipelines.",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS/Vercel", level: 88 },
      { name: "CI/CD", level: 82 },
      { name: "Kubernetes", level: 70 },
    ],
    color: "from-neon-pink to-neon-magenta",
    glowColor: "rgba(236, 72, 153, 0.2)",
  },
];

export default function ExpertisePage() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeData = expertiseData.find((d) => d.id === activeCategory);

  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingParticles />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
              Expertise
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Skills & <span className="text-gradient">Technologies</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
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
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan to-neon-purple"
                        />
                      )}

                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                            activeCategory === category.id
                              ? "bg-gradient-to-br text-white"
                              : "bg-white/5 text-white/60 group-hover:text-white",
                            category.color
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
                              ? "text-neon-cyan rotate-90"
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
                            "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                            activeData.color
                          )}
                        >
                          <activeData.icon className="w-8 h-8 text-white" />
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
                                className={cn(
                                  "h-full rounded-full bg-gradient-to-r",
                                  activeData.color
                                )}
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
              "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
              "GraphQL", "TensorFlow", "AWS", "Docker", "Git", "Figma",
            ].map((tech) => (
              <StaggerItem key={tech}>
                <motion.div
                  className="p-4 rounded-xl glass text-center group cursor-pointer"
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <Sparkles className="w-5 h-5 text-neon-cyan mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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


