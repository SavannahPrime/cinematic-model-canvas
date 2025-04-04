
import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
}

export function RevealOnScroll({
  children,
  className,
  threshold = 0.1,
  direction = 'up',
  delay = 0,
  distance = 50
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translate-y-[${distance}px] opacity-0`;
        case 'down':
          return `translate-y-[-${distance}px] opacity-0`;
        case 'left':
          return `translate-x-[${distance}px] opacity-0`;
        case 'right':
          return `translate-x-[-${distance}px] opacity-0`;
        case 'none':
          return 'opacity-0';
        default:
          return `translate-y-[${distance}px] opacity-0`;
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100';
  };

  const animationStyle = {
    transform: isVisible ? 'translate(0, 0)' : undefined,
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.8s ease-out ${delay}s, opacity 0.8s ease-out ${delay}s`,
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={animationStyle}
    >
      {children}
    </div>
  );
}
