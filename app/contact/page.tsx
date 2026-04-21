"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@eleviacorps",
    href: "https://github.com/eleviacorps",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Rehan Raza",
    href: "https://linkedin.com/in/elenviacious",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@itz_rez785",
    href: "https://instagram.com/itz_rez785",
  },
];

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I&apos;m always open to new opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="relative py-12 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-display font-bold text-white mb-8">
                  Contact Information
                </h2>
              </Reveal>

              <div className="space-y-6 mb-12">
                <Reveal delay={0.1}>
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl glass group cursor-pointer"
                    whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white/50 text-sm">Email</div>
                      <div className="text-white group-hover:text-gradient transition-colors">
                        rehan.raza@example.com
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                  </motion.div>
                </Reveal>

                <Reveal delay={0.2}>
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl glass"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">Location</div>
                      <div className="text-white">India</div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>

              {/* Social Links */}
              <Reveal delay={0.3}>
                <h3 className="text-lg font-display font-bold text-white mb-6">
                  Social Links
                </h3>
              </Reveal>

              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <Reveal key={link.label} delay={0.4 + index * 0.1}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl glass group cursor-pointer"
                      whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <link.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{link.label}</div>
                        <div className="text-white/50 text-sm">{link.value}</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                    </motion.a>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <motion.form
                  onSubmit={handleSubmit}
                  className="glass rounded-3xl p-8 relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
                  <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />

                  <div className="relative space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="relative">
                        <motion.label
                          className={cn(
                            "absolute left-4 transition-all duration-300 pointer-events-none",
                            focusedField === "name" || formState.name
                              ? "-top-2 text-xs text-white"
                              : "top-4 text-white/50"
                          )}
                        >
                          Name
                        </motion.label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <motion.label
                          className={cn(
                            "absolute left-4 transition-all duration-300 pointer-events-none",
                            focusedField === "email" || formState.email
                              ? "-top-2 text-xs text-white"
                              : "top-4 text-white/50"
                          )}
                        >
                          Email
                        </motion.label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <motion.label
                        className={cn(
                          "absolute left-4 transition-all duration-300 pointer-events-none",
                          focusedField === "subject" || formState.subject
                            ? "-top-2 text-xs text-white"
                            : "top-4 text-white/50"
                        )}
                      >
                        Subject
                      </motion.label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <motion.label
                        className={cn(
                          "absolute left-4 transition-all duration-300 pointer-events-none",
                          focusedField === "message" || formState.message
                            ? "-top-2 text-xs text-white"
                            : "top-4 text-white/50"
                        )}
                      >
                        Message
                      </motion.label>
                      <textarea
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-white text-black font-display font-bold text-lg flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
