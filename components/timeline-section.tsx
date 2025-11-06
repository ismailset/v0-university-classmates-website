"use client"

export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Started our journey",
      description: "Embarked on our CSE degree with high hopes and enthusiasm",
    },
    {
      year: "2021",
      title: "First major project",
      description: "Successfully completed our first semester group project",
    },
    {
      year: "2022",
      title: "Hackathon victory",
      description: "Won the inter-college hackathon with innovative solutions",
    },
    {
      year: "2024",
      title: "Graduation",
      description: "Celebrated our graduation and stepped into the tech world",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gradient text-center mb-16">Our Timeline</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                {/* Content */}
                <div className="w-1/2">
                  <div className="glass-dark p-6 rounded-xl ml-0 mr-8">
                    <p className="text-accent font-bold text-lg">{event.year}</p>
                    <h3 className="text-foreground font-bold text-xl mt-2">{event.title}</h3>
                    <p className="text-foreground/70 mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background absolute mt-6" />
                </div>

                {/* Empty space */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
