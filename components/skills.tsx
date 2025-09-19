"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { Brain, Code, Globe, Smartphone } from "lucide-react"
import { useState } from "react"

export default function Skills() {
  const { isAnilMode } = useMode()
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "AI/ML",
      icon: Brain,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "OpenCV"],
      color: isAnilMode ? "orange" : "blue",
      meme: "/vijay-6.gif",
      caption: "When Python predicts everything perfectly! 🤯",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["MERN Stack", "Next.js", "React", "Node.js", "Express.js", "Tailwind CSS"],
      color: isAnilMode ? "red" : "green",
      meme: "/vijay-7.gif",
      caption: "React developers be like: 'Just one more hook…' 😂",
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "Git"],
      color: isAnilMode ? "yellow" : "purple",
      meme: "/vijay-8.gif",
      caption: "Debugging at 2 AM like a true Thalapathy! 🔥",
    },
    {
      title: "Blockchain/Web3",
      icon: Smartphone,
      skills: ["Solidity", "Smart Contracts", "Web3.js", "Ethereum", "DeFi"],
      color: isAnilMode ? "teal" : "cyan",
      meme: "/vijay-9.gif",
      caption: "When your smart contract works on the first deploy! 😎",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      green: "bg-green-100 text-green-600 border-green-200",
      red: "bg-red-100 text-red-600 border-red-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200",
      cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      amber: "bg-amber-100 text-amber-600 border-amber-200",
      slate: "bg-slate-100 text-slate-600 border-slate-200",
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="skills" className="py-8 px-2 sm:px-4 lg:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-2 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "Technical Arsenal 💥" : "Technical Skills"}
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-600" : "bg-blue-600"
            }`}
          ></div>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto text-base">
            {isAnilMode
              ? "Click on a card to see the meme behind each skill! Interactive fun! 🎭"
              : "A compact overview of my technical expertise."}
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const isFlipped = flippedIndex === index

            return (
              <div
                key={index}
                className={`w-full h-72 perspective relative cursor-pointer ${
                  !isAnilMode
                    ? "hover:scale-105 hover:shadow-lg transition-transform duration-300"
                    : ""
                }`}
                onClick={() =>
                  isAnilMode && setFlippedIndex(isFlipped ? null : index)
                }
                style={
                  isAnilMode
                    ? {
                        transformStyle: "preserve-3d",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        transition: "transform 0.7s",
                      }
                    : {}
                }
              >
                {/* Front Card */}
                <Card className={`absolute w-full h-full shadow-md backface-hidden p-4`}>
                  <div className="flex flex-col justify-start h-full">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-full ${getColorClasses(category.color)}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          isAnilMode ? "text-orange-600" : "text-blue-600"
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className={`${getColorClasses(
                            category.color
                          )} text-sm cursor-default`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Back Card */}
                {isAnilMode && (
                  <Card className="absolute w-full h-full shadow-md backface-hidden rotate-y-180 flex flex-col items-center justify-center p-3">
                    <img
                      src={category.meme}
                      alt={`${category.title} Meme`}
                      className="w-full h-52 object-cover rounded-md shadow-sm mb-3"
                    />
                    <p className="text-sm text-center font-medium">
                      {category.caption}
                    </p>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
