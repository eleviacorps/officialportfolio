"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, Code2, Brain, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Reveal>
              <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
                About Me
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Building the
                <span className="text-gradient block">Future with AI</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  I&apos;m Rehan Raza, a 19-year-old AI researcher and automation engineer from India. 
                  My journey began in 2022 when I dove into Computer Science as an indie game developer, 
                  working on every aspect of game creation from texturing and music to multiplayer systems.
                </p>
                <p>
                  Today, I focus on pushing the boundaries of AI systems, building intelligent automation 
                  pipelines, and developing quantitative models for Nexus AI. My work spans from fine-tuning 
                  large language models to creating efficient CLI/TUI workflows that maximize developer productivity.
                </p>
                <p>
                  When I&apos;m not researching or coding, you&apos;ll find me exploring the latest in AI 
                  research, experimenting with new automation techniques, or building tools that make 
                  developers&apos; lives easier.
                </p>
              </div>
            </Reveal>

            {/* Quick Info Cards */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: User, label: "Age", value: "19" },
                  { icon: MapPin, label: "Location", value: "India" },
                  { icon: Code2, label: "Started", value: "2022" },
                  { icon: Brain, label: "Focus", value: "AI Research" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="p-4 rounded-xl glass text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <item.icon className="w-5 h-5 text-white/60 mx-auto mb-2" />
                    <div className="text-white font-display font-bold text-lg">{item.value}</div>
                    <div className="text-white/40 text-xs">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Content - Visual */}
          <Reveal delay={0.2}>
            <div className="relative">
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden glass"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-abyss flex items-center justify-center">
                  <span className="text-9xl font-display font-bold text-white/10">RR</span>
                </div>
                {/* Animated border */}
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
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -right-4 top-1/4 glass rounded-2xl p-4 hidden sm:block"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-white/60" />
                  <div>
                    <div className="text-2xl font-bold text-white">4+</div>
                    <div className="text-xs text-white/50">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
