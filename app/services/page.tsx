"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  BookOpen,
  Workflow,
  Building,
  ArrowRight,
  MessageSquare,
  Phone,
  Users,
  Calendar,
  Mic,
  FileText,
  Search,
  Shield,
  TrendingUp,
  Mail,
  Share2,
  BarChart3,
  Filter,
  FileCheck,
  ShoppingCart,
  Scale,
  HomeIcon,
  Heart,
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: ShoppingCart },
  { name: "About", url: "/about", icon: User },
  { name: "Contact", url: "#contact", icon: MessageCircle },
]

const servicesData = [
  {
    id: "ai-bots",
    title: "AI Bots & Assistants",
    icon: Bot,
    description:
      "Intelligent conversational AI solutions for customer support, business automation, and user engagement across multiple platforms.",
    gradient: "from-blue-500 to-purple-600",
    services: [
      { name: "Customer Support Chatbots", icon: MessageSquare },
      { name: "WhatsApp Business Bots", icon: Phone },
      { name: "Telegram Role-based Bots", icon: Users },
      { name: "Slack HR Assistant Bots", icon: Users },
      { name: "Discord Community Manager Bots", icon: Users },
      { name: "Appointment & Booking Assistants", icon: Calendar },
      { name: "Lead Qualification Bots", icon: TrendingUp },
      { name: "Voice AI Call Assistants", icon: Mic },
      { name: "Employee & HR Support Bots", icon: Users },
    ],
  },
  {
    id: "rag-solutions",
    title: "RAG (Retrieval-Augmented Generation) Solutions",
    icon: BookOpen,
    description:
      "Advanced Retrieval-Augmented Generation systems that provide intelligent document search and knowledge base assistance.",
    gradient: "from-green-500 to-teal-600",
    services: [
      { name: "Company Knowledge Base Assistants", icon: FileText },
      { name: "Legal Document Q&A Systems", icon: Scale },
      { name: "Healthcare & Medical Research Assistants", icon: Heart },
      { name: "E-Learning Tutor & Course Q&A Bots", icon: BookOpen },
      { name: "Code Documentation Search Assistants", icon: Search },
      { name: "Policy & Compliance Checkers", icon: Shield },
      { name: "Financial Report Analyzers", icon: BarChart3 },
      { name: "Academic Paper Summarizers", icon: FileText },
      { name: "AI-Powered Document Search & Q&A", icon: Search },
    ],
  },
  {
    id: "ai-automation",
    title: "AI + Automation (n8n / Workflow Integration)",
    icon: Workflow,
    description:
      "Intelligent workflow automation that combines AI capabilities with business process optimization for maximum efficiency.",
    gradient: "from-orange-500 to-red-600",
    services: [
      { name: "AI Email Auto-Responders & Summarizers", icon: Mail },
      { name: "Social Media Content Generation & Scheduling", icon: Share2 },
      { name: "AI-based Sentiment Analysis for Customer Feedback", icon: BarChart3 },
      { name: "AI-powered Ticket Routing Systems", icon: Filter },
      { name: "Automated Resume Screening & Shortlisting", icon: FileCheck },
      { name: "YouTube Transcript Summarizers", icon: FileText },
      { name: "CRM Data Enrichment with AI", icon: TrendingUp },
      { name: "Multi-channel Marketing Workflows", icon: Share2 },
      { name: "Intelligent Email Responders", icon: Mail },
      { name: "Customer Feedback & Analytics Automation", icon: BarChart3 },
    ],
  },
  {
    id: "industry-ai",
    title: "Specialized Industry AI Solutions",
    icon: Building,
    description:
      "Tailored AI solutions designed for specific industries, delivering targeted functionality and specialized expertise.",
    gradient: "from-purple-500 to-pink-600",
    services: [
      { name: "Personalized Shopping Assistants (Retail & E-commerce)", icon: ShoppingCart },
      { name: "Financial Data & Report Analyzers (Banking & Finance)", icon: BarChart3 },
      { name: "Legal Case Research Assistants (Law Firms)", icon: Scale },
      { name: "Real Estate Lead & Property Query Bots", icon: HomeIcon },
      { name: "Healthcare Symptom Checker & Virtual Assistants", icon: Heart },
    ],
  },
]

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
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

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-background via-background to-muted/50 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge variant="secondary" className="mb-4 animate-fade-in-up">
            Comprehensive AI Services Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Our
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
              {" "}
              AI Solutions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Discover our complete range of AI services designed to transform your business operations. From intelligent
            chatbots to advanced automation systems, we deliver cutting-edge solutions tailored to your industry needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12">
            {servicesData.map((category, categoryIndex) => (
              <div
                key={category.id}
                id={category.id}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[category.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div
                    className={`inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r ${category.gradient} text-white shadow-2xl mb-6 transform hover:scale-105 transition-all duration-300`}
                  >
                    <category.icon className="w-12 h-12" />
                    <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                      <p className="text-white/90 text-sm mt-1">Specialized AI Solutions</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className={`group border-border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-muted/30 animate-in slide-in-from-bottom-4`}
                      style={{
                        animationDelay: `${categoryIndex * 200 + serviceIndex * 100}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                              {service.name}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Category CTA */}
                <div className="text-center mt-12">
                  <Card className="inline-block p-8 bg-gradient-to-r from-muted/50 to-transparent border-primary/20">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-foreground mb-3">Ready to implement {category.title}?</h3>
                      <p className="text-muted-foreground mb-6">Get started with our specialized AI solutions today</p>
                      <Button
                        className={`bg-gradient-to-r ${category.gradient} hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive AI services or let us create a custom solution tailored to your specific
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
