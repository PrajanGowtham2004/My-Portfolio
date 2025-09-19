"use client"

import { Button } from "@/components/ui/button"
import { useMode } from "@/contexts/mode-context"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Navigation() {
  const { isAnilMode, setIsAnilMode } = useMode()
  const [isToggling, setIsToggling] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Play audio on reload based on mode
  useEffect(() => {
    const audioFile = isAnilMode ? "/leo-anil.mp3" : "/leo-professional.mp3"
    const audio = new Audio(audioFile)
    audioRef.current = audio
    audio.play().catch(() => {
      console.warn("Autoplay might be blocked by browser until user interaction")
    })

    // Stop after 15 seconds
    const timer = setTimeout(() => {
      audio.pause()
      audio.currentTime = 0
    }, 15000)

    return () => {
      clearTimeout(timer)
      audio.pause()
      audio.currentTime = 0
    }
  }, [isAnilMode]) // runs on reload + mode change

  const handleToggle = () => {
    setIsToggling(true)
    setTimeout(() => {
      setIsAnilMode(!isAnilMode)
      setIsToggling(false)
    }, 400)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "languages", label: "Languages" },
    { id: "extras", label: "Extras" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1
              className={`text-2xl font-extrabold tracking-tight transition-colors ${
                isAnilMode ? "text-indigo-500" : "text-blue-600"
              }`}
            >
              {isAnilMode ? "Thalapathy 🎬" : "Prajan Gowtham"}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mode Toggle + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Parallel Opposite Transition Toggle */}
            

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-md p-2 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-md rounded-b-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
