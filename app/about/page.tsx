"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Zap, Target, Heart } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";

const milestones = [
  {
    year: "2019",
    title: "Started Journey",
    description: "Began my career as a frontend developer at a startup",
    icon: Code2,
  },
  {
    year: "2020",
    title: "Full-Stack Transition",
    description: "Expanded into backend development and DevOps",
    icon: Zap,
  },
  {
    year: "2021",
    title: "AI Integration",
    description: "Started working with machine learning and AI technologies",
    icon: Lightbulb,
  },
  {
    year: "2022",
    title: "Freelance Success",
    description: "Built a successful freelance business with global clients",
    icon: Users,
  },
  {
    year: "2023",
    title: "Innovation Focus",
    description: "Launched multiple AI-powered products and solutions",
    icon: Target,
  },
  {
    year: "2024",
    title: "Creative Excellence",
    description: "Pushing boundaries with immersive web experiences",
    icon: Heart,
  },
];

const values = [
  { title: "Innovation", desc: "Always pushing boundaries" },
  { title: "Quality", desc: "Pixel-perfect execution" },
  { title: "Collaboration", desc: "Working together to win" },
  { title: "Growth", desc: "Never stop learning" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <AnimatedBackground />
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
              About Me
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Crafting Digital
              <span className="text-gradient block">Experiences</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A passionate developer and designer creating immersive digital experiences
              that blend creativity with cutting-edge technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square rounded-3xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-midnight via-eclipse to-midnight flex items-center justify-center">
                  <span className="text-8xl font-display font-bold text-gradient">AC</span>
                </div>
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(90deg, #00F0FF, #B829DD, #FF0080, #00F0FF)",
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
                    I started my journey as a curious kid fascinated by how things work on the web.
                    What began as a hobby quickly turned into a passionate career.
                  </p>
                  <p>
                    Over the years, I&apos;ve had the privilege of working with startups, agencies,
                    and enterprise clients, helping them bring their visions to life through
                    innovative digital solutions.
                  </p>
                  <p>
                    Today, I specialize in creating immersive web experiences that combine beautiful
                    design with cutting-edge technology, always pushing the boundaries of what&apos;s
                    possible on the web.
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
                  className="p-6 rounded-2xl glass text-center group cursor-pointer"
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

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-neon-cyan to-neon-purple origin-top"
              style={{ height: pathLength, translateX: "-50%" }}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <Reveal key={milestone.year} delay={0.1 * index}>
                  <motion.div
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <motion.div
                        className="inline-flex items-center gap-3 mb-2"
                        whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                      >
                        <span className="text-3xl font-display font-bold text-gradient">
                          {milestone.year}
                        </span>
                        <milestone.icon className="w-5 h-5 text-neon-cyan" />
                      </motion.div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/60">{milestone.description}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.5)]" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
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
