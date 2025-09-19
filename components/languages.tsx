"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { Globe, MessageCircle } from "lucide-react"
import { useRef } from "react"

export default function Languages() {
  const { isAnilMode } = useMode()

  const languages = [
    {
      language: "English",
      proficiency: "Fluent",
      level: 95,
      description:
        "Professional working proficiency with excellent written and verbal communication skills.",
      flag: "🇺🇸",
      meme: "/vijay-10.gif",
      isVideo: false,
    },
    {
      language: "Tamil",
      proficiency: "Native",
      level: 100,
      description:
        "Native speaker with complete fluency in all aspects of the language.",
      flag: "🏴",
      meme: "/vijay-11.gif",
      isVideo: false,
    },
    {
      language: "Hindi",
      proficiency: "Basic",
      level: 60,
      description:
        "Basic conversational skills with understanding of common phrases and expressions.",
      flag: "🇮🇳",
      meme: "/Hindi-Subtitle.mp4", // example video
      isVideo: true,
    },
  ]

  const getProficiencyColor = (level: number) => {
    if (level >= 90) return isAnilMode ? "bg-orange-500" : "bg-blue-500"
    if (level >= 70) return isAnilMode ? "bg-orange-400" : "bg-blue-400"
    return isAnilMode ? "bg-orange-300" : "bg-blue-300"
  }

  return (
    <section id="languages" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "Communication Powers" : "Languages"}
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-600" : "bg-blue-600"
            }`}
          ></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {isAnilMode
              ? "Breaking barriers and connecting cultures with a dash of memes 😂"
              : "Multilingual communication abilities for global collaboration"}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((lang, index) => {
            const videoRef = useRef<HTMLVideoElement | null>(null)

            return (
              <div
                key={index}
                className="relative group rounded-xl shadow-lg overflow-hidden"
                onMouseEnter={() => {
                  if (lang.isVideo && videoRef.current) {
                    videoRef.current.play()
                  }
                }}
                onMouseLeave={() => {
                  if (lang.isVideo && videoRef.current) {
                    videoRef.current.pause()
                    videoRef.current.currentTime = 0
                  }
                }}
              >
                {/* Normal Content */}
                <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{lang.flag}</div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isAnilMode ? "text-orange-600" : "text-blue-600"
                      }`}
                    >
                      {lang.language}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={`${
                        lang.proficiency === "Native"
                          ? "bg-green-100 text-green-800"
                          : lang.proficiency === "Fluent"
                          ? isAnilMode
                            ? "bg-orange-100 text-orange-800"
                            : "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {lang.proficiency}
                    </Badge>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Proficiency
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          isAnilMode ? "text-orange-600" : "text-blue-600"
                        }`}
                      >
                        {lang.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getProficiencyColor(
                          lang.level
                        )}`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {lang.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    {lang.proficiency === "Native" ? (
                      <MessageCircle className="h-4 w-4" />
                    ) : (
                      <Globe className="h-4 w-4" />
                    )}
                    <span>
                      {lang.proficiency === "Native"
                        ? isAnilMode
                          ? "Cultural Heritage"
                          : "Mother Tongue"
                        : isAnilMode
                        ? "Meme Connect"
                        : "International Communication"}
                    </span>
                  </div>
                </Card>

                {/* Hover Meme/Video (only in Anil mode) */}
                {isAnilMode && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    {lang.isVideo ? (
                      <video
                        ref={videoRef}
                        src={lang.meme}
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <img
                        src={lang.meme}
                        alt={`${lang.language} meme`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
