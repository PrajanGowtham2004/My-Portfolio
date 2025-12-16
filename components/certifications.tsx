"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { Award, Calendar, ExternalLink, X } from "lucide-react"
import { useState } from "react"

export default function Certifications() {
  const { isAnilMode } = useMode()
  const [selectedMeme, setSelectedMeme] = useState<string | null>(null)

  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "DeepLearning.AI",
      date: "2024",
      description:
        "Comprehensive certification covering TensorFlow fundamentals, neural networks, and deep learning applications.",
      skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision"],
      verified: true,
      meme: "uvijay-13.gif",
    },
    {
      title: "Machine Learning",
      issuer: "Coursera (Andrew Ng)",
      date: "2024",
      description:
        "Complete machine learning course covering algorithms, supervised and unsupervised learning, and practical applications.",
      skills: ["Machine Learning", "Python", "Algorithms", "Data Science"],
      verified: true,
      meme: "uvijay-14.gif",
    },
    {
      title: "Python Programming",
      issuer: "Multimise",
      date: "2023",
      description:
        "Advanced Python programming certification covering data structures, algorithms, and application development.",
      skills: ["Python", "Data Structures", "Algorithms", "Programming"],
      verified: true,
      meme: "uvijay-15.gif",
    },
    {
      title: "Full Stack Development",
      issuer: "Self-Paced Learning",
      date: "2024",
      description:
        "Comprehensive full-stack development skills through hands-on projects and continuous learning.",
      skills: ["MERN Stack", "Next.js", "Full Stack", "Web Development"],
      verified: false,
      meme: "uvijay-16.gif",
    },
  ]

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "Achievement Gallery" : "Certifications"}
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-600" : "bg-blue-600"
            }`}
          ></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {isAnilMode
              ? "Recognition of excellence and commitment to continuous learning and growth"
              : "Professional certifications and achievements in technology and development"}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => cert.meme && setSelectedMeme(cert.meme)}
            >
              {isAnilMode && cert.meme && (
                <div className="absolute inset-0">
                  <img
                    src={cert.meme}
                    alt="Meme"
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>
              )}

              <Card className="relative p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      isAnilMode
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-xl font-bold ${
                          isAnilMode ? "text-orange-600" : "text-blue-600"
                        }`}
                      >
                        {cert.title}
                      </h3>
                      {cert.verified && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-black mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {cert.date}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${
                        isAnilMode
                          ? "bg-orange-50 text-orange-700"
                          : "bg-blue-50 text-blue-700"
                      } hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    className={`flex items-center text-sm font-medium ${
                      isAnilMode
                        ? "text-orange-600 hover:text-orange-700"
                        : "text-blue-600 hover:text-blue-700"
                    } transition-colors`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {isAnilMode ? "View Achievement" : "View Certificate"}
                  </button>
                  <div
                    className={`text-sm font-medium ${
                      cert.verified ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {cert.verified ? "✓ Verified" : "Self-Paced"}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12">
          <Card className="p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div
                  className={`text-3xl font-bold mb-2 ${
                    isAnilMode ? "text-orange-600" : "text-blue-600"
                  }`}
                >
                  {certifications.length}
                </div>
                <p className="text-gray-600">
                  {isAnilMode
                    ? "Achievements Unlocked"
                    : "Total Certifications"}
                </p>
              </div>
              <div>
                <div
                  className={`text-3xl font-bold mb-2 ${
                    isAnilMode ? "text-orange-600" : "text-blue-600"
                  }`}
                >
                  {certifications.filter((cert) => cert.verified).length}
                </div>
                <p className="text-gray-600">
                  {isAnilMode
                    ? "Verified Excellence"
                    : "Verified Certificates"}
                </p>
              </div>
              <div>
                <div
                  className={`text-3xl font-bold mb-2 ${
                    isAnilMode ? "text-orange-600" : "text-blue-600"
                  }`}
                >
                  2024
                </div>
                <p className="text-gray-600">
                  {isAnilMode ? "Year of Growth" : "Most Recent Year"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Meme Modal */}
      {selectedMeme && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-xl shadow-2xl max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedMeme(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedMeme}
              alt="Selected Meme"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
