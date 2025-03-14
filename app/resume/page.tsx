import Link from "next/link"
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <Button asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto bg-background border rounded-lg shadow-sm p-8 print:shadow-none print:border-none">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <h2 className="text-xl text-muted-foreground mb-4">Senior Backend Developer</h2>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Summary</h3>
          <Separator className="mb-3" />
          <p>
            Senior Backend Developer with 5+ years of experience designing and implementing scalable, high-performance
            systems. Specialized in distributed systems, microservices architecture, and cloud infrastructure. Proven
            track record of delivering robust solutions that handle millions of daily transactions.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <Separator className="mb-3" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Programming Languages</h4>
              <p className="text-muted-foreground">JavaScript, TypeScript, Python, Java, Go, C#</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Frameworks & Libraries</h4>
              <p className="text-muted-foreground">Node.js, Express.js, NestJS, Django, Spring Boot, ASP.NET Core</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Databases</h4>
              <p className="text-muted-foreground">PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch, DynamoDB</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">DevOps & Cloud</h4>
              <p className="text-muted-foreground">Docker, Kubernetes, AWS, GCP, Azure, CI/CD</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <Separator className="mb-3" />

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Senior Backend Engineer</h4>
                <span className="text-sm text-muted-foreground">2021 - Present</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>TechCorp Inc.</span>
                <span className="text-sm text-muted-foreground">San Francisco, CA</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Lead the development of a distributed system processing 50M+ daily transactions with 99.99% uptime
                </li>
                <li>
                  Designed and implemented microservices architecture reducing system complexity and improving
                  scalability
                </li>
                <li>Optimized database queries resulting in 70% performance improvement for critical API endpoints</li>
                <li>Mentored junior engineers and established coding standards and best practices</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Backend Developer</h4>
                <span className="text-sm text-muted-foreground">2018 - 2021</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>DataSystems LLC</span>
                <span className="text-sm text-muted-foreground">Seattle, WA</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Developed RESTful APIs and GraphQL endpoints for a SaaS platform with 500K+ users</li>
                <li>Implemented real-time data processing pipelines using Kafka and Elasticsearch</li>
                <li>Reduced infrastructure costs by 40% through optimization and cloud resource management</li>
                <li>Collaborated with frontend teams to design and implement new features</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Software Engineer</h4>
                <span className="text-sm text-muted-foreground">2016 - 2018</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>StartupX</span>
                <span className="text-sm text-muted-foreground">Austin, TX</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Built backend services for a fintech application handling sensitive user data</li>
                <li>Implemented secure authentication and authorization systems</li>
                <li>Developed automated testing frameworks improving code coverage to 90%</li>
                <li>Participated in agile development processes and sprint planning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <Separator className="mb-3" />

          <div>
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">B.S. Computer Science</h4>
              <span className="text-sm text-muted-foreground">2012 - 2016</span>
            </div>
            <div className="flex justify-between">
              <span>Stanford University</span>
              <span className="text-sm text-muted-foreground">Stanford, CA</span>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Projects</h3>
          <Separator className="mb-3" />

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Distributed Task Queue System</h4>
              <p className="text-sm mb-1">Technologies: Node.js, Redis, Docker, AWS</p>
              <p className="text-sm">
                Designed and implemented a scalable task queue system handling 10M+ daily jobs with automatic retries
                and dead-letter queues.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Real-time Analytics API</h4>
              <p className="text-sm mb-1">Technologies: Go, ClickHouse, Kafka, Kubernetes</p>
              <p className="text-sm">
                Built a high-performance API for real-time analytics processing 5TB+ of data daily with sub-second query
                response times.
              </p>
            </div>

            <div>
              <h4 className="font-medium">E-commerce Microservices</h4>
              <p className="text-sm mb-1">Technologies: Java, Spring Boot, PostgreSQL, RabbitMQ</p>
              <p className="text-sm">
                Refactored a monolithic e-commerce backend into microservices, improving scalability and reducing
                deployment times by 80%.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">Certifications</h3>
          <Separator className="mb-3" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>AWS Certified Solutions Architect - Professional</span>
              <span className="text-sm text-muted-foreground">2022</span>
            </div>
            <div className="flex justify-between">
              <span>Google Cloud Professional Cloud Architect</span>
              <span className="text-sm text-muted-foreground">2021</span>
            </div>
            <div className="flex justify-between">
              <span>Certified Kubernetes Administrator (CKA)</span>
              <span className="text-sm text-muted-foreground">2020</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

