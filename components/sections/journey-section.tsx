"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Code, Globe, LineChart, Cpu, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const journeyData = [
  {
    year: "2022",
    title: "Game Development Beginnings",
    description: "Started as an indie game developer. Worked on every aspect of game development including texturing, music, multiplayer systems, and overall design. Built hobby multiplayer games inspired by Squid Game mechanics.",
    icon: Gamepad2,
    color: "from-white/40 to-white/20",
  },
  {
    year: "2023",
    title: "Python & Programming",
    description: "Moved into Python programming. Focused on beginner-level programming, experimentation, and building foundational skills in software development.",
    icon: Code,
    color: "from-white/50 to-white/30",
  },
  {
    year: "2024",
    title: "Web Development",
    description: "Entered web development and started building websites and interactive experiences. Mastered modern frontend frameworks and backend technologies.",
    icon: Globe,
    color: "from-white/60 to-white/40",
  },
  {
    year: "2025",
    title: "AI & Quantitative Systems",
    description: "Shifted heavily into finance, AI, automation, and quantitative systems. Started building intelligent automation pipelines and exploring machine learning.",
    icon: LineChart,
    color: "from-white/70 to-white/50",
  },
  {
    year: "2026",
    title: "Current Research",
    description: "Currently researching Nexus AI and Project RT. Focusing on quant models, efficient AI usage, fine-tuning experiments, and building the next generation of intelligent systems.",
    icon: Cpu,
    color: "from-white/80 to-white/60",
  },
];

export function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const timelineData = journeyData.map((item) => ({
    title: item.year,
    content: (
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
            <item.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
        </div>
        <p className="text-white/60 leading-relaxed">{item.description}</p>
      </div>
    ),
  }));

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              My Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
              From <span className="text-gradient">Games</span> to <span className="text-gradient">AI</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-white/50">
              A timeline of my evolution from indie game developer to AI researcher and automation engineer.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal delay={0.3}>
          <Timeline data={timelineData} />
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { value: "4+", label: "Years of Coding" },
              { value: "50+", label: "Projects Built" },
              { value: "∞", label: "Coffee Consumed" },
              { value: "24/7", label: "Learning Mode" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* View Full Journey Link */}
        <Reveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              View full journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
