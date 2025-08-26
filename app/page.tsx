"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Star, ArrowRight, Mail, Phone, MapPin, X, Home, User, Briefcase, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import AIInteractiveCards from "@/components/ai-interactive-cards"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "About", url: "/about", icon: User },
  { name: "Contact", url: "#contact", icon: MessageCircle },
]

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [selectedService, setSelectedService] = useState(null)
  const [showLogoPopup, setShowLogoPopup] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogoPopup(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "The AI chatbot solution exceeded our expectations. Customer engagement increased by 300% and response times improved dramatically.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content:
        "AIxelence delivered a comprehensive RAG system that transformed how we handle customer inquiries. Incredible results!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content: "The AI automation workflows have saved us countless hours. Our productivity has never been higher!",
      rating: 5,
    },
  ]

  const handleLearnMore = (service) => {
    console.log("[v0] Learn More clicked for service:", service.title)
    console.log("[v0] Service features:", service.features)
    setSelectedService(service)
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {showLogoPopup && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] flex items-center justify-center pointer-events-none">
          <div className="animate-logo-entrance">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animation%20-%201699530249162-Memz7mDSPj3DXfvmjHxlX7Kf8Og8pQ.gif"
              alt="AIxelence Logo"
              className="w-32 h-32 rounded-2xl shadow-2xl animate-pulse-glow"
            />
            <div className="text-center mt-4">
              <h1 className="text-4xl font-bold text-white animate-text-glow">AIxelence</h1>
              <p className="text-white/80 text-lg mt-2 animate-fade-in-delayed">Intelligent AI Solutions</p>
            </div>
          </div>
        </div>
      )}

      <header
        className={`border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-500 px-4 py-3 ${
          scrollDirection === "down" ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 animate-fade-in group cursor-pointer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animation%20-%201699530249162-Memz7mDSPj3DXfvmjHxlX7Kf8Og8pQ.gif"
              alt="AIxelence Logo"
              className="w-10 h-10 rounded-lg transform hover:rotate-12 hover:scale-125 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/25 ring-2 ring-primary/20 hover:ring-primary/40"
            />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">
              AIxelence
            </span>
          </div>

          <div className="flex-1 flex justify-center">
            <NavBar items={navItems} />
          </div>

          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 text-center bg-gradient-to-br from-background via-background to-muted/50 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge variant="secondary" className="mb-4 animate-fade-in-up">
            Advanced AI Solutions & Automation
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Transforming Business with
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
              {" "}
              Intelligent AI
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Expert AI solutions including intelligent chatbots, RAG systems, workflow automation, and specialized
            industry AI. Revolutionizing how businesses operate with cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              View Our AI Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4" data-animate>
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge variant="secondary" className="mb-4">
              Our AI Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive AI Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intelligent chatbots to advanced automation systems, we deliver cutting-edge AI solutions that
              transform how businesses operate and engage with customers.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <AIInteractiveCards onLearnMore={handleLearnMore} />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30 relative overflow-hidden" data-animate>
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge variant="secondary" className="mb-4">
            About AIxelence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            AI Experts Delivering Intelligent Solutions
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            With extensive experience in artificial intelligence, machine learning, and automation technologies, our
            team specializes in creating intelligent solutions that revolutionize business operations. We combine
            cutting-edge AI with practical implementation to deliver measurable results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? "200+" : index === 1 ? "99%" : "24/7"}
                </div>
                <div className="text-muted-foreground">
                  {index === 0 ? "AI Solutions Deployed" : index === 1 ? "Client Satisfaction" : "AI Support Available"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4" data-animate>
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge variant="secondary" className="mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real results from businesses transformed by our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 ${
                  isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary hover:scale-125 transition-transform duration-200"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30" data-animate>
        <div
          className={`container mx-auto max-w-4xl transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform with AI?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how our AI solutions can revolutionize your business. Contact us today for a free AI
              consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {index === 0 ? (
                    <Mail className="w-6 h-6 text-primary" />
                  ) : index === 1 ? (
                    <Phone className="w-6 h-6 text-primary" />
                  ) : (
                    <MapPin className="w-6 h-6 text-primary" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {index === 0 ? "Email Us" : index === 1 ? "Call Us" : "Location"}
                </h3>
                <p className="text-muted-foreground">
                  {index === 0 ? "aixelence.creators@gmail.com" : index === 1 ? "+923468558793" : "Remote Worldwide"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              Start Your AI Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

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
                  <a href="#" className="hover:text-foreground transition-colors">
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

      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-border shadow-2xl transform animate-in slide-in-from-bottom-8 duration-500 ease-out"
            style={{
              background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)/30) 100%)",
            }}
          >
            <div className="relative p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                    {selectedService.icon && <selectedService.icon className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedService.title}</h3>
                    <p className="text-sm text-muted-foreground">Specialized AI Solutions</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    console.log("[v0] Closing popup")
                    setSelectedService(null)
                  }}
                  className="hover:bg-muted/50 rounded-full w-10 h-10 p-0 transition-all duration-200 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="overflow-y-auto max-h-[calc(85vh-140px)] custom-scrollbar">
              <div className="p-6 space-y-6">
                <div className="animate-in slide-in-from-left-4 duration-700 delay-100">
                  <p className="text-muted-foreground leading-relaxed text-base bg-muted/30 p-4 rounded-lg border border-border/30">
                    {selectedService.description}
                  </p>
                </div>
                <div className="animate-in slide-in-from-left-4 duration-700 delay-200">
                  <h4 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                    Our Specialized Services
                  </h4>
                  <div className="grid gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-in slide-in-from-right-4 duration-500"
                        style={{
                          animationDelay: `${300 + index * 100}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full mt-1.5 flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-200" />
                        <div className="flex-1">
                          <span className="text-foreground font-semibold text-sm leading-relaxed group-hover:text-primary transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="animate-in slide-in-from-bottom-4 duration-700 delay-500 pt-6 border-t border-border/30">
                  <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
                    <h5 className="font-semibold text-foreground mb-3 text-center">Ready to Get Started?</h5>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Transform your business with our {selectedService.title.toLowerCase()} solutions
                    </p>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Get Started with {selectedService.title}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
