"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const rafRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    const { innerWidth, innerHeight } = window;
    setPosition({
      x: mouseRef.current.x,
      y: mouseRef.current.y,
      normalizedX: (mouseRef.current.x / innerWidth) * 2 - 1,
      normalizedY: (mouseRef.current.y / innerHeight) * 2 - 1,
    });
    rafRef.current = undefined;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updatePosition]);

  return position;
}
