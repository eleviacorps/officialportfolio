"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Instagram, Terminal, Cpu, Brain } from "lucide-react";
import { GlowButton } from "@/components/effects/glow-button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  { text: "AI", className: "text-white" },
  { text: "Researcher", className: "text-white" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
        />

        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-12 text-center"
        style={{ opacity, scale, y }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70">
            <Terminal className="w-4 h-4" />
            Available for Research & Automation Projects
          </span>
        </motion.div>

        {/* Main Heading with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.95] tracking-tight">
            <TypewriterEffect 
              words={words}
              className="text-white justify-center"
            />
          </h1>
          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="flex items-center gap-2 text-white/40 text-lg sm:text-xl md:text-2xl">
              <Brain className="w-5 h-5" />
              Automation Engineer
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-2 text-white/40 text-lg sm:text-xl md:text-2xl">
              <Cpu className="w-5 h-5" />
              Full-Stack Developer
            </span>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/50 mb-12 leading-relaxed px-4"
        >
          Building intelligent systems, automation pipelines, AI research projects, 
          web experiences, and advanced developer tooling. 19-year-old innovator from India 
          pushing the boundaries of AI and automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <GlowButton href="#projects" size="lg" icon={<span>→</span>}>
            View My Work
          </GlowButton>
          <GlowButton href="#research" variant="outline" size="lg">
            Explore Research
          </GlowButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/eleviacorps/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/elenviacious/", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/itz_rez785", label: "Instagram" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full glass hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
