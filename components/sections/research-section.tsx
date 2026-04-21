"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Network, Zap, Terminal, Brain, Activity } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

const researchAreas = [
  {
    title: "Nexus AI",
    description: "Developing next-generation quantitative models for financial markets. Focus on efficient AI usage, model optimization, and real-time inference pipelines.",
    status: "Active Research",
    icon: Cpu,
    tags: ["Quant Models", "AI Optimization", "Real-time"],
  },
  {
    title: "Project RT",
    description: "Research into responsive AI systems with minimal latency. Exploring techniques for fast inference and efficient resource utilization.",
    status: "In Progress",
    icon: Zap,
    tags: ["Low Latency", "Edge AI", "Optimization"],
  },
  {
    title: "Fine-tuning Experiments",
    description: "Systematic exploration of fine-tuning methodologies for large language models. Testing various approaches to model specialization.",
    status: "Ongoing",
    icon: Brain,
    tags: ["LLMs", "Fine-tuning", "Specialization"],
  },
  {
    title: "AI Workflow Automation",
    description: "Building intelligent pipelines that automate complex AI workflows. Focus on orchestration, error handling, and optimization.",
    status: "Active Development",
    icon: Network,
    tags: ["Pipelines", "Orchestration", "Automation"],
  },
];

export function ResearchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      {/* Neural network background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          }}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block flex items-center justify-center gap-2">
              <Activity className="w-4 h-4" />
              Research & Development
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Current <span className="text-gradient">Research</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-white/50">
              Pushing the boundaries of AI systems, automation, and quantitative models. 
              Building the next generation of intelligent systems.
            </p>
          </Reveal>
        </div>

        {/* Terminal-style intro */}
        <Reveal delay={0.3}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-white/40">research_terminal</span>
              </div>
              <div className="space-y-2 text-white/70">
                <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> research_status</p>
                <p className="pl-4">- Nexus AI: <span className="text-green-400">active</span></p>
                <p className="pl-4">- Project RT: <span className="text-yellow-400">in_progress</span></p>
                <p className="pl-4">- Fine-tuning: <span className="text-green-400">running</span></p>
                <p className="pl-4">- Quant Models: <span className="text-green-400">optimizing</span></p>
                <p><span className="text-white/40">_</span></p>
                <p className="text-white/50 italic">Building intelligent systems, one experiment at a time.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Research Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {researchAreas.map((area, index) => (
            <StaggerItem key={area.title}>
              <motion.div
                className="glass rounded-2xl p-6 relative overflow-hidden group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    area.status === "Active Research" || area.status === "Active Development" 
                      ? "bg-green-500 animate-pulse" 
                      : "bg-yellow-500"
                  }`} />
                  <span className="text-xs text-white/40">{area.status}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 text-white/80" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-all">
                  {area.title}
                </h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-white/5 text-white/60 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom message */}
        <Reveal delay={0.5}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
              <Terminal className="w-5 h-5 text-white/60" />
              <span className="text-white/60 text-sm">
                Always experimenting, always learning.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
