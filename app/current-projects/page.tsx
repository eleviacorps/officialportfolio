"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Clock,
  Target,
  CheckCircle2,
  Circle,
  AlertCircle,
  ArrowRight,
  Github,
  ExternalLink,
  Users,
  Calendar,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";
import Link from "next/link";

const currentProjects = [
  {
    id: 1,
    title: "Nexus AI",
    description: "Advanced quantitative models and AI systems for financial analysis and prediction",
    progress: 75,
    status: "in-progress",
    phase: "Research",
    team: ["RR"],
    deadline: "Ongoing",
    tasks: {
      completed: 45,
      total: 60,
    },
    tags: ["AI", "Python", "Quant"],
    github: "https://github.com/eleviacorps/",
    demo: "#",
    color: "from-white/40 to-white/20",
    updates: [
      { date: "Jan 2025", text: "Core AI model architecture designed" },
      { date: "Dec 2024", text: "Research phase initiated" },
    ],
  },
  {
    id: 2,
    title: "Project RT",
    description: "Real-time AI processing system with optimized inference pipelines",
    progress: 60,
    status: "in-progress",
    phase: "Development",
    team: ["RR"],
    deadline: "2025",
    tasks: {
      completed: 24,
      total: 40,
    },
    tags: ["AI", "Python", "Real-time"],
    github: null,
    demo: "#",
    color: "from-white/50 to-white/30",
    updates: [
      { date: "Jan 2025", text: "Inference pipeline optimization started" },
      { date: "Dec 2024", text: "Base architecture complete" },
    ],
  },
  {
    id: 3,
    title: "FrostChat",
    description: "Full-featured chat application with rooms, invite codes, auth, database, profiles",
    progress: 90,
    status: "review",
    phase: "Final Review",
    team: ["RR"],
    deadline: "Complete",
    tasks: {
      completed: 36,
      total: 40,
    },
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/eleviacorps/frostchat",
    demo: "#",
    color: "from-white/60 to-white/40",
    updates: [
      { date: "Jan 2025", text: "Voice messages feature added" },
      { date: "Dec 2024", text: "Authentication system complete" },
    ],
  },
];

const upcomingProjects = [
  {
    id: 4,
    title: "Personal AI v2",
    description: "Enhanced fine-tuned personal AI with improved context understanding",
    status: "planning",
    estimatedStart: "Q2 2025",
    tags: ["AI", "LLM", "Fine-tuning"],
    color: "from-white/70 to-white/50",
  },
  {
    id: 5,
    title: "Automation Framework",
    description: "Comprehensive automation pipeline with self-healing capabilities",
    status: "planning",
    estimatedStart: "Q2 2025",
    tags: ["Python", "Automation", "Redis"],
    color: "from-white/80 to-white/60",
  },
];

const statusIcons = {
  "in-progress": Clock,
  review: Target,
  planning: Circle,
  completed: CheckCircle2,
  blocked: AlertCircle,
};

const statusColors = {
  "in-progress": "text-white",
  review: "text-white",
  planning: "text-white/50",
  completed: "text-green-400",
  blocked: "text-red-400",
};

export default function CurrentProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Current Work
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              In <span className="text-gradient">Progress</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Real-time updates on what I&apos;m currently building
            </p>
          </Reveal>
        </div>
      </section>

      {/* Active Projects */}
      <section ref={sectionRef} className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-white" />
              Active Projects
            </h2>
          </Reveal>

          <div className="space-y-6">
            {currentProjects.map((project, index) => {
              const StatusIcon = statusIcons[project.status as keyof typeof statusIcons];
              const isExpanded = expandedProject === project.id;

              return (
                <Reveal key={project.id} delay={0.1 * index}>
                  <motion.div
                    className="glass rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    layout
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                        {/* Project Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-display font-bold text-white">
                              {project.title}
                            </h3>
                            <span
                              className={cn(
                                "px-2 py-0.5 text-xs rounded-full flex items-center gap-1",
                                project.status === "in-progress"
                                  ? "bg-white/10 text-white"
                                  : project.status === "review"
                                  ? "bg-white/10 text-white"
                                  : "bg-white/5 text-white/60"
                              )}
                            >
                              <StatusIcon className="w-3 h-3" />
                              {project.phase}
                            </span>
                          </div>
                          <p className="text-white/60 text-sm mb-4">{project.description}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/90"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-display font-bold text-gradient">
                              {project.progress}%
                            </div>
                            <div className="text-white/40 text-xs">Complete</div>
                          </div>

                          {/* Circular Progress */}
                          <div className="relative w-16 h-16">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-white/10"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                              />
                              <motion.path
                                className="text-white"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                strokeDasharray={`${project.progress}, 100`}
                                initial={{ strokeDasharray: "0, 100" }}
                                animate={{
                                  strokeDasharray: `${project.progress}, 100`,
                                }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/10"
                        >
                          <div className="p-6 grid md:grid-cols-3 gap-6">
                            {/* Tasks */}
                            <div>
                              <h4 className="text-white/50 text-sm mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Tasks Progress
                              </h4>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-white/60 to-white/30"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(project.tasks.completed / project.tasks.total) * 100}%` }}
                                    transition={{ duration: 0.8 }}
                                  />
                                </div>
                                <span className="text-white text-sm">
                                  {project.tasks.completed}/{project.tasks.total}
                                </span>
                              </div>
                            </div>

                            {/* Team */}
                            <div>
                              <h4 className="text-white/50 text-sm mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Team
                              </h4>
                              <div className="flex -space-x-2">
                                {project.team.map((member) => (
                                  <div
                                    key={member}
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold border-2 border-black"
                                  >
                                    {member}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Deadline */}
                            <div>
                              <h4 className="text-white/50 text-sm mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Target
                              </h4>
                              <span className="text-white">{project.deadline}</span>
                            </div>

                            {/* Recent Updates */}
                            <div className="md:col-span-3">
                              <h4 className="text-white/50 text-sm mb-3">Recent Updates</h4>
                              <div className="space-y-2">
                                {project.updates.map((update, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-3 text-sm"
                                  >
                                    <span className="text-white/40">{update.date}</span>
                                    <span className="text-white/70">{update.text}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="md:col-span-3 flex gap-3">
                              {project.github && (
                                <motion.a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <Github className="w-4 h-4" />
                                  View Code
                                </motion.a>
                              )}
                              <motion.a
                                href={project.demo}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium"
                                whileHover={{ scale: 1.02 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </motion.a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="relative py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Target className="w-6 h-6 text-white" />
              Up Next
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <motion.div
                  className="glass rounded-2xl p-6 cursor-pointer group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/50">
                      {project.estimatedStart}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
