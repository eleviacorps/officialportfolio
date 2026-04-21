"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowButton } from "@/components/effects/glow-button";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";
import { PinContainer } from "@/components/ui/3d-pin";
import { cn } from "@/lib/utils";

const categories = ["All", "Web App", "AI/ML", "Mobile", "Open Source"];

const projects = [
  {
    id: 1,
    title: "Neural Vision",
    category: "AI/ML",
    description: "Real-time object detection using YOLO and WebGL visualization with TensorFlow.js",
    image: "/images/project-1.jpg",
    tags: ["React", "TensorFlow.js", "WebGL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Crypto Pulse",
    category: "Web App",
    description: "Real-time cryptocurrency dashboard with predictive analytics and trading signals",
    image: "/images/project-2.jpg",
    tags: ["Next.js", "GraphQL", "D3.js"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Flow State",
    category: "Mobile",
    description: "AI-powered focus and productivity companion with smart scheduling",
    image: "/images/project-3.jpg",
    tags: ["React Native", "Node.js", "OpenAI"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "DataSync",
    category: "Open Source",
    description: "Lightweight data synchronization library for real-time applications",
    image: "/images/project-4.jpg",
    tags: ["TypeScript", "WebSocket", "Redis"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "VoiceCanvas",
    category: "AI/ML",
    description: "Voice-controlled canvas for creative expression using NLP",
    image: "/images/project-5.jpg",
    tags: ["Python", "FastAPI", "Whisper"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "DevSpace",
    category: "Web App",
    description: "Collaborative development environment with real-time code sharing",
    image: "/images/project-6.jpg",
    tags: ["Next.js", "WebRTC", "Yjs"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingParticles />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Featured <span className="text-gradient">Projects</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              A selection of my recent work across web, mobile, and AI development
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects with 3D Pin */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-12 flex items-center gap-3">
              <Layers className="w-6 h-6 text-white/60" />
              Featured Work
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * index}>
                <PinContainer
                  title={project.title}
                  href={project.live}
                >
                  <div className="flex flex-col p-4 tracking-tight w-[280px] h-[320px]">
                    <h3 className="font-bold text-white text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-white/10 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-charcoal to-graphite flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                </PinContainer>
              </Reveal>
            ))}
          </div>

          {/* All Projects */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full" />
                All Projects
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeCategory === category
                        ? "bg-white text-black"
                        : "glass text-white/60 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={sectionRef}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <PinContainer
                    title={project.title}
                    href={project.live}
                    className="w-full"
                  >
                    <div className="flex flex-col p-4 tracking-tight w-full h-[300px]">
                      <h3 className="font-bold text-white text-xl mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded bg-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-charcoal to-graphite flex items-center justify-center">
                        <span className="text-4xl font-bold text-white/20">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </PinContainer>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Have a project in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 mb-8">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <GlowButton href="/contact" icon={<ArrowRight className="w-4 h-4" />}>
              Let&apos;s Talk
            </GlowButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
