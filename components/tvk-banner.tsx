"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Users, Heart } from "lucide-react"

interface TVKBannerProps {
  isVisible: boolean
}

export default function TVKBanner({ isVisible }: TVKBannerProps) {
  if (!isVisible) return null

  const tvkValues = [
    { icon: Zap, label: "Innovation", tamil: "புதுமை" },
    { icon: Target, label: "Vision", tamil: "நோக்கம்" },
    { icon: Users, label: "Unity", tamil: "ஒற்றுமை" },
    { icon: Heart, label: "Service", tamil: "சேவை" },
  ]

  return (
    <div className="mt-8 animate-fade-in">
      <Card className="p-6 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-orange-300">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">🏛️</span>
            <h3 className="text-2xl font-bold text-orange-600">TVK Values in Tech</h3>
            <span className="text-2xl">🚀</span>
          </div>
          <p className="text-orange-700 font-medium">Tamizhaga Vetri Kalagam - Technology for Progress</p>
          <p className="text-sm text-gray-600 mt-1">தமிழக வெற்றி கழகம் - முன்னேற்றத்திற்கான தொழில்நுட்பம்</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {tvkValues.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-orange-600" />
                </div>
                <p className="font-semibold text-orange-700 text-sm">{value.label}</p>
                <p className="text-xs text-gray-600">{value.tamil}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-medium">
            🎯 Building Tomorrow's Tamil Nadu with Technology Today! 🎯
          </Badge>
        </div>
      </Card>
    </div>
  )
}
