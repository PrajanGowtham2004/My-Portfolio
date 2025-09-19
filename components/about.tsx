"use client"

import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { useEffect, useRef } from "react"
import MemeGallery from "./meme-gallery"
import VijayQuotes from "./vijay-quotes"

export default function About() {
  const { isAnilMode } = useMode()
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Vijay Quotes
  const quotes = [
    {
      tamil: "விக்ரம், தொழில்நுட்பத்தில் முன்னிலை பெற வேண்டும்!",
      english: "Vikram, we must lead in technology!",
      movie: "Master",
      place: "Chennai Audio Launch",
    },
    {
      tamil: "செயற்கை நுண்ணறிவு மனித வாழ்கையை மேம்படுத்தும்!",
      english: "Artificial Intelligence enhances human life!",
      movie: "Bigil",
      place: "Coimbatore Audio Launch",
    },
    {
      tamil: "நூறு சதவீத முயற்சி இல்லாமல் வெற்றி இல்லை!",
      english: "No success without 100% effort!",
      movie: "Sarkar",
      place: "Madurai Audio Launch",
    },
  ]

  // Video autoplay when video is visible
  useEffect(() => {
    if (!isAnilMode || !videoRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Restart + autoplay
              videoRef.current.currentTime = 0
              videoRef.current
                .play()
                .catch(() =>
                  console.log("Autoplay blocked until user interacts")
                )
            } else {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.7 } // play only when 70% visible
    )

    observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [isAnilMode])

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "About Thalapathy Prajan 🎬" : "About Me"}
          </h2>
          <div
            className={`w-32 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-600" : "bg-blue-600"
            }`}
          ></div>
          {isAnilMode && (
            <p className="text-orange-700 font-medium mt-3 text-lg sm:text-xl">
              "Nanba, technology is not just code - it's the future!" 🚀
            </p>
          )}
        </div>

        {/* Grid Layout */}
        <div
          className={`${
            isAnilMode
              ? "grid grid-cols-1 lg:grid-cols-2 gap-10"
              : "grid grid-cols-1 gap-10"
          } items-start relative z-10`}
        >
          {/* Text Section */}
          <div className="space-y-8">
            {/* Professional / Vision */}
            <Card
              className={`p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 ${
                !isAnilMode ? "min-h-[500px]" : ""
              }`}
            >
              <h3
                className={`text-3xl font-bold mb-6 ${
                  isAnilMode ? "text-orange-600" : "text-blue-600"
                }`}
              >
                {isAnilMode ? "Vision & Leadership 👑" : "Professional Journey"}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg sm:text-xl">
                {isAnilMode
                  ? "Just like Thalapathy Vijay's journey from cinema to politics, I believe in using technology as a force for positive change. My passion lies in creating innovative solutions that can transform lives and communities. 🌟"
                  : "I am a passionate Computer Science Engineering student at SRM Institute of Science and Technology, Chennai, with a strong focus on AI/ML and full-stack development. My journey in technology is driven by curiosity and the desire to solve real-world problems."}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg sm:text-xl">
                {isAnilMode
                  ? "Through my technical skills and inspired leadership, I aim to build a future where technology serves humanity, just as Thalapathy envisions a better Tamil Nadu through TVK. 🏛️✨"
                  : "With hands-on experience in machine learning, web development, and computer science fundamentals, I am committed to continuous learning and innovation. My projects span AI, web apps, and data-driven solutions."}
              </p>

              {/* Quotes only in Anil Mode */}
              {isAnilMode && (
                <div className="mt-6 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500 space-y-6">
                  {quotes.map((q, idx) => (
                    <div key={idx} className="text-left">
                      <p className="text-orange-800 font-medium text-base sm:text-lg">
                        "{q.tamil}" / "{q.english}"
                      </p>
                      <p className="text-orange-600 text-sm sm:text-base mt-1">
                        - {q.movie} Audio Launch, {q.place}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Strengths */}
            <Card
              className={`p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 ${
                !isAnilMode ? "min-h-[450px]" : ""
              }`}
            >
              <h4
                className={`text-2xl font-semibold mb-4 ${
                  isAnilMode ? "text-orange-600" : "text-blue-600"
                }`}
              >
                {isAnilMode ? "Core Values 🔥" : "Key Strengths"}
              </h4>
              <ul className="space-y-3 text-gray-700 text-lg sm:text-xl">
                <li className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-3 ${
                      isAnilMode ? "bg-orange-600" : "bg-blue-600"
                    }`}
                  ></span>
                  {isAnilMode ? "Leadership & Vision 👑" : "AI/ML Expertise"}
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-3 ${
                      isAnilMode ? "bg-orange-600" : "bg-blue-600"
                    }`}
                  ></span>
                  {isAnilMode
                    ? "Innovation & Technology 🚀"
                    : "Full-Stack Development"}
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-3 ${
                      isAnilMode ? "bg-orange-600" : "bg-blue-600"
                    }`}
                  ></span>
                  {isAnilMode ? "Social Impact 🌍" : "Problem Solving"}
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-3 ${
                      isAnilMode ? "bg-orange-600" : "bg-blue-600"
                    }`}
                  ></span>
                  {isAnilMode
                    ? "Dedication & Passion ❤️"
                    : "Continuous Learning"}
                </li>
              </ul>
            </Card>
          </div>

          {/* Video + Meme Section in Anil Mode */}
          {isAnilMode && (
            <div className="space-y-8 relative z-10">
              <Card className="p-4 shadow-xl border-2 border-orange-600 hover:scale-105 transition-transform duration-300 relative z-10">
                <video
                  ref={videoRef}
                  src="/vijay-video-2.mp4"
                  controls
                  loop
                  playsInline
                  className="w-full h-[450px] rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded text-sm sm:text-base font-semibold shadow-md">
                  Highlight Clip 🎬
                </div>
              </Card>

              <div className="relative w-full min-h-[550px]">
                <MemeGallery isVisible={isAnilMode} />
                <VijayQuotes isVisible={isAnilMode} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Background Memes */}
      {isAnilMode && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/tvk-flag.jpeg"
            className="absolute top-10 left-5 w-48 h-48 object-cover rounded-lg opacity-20 animate-float"
          />
          <img
            src="/vijay-5.png"
            className="absolute bottom-20 right-10 w-56 h-56 object-cover rounded-lg opacity-20 animate-float-slow"
          />
        </div>
      )}
    </section>
  )
}
