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
          <h1 className="text-3xl font-bold">Lok Bahadur Khatri</h1>
          <h2 className="text-xl text-muted-foreground mb-4">Backend Developer</h2>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>rohan.mechi29@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>977-9816025638</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Jhapa, Nepal</span>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Summary</h3>
          <Separator className="mb-3" />
          <p>
          Experienced backend developer with a strong foundation in designing scalable APIs and systems. Proficient in collaborating with cross-functional teams and contributing to open-source initiatives.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <Separator className="mb-3" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Programming Languages</h4>
                <div className="flex items-center gap-2">
                <img src="/icons/javascript.svg" alt="JavaScript" className="h-5 w-5" />
                <span className="text-muted-foreground">JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                <img src="/icons/cpp.svg" alt="C/C++" className="h-5 w-5" />
                <span className="text-muted-foreground">C/C++ (basic)</span>
                </div>
                <div className="flex items-center gap-2">
                <img src="/icons/bash.svg" alt="Bash" className="h-5 w-5" />
                <span className="text-muted-foreground">Bash</span>
                </div>
            </div>
            <div>
              <h4 className="font-medium mb-1">Frameworks & Libraries</h4>
              <div className="flex items-center gap-2">
              <img src="/icons/nodejs.svg" alt="Node.js" className="h-5 w-5" />
              <span className="text-muted-foreground">Node.js</span>
              </div>
              <div className="flex items-center gap-2">
              <img src="/icons/express.svg" alt="Express.js" className="h-5 w-5" />
              <span className="text-muted-foreground">Express.js</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-1">Databases</h4>
              <div className="flex items-center gap-2">
              <img src="/icons/mongodb.svg" alt="MongoDB" className="h-5 w-5" />
              <span className="text-muted-foreground">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
              <img src="/icons/redis.svg" alt="Redis" className="h-5 w-5" />
              <span className="text-muted-foreground">Redis</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-1">DevOps & Cloud</h4>
              <div className="flex items-center gap-2">
              <img src="/icons/docker.svg" alt="Docker" className="h-5 w-5" />
              <span className="text-muted-foreground">Docker</span>
              </div>
              <div className="flex items-center gap-2">
              <img src="/icons/linux.svg" alt="Linux" className="h-5 w-5" />
              <span className="text-muted-foreground">Linux</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <Separator className="mb-3" />

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Backend Engineer</h4>
                <span className="text-sm text-muted-foreground">2021 - Present</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground" >Aspiring Backend Developer</span>
                <span className="text-sm text-muted-foreground">Bhadrapur, Nepal</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Developed and maintained RESTful APIs and WebSocket-based real-time communication systems.</li>
                  <li>Designed and implemented scalable backend architectures for e-commerce platforms and collaborative tools.</li>
                  <li>Optimized database queries and server performance to handle high traffic and ensure low latency.</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
           </ul>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Co-Founder</h4>
                <span className="text-sm text-muted-foreground">2024 - current</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Business Insights Daily</span>
                <span className="text-sm text-muted-foreground">Kathmandu, Nepal</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Co-founded a company focused on providing in-depth analysis of businesses through well-researched articles.</li>
                  <li>Authored and published articles on various industries, trends, and market insights.</li>
                  <li>Collaborated with a team of writers and analysts to ensure high-quality content delivery.</li>
                </ul>
            </div>


          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <Separator className="mb-3" />

          <div>
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">BSc. CSIT</h4>
              <span className="text-sm text-muted-foreground">2024 - current</span>
            </div>
            <div className="flex justify-between">
              <span>Mechi Multiple Campus</span>
              <span className="text-sm text-muted-foreground">Bhadrapur, Jhapa</span>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Projects</h3>
          <Separator className="mb-3" />

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Real Time Text Collaboration Web App</h4>
              <p className="text-sm mb-1">Technologies: Node.js, Websockets, Express, MongoDB</p>
              <p className="text-sm">
              A multi-user collaborative text editor designed for seamless real-time text editing.
              </p>
            </div>

            <div>
              <h4 className="font-medium">A CLI based File Sharing Tool</h4>
              <p className="text-sm mb-1">Technologies: JavaScript, Node Js, Grid FS, Streams</p>
              <p className="text-sm">
              A cloned version of Google Drive with CLI features to manage/play with files (under development).

              </p>
            </div>

            <div>
              <h4 className="font-medium">Twitter Backend Clone</h4>
              <p className="text-sm mb-1">Technologies: Node JS, Express Js, MongoDB, APIs</p>
              <p className="text-sm">
              A Cloned Backend System of Twitter undestanding the backend of Twitter
              </p>
            </div>

            <div>
              <h4 className="font-medium">A Fully Functional E-Commerce Backend API</h4>
              <p className="text-sm mb-1">Technologies: Node JS, Express Js, MongoDB, APIs</p>
              <p className="text-sm">
              A fully functional backend API designed for e-commerce platforms, ensuring high scalability and performance. It includes features like user authentication, product management, order processing, and payment integration.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">Certifications</h3>
          <Separator className="mb-3" />

            <div className="space-y-2">
            <div className="flex justify-between">
              <span>Node.js Services Developer (JSNAD)</span>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <div className="flex justify-between">
              <span>MongoDB Certified Developer Associate</span>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <div className="flex justify-between">
              <span>Docker Certified Associate</span>
              <span className="text-sm text-muted-foreground">2025</span>
            </div>
            </div>
        </section>
      </div>
    </div>
  )
}

