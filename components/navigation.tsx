"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/eleviacorps/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elenviacious/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/itz_rez785", label: "Instagram" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isScrolled } = useScrollProgress();
  const pathname = usePathname();

  useEffect(() => {
    // If on homepage, track scroll position for active section
    if (pathname === "/") {
      const handleScroll = () => {
        const sections = ["home", "about", "journey", "skills", "projects", "research", "contact"];
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      // On homepage anchor
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && activeSection === "home";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || pathname !== "/" ? "py-3" : "py-5"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.nav
            className={cn(
              "relative flex items-center justify-between px-6 py-3 rounded-full",
              "transition-all duration-500 border border-transparent",
              isScrolled || pathname !== "/"
                ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                : "bg-transparent"
            )}
          >
            {/* Animated border glow */}
            {(isScrolled || pathname !== "/") && (
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.05)",
                    "0 0 40px rgba(255,255,255,0.1)",
                    "0 0 20px rgba(255,255,255,0.05)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            )}

            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                className="text-xl font-display font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-white">RR</span>
              </motion.div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative px-4 py-2"
                  >
                    <motion.span
                      className={cn(
                        "text-sm font-medium transition-colors duration-300",
                        active ? "text-white" : "text-white/60 hover:text-white"
                      )}
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                    </motion.span>
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
              <Link
                href="/contact"
                className="relative px-5 py-2 text-sm font-medium rounded-full overflow-hidden group ml-4"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 group-hover:from-white group-hover:to-white transition-all" />
                <span className="relative text-black">Let&apos;s Talk</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative z-10 p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-black/80 border-l border-white/10 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={cn(
                            "block py-4 text-2xl font-display font-medium border-b border-white/10 transition-all",
                            active
                              ? "text-white pl-4 border-l-2 border-l-white"
                              : "text-white/70 hover:text-white hover:pl-2"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Social Links in Mobile Menu */}
                <div className="mt-8">
                  <p className="text-white/40 text-sm mb-4 uppercase tracking-wider">
                    Connect
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="block w-full py-4 text-center text-lg font-medium rounded-full bg-white text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
