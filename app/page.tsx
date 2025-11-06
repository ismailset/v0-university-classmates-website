import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MembersDirectory from "@/components/members-directory"
import MemoriesSection from "@/components/memories-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MembersDirectory />
      <MemoriesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
