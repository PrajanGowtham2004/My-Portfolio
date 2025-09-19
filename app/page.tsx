"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Languages from "@/components/languages"
import Extras from "@/components/extras"
import Contact from "@/components/contact"
import { ModeProvider } from "@/contexts/mode-context"

export default function Home() {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Certifications />
          <Languages />
          <Extras />
          <Contact />
        </main>
      </div>
    </ModeProvider>
  )
}
