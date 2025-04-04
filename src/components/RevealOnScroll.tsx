
import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function RevealOnScroll({
  children,
  className,
  threshold = 0.1,
  direction = 'up',
  delay = 0,
  distance = 50,
  duration = 0.8,
  once = true
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && once) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { 
        threshold,
        // Add rootMargin to trigger animation slightly before element enters viewport
        rootMargin: '10px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Use requestAnimationFrame for smoother animations
  useEffect(() => {
    if (isIntersecting && !isVisible && once) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [isIntersecting, isVisible, once]);

  const getTransformValue = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        case 'none':
          return 'none';
        default:
          return `translateY(${distance}px)`;
      }
    }
    return 'translate(0, 0)';
  };

  const animationStyle = {
    transform: getTransformValue(),
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    willChange: 'transform, opacity'
  };

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={animationStyle}
    >
      {children}
    </div>
  );
}
