import { Button } from './ui/button'
import { useEffect, useRef, useState } from 'react'
import { ImageOff, Github, Twitter, Linkedin, ExternalLink, Compass } from 'lucide-react'

export function HeroSection() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1ZzsEtDdGER8rRoCCX9zFI3qQSAgfj50z/view?usp=sharing";
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-right', 'duration-700');
        }
      });
    });
    
    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom', 'duration-700');
        }
      });
    });
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }
    
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background elements - simplified but effective */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-center">
          {/* Content Section */}
          <div ref={contentRef} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary mb-5">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              AI Product Engineer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
              Building a <span className="relative inline-block">
                smarter world
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-lg -z-10"></span>
              </span> with <span className="text-primary">Human-Centered AI</span>
            </h1>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-5 max-w-2xl">
              I'm an AI Full-Stack Developer and Product Engineer, founder of 
              <a 
                href="https://projhealth.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative inline-flex items-center font-medium text-primary mx-1.5 group"
              >
                <span className="border-b border-primary/30 group-hover:border-primary transition-colors">Project-H</span>
                <ExternalLink className="h-3 w-3 ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              building intelligent, user-focused products that bridge software, data, and behavior.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-7 max-w-2xl">
              With experience mentoring 120+ students and delivering full-stack AI solutions, I share my journey through 
              <a 
                href="https://www.youtube.com/@Aftab_Hussain33" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative inline-flex items-center font-medium text-primary mx-1.5 group"
              >
                <span className="border-b border-primary/30 group-hover:border-primary transition-colors">YouTube</span>
                <ExternalLink className="h-3 w-3 ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              videos and podcasts.
            </p>
            
            {/* Buttons with improved spacing */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="outline" className="flex gap-2 items-center border-primary/20 hover:bg-primary/5 group" asChild>
                <a href="#projects" className="px-5">
                  <Compass className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-300" />
                  <span className="text-primary ml-1">Explore Projects</span>
                </a>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 group px-5" asChild>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>

            {/* Social media links with branded colors */}
            <div className="mt-8 pt-5 border-t border-border/40">
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/Afthab33" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-9 w-9 flex items-center justify-center rounded-full text-white bg-[#24292e] hover:bg-[#24292e]/90 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/aftabhussain33" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-9 w-9 flex items-center justify-center rounded-full text-white bg-[#0077b5] hover:bg-[#0077b5]/90 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.youtube.com/@Aftab_Hussain33" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-9 w-9 flex items-center justify-center rounded-full text-white bg-[#FF0000] hover:bg-[#FF0000]/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section with improved styling */}
          <div ref={imageRef} className="w-full max-w-[360px] mx-auto lg:mx-0 opacity-0">
            <div className="relative">              
              <div className="overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-primary/20 transition-all hover:shadow-[0_15px_30px_rgba(0,71,171,0.25)] relative z-10 bg-card">
                {imageError ? (
                  <div className="w-full aspect-[3/4] flex flex-col items-center justify-center text-muted-foreground">
                    <ImageOff className="h-10 w-10 mb-2" />
                    <p className="text-sm">Image not available</p>
                    <Button variant="outline" size="sm" className="mt-4" onClick={() => setImageError(false)}>
                      Try again
                    </Button>
                  </div>
                ) : (
                  <div className="relative bg-gradient-to-tl from-primary/5 to-primary/10 p-0">
                    <img 
                      src="/Aftab_Profile_Pic.jpg" 
                      alt="Aftab Hussain" 
                      className="w-full h-auto object-cover aspect-[3/4] hover:scale-[1.02] transition-all duration-300"
                      onError={() => setImageError(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}