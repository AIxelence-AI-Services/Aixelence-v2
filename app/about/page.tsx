"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, ArrowRight, Mail, Phone, Home, User, Briefcase, FileText } from "lucide-react"
import { useEffect, useState } from "react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function AboutPage() {
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Services", url: "/#services", icon: Briefcase },
    { name: "About", url: "/about", icon: User },
    { name: "Contact", url: "/#contact", icon: FileText },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-500 px-4 py-3 ${
          scrollDirection === "down" ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-md">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AIxelence</span>
          </div>

          {/* Centered Tubelight Navigation */}
          <div className="flex-1 flex justify-center">
            <NavBar items={navItems} />
          </div>

          {/* Get Started Button */}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </header>

      {/* About Us Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">AIxelence</h1>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8 text-center">
            <p className="text-lg">
              At AIxelence, we believe that Artificial Intelligence should be more than just a trend — it should be a
              tool that solves real business challenges.
            </p>

            <p>
              Founded by three like-minded individuals, our journey began with the vision to make AI practical,
              scalable, and accessible for businesses of all sizes. We specialize in building AI bots, knowledge
              assistants, and workflow automations that help organizations work smarter, not harder.
            </p>

            <p className="text-xl font-semibold text-foreground">
              Our mission is simple: to empower organizations with intelligent solutions that grow with their ambitions.
            </p>

            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-12">👥 Meet the Founders</h2>

              <div className="grid md:grid-cols-1 gap-12">
                {/* Danial Haider */}
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Danial Haider</h3>
                  <p className="text-primary font-semibold mb-4">RAG & Knowledge Systems Expert</p>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center text-muted-foreground">
                      🎓 <span className="ml-2">Masters in Data Science</span>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href="mailto:haiderdaniyal095@gmail.com" className="hover:text-primary transition-colors">
                        haiderdaniyal095@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:+923555339666" className="hover:text-primary transition-colors">
                        +92 355 5339666
                      </a>
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Danial focuses on Retrieval-Augmented Generation (RAG) and knowledge systems, helping businesses
                    transform data into actionable insights and intelligent search experiences.
                  </p>
                </div>

                {/* Musharraf Hussain */}
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Musharraf Hussain</h3>
                  <p className="text-primary font-semibold mb-4">AI Bot & Assistant Specialist</p>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center text-muted-foreground">
                      🎓 <span className="ml-2">Computer Science Undergraduate</span>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href="mailto:musharraf1487@gmail.com" className="hover:text-primary transition-colors">
                        musharraf1487@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:+923468558793" className="hover:text-primary transition-colors">
                        +92 346 8558793
                      </a>
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Musharraf builds conversational AI assistants and chatbots across platforms like WhatsApp, Telegram,
                    Slack, and Discord to enhance customer engagement and support.
                  </p>
                </div>

                {/* Muhammad Salahuddin */}
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Muhammad Salahuddin</h3>
                  <p className="text-primary font-semibold mb-4">AI Automation & Workflow Engineer</p>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center text-muted-foreground">
                      🎓 <span className="ml-2">Masters in Data Science</span>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href="mailto:salahuddinmuhammad219@gmail.com" className="hover:text-primary transition-colors">
                        salahuddinmuhammad219@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:+447340914433" className="hover:text-primary transition-colors">
                        +44 7340 914433
                      </a>
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Salahuddin designs and integrates AI-driven automation workflows (n8n, CRM, ticketing systems, and
                    more) to streamline operations and optimize business efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xl font-semibold text-foreground">
                ✨ Together, we are AIxelence — blending innovation, intelligence, and execution to help businesses
                thrive in the AI era.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">AIxelence</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advanced AI solutions and intelligent automation services delivering exceptional results worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">AI Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AI Bots & Assistants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    RAG Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AI + Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Industry AI Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AI Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 AIxelence. All rights reserved. Pioneering the future with intelligent AI solutions.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
