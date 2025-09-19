"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const { isAnilMode } = useMode()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (!isAnilMode || !sectionRef.current || !videoRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Restart and play when visible
              videoRef.current.currentTime = 0
              videoRef.current.play().catch(() => {})
            } else {
              // Pause when not visible
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.5 } // at least 50% visible
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isAnilMode])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        isAnilMode ? "bg-gradient-to-br from-orange-50 to-red-50" : "bg-white"
      }`}
    >
      {/* Background - Only in Anil Mode */}
      {isAnilMode && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <img
            src="/tvk-flag.jpeg"
            alt="TVK Flag"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Profile / Meme Placeholder */}
          <div className="mb-8">
            {isAnilMode ? (
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-orange-600">
                <img
                  src="/hero-img.jpeg"
                  alt="Vijay Meme"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
                <span className="text-4xl text-white font-bold">PG</span>
              </div>
            )}
          </div>

          {/* Name and Title */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              isAnilMode ? "text-orange-600 drop-shadow-md" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "Thalapathy Prajan" : "Prajan Gowtham"}
          </h1>

          <h2 className="text-xl sm:text-2xl text-black mb-6">
            {isAnilMode ? "Future Tech Leader & Cinema Enthusiast" : "B.Tech Computer Science Engineering"}
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {isAnilMode
              ? "Inspired by Thalapathy Vijay's leadership and vision, building the future of technology with passion and dedication! 🚀"
              : "SRM Institute of Science and Technology, Chennai | AI/ML Enthusiast | Full Stack Developer"}
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-3">
                <Phone className={`h-5 w-5 ${isAnilMode ? "text-orange-600" : "text-blue-600"}`} />
                <div className="text-left min-w-0">
                  <p className="text-sm text-gray-600">Phone</p>
                  <a
                    href="tel:+918825626967"
                    className="text-sm font-medium text-black hover:underline break-words block"
                  >
                    +91 8825626967
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${isAnilMode ? "text-orange-600" : "text-blue-600"}`} />
                <div className="text-left min-w-0">
                  <p className="text-sm text-gray-600">Email</p>
                  <a
                    href="mailto:Prajangowtham2004@gmail.com"
                    className="text-sm font-medium text-black hover:underline break-words block"
                  >
                    Prajangowtham2004@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-3">
                <Linkedin className={`h-5 w-5 ${isAnilMode ? "text-orange-600" : "text-blue-600"}`} />
                <div className="text-left min-w-0">
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/prajan-gowtham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black hover:underline break-words block"
                  >
                    prajan-gowtham
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-3">
                <Github className={`h-5 w-5 ${isAnilMode ? "text-orange-600" : "text-blue-600"}`} />
                <div className="text-left min-w-0">
                  <p className="text-sm text-gray-600">GitHub</p>
                  <a
                    href="https://github.com/prajangowtham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black hover:underline break-words block"
                  >
                    prajangowtham
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlight Video (only in Anil Mode) */}
          {isAnilMode && (
            <div className="mb-12">
              <Card className="p-2 max-w-2xl mx-auto shadow-xl border-2 border-orange-600">
                <video
                  ref={videoRef}
                  src="/hero-meme.mp4"
                  loop
                  controls
                  playsInline
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className={`px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 text-white ${
                isAnilMode ? "bg-orange-600 hover:bg-orange-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isAnilMode ? "Let's Connect, Nanba! 🤝" : "Get In Touch"}
            </Button>
            <Button
              variant="outline"
              className={`px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 bg-transparent ${
                isAnilMode
                  ? "border-orange-600 text-orange-600 hover:bg-orange-50"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              {isAnilMode ? "View My Journey 🎯" : "Download Resume"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
