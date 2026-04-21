"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowButton } from "@/components/effects/glow-button";
import { AnimatedBackground, FloatingParticles } from "@/components/effects/animated-background";
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
    color: "from-neon-cyan to-neon-blue",
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
    color: "from-neon-purple to-neon-magenta",
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
    color: "from-neon-magenta to-neon-pink",
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
    color: "from-neon-blue to-neon-cyan",
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
    color: "from-neon-violet to-neon-purple",
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
    color: "from-neon-pink to-neon-magenta",
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
            <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Featured <span className="text-gradient">Projects</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A selection of my recent work across web, mobile, and AI development
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-12 flex items-center gap-3">
              <Layers className="w-6 h-6 text-neon-cyan" />
              Featured Work
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* All Projects */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 bg-neon-cyan rounded-full" />
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
                        ? "bg-gradient-to-r from-neon-cyan to-neon-blue text-black"
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
                  <ProjectCard project={project} compact />
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
            <p className="text-white/60 mb-8">
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

interface ProjectCardProps {
  project: (typeof projects)[0];
  compact?: boolean;
}

function ProjectCard({ project, compact }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative rounded-2xl overflow-hidden glass cursor-pointer",
        compact ? "h-full" : "h-full"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", compact ? "aspect-video" : "aspect-[4/3]")}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-midnight to-eclipse flex items-center justify-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-6xl font-display font-bold text-white/10">
            {project.title.charAt(0)}
          </span>
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.9 : 0.6 }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-white/80 border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Links */}
        <motion.div
          className="absolute top-4 right-4 flex gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        >
          <motion.a
            href={project.github}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={project.live}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-2 py-1 text-xs rounded-md bg-gradient-to-r text-white/90",
                project.color
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
          "bg-gradient-to-r",
          project.color
        )}
        style={{ filter: "blur(30px)", transform: "scale(0.9)" }}
      />
    </motion.div>
  );
}
