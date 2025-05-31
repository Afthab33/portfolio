import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/common/Header'
import { HeroSection } from './components/home/HeroSection'
import { ProjectShowcase } from './components/home/ProjectShowcase'
import { YoutubeShowcase } from './components/home/YoutubeShowcase'
import { ProjectsSection } from './components/home/ProjectsSection'
import { ExperienceSection } from './components/home/ExperienceSection'
import { SkillsSection } from './components/home/SkillsSection'
import { ContactSection } from './components/home/ContactSection'
import { Footer } from './components/common/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { ProjectDetail } from './pages/ProjectDetail'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <ProjectShowcase />
                  <ProjectsSection />
                  <SkillsSection />
                  <YoutubeShowcase />
                  <ContactSection />
                </>
              } />
              
              {/* Individual project pages */}
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App