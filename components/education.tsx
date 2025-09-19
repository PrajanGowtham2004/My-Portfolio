"use client"

import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Education() {
  const { isAnilMode } = useMode()
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const educationData = [
    {
      institution: "SRM Institute of Science and Technology",
      location: "Ramapuram, Chennai",
      degree: "B.Tech in Computer Science Engineering",
      duration: "Sep 2022 – June 2026",
      grade: "CGPA: 7.7",
      description:
        "Pursuing comprehensive education in computer science with focus on AI/ML and software development.",
    },
    {
      institution: "Velammal Matric Hr. Sec School",
      location: "Theni",
      degree: "Higher Secondary Certificate – Biology-Maths Stream",
      duration: "June 2020 – March 2022",
      grade: "Percentage: 82%",
      description:
        "Completed higher secondary education with strong foundation in mathematics and sciences.",
    },
  ]

  // Auto play/pause video only when visible
  useEffect(() => {
    if (!isAnilMode || !videoRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current
                .play()
                .catch(() => console.log("Autoplay blocked until user interacts"))
            } else {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.7 } // play only when 70% of video visible
    )

    observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [isAnilMode])

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "Academic Excellence Journey" : "Education"}
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-600" : "bg-blue-600"
            }`}
          ></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {isAnilMode
              ? "Building a strong foundation for future leadership in technology and innovation"
              : "My academic journey in computer science and technology"}
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full ${
                        isAnilMode
                          ? "bg-orange-100 text-orange-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isAnilMode ? "text-orange-600" : "text-blue-600"
                        }`}
                      >
                        {edu.institution}
                      </h3>
                      <h4 className="text-lg font-semibold text-black mb-3">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 mb-4">{edu.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:ml-8">
                  <div
                    className={`text-2xl font-bold px-4 py-2 rounded-lg ${
                      isAnilMode
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {edu.grade.split(": ")[1]}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Meme Card Section - Show Only in Anil Mode */}
          {isAnilMode && (
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isAnilMode ? "text-orange-600" : "text-blue-600"
                }`}
              >
                Fun & Inspiration 🎬
              </h3>
              <p className="text-gray-700 mb-4">
                Celebrating learning with some memes from Thalapathy world!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Meme Image */}
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/Academic-3.gif"
                    alt="Vijay Meme"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    Meme Image
                  </div>
                </div>

                {/* Meme Video */}
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                  <video
                    ref={videoRef}
                    src="/Academic-2.mp4"
                    controls
                    loop
                    playsInline
                    className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    Meme Video
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
