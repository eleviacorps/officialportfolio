"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { AnimatedBackground } from "@/components/effects/animated-background";

const testimonials = [
  {
    id: 1,
    quote:
      "Alex delivered an exceptional product that exceeded all our expectations. His attention to detail and technical expertise are unmatched in the industry.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVentures Inc.",
    avatar: "SC",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Alex was a game-changer for our startup. The AI integration he implemented increased our efficiency by 300% within the first month.",
    author: "Michael Roberts",
    role: "Founder",
    company: "DataFlow AI",
    avatar: "MR",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The most professional developer I've had the pleasure to work with. Alex understands both the technical and business sides of projects perfectly.",
    author: "Emily Watson",
    role: "Product Lead",
    company: "InnovateCo",
    avatar: "EW",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Exceptional work on our platform redesign. The animations and interactions Alex created made our product feel truly premium.",
    author: "David Park",
    role: "CEO",
    company: "DesignStudio",
    avatar: "DP",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Alex's expertise in AI and machine learning transformed our data processing pipeline. Highly recommend for any complex technical projects.",
    author: "Lisa Thompson",
    role: "VP Engineering",
    company: "CloudScale",
    avatar: "LT",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "A true creative technologist. Alex doesn't just write code—he crafts experiences. Our conversion rate increased 40% after the redesign.",
    author: "James Wilson",
    role: "Marketing Director",
    company: "GrowthLabs",
    avatar: "JW",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Client <span className="text-gradient">Stories</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Hear from the amazing people I've had the privilege to work with
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section ref={sectionRef} className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Quote className="w-8 h-8 text-neon-cyan" />
                    </motion.div>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-8">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Star className="w-6 h-6 text-neon-cyan fill-neon-cyan" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-display leading-relaxed mb-12 max-w-4xl mx-auto">
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-bold text-xl mb-4">
                        {testimonials[activeIndex].avatar}
                      </div>
                      <div className="text-white font-display font-bold text-xl">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-white/50">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <motion.button
                    className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                    onClick={prevTestimonial}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </motion.button>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-8 bg-neon-cyan"
                            : "bg-white/20 hover:bg-white/40"
                        }`}
                        onClick={() => setActiveIndex(index)}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                    onClick={nextTestimonial}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white text-center mb-12">
              More Kind Words
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  className="p-6 rounded-2xl glass h-full cursor-pointer group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-neon-cyan fill-neon-cyan" />
                    ))}
                  </div>
                  <p className="text-white/70 mb-6 line-clamp-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan/50 to-neon-purple/50 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.author}</div>
                      <div className="text-white/40 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Satisfaction" },
              { value: "5.0", label: "Average Rating" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <motion.div
                    className="text-4xl sm:text-5xl font-display font-bold text-gradient mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
