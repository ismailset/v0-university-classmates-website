"use client"

import { useEffect, useState } from "react"
import Button from "./button-custom"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10 animate-pulse" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-6 glass-dark px-4 py-2 rounded-full">
            <span className="text-accent text-sm font-semibold">Welcome to Our Community</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Meet the NUB</span>
            <br />
            <span className="text-foreground">68th Batch CSE</span>
          </h1>

          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect, celebrate, and stay updated with your university classmates. A dedicated space for the 68th Batch
            Computer Science & Engineering alumni network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("members")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Members
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="glass-dark p-4 rounded-xl">
              <p className="text-accent text-3xl font-bold">68</p>
              <p className="text-foreground/60 text-sm">Batch Members</p>
            </div>
            <div className="glass-dark p-4 rounded-xl">
              <p className="text-accent text-3xl font-bold">CSE</p>
              <p className="text-foreground/60 text-sm">Department</p>
            </div>
            <div className="glass-dark p-4 rounded-xl">
              <p className="text-accent text-3xl font-bold">100%</p>
              <p className="text-foreground/60 text-sm">Connected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-accent" size={32} />
      </div>
    </section>
  )
}
