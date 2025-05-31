import { Card, CardContent } from '../ui/card'
import { ArrowRight, Github, ExternalLink, Globe } from 'lucide-react'
import { Button } from '../ui/button'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../../data/projects' // Import the projects data

export function ProjectsSection() {
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
  
  return (
    <section 
      id="projects" 
      className="py-10 md:py-14 bg-secondary/5"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2" aria-hidden="true">
            Projects
          </p>
          <h2 
            id="projects-heading" 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4"
          >
            Live Projects Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            All projects are deployed and ready to explore
          </p>
        </div>
        
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Use data from projects.js */}
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              highlight={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, highlight = false }) {
  return (
    <Card 
      className={`overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-lg focus-within:shadow-lg focus-within:border-primary/50 ${
        highlight ? 'border-primary/30 shadow-md' : 'border-primary/10'
      } h-full flex flex-col max-w-full mx-auto w-full`}
    >
      {/* Clickable image area */}
      <a 
        href={project.demo || project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-32 sm:h-40 bg-muted overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset"
        aria-label={`View ${project.title} ${project.demo ? 'website' : 'project'}`}
      >
        <img 
          src={project.image} 
          alt={`Screenshot of ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" 
          loading="lazy"
        />
        
        {/* Overlay with preview text */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white font-medium px-3 py-1.5 text-xs sm:text-sm rounded-md border border-white/30 backdrop-blur-sm">
            {project.demo ? 'Visit Website' : 'View Project'}
          </div>
        </div>
        
        {/* Browser-like frame effect */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" aria-hidden="true">
          <div className="flex items-center gap-1.5 px-3 pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
        </div>
      </a>
      
      <CardContent className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2 flex items-center line-clamp-1">
          {project.title}
          {highlight && (
            <span className="ml-2 text-[10px] sm:text-xs bg-primary/20 text-primary px-1.5 sm:px-2 py-0.5 rounded-full font-medium shrink-0" aria-label="Featured project">
              Featured
            </span>
          )}
        </h3>
        
        <p className="text-[11px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 line-clamp-3 flex-1">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3" aria-label="Project technologies">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="text-[9px] sm:text-[10px] bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[9px] sm:text-[10px] text-muted-foreground px-1" aria-label={`And ${project.technologies.length - 4} more technologies`}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex gap-1.5 sm:gap-2 mt-auto">
          {project.demo && (
            <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs h-7 sm:h-8 px-2 sm:px-2.5 group flex-1" asChild>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website (opens in new tab)`}
              >
                <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" aria-hidden="true" />
                <span>Visit Site</span>
                <ExternalLink className="h-2 w-2 sm:h-2.5 sm:w-2.5 ml-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
              </a>
            </Button>
          )}
          
          {project.github && (
            <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs h-7 sm:h-8 px-2 sm:px-2.5 flex-1" asChild>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              >
                <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true" />
                <span>View Code</span>
              </a>
            </Button>
          )}
          
          {/* Add Learn More button */}
          <Button size="sm" className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs h-7 sm:h-8 px-2 sm:px-2.5 flex-1" asChild>
            <Link to={`/projects/${project.slug}`}>
              <span>Learn More</span>
              <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}