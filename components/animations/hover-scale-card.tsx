import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverScaleCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverScaleCard({
  children,
  className = "",
}: HoverScaleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
