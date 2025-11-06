"use client"

import { membersData } from "@/lib/members-data"

export default function MembersDirectory() {
  return (
    <section id="members" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Meet the 68th Batch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Twelve unique personalities, countless memories, and one incredible batch. Here's who makes up the NUB 68th
            Batch CSE.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersData.map((member) => (
            <div
              key={member.id}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              {member.photo && (
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-3">{member.description}</p>
                <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
                  {member.description.includes("-")
                    ? member.description.split("-")[1].trim()
                    : "A valued member of the 68th Batch"}
                </p>

                {/* Social Links */}
                {member.socials?.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 text-primary hover:text-accent font-semibold rounded-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H16V2.169c-.585-.089-1.308-.169-2.227-.169-2.753 0-4.772 1.236-4.772 4.532V8z" />
                    </svg>
                    Facebook
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
