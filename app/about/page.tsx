"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Zap, Target, Heart, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const milestones = [
  {
    year: "2022",
    title: "Game Development",
    description: "Started as indie game developer working on multiplayer games",
    icon: Code2,
  },
  {
    year: "2023",
    title: "Python Programming",
    description: "Moved into Python programming and automation",
    icon: Zap,
  },
  {
    year: "2024",
    title: "Web Development",
    description: "Entered web development with React and Next.js",
    icon: Lightbulb,
  },
  {
    year: "2025",
    title: "AI & Quant Systems",
    description: "Shifted to AI research, automation, and quantitative systems",
    icon: Target,
  },
];

const values = [
  { title: "Innovation", desc: "Always pushing boundaries" },
  { title: "Quality", desc: "Pixel-perfect execution" },
  { title: "Collaboration", desc: "Working together to win" },
  { title: "Growth", desc: "Never stop learning" },
];

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "GraphQL",
  "PostgreSQL", "Redis", "Docker", "AWS", "TensorFlow", "OpenAI",
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const timelineData = milestones.map((milestone) => ({
    title: milestone.year,
    content: (
      <div>
        <h3 className="text-xl font-display font-bold text-white mb-2">
          {milestone.title}
        </h3>
        <p className="text-white/60">{milestone.description}</p>
      </div>
    ),
  }));

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              About Me
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Building the
              <span className="text-gradient block">Future with AI</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              A passionate AI researcher and automation engineer creating intelligent
              systems that blend cutting-edge technology with practical solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Logo Loop */}
      <section className="py-12 overflow-hidden border-y border-white/10">
        <div className="flex gap-12 animate-marquee">
          {[...techLogos, ...techLogos].map((tech, index) => (
            <span key={index} className="text-white/40 font-mono text-sm whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square rounded-3xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-charcoal flex items-center justify-center">
                  <span className="text-8xl font-display font-bold text-white/10">RR</span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(90deg, #333, #444, #555, #333)",
                    backgroundSize: "300% 100%",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-[2px] rounded-3xl bg-abyss" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                  My Story
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    I&apos;m Rehan Raza, a 19-year-old AI researcher and automation engineer
                    from India. My journey began in 2022 when I dove into Computer Science
                    as an indie game developer, working on every aspect of game creation
                    from texturing and music to multiplayer systems.
                  </p>
                  <p>
                    Today, I focus on pushing the boundaries of AI systems, building
                    intelligent automation pipelines, and developing quantitative models.
                    My work spans from fine-tuning large language models to creating
                    efficient CLI/TUI workflows that maximize developer productivity.
                  </p>
                  <p>
                    When I&apos;m not researching or coding, you&apos;ll find me exploring
                    the latest in AI research, experimenting with new automation techniques,
                    or building tools that make developers&apos; lives easier.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-16">
              Core Values
            </h2>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="p-6 rounded-2xl glass text-center group cursor-pointer relative"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-16">
              My Journey
            </h2>
          </Reveal>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "12+", label: "Projects Completed" },
              { value: "19", label: "Years Old" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <motion.div
                    className="text-4xl sm:text-5xl font-display font-bold text-gradient mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
