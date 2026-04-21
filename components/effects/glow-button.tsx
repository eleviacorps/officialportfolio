"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  magnetic?: boolean;
}

export function GlowButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  href,
  icon,
  magnetic = true,
}: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!magnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2 font-display font-medium",
    "transition-all duration-300 overflow-hidden group",
    "focus:outline-none focus:ring-2 focus:ring-white/20",
    {
      "bg-white text-black hover:bg-mist":
        variant === "primary",
      "bg-white/5 text-white hover:bg-white/10": variant === "secondary",
      "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5":
        variant === "outline",
      "px-4 py-2 text-sm rounded-full": size === "sm",
      "px-6 py-3 text-base rounded-full": size === "md",
      "px-8 py-4 text-lg rounded-full": size === "lg",
    },
    className
  );

  const content = (
    <>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, 
            ${variant === "primary" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"} 0%, 
            transparent 60%)`,
        }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
        animate={
          isHovered
            ? {
                boxShadow: [
                  "0 0 20px rgba(255,255,255,0.1)",
                  "0 0 40px rgba(255,255,255,0.2)",
                  "0 0 20px rgba(255,255,255,0.1)",
                ],
              }
            : { boxShadow: "0 0 0px rgba(255,255,255,0)" }
        }
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Sparkle particles on hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 1, scale: 0 }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: (i - 1) * 30,
                y: -30,
              }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                left: `${50 + (i - 1) * 20}%`,
                top: "50%",
              }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            className="relative"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </>
  );

  const motionProps = magnetic
    ? {
        x: mousePosition.x,
        y: mousePosition.y,
        transition: { type: "spring", stiffness: 150, damping: 15 },
      }
    : {};

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
