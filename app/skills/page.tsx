"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Bot,
  Code2,
  Terminal,
  Workflow,
  ArrowLeft,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { AnimatedBackground } from "@/components/effects/animated-background";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Unique percentages for each category
const skillPercentages: Record<string, number[]> = {
  "ai-research": [92, 88, 85, 90],
  "automation": [90, 87, 89, 91],
  "web-dev": [95, 93, 88, 86],
  "programming": [88, 94, 91, 85],
  "cli-tui": [89, 92, 87, 90],
  "tools": [93, 91, 88, 90],
};

const skillCategories = [
  {
    id: "ai-research",
    title: "AI Research",
    icon: Brain,
    skills: [
      { name: "Nexus AI", level: "Expert", description: "Advanced quantitative models and AI systems" },
      { name: "Project RT", level: "Expert", description: "Real-time AI processing systems" },
      { name: "Fine-tuning", level: "Advanced", description: "Model optimization and fine-tuning" },
      { name: "Quantitative Models", level: "Advanced", description: "Financial analysis and prediction" },
      { name: "Prompt Engineering", level: "Expert", description: "Advanced LLM prompting techniques" },
    ],
    description: "Deep research in AI systems, fine-tuning models, and building quantitative trading algorithms.",
    color: "from-white/20 to-white/5",
  },
  {
    id: "automation",
    title: "AI Automation",
    icon: Bot,
    skills: [
      { name: "Pipeline Automation", level: "Expert", description: "End-to-end workflow automation" },
      { name: "Workflow Optimization", level: "Advanced", description: "Process improvement and optimization" },
      { name: "AI Agents", level: "Advanced", description: "Autonomous AI agent systems" },
      { name: "API Integration", level: "Expert", description: "Complex API orchestration" },
      { name: "Task Orchestration", level: "Advanced", description: "Multi-step task management" },
    ],
    description: "Building intelligent automation systems that streamline complex workflows and maximize efficiency.",
    color: "from-white/20 to-white/5",
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Code2,
    skills: [
      { name: "Next.js", level: "Expert", description: "Full-stack React framework" },
      { name: "React", level: "Expert", description: "Component-based UI development" },
      { name: "TypeScript", level: "Advanced", description: "Type-safe JavaScript development" },
      { name: "Node.js", level: "Advanced", description: "Server-side JavaScript runtime" },
      { name: "Full-Stack", level: "Expert", description: "End-to-end application development" },
    ],
    description: "Creating modern, performant web applications with cutting-edge frameworks and technologies.",
    color: "from-white/20 to-white/5",
  },
  {
    id: "programming",
    title: "Programming",
    icon: Terminal,
    skills: [
      { name: "Python", level: "Expert", description: "AI/ML and automation scripting" },
      { name: "JavaScript", level: "Expert", description: "Web and automation development" },
      { name: "TypeScript", level: "Advanced", description: "Type-safe application development" },
      { name: "Rust", level: "Intermediate", description: "Systems programming and CLI tools" },
      { name: "Go", level: "Intermediate", description: "Backend services and tooling" },
    ],
    description: "Versatile programming across multiple languages with focus on AI, automation, and systems.",
    color: "from-white/20 to-white/5",
  },
  {
    id: "cli-tui",
    title: "CLI / TUI Systems",
    icon: Terminal,
    skills: [
      { name: "OpenCode", level: "Expert", description: "AI-powered development environment" },
      { name: "Claude Code", level: "Expert", description: "AI-assisted coding workflows" },
      { name: "Terminal Workflows", level: "Advanced", description: "Efficient command-line usage" },
      { name: "Script Automation", level: "Advanced", description: "Custom automation scripts" },
      { name: "Developer Tools", level: "Expert", description: "Custom CLI tool development" },
    ],
    description: "Advanced command-line workflows and terminal-based interfaces for maximum developer productivity.",
    color: "from-white/20 to-white/5",
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: Workflow,
    skills: [
      { name: "VS Code", level: "Expert", description: "Primary code editor" },
      { name: "Docker", level: "Advanced", description: "Containerization and deployment" },
      { name: "Git", level: "Expert", description: "Version control and collaboration" },
      { name: "Linux", level: "Advanced", description: "Server and development environment" },
      { name: "Cloud Services", level: "Advanced", description: "AWS, Vercel, and cloud platforms" },
    ],
    description: "Proficient with modern development tools and cloud infrastructure for scalable systems.",
    color: "from-white/20 to-white/5",
  },
];

const stats = [
  { value: "6+", label: "Core Skill Areas" },
  { value: "30+", label: "Technologies" },
  { value: "4+", label: "Years Experience" },
  { value: "∞", label: "Learning" },
];

export default function SkillsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Link
              href="/#skills"
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
              Technical <span className="text-gradient">Skills</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              in AI research, automation, and development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="glass rounded-2xl p-6 text-center"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="text-4xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Grid */}
      <section ref={sectionRef} className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
              Skill Categories
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const percentages = skillPercentages[category.id];
              const isActive = activeCategory === category.id;

              return (
                <Reveal key={category.id} delay={0.1 * index}>
                  <motion.div
                    className={cn(
                      "glass rounded-3xl p-6 cursor-pointer transition-all duration-300",
                      isActive && "bg-white/[0.07]"
                    )}
                    onClick={() =>
                      setActiveCategory(isActive ? null : category.id)
                    }
                    whileHover={{ y: -4, scale: 1.01 }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                          category.color
                        )}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-white/40 text-sm">
                          {category.skills.length} skills
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 text-sm mb-6">
                      {category.description}
                    </p>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.slice(0, 4).map((skill, idx) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/70 text-sm">
                              {skill.name}
                            </span>
                            <span className="text-white/40 text-xs">
                              {percentages[idx]}%
                            </span>
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-white/60 to-white/30 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${percentages[idx]}%` } : {}}
                              transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <motion.div
                        className="flex items-center justify-center gap-2 text-white/40 text-sm"
                        animate={{ y: isActive ? 2 : 0 }}
                      >
                        <span>{isActive ? "Show Less" : "Show All Skills"}</span>
                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TrendingUp className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/10 mt-6">
                        <h4 className="text-white/70 text-sm font-medium mb-4">
                          All Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-xs border border-white/10"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Cloud */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
              Technology Stack
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python",
                  "TypeScript",
                  "Next.js",
                  "React",
                  "Node.js",
                  "TensorFlow",
                  "PyTorch",
                  "Docker",
                  "Git",
                  "Linux",
                  "AWS",
                  "Vercel",
                  "PostgreSQL",
                  "Redis",
                  "GraphQL",
                  "REST APIs",
                  "WebSocket",
                  "CI/CD",
                  "Rust",
                  "Go",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
