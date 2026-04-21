"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Code2, Brain, Palette } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowButton } from "@/components/effects/glow-button";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable applications with modern technologies",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing cutting-edge machine learning solutions",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences",
  },
];

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-void" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image Container */}
              <div className="relative h-full rounded-3xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent z-10" />
                <div className="h-full bg-gradient-to-br from-midnight to-eclipse flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-white/20">AC</span>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -right-4 top-1/4 glass rounded-2xl p-4 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </motion.div>

              {/* Floating Projects Card */}
              <motion.div
                className="absolute -left-4 bottom-1/4 glass rounded-2xl p-4 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-white/60">Projects Done</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <Reveal>
              <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
                About Me
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Passionate about creating
                <span className="text-gradient"> digital excellence</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                I&apos;m a creative developer with a passion for building immersive digital experiences.
                With expertise in modern web technologies and AI integration, I transform complex
                ideas into elegant, user-centric solutions.
              </p>
            </Reveal>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={0.3 + index * 0.1}>
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-xl glass group cursor-pointer"
                    whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.08)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-neon-cyan/10 transition-colors">
                      <feature.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                      <p className="text-white/50 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.6}>
              <GlowButton href="/about" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Read My Story
              </GlowButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
