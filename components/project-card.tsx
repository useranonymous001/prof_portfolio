import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  demoUrl?: string
}

export function ProjectCard({ title, description, technologies, imageUrl, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/profile_one.jpeg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 p-6 pt-0">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

