import { ArrowUpRight, Youtube, Video, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from './ui/button'

export function YoutubeShowcase() {
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
    <section className="py-20 relative z-10 overflow-hidden border-b border-border/20 bg-secondary/5">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Video Content</p>
          <h2 className="text-3xl font-semibold mb-4">YouTube Channel</h2>
        </div>
        
        <div ref={componentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Left side: Channel details */}
          <div>
            <div className="space-y-5">
              <div className="inline-flex items-center">
                <div className="font-medium text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                  @Aftab_Hussain33
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-foreground">Tech Podcasts & AI Insights</span>
              </h2>
              
              <p className="text-muted-foreground">
                I explore various topics, share my experiences, and offer insights on everything from tech and education to personal growth and more. 
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button 
                  className="bg-primary text-white hover:bg-primary/90"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@Aftab_Hussain33" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4" />
                    Visit Channel
                  </a>
                </Button>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users size={14} className="mr-1.5 text-primary" />
                  <span>Join our growing community</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Stacked videos */}
          <div className="relative h-[350px] flex items-center justify-center">
            {/* Image 2 - Left behind */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-[220px] h-[130px] transform -rotate-6 z-10">
              <a 
                href="https://www.youtube.com/@Aftab_Hussain33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full rounded-lg overflow-hidden border border-primary/20 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="relative h-full">
                  <img 
                    src="/youtube/image2.png" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            </div>
            
            {/* Image 3 - Right behind */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-[220px] h-[130px] transform rotate-6 z-10">
              <a 
                href="https://www.youtube.com/@Aftab_Hussain33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full rounded-lg overflow-hidden border border-primary/20 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="relative h-full">
                  <img 
                    src="/youtube/image3.png" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            </div>
            
            {/* Image 1 - Center front */}
            <div className="relative w-[280px] h-[170px] z-20">
              <a 
                href="https://www.youtube.com/@Aftab_Hussain33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative h-full">
                  <img 
                    src="/youtube/image1.png" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
              {/* Play button overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors cursor-pointer z-30">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}