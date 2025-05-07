import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1ZzsEtDdGER8rRoCCX9zFI3qQSAgfj50z/view?usp=sharing";

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-background/95 backdrop-blur-sm shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="group">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Aftab Hussain
              <span className="block h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </a>
          
          <nav className={`transition-all duration-300 ${scrolled ? 'bg-transparent' : ''}`}>
            <ul className="flex space-x-8">
              <li><NavLink href="#projects">Projects</NavLink></li>
              <li><NavLink href={resumeLink} isExternal={true}>Resume</NavLink></li>
              <li><NavLink href="#contact" highlight={true}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children, highlight = false, isExternal = false }) {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (isExternal) return;
    
    const section = document.querySelector(href);
    
    const checkIfActive = () => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = (
        rect.top <= 100 && 
        rect.bottom >= 100
      );
      
      setIsActive(isInView);
    };
    
    window.addEventListener('scroll', checkIfActive);
    checkIfActive(); // Check initially
    
    return () => {
      window.removeEventListener('scroll', checkIfActive);
    };
  }, [href, isExternal]);

  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`text-sm font-medium relative transition-colors ${
        highlight ? 'text-primary hover:text-primary/90' : 
        isActive ? 'text-primary' : 'hover:text-primary'
      }`}
    >
      {children}
      {isActive && !isExternal && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
      )}
    </a>
  );
}