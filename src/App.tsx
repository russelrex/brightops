import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FeatureBand } from './components/FeatureBand'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ProcessSection } from './components/ProcessSection'
import { ServicesSection } from './components/ServicesSection'
import { TeamSection } from './components/TeamSection'
import { SideNav } from './components/SideNav'
import { TechStackSection } from './components/TechStackSection'
import { TopBar } from './components/TopBar'
import { WhySection } from './components/WhySection'

function App() {
  const [mode] = useState<'light' | 'dark'>('light')
  const [accent] = useState('#386152')

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    document.documentElement.style.setProperty('--accent', accent)
  }, [mode, accent])

  return (
    <div className="appB">
      <TopBar />
      <SideNav />
      <main className="appB__main">
        <Hero />
        <ServicesSection />
        <TechStackSection />
        <FeatureBand />
        <ProcessSection />
        <AboutSection />
        <TeamSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
