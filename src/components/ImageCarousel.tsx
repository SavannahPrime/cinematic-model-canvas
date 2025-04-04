
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
  overlay?: boolean;
  indicators?: boolean;
}

export function ImageCarousel({ 
  images, 
  autoplay = true, 
  interval = 5000,
  className,
  overlay = true,
  indicators = true
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 750);
  }, [images.length, isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 750);
  }, [images.length, isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 750);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(goToNext, interval);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, interval, goToNext]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
        )}
      </div>
      
      {/* Navigation Controls */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors duration-300"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      {indicators && images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
