import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
      <span className="font-medium">{name}</span>
      <div className="w-16 h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
        <div className={cn("h-full bg-primary")} style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

