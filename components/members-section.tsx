"use client"

import { useState, useMemo } from "react"
import { membersData } from "@/lib/members-data"
import MemberCard from "./member-card"

export default function MembersSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAll, setShowAll] = useState(false)

  const filteredMembers = useMemo(() => {
    return membersData.filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  // Show featured members first, then others
  const displayMembers = showAll ? filteredMembers : filteredMembers.filter((m) => m.featured).slice(0, 4)

  const hasMoreMembers = !showAll && filteredMembers.length > 4

  return (
    <section id="members" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Meet Our Members</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {showAll
              ? `Connect with all ${membersData.length} brilliant minds from the 68th Batch CSE`
              : "Get to know four remarkable members from the 68th Batch CSE who are making waves"}
          </p>
        </div>

        {/* Search Bar */}
        {showAll && (
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-accent/60 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by name, role, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>
        )}

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayMembers.length > 0 ? (
            displayMembers.map((member) => <MemberCard key={member.id} member={member} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/60 text-lg">No members found matching your search.</p>
            </div>
          )}
        </div>

        {/* See More / Show Less Button */}
        {(hasMoreMembers || showAll) && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {showAll ? "Show Featured Members" : "See All Members"}
              <svg
                className={`w-5 h-5 transition-transform ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}

        {/* Stats */}
        {!showAll && (
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-dark rounded-xl p-6 text-center">
              <p className="text-accent text-3xl font-bold">{membersData.length}</p>
              <p className="text-foreground/70 mt-2">Total Members</p>
            </div>
            <div className="glass-dark rounded-xl p-6 text-center">
              <p className="text-accent text-3xl font-bold">
                {new Set(membersData.flatMap((m) => m.skills || [])).size}
              </p>
              <p className="text-foreground/70 mt-2">Unique Skills</p>
            </div>
            <div className="glass-dark rounded-xl p-6 text-center">
              <p className="text-accent text-3xl font-bold">Global</p>
              <p className="text-foreground/70 mt-2">Connected Worldwide</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
