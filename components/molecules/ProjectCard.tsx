"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  period: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="border border-neutral-200 dark:border-neutral-800 p-6"
      whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{project.title}</h3>
        <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono ml-4 shrink-0">{project.period}</span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <Badge key={t} label={t} />
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-2"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-2"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
