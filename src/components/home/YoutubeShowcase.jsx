import { ArrowUpRight, Youtube, Video, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '../ui/button'

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
    <section 
      className="py-8 md:py-10 relative z-10 overflow-hidden border-b border-border/20 bg-secondary/5"
      aria-labelledby="youtube-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-primary font-medium uppercase tracking-wider text-xs md:text-sm mb-1 md:mb-2">Video Content</p>
          <h2 id="youtube-heading" className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">YouTube Channel</h2>
        </div>
        
        <div ref={componentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center max-w-5xl mx-auto">
          {/* Left side: Channel details */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-3 md:space-y-5">
              <div className="inline-flex items-center justify-center lg:justify-start">
                <div 
                  className="font-medium text-xs md:text-sm px-2 md:px-3 py-1 bg-primary/20 text-primary rounded-full"
                  aria-label="YouTube channel username"
                >
                  @Aftab_Hussain33
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                <span className="text-foreground">Tech Podcasts & AI Insights</span>
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0">
                I explore various topics, share my experiences, and offer insights on everything from tech and education to personal growth and more. 
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 pt-1">
                <Button 
                  className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 shadow-sm h-9 md:h-10 text-xs md:text-sm"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@Aftab_Hussain33" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 md:gap-2"
                    aria-label="Visit my YouTube channel (opens in new tab)"
                  >
                    <Youtube className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                    Visit Channel
                  </a>
                </Button>
                
                <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <Users size={14} className="mr-1.5 text-primary" aria-hidden="true" />
                  <span>Join our growing community</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Stacked videos */}
          <div className="order-1 lg:order-2 relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px] flex items-center justify-center mx-auto w-full max-w-[320px] md:max-w-none">
            {/* Video thumbnails - dynamically sized and conditionally shown */}
            
            {/* Image 2 - Left behind - hidden on smallest screens */}
            <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-[160px] sm:w-[180px] md:w-[220px] h-[90px] sm:h-[110px] md:h-[130px] transform -rotate-6 z-10">
              <div className="block h-full w-full rounded-lg overflow-hidden border border-primary/20 shadow-md hover:shadow-lg transition-all group">
                <div className="relative h-full">
                  <img 
                    src="/youtube/image2.png" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="AI programming podcast thumbnail"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            {/* Image 3 - Right behind - hidden on smallest screens */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-[160px] sm:w-[180px] md:w-[220px] h-[90px] sm:h-[110px] md:h-[130px] transform rotate-6 z-10">
              <div className="block h-full w-full rounded-lg overflow-hidden border border-primary/20 shadow-md hover:shadow-lg transition-all group">
                <div className="relative h-full">
                  <img 
                    src="/youtube/image3.png" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="AI career insights podcast thumbnail"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            {/* Image 1 - Center front - Featured video */}
            <div className="relative w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[130px] sm:h-[140px] md:h-[150px] lg:h-[170px] z-20">
              <a 
                href="https://youtu.be/FKZKdTzdjzI?si=4nYruckgxOK390pk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all group focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-offset-2"
                aria-label="Watch featured video: AI in Healthcare (opens YouTube)"
              >
                <div className="relative h-full">
                  <img 
                    src="/youtube/image1.png" 
                    className="w-full h-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500"
                    alt="Featured YouTube video: AI in Healthcare"
                  />
                  
                  {/* Accessible focus indicator */}
                  <div className="absolute inset-0 border-2 border-transparent focus-within:border-[#FF0000]/80 rounded-md" aria-hidden="true"></div>
                </div>
              </a>
              
              {/* Play button overlay */}
              <a 
                href="https://youtu.be/FKZKdTzdjzI?si=4nYruckgxOK390pk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#FF0000]/90 rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF0000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#FF0000] transition-colors cursor-pointer z-30"
                aria-label="Play featured video (opens YouTube)"
              >
                <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-l-[10px] sm:border-l-[12px] border-l-white border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1" aria-hidden="true"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}