import { useState } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectShowcase } from './components/ProjectShowcase'
import { YoutubeShowcase } from './components/YoutubeShowcase'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <ProjectShowcase />
          <ProjectsSection />
          <SkillsSection />
          <YoutubeShowcase />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App