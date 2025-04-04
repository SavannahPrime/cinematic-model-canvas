
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
  cinematic?: boolean;
}

export function ImageCarousel({ 
  images, 
  autoplay = true, 
  interval = 5000,
  className,
  overlay = true,
  indicators = true,
  cinematic = true
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [loaded, setLoaded] = useState<boolean[]>(new Array(images.length).fill(false));
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload images for smoother experience
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((image, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => {
            setLoaded(prev => {
              const newLoaded = [...prev];
              newLoaded[index] = true;
              return newLoaded;
            });
            resolve();
          };
          img.onerror = () => {
            // Still mark as loaded to avoid infinite loading state
            setLoaded(prev => {
              const newLoaded = [...prev];
              newLoaded[index] = true;
              return newLoaded;
            });
            resolve();
          };
        });
      });
      
      // Wait for first image to load before showing carousel
      await imagePromises[0];
      
      // Preload the rest in background
      Promise.all(imagePromises).then(() => {
        setImagesPreloaded(true);
      });
    };
    
    preloadImages();
  }, [images]);

  const handleImageLoad = (index: number) => {
    setLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 1000);
  }, [images.length, isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 1000);
  }, [images.length, isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    if (autoplay && imagesPreloaded) {
      autoplayRef.current = setInterval(goToNext, interval);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, interval, goToNext, imagesPreloaded]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Loading indicator */}
      {!loaded[currentIndex] && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-20">
          <div className="w-12 h-12 border-4 border-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1500 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              onLoad={() => handleImageLoad(index)}
              className={cn(
                "w-full h-full object-cover object-center transform",
                cinematic && index === currentIndex && "animate-cinematic",
                !loaded[index] && "blur-sm"
              )}
            />
          </div>
        ))}
        
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20 pointer-events-none"></div>
        )}
      </div>
      
      {/* Navigation Controls */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors duration-300 hover:scale-110"
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
                "w-2 h-2 rounded-full transition-all duration-500",
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
