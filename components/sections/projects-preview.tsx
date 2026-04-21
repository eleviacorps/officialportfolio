"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowButton } from "@/components/effects/glow-button";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Neural Vision",
    category: "AI / Web App",
    description: "Real-time object detection using YOLO and WebGL visualization",
    image: "/images/project-1.jpg",
    tags: ["React", "TensorFlow.js", "WebGL"],
    github: "#",
    live: "#",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Crypto Pulse",
    category: "Fintech",
    description: "Real-time cryptocurrency dashboard with predictive analytics",
    image: "/images/project-2.jpg",
    tags: ["Next.js", "GraphQL", "D3.js"],
    github: "#",
    live: "#",
    color: "from-neon-purple to-neon-magenta",
  },
  {
    title: "Flow State",
    category: "Productivity",
    description: "AI-powered focus and productivity companion with smart scheduling",
    image: "/images/project-3.jpg",
    tags: ["React Native", "Node.js", "OpenAI"],
    github: "#",
    live: "#",
    color: "from-neon-magenta to-neon-pink",
  },
];

export function ProjectsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-abyss" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-void opacity-50" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <Reveal>
              <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
                Portfolio
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
                Featured Projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <GlowButton
              href="/projects"
              variant="outline"
              className="mt-6 md:mt-0"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Projects
            </GlowButton>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.15 * index}>
              <motion.div
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl glass cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-midnight to-eclipse flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-6xl font-display font-bold text-white/10">
                        {project.title.charAt(0)}
                      </span>
                    </motion.div>

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.9 }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-white/80 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Links */}
                    <motion.div
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
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
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

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

                  {/* Hover Glow */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                      "bg-gradient-to-r",
                      project.color
                    )}
                    style={{ filter: "blur(30px)", transform: "scale(0.9)" }}
                  />
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
