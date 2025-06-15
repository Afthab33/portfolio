import { Code2, Brain, Database, Cloud, Workflow, Cpu } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);
  
  // Add fade-in animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'duration-700');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  const skillCategories = [
    {
      icon: <Code2 className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C/C++", "SQL", "HTML/CSS"]
    },
    {
      icon: <Brain className="h-4 w-4 md:h-5 md:w-5" />,
      title: "AI & ML",
      mobileTitle: "AI & ML",
      fullTitle: "AI & Machine Learning",
      skills: [
        "Scikit-Learn",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "LLMs & GenAI",
        "ML Model Deployment"
      ]
    },
    {
      icon: <Database className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Data",
      mobileTitle: "Data",
      fullTitle: "Data & Visualization",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Data Analysis",
        "Feature Engineering",
        "Visualization (Tableau, Plotly)"
      ]
    },
    {
      icon: <Workflow className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Web Dev",
      mobileTitle: "Web Dev",
      fullTitle: "Web & App Development",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Redux",
        "Angular",
        "Tailwind CSS",
        "Flask",
        "Firebase"
      ]
    },
    {
      icon: <Cloud className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Cloud",
      skills: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Docker",
        "CI/CD Pipelines",
        "REST APIs"
      ]
    },
    {
      icon: <Cpu className="h-4 w-4 md:h-5 md:w-5" />,
      title: "Specialized",
      mobileTitle: "Tools",
      fullTitle: "Specialized Tools & Tech",
      skills: [
        "Accessibility (WCAG)",
        "Speech Recognition",
        "ElevenLabs API",
        "YOLOv10",
        "Gemini Flash",
        "Computer Vision"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-8 md:py-10 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background border-b border-border/20"
      aria-labelledby="skills-heading"
    >
      {/* Background decoration - exact same as WhoopShowcase */}
      <div className="absolute top-0 left-1/2 w-[300px] h-[200px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <p className="text-primary font-medium uppercase tracking-wider text-xs md:text-sm mb-1 md:mb-2" aria-hidden="true">
            Skills
          </p>
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            Technical Expertise
          </h2>
        </div>
        
        {/* Horizontal scrollable category tabs for mobile */}
        <div 
          className="flex items-center justify-start md:justify-center gap-1.5 md:gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((category, index) => (
            <button
              key={index}
              id={`tab-${index}`}
              onClick={() => setActiveCategory(index)}
              className={`px-2.5 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2 transition-all whitespace-nowrap text-xs md:text-sm flex-shrink-0 ${
                activeCategory === index
                  ? 'bg-primary/10 text-primary font-medium border border-primary/20'
                  : 'bg-secondary/40 text-muted-foreground hover:bg-secondary'
              }`}
              role="tab"
              aria-selected={activeCategory === index}
              aria-controls={`tabpanel-${index}`}
            >
              {category.icon}
              <span className="md:hidden">{category.mobileTitle || category.title}</span>
              <span className="hidden md:inline">{category.fullTitle || category.title}</span>
            </button>
          ))}
        </div>
        
        {/* Skills display - more responsive grid */}
        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-primary/10 transition-all"
          role="tabpanel"
          id={`tabpanel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          <div className="bg-card p-4 md:p-6 h-full">
            <h3 className="sr-only">
              {skillCategories[activeCategory].fullTitle || skillCategories[activeCategory].title} Skills
            </h3>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-secondary/30 rounded-lg p-2 md:p-3 border border-border/30 hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/70" aria-hidden="true"></div>
                  <span className="text-xs md:text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}