"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
}

export default function TiltCard({
  children,
  className,
  maxRotation = 10,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [maxRotation, -maxRotation]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-maxRotation, maxRotation]);
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX = (e.clientX - rect.left) / rect.width;
      const clientY = (e.clientY - rect.top) / rect.height;

      x.set(clientX);
      y.set(clientY);
    },
    [x, y]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="inline-block w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#0d1527]/90 shadow-xl dark:shadow-2xl backdrop-blur-xl",
          className
        )}
      >
        {/* Glare overlay */}
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute -inset-full opacity-20 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.8), transparent 60%)`,
            }}
          />
        )}
        <div style={{ transform: "translateZ(20px)" }}>{children}</div>
      </motion.div>
    </div>
  );
}
