"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { JourneySection } from "@/components/sections/journey-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResearchSection } from "@/components/sections/research-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";
import { SparklesCore } from "@/components/ui/sparkles";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Background Effects */}
      <AnimatedBackground />
      <FloatingParticles />

      {/* Sparkles Effect */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Parallax Background Layer */}
      <motion.div
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Page Sections - Full Width */}
      <section id="home" className="w-full">
        <HeroSection />
      </section>

      <section id="about" className="w-full">
        <AboutSection />
      </section>

      <section id="journey" className="w-full">
        <JourneySection />
      </section>

      <section id="skills" className="w-full">
        <SkillsSection />
      </section>

      <section id="projects" className="w-full">
        <ProjectsSection />
      </section>

      <section id="testimonials" className="w-full">
        <TestimonialsPreview />
      </section>

      <section id="research" className="w-full">
        <ResearchSection />
      </section>

      <section id="contact" className="w-full">
        <ContactSection />
      </section>
    </div>
  );
}
