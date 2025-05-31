import { useState, useEffect, useRef } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 md:py-4 bg-background/95 backdrop-blur-sm shadow-sm' : 'py-4 md:py-6 bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="group relative z-50"
            aria-label="Aftab Hussain - Back to top"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              Aftab Hussain
              <span className="block h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
            </h1>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav 
              className={`transition-all duration-300 ${scrolled ? 'bg-transparent' : ''}`}
              aria-label="Main Navigation"
            >
              <ul className="flex space-x-6 lg:space-x-8">
                <li><NavLink href="#projects">Projects</NavLink></li>
                <li><NavLink href={resumeLink} isExternal={true}>Resume</NavLink></li>
                <li><NavLink href="#contact" highlight={true}>Contact</NavLink></li>
              </ul>
            </nav>
            
            <ThemeToggle />
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle />
            
            <button
              type="button"
              className="p-2.5 rounded-md text-foreground hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col space-y-6 text-center">
            <li>
              <MobileNavLink 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink 
                href={resumeLink} 
                isExternal={true}
              >
                Resume
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink 
                href="#contact" 
                highlight={true} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
            </li>
          </ul>
        </nav>
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

  // Add smooth scroll function
  const handleClick = (e) => {
    // Only handle non-external links
    if (isExternal) return;
    
    e.preventDefault();
    
    const targetId = href.substring(1); // Remove the # from the href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get header height to offset scroll position
      const headerHeight = document.querySelector('header').offsetHeight;
      
      // Calculate position with offset for header
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={!isExternal ? handleClick : undefined}
      className={`text-sm font-medium relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-sm px-1 py-0.5 ${
        highlight ? 'text-primary hover:text-primary/90' : 
        isActive ? 'text-primary' : 'hover:text-primary'
      }`}
    >
      {children}
      {isActive && !isExternal && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" aria-hidden="true"></span>
      )}
    </a>
  );
}

function MobileNavLink({ href, children, highlight = false, isExternal = false, onClick }) {
  const handleClick = (e) => {
    // Only handle non-external links
    if (isExternal) return;
    
    e.preventDefault();
    
    const targetId = href.substring(1); // Remove the # from the href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get header height to offset scroll position
      const headerHeight = document.querySelector('header').offsetHeight;
      
      // Calculate position with offset for header
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Run onClick callback (for closing mobile menu)
      if (onClick) onClick();
    }
  };

  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={!isExternal ? handleClick : undefined}
      className={`text-lg font-medium py-2 px-4 block transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-sm ${
        highlight ? 'text-primary hover:text-primary/90' : 'hover:text-primary'
      }`}
    >
      {children}
    </a>
  );
}