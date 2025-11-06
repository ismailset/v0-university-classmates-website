"use client"

import type React from "react"

import { useState } from "react"
import Button from "./button-custom"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get in Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions or want to share updates? Reach out to us and stay connected with your batch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-foreground font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="glass-dark rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-1">Email</h3>
                  <p className="text-foreground/70">contact@nub68batch.com</p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-1">Community</h3>
                  <p className="text-foreground/70">Join our Discord server for real-time chat</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Mail, label: "Email", href: "mailto:contact@nub68batch.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-dark p-4 rounded-lg hover:bg-primary/20 transition-all hover-glow"
                  >
                    <social.icon className="text-accent" size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
