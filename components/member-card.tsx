"use client"

import type { Member } from "@/lib/members-data"

interface MemberCardProps {
  member: Member
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="group glass-dark rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div
          className="aspect-square bg-cover bg-center bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
          style={member.photo ? { backgroundImage: `url('${member.photo}')` } : {}}
        >
          {!member.photo && <span className="text-foreground/40 text-6xl font-bold">{member.name.charAt(0)}</span>}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
          <p className="text-accent text-sm font-semibold">{member.description}</p>
        </div>

        {/* Skills */}
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {member.skills.slice(0, 2).map((skill) => (
              <span key={skill} className="bg-primary/20 text-accent text-xs px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Social Links */}
        {member.socials && member.socials.facebook && member.socials.facebook !== "" && (
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary/20 hover:bg-primary/30 text-accent rounded-lg transition-colors text-sm font-medium"
              title="Connect on Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            {member.socials.linkedin && member.socials.linkedin !== "#" && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="Connect on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.898-1.597 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.953.77-1.707 1.96-1.707 1.188 0 1.914.754 1.939 1.707 0 .948-.751 1.706-1.984 1.706zm1.946 11.597H3.392V9.724h3.891v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            )}
            {member.socials.github && member.socials.github !== "#" && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="Connect on GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {member.socials.twitter && member.socials.twitter !== "#" && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="Connect on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-9.51V3.5a10 10 0 001.34 5.68l-8.02 8.02a14.95 14.95 0 01-2.123-1.422l4.853-4.85zM9.5 18L3.77 12.27M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
