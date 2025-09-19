"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface VijayQuotesProps {
  isVisible: boolean
}

export default function VijayQuotes({ isVisible }: VijayQuotesProps) {
  if (!isVisible) return null

  const quotes = [
    {
      text: "Success is not just about reaching the top, it's about lifting others up with you.",
      context: "Leadership Philosophy",
      tamil: "வெற்றி என்பது உச்சத்தை அடைவது மட்டுமல்ல, மற்றவர்களையும் உயர்த்துவது.",
    },
    {
      text: "Technology should serve humanity, not the other way around.",
      context: "Tech Vision",
      tamil: "தொழில்நுட்பம் மனிதகுலத்திற்கு சேவை செய்ய வேண்டும்.",
    },
    {
      text: "Change begins with a single step, but it requires the courage to take it.",
      context: "TVK Mission",
      tamil: "மாற்றம் ஒரு அடியில் தொடங்குகிறது, ஆனால் அதை எடுக்க தைரியம் தேவை.",
    },
  ]

  return (
    <div className="mt-8 animate-fade-in">
      <Card className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-orange-600">🌟 Thalapathy Inspiration 🌟</h3>
          <p className="text-sm text-gray-600">Words that drive innovation and change</p>
        </div>
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <div key={index} className="relative">
              <Card className="p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <Quote className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium mb-2 italic">"{quote.text}"</p>
                    <p className="text-sm text-orange-600 mb-1">தமிழ்: {quote.tamil}</p>
                    <p className="text-xs text-gray-500">- {quote.context}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
