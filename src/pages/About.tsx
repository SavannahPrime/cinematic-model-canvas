
import { useEffect } from 'react';
import { Download, Award, Briefcase, Camera, Heart } from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ParallaxSection } from '@/components/ParallaxSection';

const modelStats = [
  { label: 'Height', value: '6\'2" / 188cm' },
  { label: 'Chest', value: '40" / 102cm' },
  { label: 'Waist', value: '32" / 81cm' },
  { label: 'Collar', value: '15.5" / 39cm' },
  { label: 'Suit', value: '40R' },
  { label: 'Shoe', value: '11 US / 44 EU' },
  { label: 'Hair', value: 'Brown' },
  { label: 'Eyes', value: 'Green' }
];

const timelineEvents = [
  {
    year: 2023,
    title: 'Global Ambassador',
    description: 'Named global ambassador for Louis Vuitton menswear.',
    icon: Award
  },
  {
    year: 2021,
    title: 'Milan Fashion Week',
    description: 'Opened and closed for Gucci and Prada at Milan Fashion Week.',
    icon: Briefcase
  },
  {
    year: 2019,
    title: 'Vogue Cover',
    description: 'Featured on the cover of Vogue Italia September issue.',
    icon: Camera
  },
  {
    year: 2017,
    title: 'Brand Partnership',
    description: 'Multi-year contract with Dior as the face of Homme fragrance.',
    icon: Heart
  },
  {
    year: 2015,
    title: 'Professional Debut',
    description: 'Signed with Elite Model Management and debuted at Paris Fashion Week.',
    icon: Award
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1517841905240-472988babdf9"
        height="h-[60vh] md:h-[70vh]"
      >
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <RevealOnScroll>
              <h1 className="heading-xl text-white mb-6">About Me</h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
                Discover my journey in the fashion industry and what drives my passion for modeling.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Biography */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div className="space-y-6">
                <p className="subheading text-accent">My Journey</p>
                <h2 className="heading-lg">A Passion for Visual Storytelling</h2>
                <div className="prose prose-lg">
                  <p>
                    My journey into the world of high fashion began over a decade ago, when I was discovered 
                    while studying art history in Paris. What started as an unexpected opportunity quickly 
                    evolved into a passionate career that has taken me across the globe.
                  </p>
                  <p>
                    Working with renowned photographers, designers, and creative directors has shaped my 
                    approach to modeling as a form of visual storytelling. Each project offers a new canvas 
                    to express emotion and bring creative concepts to life.
                  </p>
                  <p>
                    Beyond the camera, I'm deeply interested in sustainable fashion practices and supporting 
                    emerging designers who are reshaping the industry with innovative approaches to design 
                    and production.
                  </p>
                  <p>
                    When not on set, you'll find me exploring art galleries, practicing yoga, or documenting 
                    my travels through photography—all sources of inspiration that influence my work.
                  </p>
                </div>
                <a 
                  href="/portfolio.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md transition-all duration-300 mt-4"
                >
                  Download Portfolio <Download size={16} />
                </a>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" 
                      alt="Alistair portrait" 
                      className="w-full h-[300px] object-cover hover-scale"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1618375531912-867984bdfd87" 
                      alt="Alistair runway shot" 
                      className="w-full h-[200px] object-cover hover-scale"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2" 
                      alt="Alistair editorial" 
                      className="w-full h-[200px] object-cover hover-scale"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                      alt="Alistair portrait" 
                      className="w-full h-[300px] object-cover hover-scale"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <h2 className="heading-md text-center mb-12">Measurements & Details</h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {modelStats.map((stat, index) => (
                <RevealOnScroll key={stat.label} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-1">{stat.label}</h3>
                    <p className="text-xl font-playfair">{stat.value}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="subheading text-accent">Experience</p>
              <h2 className="heading-lg">Career Highlights</h2>
            </div>
          </RevealOnScroll>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border -ml-[0.5px] md:ml-0"></div>
            
            {/* Timeline events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <RevealOnScroll key={event.year} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                        <event.icon size={20} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                        <span className="text-accent font-semibold">{event.year}</span>
                        <h3 className="text-xl font-playfair mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
