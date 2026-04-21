"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ScrollProgress {
  progress: number;
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isScrolled: boolean;
}

export function useScrollProgress(): ScrollProgress {
  const [scrollData, setScrollData] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  const lastScrollY = useRef(0);
  const rafRef = useRef<number>();

  const updateScroll = useCallback(() => {
    const { scrollY, innerHeight, document } = window;
    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = docHeight - innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    const direction = scrollY > lastScrollY.current ? "down" : "up";

    setScrollData({
      progress: Math.min(Math.max(progress, 0), 1),
      scrollY,
      scrollDirection: direction,
      isScrolled: scrollY > 50,
    });

    lastScrollY.current = scrollY;
    rafRef.current = undefined;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateScroll]);

  return scrollData;
}
