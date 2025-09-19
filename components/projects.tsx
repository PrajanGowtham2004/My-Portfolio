"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { Brain, Building, ExternalLink, FileText, Github, Leaf } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const { isAnilMode } = useMode()
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "AI-Powered News Headline Classifier",
      description:
        "Built a machine learning model using NLP to classify news headlines. Achieved high accuracy with TF-IDF and Logistic Regression.",
      date: "May 2025",
      technologies: ["Python", "NLP", "TF-IDF", "Logistic Regression", "Scikit-learn"],
      icon: Brain,
      category: "AI/ML",
      video: "/project-5.mp4",
    },
    {
      title: "Crop Health Prediction and Advisory System",
      description:
        "Developed a MERN stack web app integrated with AI to detect plant diseases and suggest remedies.",
      date: "2024",
      technologies: ["MERN Stack", "CNN", "TensorFlow.js", "Image Classification", "AI"],
      icon: Leaf,
      category: "Hackathon Project",
      isHackathon: true,
      video: "/project-6.mp4",
    },
    {
      title: "Smart Resume Parser",
      description:
        "Intelligent resume parsing system that extracts and categorizes information from resumes using NLP and ML.",
      date: "2024",
      technologies: ["Python", "NLP", "Machine Learning", "PDF Processing", "Flask"],
      icon: FileText,
      category: "AI/ML",
      video: "/project-7.mp4",
    },
    {
      title: "Decentralized Real Estate Platform",
      description:
        "Blockchain-based platform for transparent real estate transactions with smart contracts.",
      date: "2024",
      technologies: ["Blockchain", "Smart Contracts", "Web3", "React", "Solidity"],
      icon: Building,
      category: "Blockchain",
      video: "/project-4.mp4",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
      {/* Flip styles */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }
        .flip-card.flipped .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-side {
          position: absolute; /* ✅ fixes stacking issue */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isAnilMode ? "text-orange-800" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "🔥 Anil’s Political Inspirations 🔥" : "Projects"}
          </h2>
          <div
            className={`w-28 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-800" : "bg-blue-600"
            }`}
          ></div>
          <p
            className={`mt-4 max-w-2xl mx-auto text-lg ${
              isAnilMode ? "text-orange-700" : "text-gray-600"
            }`}
          >
            {isAnilMode
              ? "Showcasing leadership, vision, and commitment inspired by Thalapathy Vijay and TVK."
              : "A showcase of my technical projects in AI/ML and web development"}
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const isFlipped = flippedIndex === index

            return (
              <div
                key={index}
                className={`flip-card relative w-full h-[450px] ${
                  isAnilMode ? "cursor-pointer" : ""
                } ${isFlipped ? "flipped" : ""}`}
                onClick={() =>
                  isAnilMode
                    ? setFlippedIndex(isFlipped ? null : index)
                    : null
                }
              >
                <div className="flip-inner w-full h-full">
                  {/* Front Side */}
                  <div className="flip-side">
                    <Card
                      className={`p-6 shadow-lg flex flex-col w-full h-full ${
                        isAnilMode
                          ? "bg-gradient-to-br from-white-50 to-white-100"
                          : ""
                      }`}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div
                          className={`p-3 rounded-full ${
                            isAnilMode
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3
                              className={`text-2xl font-bold ${
                                isAnilMode ? "text-orange-800" : "text-blue-600"
                              }`}
                            >
                              {project.title}
                            </h3>
                            {project.isHackathon && (
                              <Badge
                                variant="secondary"
                                className={`${
                                  isAnilMode
                                    ? "bg-orange-200 text-orange-900"
                                    : "bg-yellow-100 text-yellow-800"
                                } text-sm sm:text-base`}
                              >
                                Hackathon
                              </Badge>
                            )}
                          </div>
                          <p className="text-base text-gray-500 mb-2">{project.date}</p>
                          <Badge
                            variant="outline"
                            className={`mb-3 text-base ${
                              isAnilMode ? "text-orange-800 border-orange-500" : ""
                            }`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      <p
                        className={`mb-4 leading-relaxed text-lg flex-grow ${
                          isAnilMode ? "text-orange-700" : "text-gray-700"
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className={`text-base ${
                              isAnilMode
                                ? "bg-orange-50 text-orange-800"
                                : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`${
                            isAnilMode
                              ? "border-orange-600 text-orange-700 hover:bg-orange-50"
                              : "border-blue-600 text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          <Github className="h-5 w-5 mr-2" />
                          Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`${
                            isAnilMode
                              ? "border-orange-600 text-orange-700 hover:bg-orange-50"
                              : "border-blue-600 text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </Card>
                  </div>

                  {/* Back Side (Video) */}
                  <div className="flip-side flip-back">
                    <Card className="shadow-lg w-full h-full flex items-center justify-center">
                      <video
                        src={project.video}
                        controls
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
