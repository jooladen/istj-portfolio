interface SkillBarProps {
  name: string;
  level: number;
  category: string;
}

export function SkillBar({ name, level, category }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{name}</span>
        <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{level}%</span>
      </div>
      <div className="h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-neutral-800 dark:bg-neutral-200 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 block">{category}</span>
    </div>
  );
}
