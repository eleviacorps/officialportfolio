"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Layers,
  Server,
  Cpu,
  Palette,
  Wand2,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowButton } from "@/components/effects/glow-button";
import { cn } from "@/lib/utils";

const expertise = [
  {
    icon: Layers,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-neon-blue to-neon-cyan",
    glowColor: "rgba(0, 240, 255, 0.3)",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    color: "from-neon-purple to-neon-magenta",
    glowColor: "rgba(184, 41, 221, 0.3)",
  },
  {
    icon: Cpu,
    title: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
    color: "from-neon-magenta to-neon-pink",
    glowColor: "rgba(255, 0, 128, 0.3)",
  },
  {
    icon: Palette,
    title: "UI/UX",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    color: "from-neon-cyan to-neon-blue",
    glowColor: "rgba(0, 229, 255, 0.3)",
  },
  {
    icon: Wand2,
    title: "Motion",
    skills: ["GSAP", "Three.js", "WebGL", "Shader Programming"],
    color: "from-neon-violet to-neon-purple",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
    color: "from-neon-pink to-neon-magenta",
    glowColor: "rgba(236, 72, 153, 0.3)",
  },
];

export function ExpertisePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-void to-abyss opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
              Expertise
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Skills & Technologies
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and intelligent applications
            </p>
          </Reveal>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * index}>
              <motion.div
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={cn(
                    "relative p-8 rounded-2xl glass overflow-hidden cursor-pointer",
                    "transition-all duration-500 h-full"
                  )}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glow Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.glowColor}, transparent 40%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={cn(
                      "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6",
                      item.color
                    )}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + skillIndex * 0.05 }}
                        whileHover={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          color: "#fff",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    className="mt-6 h-1 rounded-full overflow-hidden bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className={cn("h-full bg-gradient-to-r rounded-full", item.color)}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${85 + Math.random() * 15}%` } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.8}>
          <div className="text-center">
            <GlowButton href="/expertise" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              View All Skills
            </GlowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
