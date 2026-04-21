"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function ClickSpark() {
  const [mounted, setMounted] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkId = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createSpark = useCallback((x: number, y: number) => {
    const colors = ["#00F0FF", "#B829DD", "#FF0080", "#00E5FF", "#EC4899"];
    const newSparks: Spark[] = [];

    for (let i = 0; i < 8; i++) {
      newSparks.push({
        id: sparkId.current++,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setSparks((prev) => [...prev, ...newSparks]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.find((ns) => ns.id === s.id)));
    }, 800);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleClick = (e: MouseEvent) => {
      createSpark(e.clientX, e.clientY);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [createSpark, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9995]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{
              opacity: 1,
              scale: 0,
              x: spark.x,
              y: spark.y,
            }}
            animate={{
              opacity: 0,
              scale: 1,
              x: spark.x + (Math.random() - 0.5) * 100,
              y: spark.y + (Math.random() - 0.5) * 100 - 50,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-2 h-2"
            style={{ left: 0, top: 0 }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: spark.color,
                boxShadow: `0 0 10px ${spark.color}, 0 0 20px ${spark.color}`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
