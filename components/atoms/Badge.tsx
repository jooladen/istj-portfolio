interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-mono border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">
      {label}
    </span>
  );
}
