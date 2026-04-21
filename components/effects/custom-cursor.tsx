"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const followerConfig = { damping: 30, stiffness: 200 };
  const followerXSpring = useSpring(cursorX, followerConfig);
  const followerYSpring = useSpring(cursorY, followerConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
  }, [x, y, cursorX, cursorY]);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest(
        "a, button, [data-cursor='pointer'], input, textarea, select, [role='button']"
      );
      const cursorLabel = target.closest("[data-cursor-text]");

      if (hoverable) {
        setIsHovering(true);
        if (cursorLabel) {
          setCursorText(cursorLabel.getAttribute("data-cursor-text") || "");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    document.addEventListener("mouseover", handleElementHover);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
      document.body.style.cursor = "auto";
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-3 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: followerXSpring, y: followerYSpring }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 2 : 1,
            opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`rounded-full border transition-all duration-300 ${
              isHovering
                ? "w-12 h-12 border-white/40 bg-white/5"
                : "w-8 h-8 border-white/20"
            }`}
          />
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white uppercase tracking-wider"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 0.15 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-32 h-32 rounded-full bg-white/20 blur-2xl" />
        </motion.div>
      </motion.div>
    </>
  );
}
