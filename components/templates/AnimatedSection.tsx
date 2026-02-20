"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

export function AnimatedSection({ id, className, delay = 0, children }: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      variants={shouldReduce ? undefined : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}
