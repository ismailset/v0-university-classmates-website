"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Our Batch</h2>

            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              The NUB 68th Batch CSE represents a cohort of passionate computer science engineers who've embarked on an
              incredible journey together. From late-night projects to breakthrough innovations, we've built lasting
              connections.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              This platform celebrates our collective achievements and serves as a hub to maintain the bonds we formed
              during our university years. Whether you're collaborating on new ventures or simply catching up, this is
              your space.
            </p>

            <div className="space-y-3">
              {["Founded in Spirit & Code", "Connected Across the Globe", "Driven by Innovation"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image/Stats */}
          <div className="glass-dark p-8 rounded-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-accent text-4xl font-bold mb-2">Year</p>
                <p className="text-foreground/70">68th Batch CSE</p>
              </div>

              <div>
                <p className="text-accent text-4xl font-bold mb-2">Members</p>
                <p className="text-foreground/70">Connected alumni worldwide</p>
              </div>

              <div>
                <p className="text-accent text-4xl font-bold mb-2">Years</p>
                <p className="text-foreground/70">Building relationships since graduation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
