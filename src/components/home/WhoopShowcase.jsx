import { ArrowUpRight, Brain, ExternalLink, Sparkles } from 'lucide-react'

export function WhoopShowcase() {
  return (
    <section 
      className="py-6 md:py-8 relative z-10 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background border-b border-border/20"
      aria-labelledby="whoop-project-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[300px] h-[200px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Compact Header */}
          <div className="text-center mb-5 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-2">
              <Brain className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Featured Rebuild</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <h2 
                id="whoop-project-heading"
                className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
              >
                WHOOP Web App Rebuild with AI Coach
              </h2>
              
              {/* New Project Label */}
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                <Sparkles className="w-3 h-3" />
                <span>NEW PROJECT</span>
              </div>
            </div>
            
            {/* Mobile New Project Label */}
            <div className="sm:hidden flex justify-center mb-2">
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                <Sparkles className="w-3 h-3" />
                <span>NEW PROJECT</span>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reimagined WHOOP's web platform with modern UI/UX, AI-powered coaching, and enhanced data visualization.
            </p>
          </div>

          {/* Content Grid - Swapped layout: content left, images right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 items-center">
            
            {/* Content Section - Now on left */}
            <div className="order-2 md:order-1">
              <div className="space-y-3 text-center md:text-left">
                
                {/* Key Highlights - Condensed */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">What I Built</h3>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Modern React UI inspired by WHOOP mobile
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      AI Coach with GPT-4o + RAG integration
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Interactive health data visualizations
                    </div>
                  </div>
                </div>

                {/* Tech Stack - Inline */}
                <div className="space-y-1.5">
                  <h4 className="font-medium text-foreground text-sm">Built With</h4>
                  <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                    {['React', 'TailwindCSS', 'OpenAI', 'Express', 'GCP'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Impact Badge */}
                <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-800/50 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-green-700 dark:text-green-300">
                    Shared directly with WHOOP team • 8K+ LinkedIn views
                  </span>
                </div>

                {/* Action Buttons - Compact */}
                <div className="flex gap-2 pt-1 justify-center md:justify-start">
                  <a 
                    href="https://whoopapp.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all group shadow-sm text-xs"
                    aria-label="View WHOOP redesign demo (opens in new tab)"
                  >
                    Live Demo
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  
                  <a 
                    href="/projects/whoop-redesign" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/20 text-primary rounded-md font-medium hover:bg-primary/5 transition-all group text-xs"
                    aria-label="View detailed project breakdown"
                  >
                    Learn More
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Image Gallery Section - Now on right, same as ProjectH style */}
            <div className="order-1 md:order-2 relative h-[220px] sm:h-[240px] md:h-[280px] mx-auto w-full max-w-[320px] md:max-w-none">
              {/* Background images - hidden on smallest screens */}
              <div className="hidden sm:block absolute top-1/2 -left-4 w-[160px] sm:w-[180px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[140px] -translate-y-1/2 transform -rotate-6 rounded-lg overflow-hidden border border-primary/10 shadow-md">
                <img 
                  src="/projects/whoop/sleeppage.png" 
                  alt="WHOOP Sleep tracking interface" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="hidden sm:block absolute top-1/2 right-4 w-[140px] sm:w-[160px] md:w-[180px] h-[90px] sm:h-[100px] md:h-[120px] -translate-y-1/2 transform rotate-6 rounded-lg overflow-hidden border border-primary/10 shadow-md">
                <img 
                  src="/projects/whoop/aicoachpage.png" 
                  alt="WHOOP AI Coach interface" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Main/thumbnail image - centered on mobile */}
              <div className="absolute left-1/2 top-1/2 w-[220px] sm:w-[240px] md:w-[260px] h-[160px] sm:h-[180px] md:h-[200px] -translate-x-1/2 -translate-y-1/2 transform z-10 rounded-lg overflow-hidden border border-primary/20 shadow-lg hover:shadow-xl transition-all">
                <img 
                  src="/projects/whoop/thumbnail.png" 
                  alt="WHOOP Web App Redesign main dashboard interface" 
                  className="w-full h-full object-cover"
                />
                {/* Add accessibility-friendly focus indicator for keyboard navigation */}
                <div className="absolute inset-0 pointer-events-none border-2 border-transparent focus-within:border-primary/80 rounded-lg">
                  <span className="sr-only">View WHOOP redesign details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}