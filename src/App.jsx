import { useState } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectShowcase } from './components/ProjectShowcase'
import { YoutubeShowcase } from './components/YoutubeShowcase'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-primary/10 to-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <Header />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <ProjectsSection />
        <SkillsSection />
        <YoutubeShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App