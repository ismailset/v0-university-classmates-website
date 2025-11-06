"use client"

import { useState } from "react"
import { galleryData } from "@/lib/members-data"

export default function MemoriesSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = ["All", ...new Set(galleryData.map((img) => img.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryData : galleryData.filter((img) => img.category === activeCategory)

  return (
    <section id="memories" className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Memories & Achievements</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Relive the moments that define our journey together through photos, events, and memorable celebrations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30"
                  : "bg-card/50 text-foreground/70 hover:bg-card hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-72 bg-gradient-to-br from-primary/10 to-secondary/10"
            >
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{image.category}</p>
                <h3 className="text-foreground font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={galleryData.find((img) => img.id === selectedImage)?.image || ""}
              alt="Gallery view"
              className="w-full h-auto rounded-xl"
            />

            <div className="mt-4 bg-card/70 backdrop-blur p-6 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold text-foreground">
                {galleryData.find((img) => img.id === selectedImage)?.title}
              </h3>
              <p className="text-accent text-sm font-semibold mt-2">
                {galleryData.find((img) => img.id === selectedImage)?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
