"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Clock, ArrowRight, Calendar, Tag, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = ["All", "Development", "AI/ML", "Design", "Career", "Tutorial"];

const posts = [
  {
    id: 1,
    title: "Building Real-time Applications with WebSockets",
    excerpt:
      "Learn how to create scalable real-time applications using WebSockets and Node.js with practical examples.",
    category: "Development",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    image: "/images/blog-1.jpg",
    tags: ["WebSockets", "Node.js", "Real-time"],
    color: "from-white/40 to-white/20",
  },
  {
    id: 2,
    title: "Integrating OpenAI API in Your Next.js App",
    excerpt:
      "A comprehensive guide to implementing AI features using OpenAI's API with Next.js and TypeScript.",
    category: "AI/ML",
    date: "2024-01-10",
    readTime: "12 min read",
    featured: true,
    image: "/images/blog-2.jpg",
    tags: ["OpenAI", "Next.js", "AI"],
    color: "from-white/50 to-white/30",
  },
  {
    id: 3,
    title: "Mastering Framer Motion Animations",
    excerpt:
      "Create stunning animations in React with Framer Motion. From basic transitions to complex gesture-based interactions.",
    category: "Development",
    date: "2024-01-05",
    readTime: "10 min read",
    featured: false,
    image: "/images/blog-3.jpg",
    tags: ["React", "Animation", "Framer Motion"],
    color: "from-white/60 to-white/40",
  },
  {
    id: 4,
    title: "Design Systems That Scale",
    excerpt:
      "Building and maintaining design systems that grow with your product and team.",
    category: "Design",
    date: "2024-01-01",
    readTime: "7 min read",
    featured: false,
    image: "/images/blog-4.jpg",
    tags: ["Design Systems", "UI/UX", "Figma"],
    color: "from-white/70 to-white/50",
  },
  {
    id: 5,
    title: "From Game Dev to AI Research",
    excerpt:
      "My journey transitioning from an indie game developer to AI researcher and automation engineer.",
    category: "Career",
    date: "2023-12-28",
    readTime: "6 min read",
    featured: false,
    image: "/images/blog-5.jpg",
    tags: ["Career", "AI", "Growth"],
    color: "from-white/80 to-white/60",
  },
  {
    id: 6,
    title: "Fine-tuning LLMs for Personal Use",
    excerpt:
      "An introduction to fine-tuning large language models on personal data for customized AI assistants.",
    category: "Tutorial",
    date: "2023-12-20",
    readTime: "15 min read",
    featured: false,
    image: "/images/blog-6.jpg",
    tags: ["LLM", "Fine-tuning", "AI"],
    color: "from-white/90 to-white/70",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
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
              Blog
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Thoughts & <span className="text-gradient">Insights</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-8">
              Exploring the intersection of design, development, and artificial intelligence
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={0.4}>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full glass text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
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
          </Reveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="relative py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Featured Article
              </h2>
            </Reveal>

            <Reveal>
              <motion.article
                className="glass rounded-3xl overflow-hidden group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-8xl font-display font-bold text-white/10">
                        {featuredPost.title.charAt(0)}
                      </span>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={cn(
                          "px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white"
                        )}
                      >
                        {featuredPost.category}
                      </span>
                      <span className="text-white/40 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/60 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-white" />
                      <span className="text-white font-medium">Read Article</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section ref={sectionRef} className="relative py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPosts
                .filter((p) => !p.featured || activeCategory !== "All" || searchQuery)
                .map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="glass rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-6xl font-display font-bold text-white/10">
                          {post.title.charAt(0)}
                        </span>
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className={cn(
                            "px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-white"
                          )}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-white/40 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-gradient transition-all line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded bg-white/5 text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
