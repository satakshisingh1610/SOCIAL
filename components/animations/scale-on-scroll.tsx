"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleOnScroll({
  children,
  delay = 0,
  className = "",
}: ScaleOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
