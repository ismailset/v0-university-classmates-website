import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export default function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 hover-glow"

  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-accent-foreground hover:shadow-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-80",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
