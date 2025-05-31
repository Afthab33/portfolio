import { Header } from './components/common/Header'
import { HeroSection } from './components/home/HeroSection'
import { ProjectShowcase } from './components/home/ProjectShowcase'
import { YoutubeShowcase } from './components/home/YoutubeShowcase'
import { ProjectsSection } from './components/home/ProjectsSection'
import { ExperienceSection } from './components/home/ExperienceSection'
import { SkillsSection } from './components/home/SkillsSection'
import { ContactSection } from './components/home/ContactSection'
import { Footer } from './components/common/Footer'
import { ThemeProvider } from './context/ThemeContext' // Fixed: import ThemeProvider, not ThemeContext

function App() {
  return (
    <ThemeProvider> {/* Fixed: use ThemeProvider, not ThemeChecker */}
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