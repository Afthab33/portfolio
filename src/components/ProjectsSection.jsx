import { Card, CardContent } from './ui/card'
import { ArrowRight, Github, ExternalLink, Globe } from 'lucide-react'
import { Button } from './ui/button'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Live Projects Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All projects are deployed and ready to explore
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProjectCard 
            title="Project-H: AI-Powered Health Platform"
            description="Personalized health platform using React, Tailwind, Node.js, and OpenAI, helping users track fitness with 'Oats' AI coach and integrated biometric data analysis."
            tags={["React", "OpenAI", "Node.js", "Machine Learning"]}
            imageUrl="/public/projects/project-h/thumbnail.png"
            liveUrl="https://projhealth.com"
            githubUrl="https://github.com/Afthab33/project-h"
            highlight={true}
          />
          
          <ProjectCard 
            title="Poster Accessibility Evaluation Tool"
            description="Web app leveraging YOLOv10 and Gemini 1.5 Flash to assess academic posters for accessibility, providing actionable insights on WCAG compliance metrics."
            tags={["YOLOv10", "Gemini 1.5", "Accessibility", "WCAG"]}
            imageUrl="/public/projects/postera11y/thumbnail.png"
            liveUrl="https://poster-a11y.vercel.app"
            githubUrl="https://github.com/Afthab33/poster-a11y"
          />
          
          <ProjectCard 
            title="Speech Quest - Speech Learning Platform"
            description="Bilingual speech therapy app built with Angular and Firebase, featuring 7+ interactive games with speech recognition and audio feedback via ElevenLabs API."
            tags={["Angular", "Firebase", "ElevenLabs API", "Speech Recognition"]}
            imageUrl="/public/projects/speechapp/thumbnail.png"
            liveUrl="https://speechquest.vercel.app"
            githubUrl="https://github.com/Afthab33/speech-quest"
          />

          <ProjectCard 
            title="A11yGame - Accessibility Game Portal"
            description="Multi-game accessibility learning portal built with React and Firebase, used by 200+ UNT students to engage with accessibility concepts interactively."
            tags={["React", "Tailwind CSS", "Firebase", "Redux"]}
            imageUrl="/public/projects/a11ygame/thumbnail.png"
            liveUrl="https://a11ygamification.vercel.app"
            githubUrl="https://github.com/Afthab33/a11y-gamification"
          />
          
          <ProjectCard 
            title="AI Powered Diet Plan Generator"
            description="An OpenAI-powered web app that generates personalized diet plans based on user preferences and dietary restrictions."
            tags={["OpenAI", "Django", "Python", "React"]}
            imageUrl="/public/projects/dietapp/thumbnail.png"
            liveUrl="https://diet-plan-app-woad.vercel.app/"
            githubUrl="https://github.com/Afthab33/diet-plan-app"
          />

          <ProjectCard 
            title="Doctor Finder"
            description="Doctor Finder is a Next.js and Firebase-powered web app that connects patients with healthcare providers based on specialty, location, insurance, and more."
            tags={["JavaScript", "React", "Next.js", "Web Development"]}
            imageUrl="/public/projects/doctorfinder/thumbnail.png"
            liveUrl="https://capstone2024-five.vercel.app/"
            githubUrl="https://github.com/Afthab33/doctor-finder"
          />

          <ProjectCard 
            title="AetherLabs"
            description="AetherLabs is an innovation hub building open-source, accessible tech through research, projects, and education."
            tags={["Accessibility", "Open Source", "AI/ML", "Web Development"]}
            imageUrl="/public/projects/aetherlabs/thumbnail.png"
            liveUrl="https://aetherlabs.vercel.app/"
            githubUrl="https://github.com/Afthab33/aetherlabs"
          />

          <ProjectCard 
            title="Sleep & Lifestyle Insights"
            description="An interactive web dashboard that analyzes wearable and self-reported data to uncover how daily habits like caffeine, exercise, and stress impact sleep quality and energy levels."
            tags={["Data Visualization", "HealthTech", "Wearables", "D3.js"]}
            imageUrl="/public/projects/sleepinsights/thumbnail.png"
            liveUrl="https://sdv-project-website.vercel.app/"
            githubUrl="https://github.com/Afthab33/sleep-insights"
          />
          
          <ProjectCard 
            title="AI-Powered Phishing URL Classifier"
            description="Phishing detection system using supervised ML, analyzing 100K+ URLs with lexical and host-based features to achieve 98%+ model accuracy."
            tags={["Python", "Machine Learning", "Flask", "Cybersecurity"]}
            imageUrl="/public/projects/phishingwebsite/thumbnail.png"
            githubUrl="https://github.com/Afthab33/PhishBuster"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl, highlight = false }) {
  return (
    <Card className={`overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-lg ${highlight ? 'border-primary/30 shadow-md' : 'border-primary/10'} h-full flex flex-col max-w-sm mx-auto w-full`}>
      {/* Clickable image area - reduced height */}
      <a 
        href={liveUrl || githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-40 bg-muted overflow-hidden relative group"
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Overlay with preview text */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white font-medium px-3 py-1.5 text-sm rounded-md border border-white/30 backdrop-blur-sm">
            {liveUrl ? 'Visit Website' : 'View Project'}
          </div>
        </div>
        
        {/* Browser-like frame effect */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1.5 px-3 pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
        </div>
      </a>
      
      <CardContent className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-medium mb-2 flex items-center line-clamp-1">
          {title}
          {highlight && (
            <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium shrink-0">
              Featured
            </span>
          )}
        </h3>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-3 flex-1">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-[10px] text-muted-foreground px-1">+{tags.length - 4} more</span>
          )}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {liveUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs h-8 px-2.5 group flex-1" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="h-3 w-3 text-primary" />
                <span>Visit Site</span>
                <ExternalLink className="h-2.5 w-2.5 ml-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs h-8 px-2.5 flex-1" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3" />
                <span>View Code</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}