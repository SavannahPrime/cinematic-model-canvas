
import { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  speed?: number;
  overlay?: boolean;
  height?: string;
  overlayColor?: string;
  cinematic?: boolean;
}

export function ParallaxSection({
  children,
  className,
  bgImage,
  speed = 0.5,
  overlay = true,
  height = 'h-[50vh]',
  overlayColor = 'bg-black/40',
  cinematic = true
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const backgroundElement = backgroundRef.current;
    
    if (!sectionElement || !backgroundElement) return;
    
    const handleScroll = () => {
      const sectionRect = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (
        sectionRect.bottom > 0 &&
        sectionRect.top < viewportHeight
      ) {
        // Calculate how far the section is scrolled into view as a percentage
        const sectionTop = sectionRect.top;
        const scrollPercentage = sectionTop / viewportHeight;
        
        // Apply parallax effect
        const yPos = scrollPercentage * speed * 100;
        backgroundElement.style.transform = `translateY(${yPos}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set positions correctly
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={sectionRef}
      className={cn('relative w-full overflow-hidden', height, className)}
    >
      {/* Background with parallax effect */}
      <div 
        ref={backgroundRef}
        className={cn(
          "absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform",
          cinematic && "animate-cinematic"
        )}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Optional overlay */}
      {overlay && (
        <div className={cn("absolute inset-0 z-10", overlayColor)}></div>
      )}
      
      {/* Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}
