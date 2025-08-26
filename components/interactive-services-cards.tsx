"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, X, Bot, Code, Video, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AnimatedCard,
  CardBody,
  CardTitle,
  CardDescription,
  GridLayer,
  type VisualProps,
  CardVisual,
} from "./ui/animated-card"

// 1. AI Bots Assistants Visual
const AIBotsVisual: React.FC<VisualProps> = ({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl flex items-center justify-center bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-950/20 dark:to-amber-950/20">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-10 w-10 rounded-full bg-white/70 flex items-center justify-center transition-transform duration-700 backdrop-blur-sm shadow-md"
            style={{
              transform: hovered
                ? `rotate(${i * 90}deg) translate(100px) rotate(-${i * 90}deg)`
                : "rotate(0deg) translate(0) rotate(0deg)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <span className="text-lg">{["💬", "📊", "⚡", "🔎"][i]}</span>
          </div>
        ))}
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// 2. RAG Solutions Visual
const RAGVisual: React.FC<VisualProps> = ({
  mainColor = "#06b6d4",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)
  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-950/20 dark:to-purple-950/20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-72 h-6 ${i % 2 ? "bg-cyan-400/40" : "bg-purple-400/40"} rounded-md transition-all duration-700 shadow-sm`}
            style={{
              top: `${70 + i * 30}px`,
              left: hovered ? `${20 + i * 15}px` : "0px",
              transform: hovered ? "scaleX(1)" : "scaleX(0.6)",
              transitionDelay: `${i * 150}ms`,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 dark:bg-black/60 rounded-full p-4 shadow-lg">
            <span className="text-2xl">📄</span>
          </div>
        </div>
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// 3. AI + Automation Visual
const AutomationVisual: React.FC<VisualProps> = ({
  mainColor = "#f59e0b",
  secondaryColor = "#ef4444",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl flex items-center justify-center bg-gradient-to-br from-amber-50 to-red-50 dark:from-amber-950/20 dark:to-red-950/20">
        <div
          className={`h-20 w-20 border-4 border-yellow-400 rounded-full flex items-center justify-center transition-transform duration-700 bg-white/80 dark:bg-black/60 shadow-lg ${hovered ? "rotate-180" : "rotate-0"}`}
        >
          <span className="text-2xl">⚙</span>
        </div>
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// 4. Specialized Industry AI Visual
const IndustryAIVisual: React.FC<VisualProps> = ({
  mainColor = "#10b981",
  secondaryColor = "#3b82f6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  const industries = ["🏥", "🏭", "🏦", "🚗"]

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20">
        <div className="relative h-24 w-24 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center shadow-lg">
          <span className="text-2xl">🤝</span>
        </div>
        {industries.map((icon, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-white/70 backdrop-blur-sm transition-transform duration-700 shadow-md"
            style={{
              transform: hovered
                ? `rotate(${i * 90}deg) translate(120px) rotate(-${i * 90}deg)`
                : "rotate(0deg) translate(0)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <span className="text-xl">{icon}</span>
          </div>
        ))}
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Main Component
export default function InteractiveServicesCards() {
  const [selectedService, setSelectedService] = useState(null)

  const cards = [
    {
      visual: <AIBotsVisual />,
      title: "AI Bots & Assistants",
      description:
        "Intelligent conversational AI solutions for customer support, business automation, and user engagement across multiple platforms.",
      icon: Bot,
      features: [
        "Customer Support Chatbots",
        "WhatsApp Business Bots",
        "Telegram Role-based Bots",
        "Slack HR Assistant Bots",
        "Discord Community Manager Bots",
        "Appointment & Booking Assistants",
        "Lead Qualification Bots",
        "Voice AI Call Assistants",
        "Employee & HR Support Bots",
      ],
    },
    {
      visual: <RAGVisual />,
      title: "RAG Solutions",
      description:
        "Retrieval-Augmented Generation systems that combine your knowledge base with AI to provide accurate, contextual responses.",
      icon: Code,
      features: [
        "Company Knowledge Base Assistants",
        "Legal Document Q&A Systems",
        "Healthcare & Medical Research Assistants",
        "E-Learning Tutor & Course Q&A Bots",
        "Code Documentation Search Assistants",
        "Policy & Compliance Checkers",
        "Financial Report Analyzers",
        "Academic Paper Summarizers",
        "AI-Powered Document Search & Q&A",
      ],
    },
    {
      visual: <AutomationVisual />,
      title: "AI + Automation",
      description:
        "Streamline workflows with intelligent automation that learns, adapts, and optimizes your business processes.",
      icon: Video,
      features: [
        "AI Email Auto-Responders & Summarizers",
        "Social Media Content Generation & Scheduling",
        "AI-based Sentiment Analysis for Customer Feedback",
        "AI-powered Ticket Routing Systems",
        "Automated Resume Screening & Shortlisting",
        "YouTube Transcript Summarizers",
        "CRM Data Enrichment with AI",
        "Multi-channel Marketing Workflows",
        "Intelligent Email Responders",
        "Customer Feedback & Analytics Automation",
      ],
    },
    {
      visual: <IndustryAIVisual />,
      title: "Industry-Specific AI",
      description:
        "Tailored AI solutions for healthcare, finance, manufacturing, and retail with specialized models and compliance.",
      icon: Smartphone,
      features: [
        "Personalized Shopping Assistants (Retail & E-commerce)",
        "Financial Data & Report Analyzers (Banking & Finance)",
        "Legal Case Research Assistants (Law Firms)",
        "Real Estate Lead & Property Query Bots",
        "Healthcare Symptom Checker & Virtual Assistants",
        "Education-focused AI Tutors & Test Generators",
      ],
    },
  ]

  const handleLearnMore = (service) => {
    console.log("[v0] Learn More clicked for service:", service.title)
    setSelectedService(service)
  }

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 place-items-center">
          {cards.map((card, index) => (
            <AnimatedCard key={index} className="w-full max-w-md">
              <CardVisual>{card.visual}</CardVisual>
              <CardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <button
                  onClick={() => handleLearnMore(card)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardBody>
            </AnimatedCard>
          ))}
        </div>
      </div>

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
