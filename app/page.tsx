"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

      // If we're at the bottom of the page, set the active section to contact
      if (pageBottom) {
        setActiveSection("contact")
        return
      }

      // Check which section is currently in view
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current
          if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to set initial active section
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 50,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Side Navigation */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          <div className="h-40 w-0.5 bg-muted relative">
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-300"
              style={{
                height: `${
                  activeSection === "about"
                    ? 20
                    : activeSection === "skills"
                      ? 40
                      : activeSection === "projects"
                        ? 60
                        : activeSection === "experience"
                          ? 80
                          : 100
                }%`,
              }}
            />
          </div>

          {["about", "skills", "projects", "experience", "contact"].map((section) => (
            <div key={section} className="flex items-center gap-2 group">
              <button
                onClick={() => scrollToSection(section)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeSection === section ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50",
                )}
                aria-label={`Scroll to ${section} section`}
              />
              <span
                className={cn(
                  "text-xs capitalize transition-all whitespace-nowrap",
                  activeSection === section
                    ? "opacity-100 text-primary font-medium"
                    : "opacity-0 group-hover:opacity-70",
                )}
              >
                {section}
              </span>
            </div>
          ))}
        </div>
      </nav>

      <main className="container max-w-3xl mx-auto py-10 px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-6">
            <Image
              src="/profile_one.jpeg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Lok Bahadur Khatri</h1>
          <p className="text-xl text-muted-foreground mb-4">Backend Developer</p>
          <div className="flex justify-center gap-4 mb-6">
            <Link href="https://github.com/useranonymous001" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/rohan-khatri-001bm/" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:rohan.mechi29@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <Button asChild>
            <a href="/resume.pdf" download="lok_bahadur_khatri.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </header>

        {/* About Section */}
        <section id="about" ref={sectionRefs.about} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
            <p className="text-center mb-4">
              Experienced backend developer with a strong foundation in designing scalable APIs and systems. Proficient in collaborating with cross-functional teams and contributing to open-source initiatives.
            </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">Jhapa, Nepal</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">rohan.mechi29@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium">Education</h3>
              <p className="text-muted-foreground">BSc. CSIT</p>
            </div>
            <div>
              <h3 className="font-medium">Availability</h3>
              <p className="text-muted-foreground">Full-time</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={sectionRefs.skills} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-center">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-muted rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-muted rounded-full">C/C++ (basic) </span>

              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-center">Frameworks & Libraries</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-muted rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-muted rounded-full">Express.js</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-center">Databases</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-muted rounded-full">MongoDB</span>
                <span className="px-3 py-1 bg-muted rounded-full">Redis</span>

              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-center">DevOps & Cloud</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-muted rounded-full">Docker</span>

              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={sectionRefs.projects} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
          <div className="space-y-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Real Time Text Collaboration Web App</h3>
              <p className="text-muted-foreground mb-4">
              A multi-user collaborative text editor designed for seamless real-time text editing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-muted text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Websocktes</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Express</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/useranonymous001/Co-Text" target="_blank" className="text-sm text-primary hover:underline">
                  View Code
                </Link>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">A CLI based File Sharing Tool</h3>
              <p className="text-muted-foreground mb-4">
              A cloned version of Google Drive with CLI features to manage/play with files (under development).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-muted text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Node JS</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Grid Fs</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Streams</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/useranonymous001/anyshare" target="_blank" className="text-sm text-primary hover:underline">
                  View Code
                </Link>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Twitter Backend Clone</h3>
              <p className="text-muted-foreground mb-4">
              A Cloned Backend System of Twitter undestanding the backend of Twitter
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-muted text-xs rounded">Node JS</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Express Js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">MongoDB</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">APIs</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/useranonymous001/twitter-backend-clone" target="_blank" className="text-sm text-primary hover:underline">
                  View Code
                </Link>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">A Fully Functional E-Commerce Backend API</h3>
              <p className="text-muted-foreground mb-4">
              A fully functional backend API designed for e-commerce platforms, ensuring high scalability and performance. It includes features like user authentication, product management, order processing, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-muted text-xs rounded">Node JS</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Express Js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">MongoDB</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">Mongoose</span>
                <span className="px-2 py-1 bg-muted text-xs rounded">APIs</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/useranonymous001/M-Ecomemrce/tree/node-js-develop" target="_blank" className="text-sm text-primary hover:underline">
                  View Code
                </Link>
              </div>
            </div>


          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={sectionRefs.experience} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
          <div className="space-y-8">

            {/* experience box starts here */}
            <div>
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-bold">Backend Developer</h3>
                <span className="text-sm text-muted-foreground">2021 - current</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Aspiring Backend Developer</span>
                <span className="text-sm text-muted-foreground">Bhadrapur, Nepal</span>
              </div>  
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed and maintained RESTful APIs and WebSocket-based real-time communication systems.</li>
                  <li>Designed and implemented scalable backend architectures for e-commerce platforms and collaborative tools.</li>
                  <li>Optimized database queries and server performance to handle high traffic and ensure low latency.</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
           
              </ul>
            </div>   

            <div>
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-bold">Co-Founder</h3>
                <span className="text-sm text-muted-foreground">2024 - current</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Business Insights Daily</span>
                <span className="text-sm text-muted-foreground">Bhadrapur, Nepal</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <li>Co-founded a company focused on providing in-depth analysis of businesses through well-researched articles.</li>
                  <li>Authored and published articles on various industries, trends, and market insights.</li>
                  <li>Collaborated with a team of writers and analysts to ensure high-quality content delivery.</li>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={sectionRefs.contact} className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
          <div className="text-center mb-6">
            <p className="mb-4">Interested in working together? Feel free to reach out.</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>rohan.mechi29@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <span>linkedin.com/in/rohan-khatri-001bm/</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Github className="h-5 w-5 text-muted-foreground" />
                <span>github.com/useranonymous001</span>
              </div>
            </div>
            <Button asChild>
              <a href="mailto:rohan.mechi29@gmail.com">Send Email</a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} lok bdr khatri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

