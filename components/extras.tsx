"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useMode } from "@/contexts/mode-context"
import { BookOpen, GitBranch, Trophy, Users, Zap } from "lucide-react"
import TVKBanner from "./tvk-banner"

export default function Extras() {
  const { isAnilMode } = useMode()

  // 🔥 Anil Mode = Meme + Fun
  const anilExtras = [
    {
      title: "Thalapathy Vijay Inspiration 🌟",
      description:
        "Inspired by Thalapathy Vijay's leadership, vision, and commitment to social change through TVK. The man, the myth, the legend! 👑",
      icon: Users,
      highlights: ["Leadership", "Social Impact", "Vision", "Dedication"],
      achievement: "Life Philosophy ❤️",
      memeImg: "/vijay-7.gif",
      memeText: "Thalapathy is not just an actor, he's an emotion! 🎭",
    },
    {
      title: "TVK Supporter 🏛️",
      description:
        "Strong supporter of Tamizhaga Vetri Kalagam's vision for a progressive and technology-driven Tamil Nadu. Change is coming, nanba! ⚡",
      icon: BookOpen,
      highlights: ["Political Awareness", "Responsibility", "Progressive Thinking", "Community"],
      achievement: "Active Supporter 🎯",
      memeImg: "/hero-img-3.gif",
      memeText: "TVK = Technology + Vision + Kalagam! 🚀",
    },
  ]

  // 💼 Professional Mode = Career Oriented
  const professionalExtras = [
    {
      title: "Certifications & Achievements 📜",
      description:
        "Earned industry-recognized certifications showcasing expertise in cloud computing, full-stack development, and agile methodologies.",
      icon: Trophy,
      highlights: ["AWS Certified", "Azure Fundamentals", "Agile", "Hackathon Winner"],
      achievement: "Certified Professional",
    },
    {
      title: "Open Source Contributions 🌍",
      description:
        "Active contributor to open-source projects, improving documentation, fixing bugs, and building community-driven solutions.",
      icon: GitBranch,
      highlights: ["Collaboration", "Code Quality", "Community", "Innovation"],
      achievement: "Contributor",
    },
    {
      title: "Mentorship & Leadership 🤝",
      description:
        "Guided peers and juniors in technical upskilling, resume building, and hackathon preparation, fostering team success.",
      icon: Users,
      highlights: ["Mentorship", "Team Guidance", "Leadership", "Knowledge Sharing"],
      achievement: "Tech Mentor",
    },
    {
      title: "Continuous Learning 📚",
      description:
        "Dedicated to lifelong learning and professional development, staying updated with modern technologies and industry practices.",
      icon: Zap,
      highlights: ["Adaptability", "Growth Mindset", "Innovation", "Problem Solving"],
      achievement: "Always Learning",
    },
  ]

  const extras = isAnilMode ? anilExtras : professionalExtras

  const getColorClasses = (type: "bg" | "badge") => {
    if (isAnilMode) {
      return type === "bg"
        ? "bg-orange-50 hover:bg-orange-100 border-orange-200"
        : "bg-orange-100 text-orange-700 border-orange-300"
    } else {
      return type === "bg"
        ? "bg-white hover:bg-blue-50 border-blue-200"
        : "bg-blue-50 text-blue-700 border-blue-300"
    }
  }

  return (
    <section id="extras" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "🔥 Mass Extras 🎭" : "Professional Extras"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isAnilMode
              ? "Nanbaaa! Ithu thaan vera level life mode — memes + inspiration overload! 🚀"
              : "Additional career-focused achievements, contributions, and growth highlights."}
          </p>
        </div>

        {/* Extras Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {extras.map((extra, idx) => {
            const IconComponent = extra.icon
            return (
              <Card
                key={idx}
                className={`p-6 shadow-md rounded-xl border transition-all duration-300 transform hover:scale-[1.02] ${getColorClasses(
                  "bg"
                )}`}
              >
                {/* Icon + Title */}
                <div className="flex items-center space-x-4 mb-5">
                  <div
                    className={`p-3 rounded-full ${
                      isAnilMode ? "bg-orange-200 text-orange-700" : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isAnilMode ? "text-orange-700" : "text-blue-700"
                      }`}
                    >
                      {extra.title}
                    </h3>
                    <Badge className={`${getColorClasses("badge")} mt-1`}>{extra.achievement}</Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">{extra.description}</p>

                {/* Meme (only in Anil Mode) */}
                {isAnilMode && extra.memeImg && (
                  <div className="mb-4 text-center">
                    <img
                      src={extra.memeImg}
                      alt="meme"
                      className="rounded-lg shadow-md mx-auto mb-2 max-h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <p className="text-sm font-medium text-orange-800">{extra.memeText}</p>
                  </div>
                )}

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {extra.highlights.map((h, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                        isAnilMode
                          ? "border-orange-400 text-orange-700 hover:bg-orange-100"
                          : "border-blue-400 text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      {h}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Only in Anil Mode */}
        <TVKBanner isVisible={isAnilMode} />
      </div>
    </section>
  )
}
