"use client";

import { motion, useReducedMotion } from "framer-motion";

type SkillBarProps = {
  name: string;
  level: number;
  category: string;
};

export function SkillBar({ name, level, category }: SkillBarProps) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{name}</span>
        <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{level}%</span>
      </div>
      <div className="h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-neutral-800 dark:bg-neutral-200 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-40px" }}
        />
      </div>
      <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 block">{category}</span>
    </div>
  );
}
