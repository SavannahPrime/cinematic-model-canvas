
import { useState, useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { useTheme } from '@/context/ThemeContext';

// Mock social media posts
const mockPosts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
    caption: 'Behind the scenes at Paris Fashion Week with @Dior #PFW',
    likes: 1523,
    comments: 43,
    date: '2d'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1595951474134-9442c94b3177',
    caption: 'New Gucci campaign launch. So excited to share this with you all! #GucciSS23',
    likes: 4211,
    comments: 128,
    date: '5d'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2',
    caption: 'Editorial for Vogue Italia out now. Link in bio. #VogueItalia',
    likes: 3087,
    comments: 76,
    date: '1w'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1596993100471-c3905dbd0a7f',
    caption: 'Milan streets after the show. Wearing @Prada #MFW',
    likes: 2854,
    comments: 62,
    date: '1w'
  }
];

interface SocialPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}

export function SocialFeed() {
  const [posts, setPosts] = useState<SocialPost[]>(mockPosts);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { theme } = useTheme();
  
  // Simulate refreshing posts every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, this would fetch new posts from an API
      // For now, we just shuffle the existing posts to simulate a refresh
      setPosts(prevPosts => [...prevPosts].sort(() => Math.random() - 0.5));
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [postId]: true
    }));
    console.error(`Failed to load image for post: ${postId}`);
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="container-custom">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Instagram size={24} className="text-pink-600" />
            <h2 className="heading-md text-center">Instagram</h2>
          </div>
          <p className="text-center text-muted-foreground mb-12">Follow @alistair_model</p>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <RevealOnScroll 
              key={post.id} 
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={imageErrors[post.id] ? 'https://images.unsplash.com/photo-1614289371518-722f2615943d' : post.imageUrl} 
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => handleImageError(post.id)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm line-clamp-2 mb-2">{post.caption}</p>
                <div className="flex justify-between items-center text-white/80 text-xs">
                  <span>{post.likes.toLocaleString()} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View Instagram post: ${post.caption}`}
              >
                <span className="sr-only">View on Instagram</span>
              </a>
              <ExternalLink size={16} className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
          >
            View more on Instagram
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
