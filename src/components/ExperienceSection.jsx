import { Badge } from './ui/badge'
import { CalendarIcon, MapPinIcon, ChevronRightIcon, Briefcase } from 'lucide-react'
import { useState } from 'react'

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "University of North Texas",
      location: "Denton, TX",
      period: "January 2025 – Present",
      description: [
        "Mentored 60+ students across 10+ teams, guiding them through Agile sprints and the full Software Development Life Cycle (SDLC).",
        "Evaluated 100+ assignments and projects, delivering feedback to improve code quality and design.",
        "Led 8–10 weekly support sessions, boosting sprint velocity and improving on-time milestone completion by 25%."
      ],
      skills: ["Agile", "SDLC", "Mentoring", "Code Review"]
    },
    {
      title: "Research Assistant",
      company: "University of North Texas",
      location: "Denton, TX",
      period: "August 2024 – December 2024",
      description: [
        "Researched accessibility challenges by analyzing 100K+ mobile app reviews from Play Store and Reddit.",
        "Used Large Language Models (LLMs) to classify reviews into key accessibility-related categories.",
        "Contributed structured datasets and insights to support AI-driven inclusive design solutions."
      ],
      skills: ["AI Ethics", "LLMs", "Data Analysis", "Accessibility"]
    },
    {
      title: "Software Developer Intern",
      company: "CrimsonLogic",
      location: "Hyderabad, India",
      period: "January 2023 – June 2023",
      description: [
        "Contributed to e-government licensing portals by building scalable backend services and 20+ dynamic e-form modules using Java and Spring, streamlining application workflows.",
        "Improved frontend form validations and UI components, reducing user input errors by 30% and improving submission success rates."
      ],
      skills: ["Java", "Spring", "UI/UX", "E-Government"]
    }
  ];

  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Experience</p>
          <h2 className="text-3xl font-semibold mb-4">Professional Journey</h2>
        </div>

        {/* Horizontal role tabs - styled like skills section */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeTab === index
                  ? 'bg-primary/10 text-primary font-medium border border-primary/20'
                  : 'bg-secondary/40 text-muted-foreground hover:bg-secondary'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              {exp.title}
            </button>
          ))}
        </div>

        {/* Experience Card - styled like skills card */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-primary/10 transition-all">
          <div className="bg-card p-6 h-full">
            {/* Company and location header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border/30">
              <div>
                <h3 className="text-xl font-medium flex items-center">
                  {experiences[activeTab].company}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                    {experiences[activeTab].period}
                  </div>
                  
                  <div className="flex items-center">
                    <MapPinIcon className="mr-1.5 h-3.5 w-3.5" />
                    {experiences[activeTab].location}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {experiences[activeTab].skills.map((skill, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Achievements grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {experiences[activeTab].description.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 bg-secondary/30 rounded-lg p-3 border border-border/30 hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/70 mt-2"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}