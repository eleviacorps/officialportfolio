"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Bot, Code2, Terminal, Sparkles, Workflow, Cpu, Globe, Database, GitBranch, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    skills: ["Nexus AI", "Project RT", "Fine-tuning", "Quantitative Models", "Prompt Engineering"],
    description: "Deep research in AI systems, fine-tuning models, and building quantitative trading algorithms.",
  },
  {
    id: "automation",
    title: "AI Automation",
    icon: Bot,
    skills: ["Pipeline Automation", "Workflow Optimization", "AI Agents", "API Integration", "Task Orchestration"],
    description: "Building intelligent automation systems that streamline complex workflows and maximize efficiency.",
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Full-Stack"],
    description: "Creating modern, performant web applications with cutting-edge frameworks and technologies.",
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "Rust", "Go"],
    description: "Versatile programming across multiple languages with focus on AI, automation, and systems.",
  },
  {
    id: "cli-tui",
    title: "CLI / TUI Systems",
    icon: Terminal,
    skills: ["OpenCode", "Claude Code", "Terminal Workflows", "Script Automation", "Developer Tools"],
    description: "Advanced command-line workflows and terminal-based interfaces for maximum developer productivity.",
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: Workflow,
    skills: ["VS Code", "Docker", "Git", "Linux", "Cloud Services"],
    description: "Proficient with modern development tools and cloud infrastructure for scalable systems.",
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("ai-research");

  const activeData = skillCategories.find((c) => c.id === activeCategory);
  const activePercentages = skillPercentages[activeCategory] || [85, 88, 91, 94];

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Skills & Expertise
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-white/50">
              A comprehensive toolkit built through years of hands-on experience in AI research,
              automation engineering, and full-stack development.
            </p>
          </Reveal>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category List */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-3">
              {skillCategories.map((category, index) => (
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
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeSkill"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-white/50"
                      />
                    )}
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                          activeCategory === category.id
                            ? "bg-white text-black"
                            : "bg-white/5 text-white/60 group-hover:text-white"
                        )}
                      >
                        <category.icon className="w-5 h-5" />
                      </div>
                      <div>
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
                    </div>
                  </motion.button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Skills Detail */}
          <div className="lg:col-span-8">
            <Reveal delay={0.3}>
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />

                {activeData && (
                  <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0">
                        <activeData.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-white mb-2">
                          {activeData.title}
                        </h2>
                        <p className="text-white/60">{activeData.description}</p>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {activeData.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 rounded-full bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Progress Bars with Unique Percentages */}
                    <div className="space-y-4">
                      {activeData.skills.slice(0, 4).map((skill, index) => {
                        const percentage = activePercentages[index] || 85;
                        return (
                          <div key={skill}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white/70 text-sm">{skill}</span>
                              <span className="text-white/40 text-sm">{percentage}%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-white/80 to-white/40 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* View All Skills Link */}
        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              View all skills
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
