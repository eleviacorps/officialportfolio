"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Rehan delivered an exceptional product that exceeded all our expectations. His attention to detail and technical expertise are unmatched.",
    author: "Sarah Chen",
    role: "CTO at TechVentures",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "Working with Rehan was a game-changer for our startup. The AI integration he implemented increased our efficiency by 300%.",
    author: "Michael Roberts",
    role: "Founder at DataFlow",
    avatar: "MR",
    rating: 5,
  },
  {
    quote:
      "The most professional developer I've worked with. Rehan understands both the technical and business sides of projects perfectly.",
    author: "Emily Watson",
    role: "Product Lead at InnovateCo",
    avatar: "EW",
    rating: 5,
  },
];

export function TestimonialsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-void to-abyss opacity-50" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              What Clients Say
            </h2>
          </Reveal>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.3,
                      y: 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Quote */}
                    <blockquote className="text-xl sm:text-2xl md:text-3xl text-white/90 font-display leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Star className="w-5 h-5 text-white fill-white" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-medium">
                          {testimonial.author}
                        </div>
                        <div className="text-white/50 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* View All Link */}
        <Reveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              View all testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
