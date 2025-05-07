import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  const resumeLink = "https://drive.google.com/file/d/1ZzsEtDdGER8rRoCCX9zFI3qQSAgfj50z/view?usp=sharing";
  
  return (
    <footer className="bg-gradient-to-r from-black/95 to-gray-900/95 text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Contact section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium text-white mb-1.5">Get in touch</h3>
            <a 
              href="mailto:afthabhussain33@gmail.com" 
              className="text-white/80 hover:text-primary transition-all duration-200 inline-flex items-center gap-1.5 text-sm group"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>afthabhussain33@gmail.com</span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          {/* Social icons and resume (center column on mobile, right column on desktop) */}
          <div className="flex flex-row items-center gap-3">
            <a 
              href="https://github.com/Afthab33" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-200 border border-white/10 hover:border-white/30"
              aria-label="GitHub Profile"
            >
              <Github size={18} className="text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/aftabhussain33" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-200 border border-white/10 hover:border-[#0A66C2]/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} className="text-[#0A66C2]" />
            </a>
            <a 
              href="https://www.youtube.com/@Aftab_Hussain33" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-200 border border-white/10 hover:border-[#FF0000]/50"
              aria-label="YouTube Channel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/20 bg-white/5 hover:bg-primary hover:text-white hover:border-primary text-white ml-1 flex items-center gap-1.5 text-xs rounded-full transition-all duration-200"
              asChild
            >
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5" />
                <span>Resume</span>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Copyright - smaller and less prominent */}
        <div className="text-center text-xs text-white/30 mt-6 md:mt-4">
          <p>© {new Date().getFullYear()} Aftab Hussain</p>
        </div>
      </div>
    </footer>
  )
}