import { ArrowUpRight, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function ProjectShowcase() {
  const componentRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'duration-700');
        }
      });
    });
    
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    
    return () => {
      if (componentRef.current) observer.unobserve(componentRef.current);
    };
  }, []);

  return (
    <section className="py-10 relative z-10 overflow-hidden border-b border-border/20">
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={componentRef} className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          {/* Left side: Image gallery */}
          <div className="relative h-[240px] md:h-[280px]">
            {/* Background images */}
            <div className="absolute top-1/2 -left-4 w-[200px] h-[140px] -translate-y-1/2 transform -rotate-6 rounded-lg overflow-hidden border border-primary/10 shadow-md">
              <img 
                src="/projects/project-h/image1.png" 
                alt="Project-H Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 right-4 w-[180px] h-[120px] -translate-y-1/2 transform rotate-6 rounded-lg overflow-hidden border border-primary/10 shadow-md">
              <img 
                src="/projects/project-h/image2.png" 
                alt="Project-H Analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Main/thumbnail image */}
            <div className="absolute left-1/2 top-1/2 w-[220px] md:w-[260px] h-[180px] md:h-[200px] -translate-x-1/2 -translate-y-1/2 transform z-10 rounded-lg overflow-hidden border border-primary/20 shadow-lg transition-all hover:shadow-xl">
              <img 
                src="/projects/project-h/thumbnail.png" 
                alt="Project-H Main Interface" 
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>
          
          {/* Right side: Project details */}
          <div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="font-medium text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  My Flagship Project
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-1">
                <span className="inline-flex items-baseline">
                  <span className="text-[#3E7B27]">Project-</span>
                  <span className="text-[#3E7B27] font-extrabold">H</span>
                </span>
                <span className="ml-2 text-primary/80 text-lg md:text-xl font-normal flex items-center">
                  <span className="h-1 w-1 rounded-full bg-primary/40 mx-2"></span>
                  Founder
                </span>
              </h2>
              
              <p className="text-muted-foreground max-w-xl">
                An AI-powered health and fitness platform that helps users track their fitness 
                with personalized insights using the 'Oats' AI coach and integrated biometric data analysis.
              </p>
              
              <div className="flex items-center gap-6 pt-1">
                <a 
                  href="https://projhealth.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-[#3E7B27] font-medium hover:underline group"
                >
                  Visit Project-H
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users size={14} className="mr-1.5 text-[#3E7B27]" />
                  <span>200+ users and counting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}