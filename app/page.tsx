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
import SplashCursor from "@/components/SplashCursor";
import { ClickSpark } from "@/components/effects/click-spark";
import { NoiseOverlay } from "@/components/effects/noise-overlay";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* Global Effects */}
      <SplashCursor />
      <ClickSpark />
      <NoiseOverlay />
      
      {/* Background Effects */}
      <AnimatedBackground />
      <FloatingParticles />

      {/* Parallax Background Layer */}
      <motion.div
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Page Sections */}
      <main className="relative z-10">
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
      </main>
    </div>
  );
}
