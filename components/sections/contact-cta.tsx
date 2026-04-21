"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowButton } from "@/components/effects/glow-button";

export function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-abyss" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void" />

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,240,255,0.1) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Reveal>
                <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
                  Let&apos;s Connect
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Ready to bring your
                  <span className="text-gradient"> ideas to life?</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-white/60 text-lg mb-8">
                  Whether you have a project in mind or just want to chat about possibilities,
                  I&apos;m always open to new opportunities and collaborations.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GlowButton href="/contact" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Start a Project
                  </GlowButton>
                  <GlowButton href="/contact" variant="outline" size="lg">
                    Schedule a Call
                  </GlowButton>
                </div>
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <Reveal delay={0.4}>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@alexchen.dev",
                      href: "mailto:hello@alexchen.dev",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+1 (555) 123-4567",
                      href: "tel:+15551234567",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "San Francisco, CA",
                      href: "#",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="p-3 rounded-lg bg-white/5 group-hover:bg-neon-cyan/10 transition-colors">
                        <item.icon className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <div>
                        <div className="text-white/50 text-sm mb-1">{item.label}</div>
                        <div className="text-white group-hover:text-neon-cyan transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
