"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useMode } from "@/contexts/mode-context"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { toast } from "sonner"; // toaster lib

export default function Contact() {
  const { isAnilMode } = useMode()

  // form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [videoSrc, setVideoSrc] = useState<string | null>(null) // video popup state

  // handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // close video after playing success/failure
  const handleVideoEnd = () => {
    if (videoSrc && videoSrc !== "/Loading.mp4") {
      setTimeout(() => setVideoSrc(null), 1000)
    }
  }

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (isAnilMode) {
      setVideoSrc("/Loading.mp4") // show loading video
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, isAnilMode }),
      })

      // force Loading.mp4 to play at least 12 seconds
      setTimeout(async () => {
        if (res.ok) {
          setIsSubmitted(true)
          setFormData({ name: "", email: "", message: "" })

          if (isAnilMode) {
            setVideoSrc("/Success.mp4")
          } else {
            toast.success("Message sent successfully!")
          }
        } else {
          const data = await res.json()
          setError(data.error || "Failed to send message. Please try again.")

          if (isAnilMode) {
            setVideoSrc("/Failure.mp4")
          } else {
            toast.error(data.error || "Failed to send message.")
          }
        }
        setIsSubmitting(false)
      }, 4000)
    } catch (err) {
      setTimeout(() => {
        setError("Something went wrong. Please try again later.")
        if (isAnilMode) {
          setVideoSrc("/Failure.mp4")
        } else {
          toast.error("Something went wrong. Please try again later.")
        }
        setIsSubmitting(false)
      }, 9000)
    }
  }

  // contact information list
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8825626967",
      href: "tel:+918825626967",
      color: isAnilMode ? "text-orange-600" : "text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Prajangowtham2004@gmail.com",
      href: "mailto:Prajangowtham2004@gmail.com",
      color: isAnilMode ? "text-orange-600" : "text-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "#",
      color: isAnilMode ? "text-orange-600" : "text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "prajan-gowtham",
      href: "https://www.linkedin.com/in/prajan-gowtham-2b4a54253/",
      color: isAnilMode ? "text-orange-600" : "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "prajangowtham",
      href: "https://github.com/prajangowtham",
      color: isAnilMode ? "text-orange-600" : "text-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isAnilMode ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {isAnilMode ? "Let's Connect, Nanba! 🤝" : "Get In Touch"}
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded ${
              isAnilMode ? "bg-orange-600" : "bg-blue-600"
            }`}
          ></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {isAnilMode
              ? "Ready to collaborate on the next big innovation? Let's build the future together! Mass opportunities await! 🚀"
              : "Ready to collaborate on exciting projects? Let's discuss how we can work together to create something amazing."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isAnilMode ? "text-orange-600" : "text-blue-600"
                }`}
              >
                {isAnilMode ? "Connect With Me 📱" : "Contact Information"}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div
                        className={`p-3 rounded-full ${
                          isAnilMode
                            ? "bg-orange-100 group-hover:bg-orange-200"
                            : "bg-blue-100 group-hover:bg-blue-200"
                        } transition-colors duration-200`}
                      >
                        <IconComponent className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{info.label}</p>
                        <p
                          className={`font-medium ${info.color} group-hover:underline`}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </Card>
          </div>

          {/* Right Side - Form */}
          <div>
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isAnilMode ? "text-orange-600" : "text-blue-600"
                }`}
              >
                {isAnilMode ? "Send a Message 💌" : "Send a Message"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {isAnilMode ? "Your Name (Nanba/Akka) 👋" : "Your Name"}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={
                      isAnilMode ? "Enter your name, nanba!" : "Enter your name"
                    }
                    className="w-full"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {isAnilMode ? "Email Address 📧" : "Email Address"}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {isAnilMode ? "Your Message 💬" : "Message"}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder={
                      isAnilMode
                        ? "Share your ideas, collaboration opportunities, or just say hello! Let's build something amazing together! 🚀"
                        : "Share your ideas, project requirements, or collaboration opportunities..."
                    }
                    className="w-full"
                  />
                </div>

                {/* Error */}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 text-lg font-medium transition-all duration-200 ${
                    isAnilMode
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  } ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {isAnilMode ? "Sending Message..." : "Sending..."}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      {isAnilMode ? "Send Message 🚀" : "Send Message"}
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Video Popup (Only in Anil Mode) */}
      {isAnilMode && videoSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <video
            src={videoSrc}
            autoPlay
            loop={videoSrc === "/Loading.mp4"}
            onEnded={handleVideoEnd}
            className="max-w-lg w-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
