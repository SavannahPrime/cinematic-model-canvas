
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Film, Camera } from 'lucide-react';
import { ImageCarousel } from '@/components/ImageCarousel';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ParallaxSection } from '@/components/ParallaxSection';
import { BrandLogos } from '@/components/BrandLogos';
import { SocialFeed } from '@/components/SocialFeed';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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

const projectItems = [
  {
    title: 'Gucci Summer Campaign',
    category: 'Print Campaign',
    image: 'https://images.unsplash.com/photo-1602810316693-3667c854239a',
    year: '2023'
  },
  {
    title: 'Vogue Italia Editorial',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1620800692591-f8d91597b213',
    year: '2022'
  },
  {
    title: 'Prada Runway Show',
    category: 'Runway',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    year: '2023'
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
          cinematic={true}
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-20 md:pb-32 px-4">
          <RevealOnScroll delay={0.3} distance={100}>
            <h1 className="heading-xl text-white text-center max-w-4xl mx-auto mb-6">
              <span className="block text-gradient">ALISTAIR</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.5} distance={50}>
            <p className="text-white/90 text-center max-w-xl mx-auto mb-8 text-lg md:text-xl tracking-wide">
              International fashion model based in Paris & New York
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.7} direction="up" distance={30}>
            <div className="flex space-x-4">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-blue hover:bg-blue-dark text-white rounded-md transition-all duration-500 hover:shadow-[0_0_20px_rgba(30,174,219,0.5)] transform hover:-translate-y-1"
              >
                Discover
              </Link>
              <Link 
                to="/projects" 
                className="px-6 py-3 bg-transparent border border-white/80 hover:border-white text-white rounded-md transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-1"
              >
                View Portfolio
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* About Intro */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="bg-blue-gradient rotate-12 transform scale-150 translate-x-1/4 translate-y-1/4 w-full h-full"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="subheading text-blue">About Me</p>
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
                  className="inline-flex items-center gap-2 text-blue hover:text-blue-dark transition-colors duration-300 mt-4 group"
                >
                  Learn more about me 
                  <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right" delay={0.4}>
              <div className="relative h-[600px] overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-[1.02] cinematic-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1513379733131-47fc74b45fc7" 
                  alt="Portrait of Alistair" 
                  className="object-cover w-full h-full transition-transform duration-10000 ease-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="subheading text-blue">Featured Work</p>
              <h2 className="heading-lg">Recent Projects</h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectItems.map((project, index) => (
              <RevealOnScroll key={project.title} delay={index * 0.2} direction="up" duration={1}>
                <Link to="/projects" className="block group">
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 cinematic-shadow">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-blue text-sm font-medium mb-2 inline-block">{project.year}</span>
                        <p className="text-white text-xl font-playfair">{project.title}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-white/80 text-sm">{project.category}</span>
                          <ArrowRight size={14} className="text-white/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-left">
                      <h3 className="font-playfair text-xl mb-1 group-hover:text-blue transition-colors duration-300">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.category}</p>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="text-sm text-muted-foreground pt-2">
                      <p className="mb-2">A stunning collection that showcases the essence of modern fashion.</p>
                      <div className="flex items-center gap-2">
                        {project.category === 'Print Campaign' && <Camera size={14} />}
                        {project.category === 'Editorial' && <Film size={14} />}
                        {project.category === 'Runway' && <Award size={14} />}
                        <span>{project.year}</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <RevealOnScroll delay={0.6}>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue hover:bg-blue-dark text-white rounded-md transition-all duration-500 hover:shadow-[0_0_20px_rgba(30,174,219,0.5)] transform hover:-translate-y-1"
              >
                View All Projects <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1512479478847-617d81ba00a4"
        height="h-[60vh]"
        overlayColor="bg-blue-dark/60"
        cinematic={true}
      >
        <div className="container-custom h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <RevealOnScroll delay={0.2} distance={30}>
              <div className="space-y-6">
                <p className="text-4xl md:text-5xl lg:text-6xl font-playfair italic transform transition-all duration-700 hover:scale-105">
                  "Alistair brings an unmatched presence to every shoot, transforming concepts into iconic imagery."
                </p>
                <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
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
      <section className="py-20 bg-gradient-to-r from-blue-dark/10 to-blue/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="bg-[url('https://images.unsplash.com/photo-1603217040347-361966e2e618')] bg-cover bg-center w-full h-full"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll direction="up" delay={0.2} distance={50}>
              <h2 className="heading-lg mb-6 text-gradient">Ready to collaborate?</h2>
              <p className="body-text mb-8 max-w-2xl mx-auto">
                Whether it's for a campaign, editorial, or special project, I'm always open to 
                new creative opportunities that push boundaries.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue hover:bg-blue-dark text-white rounded-md transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,174,219,0.5)] transform hover:-translate-y-1 text-lg"
              >
                Get in Touch <ArrowRight size={20} className="animate-floating" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
