import { Code2, Brain, Database, Cloud, Workflow, Cpu } from 'lucide-react'
import { useState } from 'react'

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const skillCategories = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C/C++", "SQL", "HTML/CSS"]
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI & Machine Learning",
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
      icon: <Database className="h-5 w-5" />,
      title: "Data & Visualization",
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
      icon: <Workflow className="h-5 w-5" />,
      title: "Web & App Development",
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
      icon: <Cloud className="h-5 w-5" />,
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
      icon: <Cpu className="h-5 w-5" />,
      title: "Specialized Tools & Tech",
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
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Skills</p>
          <h2 className="text-3xl font-semibold mb-4">Technical Expertise</h2>
        </div>
        
        {/* Horizontal category tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === index
                  ? 'bg-primary/10 text-primary font-medium border border-primary/20'
                  : 'bg-secondary/40 text-muted-foreground hover:bg-secondary'
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-primary/10 transition-all">
          <div className="bg-card p-6 h-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-secondary/30 rounded-lg p-3 border border-border/30 hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}