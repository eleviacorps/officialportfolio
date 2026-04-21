"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Gamepad2,
  Code,
  Globe,
  LineChart,
  Cpu,
  ArrowLeft,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { AnimatedBackground } from "@/components/effects/animated-background";
import Link from "next/link";

const journeyData = [
  {
    year: "2022",
    title: "Game Development Beginnings",
    description:
      "Started as an indie game developer. Worked on every aspect of game development including texturing, music, multiplayer systems, and overall design. Built hobby multiplayer games inspired by Squid Game mechanics.",
    icon: Gamepad2,
    color: "from-white/40 to-white/20",
    highlights: ["Multiplayer Systems", "Game Design", "Asset Creation"],
  },
  {
    year: "2023",
    title: "Python & Programming",
    description:
      "Moved into Python programming. Focused on beginner-level programming, experimentation, and building foundational skills in software development.",
    icon: Code,
    color: "from-white/50 to-white/30",
    highlights: ["Python Fundamentals", "Data Structures", "Problem Solving"],
  },
  {
    year: "2024",
    title: "Web Development",
    description:
      "Entered web development and started building websites and interactive experiences. Mastered modern frontend frameworks and backend technologies.",
    icon: Globe,
    color: "from-white/60 to-white/40",
    highlights: ["React & Next.js", "TypeScript", "Full-Stack Development"],
  },
  {
    year: "2025",
    title: "AI & Quantitative Systems",
    description:
      "Shifted heavily into finance, AI, automation, and quantitative systems. Started building intelligent automation pipelines and exploring machine learning.",
    icon: LineChart,
    color: "from-white/70 to-white/50",
    highlights: ["Machine Learning", "Quantitative Analysis", "Automation"],
  },
  {
    year: "2026",
    title: "Current Research",
    description:
      "Currently researching Nexus AI and Project RT. Focusing on quant models, efficient AI usage, fine-tuning experiments, and building the next generation of intelligent systems.",
    icon: Cpu,
    color: "from-white/80 to-white/60",
    highlights: ["Nexus AI", "Project RT", "AI Fine-tuning"],
  },
];

const stats = [
  { value: "4+", label: "Years of Coding" },
  { value: "50+", label: "Projects Built" },
  { value: "∞", label: "Coffee Consumed" },
  { value: "24/7", label: "Learning Mode" },
];

export default function JourneyPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Link
              href="/#journey"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              My Journey
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              From <span className="text-gradient">Games</span> to{" "}
              <span className="text-gradient">AI</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              A timeline of my evolution from indie game developer to AI
              researcher and automation engineer.
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

      {/* Timeline */}
      <section ref={sectionRef} className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {journeyData.map((item, index) => (
                <Reveal key={item.year} delay={0.1 * index}>
                  <motion.div
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 * index }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-24 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <motion.div
                        className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all"
                        whileHover={{ y: -4 }}
                      >
                        {/* Year Badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-4 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <Calendar className="w-3 h-3 text-white/60" />
                          <span className="text-white/80 text-sm font-medium">
                            {item.year}
                          </span>
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-white/60 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs border border-white/10"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

              <div className="relative">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Always Learning
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  My journey is far from over. Every day brings new challenges
                  and opportunities to learn. I believe in the power of continuous
                  improvement and staying curious about emerging technologies.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
