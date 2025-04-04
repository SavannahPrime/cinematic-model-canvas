
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageCarousel } from '@/components/ImageCarousel';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ParallaxSection } from '@/components/ParallaxSection';
import { BrandLogos } from '@/components/BrandLogos';
import { SocialFeed } from '@/components/SocialFeed';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1603217040347-361966e2e618',
    alt: 'Fashion model in elegant outfit'
  },
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
    alt: 'Fashion editorial shoot'
  },
  {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    alt: 'Model in studio shot'
  }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <ImageCarousel 
          images={heroImages} 
          className="h-full"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-20 md:pb-32 px-4">
          <RevealOnScroll delay={0.3}>
            <h1 className="heading-xl text-white text-center max-w-4xl mx-auto mb-6">
              ALISTAIR
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.5}>
            <p className="text-white/90 text-center max-w-xl mx-auto mb-8 text-lg md:text-xl tracking-wide">
              International fashion model based in Paris & New York
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.7}>
            <div className="flex space-x-4">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-white/90 hover:bg-white text-foreground rounded-md transition-all duration-300"
              >
                Discover
              </Link>
              <Link 
                to="/projects" 
                className="px-6 py-3 bg-transparent border border-white/80 hover:border-white text-white rounded-md transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* About Intro */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div className="space-y-6">
                <p className="subheading text-accent">About Me</p>
                <h2 className="heading-lg">Elevating fashion through emotive expression</h2>
                <p className="body-text">
                  With over a decade of experience in high fashion, I've collaborated with leading brands 
                  to create iconic campaigns and editorials. My work bridges the gap between art and 
                  commercialism, bringing a unique narrative perspective to each project.
                </p>
                <p className="body-text">
                  Based between Paris and New York, I'm constantly seeking new creative challenges and collaborations 
                  that push the boundaries of fashion photography and storytelling.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-accent hover:underline mt-4"
                >
                  Learn more about me <ArrowRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513379733131-47fc74b45fc7" 
                  alt="Portrait of Alistair" 
                  className="object-cover w-full h-full hover-scale"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="subheading text-accent">Featured Work</p>
              <h2 className="heading-lg">Recent Projects</h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Gucci Summer Campaign',
                category: 'Print Campaign',
                image: 'https://images.unsplash.com/photo-1602810316693-3667c854239a'
              },
              {
                title: 'Vogue Italia Editorial',
                category: 'Editorial',
                image: 'https://images.unsplash.com/photo-1620800692591-f8d91597b213'
              },
              {
                title: 'Prada Runway Show',
                category: 'Runway',
                image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'
              }
            ].map((project, index) => (
              <RevealOnScroll key={project.title} delay={index * 0.1} direction="up">
                <Link to="/projects" className="block group">
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-sm">View Project</span>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.category}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md transition-all duration-300"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1512479478847-617d81ba00a4"
        height="h-[60vh]"
      >
        <div className="container-custom h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <RevealOnScroll>
              <div className="space-y-6">
                <p className="text-4xl md:text-5xl lg:text-6xl font-playfair italic">
                  "Alistair brings an unmatched presence to every shoot, transforming concepts into iconic imagery."
                </p>
                <div>
                  <p className="font-medium text-lg">Anna Wintour</p>
                  <p className="text-white/80">Editor-in-Chief, Vogue</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Brand Logos */}
      <BrandLogos />
      
      {/* Social Feed */}
      <SocialFeed />
      
      {/* CTA Section */}
      <section className="py-20 bg-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="heading-lg mb-6">Ready to collaborate?</h2>
              <p className="body-text mb-8 max-w-2xl mx-auto">
                Whether it's for a campaign, editorial, or special project, I'm always open to 
                new creative opportunities that push boundaries.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md transition-all duration-300 text-lg"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
