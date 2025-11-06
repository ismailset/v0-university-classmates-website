"use client"

import { useState } from "react"
import { galleryData } from "@/lib/gallery-data"
import Image from "next/image"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = ["All", ...new Set(galleryData.map((img) => img.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryData : galleryData.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Memories & Achievements</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Relive the moments that define our journey together through photos and memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-card/50 text-foreground/70 hover:bg-card"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-64"
            >
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent text-sm font-semibold">{image.category}</p>
                <h3 className="text-foreground font-bold text-lg">{image.title}</h3>
                <p className="text-foreground/70 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[80vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>

            <Image
              src={galleryData.find((img) => img.id === selectedImage)?.image || ""}
              alt="Gallery view"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl"
            />

            <div className="mt-4 bg-card/50 p-4 rounded-xl glass-dark">
              <h3 className="text-lg font-bold text-foreground">
                {galleryData.find((img) => img.id === selectedImage)?.title}
              </h3>
              <p className="text-foreground/70 mt-2">
                {galleryData.find((img) => img.id === selectedImage)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
