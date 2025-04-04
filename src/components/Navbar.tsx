
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Competitions', href: '/competitions' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-md py-2 dark:bg-gray-900/80' 
        : 'bg-transparent py-4'
    )}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span className={cn(
            "text-xl md:text-2xl font-playfair font-bold tracking-tight transition-all duration-500",
            scrolled ? "text-foreground dark:text-white" : "text-white"
          )}>
            <span className="inline-block transform transition-transform duration-500 group-hover:scale-110">A</span>
            <span className="inline-block transform transition-transform duration-500 delay-100">L</span>
            <span className="inline-block transform transition-transform duration-500 delay-200">I</span>
            <span className="inline-block transform transition-transform duration-500 delay-300">S</span>
            <span className="inline-block transform transition-transform duration-500 delay-400">T</span>
            <span className="inline-block transform transition-transform duration-500 delay-500">A</span>
            <span className="inline-block transform transition-transform duration-500 delay-600">I</span>
            <span className="inline-block transform transition-transform duration-500 delay-700">R</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "subheading relative overflow-hidden group",
                scrolled ? "text-foreground dark:text-white" : "text-white",
                location.pathname === item.href ? "text-blue" : ""
              )}
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
          
          <ThemeToggle className={scrolled ? "" : "bg-white/20 text-white hover:bg-white/30"} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle className={scrolled ? "" : "bg-white/20 text-white hover:bg-white/30"} />
          
          <button 
            className={cn(
              "focus:outline-none transition-colors duration-300",
              scrolled ? "text-foreground dark:text-white" : "text-white"
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-blue-dark/95 backdrop-blur-lg flex flex-col items-center justify-center z-50 transition-all duration-500",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-8 items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-xl font-playfair text-white hover:text-blue transition-all duration-300 transform",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  location.pathname === item.href ? "text-blue" : "",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
