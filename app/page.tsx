"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutPreview } from "@/components/sections/about-preview";
import { ExpertisePreview } from "@/components/sections/expertise-preview";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { ContactCTA } from "@/components/sections/contact-cta";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background Effects */}
      <AnimatedBackground />
      <FloatingParticles />

      {/* Parallax Background Layer */}
      <motion.div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void" />
      </motion.div>

      {/* Page Sections */}
      <HeroSection />
      <AboutPreview />
      <ExpertisePreview />
      <ProjectsPreview />
      <TestimonialsPreview />
      <ContactCTA />
    </div>
  );
}
