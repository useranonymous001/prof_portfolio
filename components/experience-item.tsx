import { CheckCircle } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  location: string
  description: string[]
}

export function ExperienceItem({ title, company, period, location, description }: ExperienceItemProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">{company}</p>
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

