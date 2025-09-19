"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface MemeGalleryProps {
  isVisible: boolean
}

export default function MemeGallery({ isVisible }: MemeGalleryProps) {
  if (!isVisible) return null

  const memes = [
    {
      title: "Thalapathy Entry Scene",
      description: "When you successfully deploy your first AI model",
      placeholder: "/hero-img-1.gif",
      caption: "Mass Entry! 🔥",
    },
    {
      title: "TVK Vision",
      description: "Building the future of Tamil Nadu with technology",
      placeholder: "/hero-img-2.gif",
      caption: "Change is Coming! 🚀",
    },
    {
      title: "Coding Like Thalapathy",
      description: "When your code works on the first try",
      placeholder: "/hero-img-3.gif",
      caption: "Vera Level Coding! 💻",
    },
    {
      title: "AI Revolution",
      description: "Leading the AI revolution like a true leader",
      placeholder: "/hero-img-4.gif",
      caption: "Future is Here! 🤖",
    },
  ]

  return (
    <div className="mt-8 animate-fade-in">
      <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-lg">
        <h3 className="text-3xl font-extrabold text-orange-600 mb-8 text-center">
          🎬 Thalapathy Meme Gallery 🎬
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memes.map((meme, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Render image or video depending on file type */}
                {meme.placeholder.endsWith(".mp4") ? (
                  <video
                    src={meme.placeholder}
                    controls
                    loop
                    muted
                    playsInline
                    className="w-full h-72 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <img
                    src={meme.placeholder || "/placeholder.svg"}
                    alt={meme.title}
                    className="w-full h-72 object-cover rounded-lg mb-4"
                  />
                )}

                <h4 className="font-bold text-orange-600 text-xl mb-2">
                  {meme.title}
                </h4>
                <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                  {meme.description}
                </p>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 text-base px-4 py-1.5 rounded-md"
                >
                  {meme.caption}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
