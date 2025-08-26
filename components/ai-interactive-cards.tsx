"use client"

import type * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Bot, Code, Video, Smartphone, X } from "lucide-react"
import { ParticleButton } from "@/components/ui/particle-button"

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className={cn(
        "group/animated-card relative w-full max-w-[380px] overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-zinc-800/50 dark:bg-black/80",
        className,
      )}
      {...props}
    />
  )
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn("flex flex-col space-y-3 border-t border-zinc-200/30 p-6 dark:border-zinc-800/30", className)}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn("text-xl leading-none font-bold tracking-tight text-black dark:text-white", className)}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn("text-sm leading-relaxed text-neutral-600 dark:text-neutral-300", className)} {...props} />
}

export function CardVisual({ className, ...props }: CardProps) {
  return <div className={cn("h-[200px] w-full overflow-hidden", className)} {...props} />
}

// Shared Components
const EllipseGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg width="100%" height="200" viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(190 100) rotate(90) scale(100 190)"
          >
            <stop stopColor={color} stopOpacity="0.3" />
            <stop offset="0.4" stopColor={color} stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:24px_24px] bg-center opacity-60"
    />
  )
}

// AI Bot Visual
const AIBotVisual: React.FC = () => {
  const [hovered, setHovered] = useState(false)

  const botFeatures = [
    { id: 1, translateX: "100", translateY: "50", text: "WhatsApp", icon: "💬" },
    { id: 2, translateX: "100", translateY: "-50", text: "Telegram", icon: "✈" },
    { id: 3, translateX: "120", translateY: "0", text: "Discord", icon: "🎮" },
    { id: 4, translateX: "-120", translateY: "0", text: "Slack", icon: "💼" },
    { id: 5, translateX: "-100", translateY: "50", text: "Voice AI", icon: "🎤" },
    { id: 6, translateX: "-100", translateY: "-50", text: "Support", icon: "🤝" },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div
        className="relative h-[200px] w-full overflow-hidden rounded-t-2xl pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Central Bot */}
        <div className="absolute inset-0 z-[7] flex items-center justify-center">
          <div
            className={cn(
              "transition-all duration-700 ease-in-out",
              hovered ? "scale-125 rotate-12" : "scale-100 rotate-0",
            )}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Bot Features */}
        <div className="absolute inset-0 z-[8] flex items-center justify-center">
          {botFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                "absolute flex items-center justify-center gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80",
                hovered ? "opacity-100" : "opacity-0",
              )}
              style={{
                transform: hovered
                  ? `translate(${feature.translateX}px, ${feature.translateY}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-sm">{feature.icon}</span>
              <span className="text-xs font-medium text-black dark:text-white">{feature.text}</span>
            </div>
          ))}
        </div>

        <EllipseGradient color="#3b82f6" />
        <GridLayer color="#80808020" />
      </div>
    </>
  )
}

// RAG Visual
const RAGVisual: React.FC = () => {
  const [hovered, setHovered] = useState(false)

  const ragSteps = [
    { id: 1, x: 80, y: 60, icon: "📄", label: "Documents", color: "#10b981" },
    { id: 2, x: 160, y: 40, icon: "🔍", label: "Vector Search", color: "#3b82f6" },
    { id: 3, x: 240, y: 60, icon: "🧠", label: "AI Retrieval", color: "#8b5cf6" },
    { id: 4, x: 320, y: 80, icon: "✨", label: "Generation", color: "#f59e0b" },
  ]

  const vectorEmbeddings = [
    { x: 120, y: 100, size: 4, delay: 0 },
    { x: 140, y: 90, size: 3, delay: 100 },
    { x: 160, y: 110, size: 5, delay: 200 },
    { x: 180, y: 85, size: 4, delay: 300 },
    { x: 200, y: 105, size: 3, delay: 400 },
    { x: 220, y: 95, size: 4, delay: 500 },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div
        className="relative h-[200px] w-full overflow-hidden rounded-t-2xl pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Document Processing Animation */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-12 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg shadow-lg transition-all duration-700 ease-in-out",
                hovered ? "opacity-100" : "opacity-70",
              )}
              style={{
                left: `${60 + i * 15}px`,
                top: `${70 + i * -5}px`,
                transform: hovered ? `rotate(${i * 10}deg) scale(1.1)` : `rotate(${i * 5}deg) scale(1)`,
                zIndex: 10 + i,
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="p-1.5">
                <div className="w-full h-0.5 bg-white/40 rounded mb-1" />
                <div className="w-3/4 h-0.5 bg-white/40 rounded mb-1" />
                <div className="w-1/2 h-0.5 bg-white/40 rounded mb-1" />
                <div className="w-2/3 h-0.5 bg-white/40 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Vector Embeddings Animation */}
        <div className="absolute inset-0 z-[7] flex items-center justify-center">
          {vectorEmbeddings.map((embedding, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-in-out",
                hovered ? "opacity-80 animate-pulse" : "opacity-0",
              )}
              style={{
                left: `${embedding.x}px`,
                top: `${embedding.y}px`,
                width: `${embedding.size * 2}px`,
                height: `${embedding.size * 2}px`,
                transform: hovered ? "scale(1.5)" : "scale(0.5)",
                transitionDelay: `${embedding.delay}ms`,
              }}
            />
          ))}
        </div>

        {/* RAG Workflow Steps */}
        <div className="absolute inset-0 z-[8] flex items-center justify-center">
          {ragSteps.map((step, i) => (
            <div
              key={step.id}
              className={cn(
                "absolute flex flex-col items-center transition-all duration-700 ease-in-out",
                hovered ? "scale-110" : "scale-100",
              )}
              style={{
                left: `${step.x}px`,
                top: `${step.y}px`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Step Icon */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 transition-all duration-500",
                  hovered && "animate-bounce shadow-xl",
                )}
                style={{
                  backgroundColor: step.color,
                  boxShadow: hovered ? `0 0 15px ${step.color}40` : undefined,
                  animationDelay: `${i * 200}ms`,
                }}
              >
                <span className="text-xs">{step.icon}</span>
              </div>

              {/* Step Label with 0.1s delay */}
              <div
                className={cn(
                  "mt-1 px-2 py-0.5 bg-white/95 rounded-full text-xs font-medium text-gray-700 shadow-sm transition-all duration-500 whitespace-nowrap",
                  hovered ? "opacity-100 scale-100" : "opacity-0 scale-75",
                )}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Flow Lines */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 380 200">
            {/* Flow connections between steps */}
            <path
              d="M80,60 Q120,50 160,40"
              stroke={hovered ? "#10b981" : "#d1d5db"}
              strokeWidth={hovered ? "2" : "1"}
              fill="none"
              className="transition-all duration-500"
              opacity={hovered ? 0.8 : 0.3}
            />
            <path
              d="M160,40 Q200,50 240,60"
              stroke={hovered ? "#3b82f6" : "#d1d5db"}
              strokeWidth={hovered ? "2" : "1"}
              fill="none"
              className="transition-all duration-500"
              opacity={hovered ? 0.8 : 0.3}
            />
            <path
              d="M240,60 Q280,70 320,80"
              stroke={hovered ? "#8b5cf6" : "#d1d5db"}
              strokeWidth={hovered ? "2" : "1"}
              fill="none"
              className="transition-all duration-500"
              opacity={hovered ? 0.8 : 0.3}
            />

            {/* Animated data flow particles */}
            {hovered && (
              <>
                <circle r="2" fill="#10b981" className="opacity-80">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#flow1" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="#3b82f6" className="opacity-80">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                    <mpath href="#flow2" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="#8b5cf6" className="opacity-80">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                    <mpath href="#flow3" />
                  </animateMotion>
                </circle>
              </>
            )}

            {/* Hidden paths for animation */}
            <path id="flow1" d="M80,60 Q120,50 160,40" stroke="none" fill="none" opacity="0" />
            <path id="flow2" d="M160,40 Q200,50 240,60" stroke="none" fill="none" opacity="0" />
            <path id="flow3" d="M240,60 Q280,70 320,80" stroke="none" fill="none" opacity="0" />
          </svg>
        </div>

        {/* Background Knowledge Pattern */}
        <div className="absolute inset-0 z-[5]">
          {hovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
          )}
        </div>

        <EllipseGradient color="#10b981" />
        <GridLayer color="#80808020" />
      </div>
    </>
  )
}

// Automation Visual
const AutomationVisual: React.FC = () => {
  const [hovered, setHovered] = useState(false)

  const workflowNodes = [
    { id: 1, x: 60, y: 100, type: "trigger", color: "#10b981", icon: "⚡", label: "Trigger" },
    { id: 2, x: 140, y: 80, type: "condition", color: "#f59e0b", icon: "❓", label: "Filter" },
    { id: 3, x: 140, y: 120, type: "action", color: "#3b82f6", icon: "⚙", label: "Process" },
    { id: 4, x: 220, y: 70, type: "action", color: "#8b5cf6", icon: "📧", label: "Email" },
    { id: 5, x: 220, y: 110, type: "action", color: "#ef4444", icon: "💾", label: "Save" },
    { id: 6, x: 220, y: 150, type: "webhook", color: "#06b6d4", icon: "🔗", label: "API" },
    { id: 7, x: 300, y: 100, type: "output", color: "#84cc16", icon: "✅", label: "Done" },
  ]

  const connections = [
    { from: 1, to: 2, path: "M60,100 L140,80" },
    { from: 1, to: 3, path: "M60,100 L140,120" },
    { from: 2, to: 4, path: "M140,80 L220,70" },
    { from: 3, to: 5, path: "M140,120 L220,110" },
    { from: 3, to: 6, path: "M140,120 L220,150" },
    { from: 4, to: 7, path: "M220,70 Q260,85 300,100" },
    { from: 5, to: 7, path: "M220,110 L300,100" },
    { from: 6, to: 7, path: "M220,150 Q260,125 300,100" },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div
        className="relative h-[200px] w-full overflow-hidden rounded-t-2xl pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Workflow Connections */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 380 200">
            {connections.map((connection, i) => (
              <g key={i}>
                {/* Connection Line */}
                <path
                  d={connection.path}
                  stroke={hovered ? "#f59e0b" : "#d1d5db"}
                  strokeWidth={hovered ? "2" : "1.5"}
                  fill="none"
                  className="transition-all duration-500"
                  opacity={hovered ? 0.8 : 0.4}
                />
                {/* Animated Data Flow Dots */}
                {hovered && (
                  <circle r="3" fill="#f59e0b" className="opacity-80">
                    <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`}>
                      <mpath href={`#path-${i}`} />
                    </animateMotion>
                  </circle>
                )}
                {/* Hidden path for animation */}
                <path id={`path-${i}`} d={connection.path} stroke="none" fill="none" opacity="0" />
              </g>
            ))}
          </svg>
        </div>

        {/* Workflow Nodes */}
        <div className="absolute inset-0 z-[7] flex items-center justify-center">
          {workflowNodes.map((node, i) => (
            <div
              key={node.id}
              className={cn(
                "absolute flex flex-col items-center transition-all duration-700 ease-in-out",
                hovered ? "scale-110" : "scale-100",
              )}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Node Circle */}
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 transition-all duration-500",
                  hovered && "animate-pulse shadow-xl",
                )}
                style={{
                  backgroundColor: node.color,
                  boxShadow: hovered ? `0 0 20px ${node.color}40` : undefined,
                }}
              >
                <span className="text-white text-sm font-bold">{node.icon}</span>
              </div>

              {/* Node Label */}
              <div
                className={cn(
                  "mt-1 px-2 py-0.5 bg-white/95 rounded-full text-xs font-medium text-gray-700 shadow-sm transition-all duration-500 whitespace-nowrap",
                  hovered ? "opacity-100 scale-100" : "opacity-0 scale-75",
                )}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {node.label}
              </div>
            </div>
          ))}
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 z-[5]">
          {hovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse" />
          )}
        </div>

        <EllipseGradient color="#f59e0b" />
        <GridLayer color="#80808020" />
      </div>
    </>
  )
}

// Industry AI Visual
const IndustryAIVisual: React.FC = () => {
  const [hovered, setHovered] = useState(false)

  const industries = [
    { icon: "🏥", label: "Healthcare", angle: 0 },
    { icon: "🏦", label: "Finance", angle: 60 },
    { icon: "🏪", label: "Retail", angle: 120 },
    { icon: "⚖", label: "Legal", angle: 180 },
    { icon: "🏠", label: "Real Estate", angle: 240 },
    { icon: "🎓", label: "Education", angle: 300 },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div
        className="relative h-[200px] w-full overflow-hidden rounded-t-2xl pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Industry Icons */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          {industries.map((industry, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 border-2 border-purple-200",
                hovered ? "scale-110" : "scale-100",
              )}
              style={{
                transform: hovered
                  ? `rotate(${industry.angle}deg) translateX(80px) rotate(-${industry.angle}deg)`
                  : `rotate(${industry.angle}deg) translateX(60px) rotate(-${industry.angle}deg)`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span className="text-lg">{industry.icon}</span>
            </div>
          ))}
        </div>

        {/* Central AI Icon */}
        <div className="absolute inset-0 z-[7] flex items-center justify-center">
          <div
            className={cn(
              "w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-700",
              hovered ? "scale-125 rotate-180" : "scale-100 rotate-0",
            )}
          >
            <Smartphone className="w-10 h-10 text-white" />
          </div>
        </div>

        <EllipseGradient color="#8b5cf6" />
        <GridLayer color="#80808020" />
      </div>
    </>
  )
}

// Main Component
export default function AIInteractiveCards({ onLearnMore }: { onLearnMore?: (service: any) => void }) {
  const [selectedService, setSelectedService] = useState<any>(null)

  const services = [
    {
      visual: <AIBotVisual />,
      title: "AI Bots & Assistants",
      description:
        "Intelligent conversational AI solutions for customer support, business automation, and user engagement across multiple platforms.",
      features: [
        "Conversational AI Development",
        "Multi-Platform Customer Support Bots",
        "Voice AI Integration & Processing",
        "Business Process Automation",
        "Custom Bot Training & Deployment",
      ],
      modalTitle: "AI Bots & Assistants Solutions",
      icon: Bot,
    },
    {
      visual: <RAGVisual />,
      title: "RAG Solutions",
      description:
        "Advanced Retrieval-Augmented Generation systems that provide intelligent document search and knowledge base assistance.",
      features: [
        "Intelligent Document Processing",
        "Advanced Knowledge Base Systems",
        "Context-Aware Q&A Solutions",
        "Real-time Information Retrieval",
        "Custom RAG Implementation",
      ],
      modalTitle: "RAG Solutions & Services",
      icon: Code,
    },
    {
      visual: <AutomationVisual />,
      title: "AI + Automation",
      description:
        "Seamless integration of AI with workflow automation tools like n8n to streamline business processes and enhance productivity.",
      features: [
        "Intelligent Workflow Automation",
        "AI-Powered Process Optimization",
        "Advanced Data Analytics & Insights",
        "Predictive Business Intelligence",
        "Custom Integration Solutions",
      ],
      modalTitle: "AI + Automation Services",
      icon: Video,
    },
    {
      visual: <IndustryAIVisual />,
      title: "Specialized Industry AI",
      description:
        "Custom AI solutions tailored for specific industries, delivering targeted functionality and domain expertise.",
      features: [
        "Healthcare AI Solutions",
        "Financial Services AI",
        "Manufacturing Intelligence",
        "E-commerce Optimization",
        "Custom Industry Applications",
      ],
      modalTitle: "Specialized Industry AI",
      icon: Smartphone,
    },
  ]

  const handleLearnMore = (service: any) => {
    console.log("[v0] Learn More clicked for service:", service.title)
    setSelectedService(service)
  }

  const closeModal = () => {
    console.log("[v0] Modal closed")
    setSelectedService(null)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {services.map((service, index) => (
          <AnimatedCard key={index}>
            <CardVisual>{service.visual}</CardVisual>
            <CardBody>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <div className="mt-4 relative z-30">
                <ParticleButton
                  onClick={() => handleLearnMore(service)}
                  variant="default"
                  size="sm"
                  className="text-sm font-medium pointer-events-auto"
                  successDuration={800}
                >
                  Learn More
                </ParticleButton>
              </div>
            </CardBody>
          </AnimatedCard>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Semi-transparent dark background with blur */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in-0 duration-500"
            onClick={closeModal}
          />

          {/* Modal content with enhanced animations */}
          <div className="relative w-full max-w-lg mx-4 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl animate-in slide-in-from-bottom-12 duration-700 ease-out border border-gray-200/50">
            {/* Close button with hover effects */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-red-100 hover:scale-110 transition-all duration-300 z-10 backdrop-blur-sm border border-gray-200/50"
            >
              <X className="w-5 h-5 text-gray-600 hover:text-red-600 transition-colors" />
            </button>

            {/* Modal content with enhanced styling */}
            <div className="p-10">
              {/* Modal heading with gradient text */}
              <div className="mb-8 pr-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {selectedService.modalTitle}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-in slide-in-from-left-4 duration-500 delay-300" />
              </div>

              {/* Enhanced sub-services list with staggered sliding animations */}
              <div className="space-y-5">
                {selectedService.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-left-8 fade-in-0"
                    style={{
                      animationDelay: `${index * 150 + 400}ms`,
                      animationDuration: "600ms",
                    }}
                  >
                    {/* Enhanced bullet point with gradient */}
                    <div
                      className="w-3 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mt-2 flex-shrink-0 shadow-lg animate-pulse"
                      style={{ animationDelay: `${index * 150 + 800}ms` }}
                    />

                    {/* Feature text with enhanced typography */}
                    <span className="text-gray-800 font-semibold leading-relaxed text-lg tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-t-3xl animate-in slide-in-from-top-4 duration-700 delay-200" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
