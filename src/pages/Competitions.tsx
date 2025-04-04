
import { useState, useEffect } from 'react';
import { Award, ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ParallaxSection } from '@/components/ParallaxSection';
import { cn } from '@/lib/utils';

interface Competition {
  id: string;
  title: string;
  year: number;
  location: string;
  type: 'Fashion Show' | 'Modeling Contest' | 'Award';
  result: 'Winner' | 'Finalist' | 'Runner-up' | 'Top 5' | 'Participant';
  description: string;
  image: string;
  video?: string;
}

const competitionsData: Competition[] = [
  {
    id: 'fashion-model-award-2023',
    title: 'Fashion Model of the Year',
    year: 2023,
    location: 'Paris, France',
    type: 'Award',
    result: 'Winner',
    description: 'Recognized as the top male model for outstanding contribution to the fashion industry and versatility across campaigns, editorials, and runway shows.',
    image: 'https://images.unsplash.com/photo-1531390770335-d94a0dacd992',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'milan-model-search-2022',
    title: 'Milan Model Search',
    year: 2022,
    location: 'Milan, Italy',
    type: 'Modeling Contest',
    result: 'Winner',
    description: 'Selected from over 500 models as the face of the prestigious Milan Model Search, earning a contract with a leading Italian fashion house.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vogue-fashion-prize-2022',
    title: 'Vogue Fashion Prize',
    year: 2022,
    location: 'New York, USA',
    type: 'Award',
    result: 'Runner-up',
    description: 'Awarded runner-up in the prestigious Vogue Fashion Prize, recognizing rising talent in the modeling industry with exceptional portfolio development.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
  },
  {
    id: 'paris-runway-competition-2021',
    title: 'Paris Runway Competition',
    year: 2021,
    location: 'Paris, France',
    type: 'Fashion Show',
    result: 'Winner',
    description: 'Won the competitive runway walk competition during Paris Fashion Week, judged by a panel of leading designers and fashion directors.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
  },
  {
    id: 'rising-star-model-2021',
    title: 'Rising Star Model',
    year: 2021,
    location: 'London, UK',
    type: 'Award',
    result: 'Winner',
    description: 'Recognized as the Rising Star of the year by the British Fashion Council for breakthrough performances in campaigns and editorials.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae'
  },
  {
    id: 'tokyo-fashion-week-2020',
    title: 'Tokyo Fashion Week Model Contest',
    year: 2020,
    location: 'Tokyo, Japan',
    type: 'Modeling Contest',
    result: 'Finalist',
    description: 'Selected as one of five finalists in the competitive Tokyo Fashion Week Model Contest, showcasing versatility in presentation and on-camera presence.',
    image: 'https://images.unsplash.com/photo-1512646605205-78422b7c7896'
  }
];

const Competitions = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [filteredCompetitions, setFilteredCompetitions] = useState<Competition[]>(competitionsData);
  const [showAward, setShowAward] = useState<string | null>(null);
  
  const years = ['All', ...Array.from(new Set(competitionsData.map(comp => comp.year.toString())))];
  const types = ['All', ...Array.from(new Set(competitionsData.map(comp => comp.type)))];
  
  // Reset scroll position when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter competitions
  useEffect(() => {
    let filtered = [...competitionsData];
    
    if (selectedYear !== 'All') {
      filtered = filtered.filter(comp => comp.year.toString() === selectedYear);
    }
    
    if (selectedType !== 'All') {
      filtered = filtered.filter(comp => comp.type === selectedType);
    }
    
    setFilteredCompetitions(filtered);
  }, [selectedYear, selectedType]);
  
  // Toggle award details
  const toggleAward = (id: string) => {
    if (showAward === id) {
      setShowAward(null);
    } else {
      setShowAward(id);
    }
  };
  
  // Get result badge class
  const getResultBadgeClass = (result: string) => {
    switch(result) {
      case 'Winner':
        return 'bg-gold text-black';
      case 'Runner-up':
        return 'bg-gray-300 text-black';
      case 'Finalist':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1606216840214-f7bf54b6ecb7"
        height="h-[50vh]"
      >
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <RevealOnScroll>
              <h1 className="heading-xl text-white mb-6">Awards & Competitions</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-xl">
                Achievements, recognition, and participation in prestigious industry competitions.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Filters */}
      <section className="bg-white py-8 sticky top-0 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Year Filter */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Year</label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent min-w-[150px]"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            {/* Type Filter */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Type</label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent min-w-[150px]"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            {/* Results Count */}
            <div className="ml-auto text-muted-foreground">
              {filteredCompetitions.length} competition{filteredCompetitions.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>
      
      {/* Competitions List */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          {filteredCompetitions.length > 0 ? (
            <div className="space-y-8">
              {filteredCompetitions.map((competition, index) => (
                <RevealOnScroll key={competition.id} delay={index * 0.1}>
                  <div 
                    className={cn(
                      "bg-white rounded-lg overflow-hidden transition-all duration-300 border border-border",
                      showAward === competition.id ? 'shadow-xl' : 'shadow-sm hover:shadow-md'
                    )}
                  >
                    <div 
                      className="flex flex-col md:flex-row cursor-pointer"
                      onClick={() => toggleAward(competition.id)}
                    >
                      {/* Image */}
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img 
                          src={competition.image} 
                          alt={competition.title}
                          className="w-full h-full object-cover"
                        />
                        {competition.result === 'Winner' && (
                          <div className="absolute top-4 left-4 animate-pulse">
                            <Award size={24} className="text-gold" />
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 md:w-2/3 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={cn(
                                "inline-block text-xs px-3 py-1 rounded-full",
                                getResultBadgeClass(competition.result)
                              )}>
                                {competition.result}
                              </span>
                              <span className="text-sm text-muted-foreground">{competition.type}</span>
                            </div>
                            <h3 className="font-playfair text-xl md:text-2xl">{competition.title}</h3>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar size={16} />
                            <span>{competition.year}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mt-2">{competition.location}</p>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <p className="text-sm line-clamp-2">{competition.description}</p>
                          <ChevronDown 
                            size={20} 
                            className={cn(
                              "transform transition-transform duration-300",
                              showAward === competition.id ? 'rotate-180' : ''
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {showAward === competition.id && (
                      <div className="p-6 pt-0 border-t border-border mt-4 animate-fade-in">
                        {competition.result === 'Winner' && (
                          <div className="mb-6 p-4 bg-gold/10 rounded-lg flex items-start gap-4">
                            <div className="bg-gold rounded-full p-2">
                              <Sparkles size={20} className="text-black" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Award Achievement</h4>
                              <p className="text-sm">This prestigious recognition highlights exceptional performance and contribution to the fashion industry.</p>
                            </div>
                          </div>
                        )}
                        
                        <p className="mb-6">{competition.description}</p>
                        
                        {competition.video && (
                          <div>
                            <h4 className="font-semibold mb-2">Award Ceremony</h4>
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                              <iframe 
                                src={competition.video} 
                                title={`${competition.title} video`}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No competitions found with the selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedYear('All');
                  setSelectedType('All');
                }}
                className="mt-4 px-4 py-2 text-sm border border-input rounded-md hover:bg-secondary transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Awards Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="heading-lg">Award Statistics</h2>
              <p className="text-muted-foreground mt-2">A summary of achievements and recognitions</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <RevealOnScroll delay={0.1}>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-4xl font-playfair text-accent mb-2">
                  {competitionsData.filter(c => c.result === 'Winner').length}
                </div>
                <p className="text-sm uppercase tracking-wider">Wins</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-4xl font-playfair text-accent mb-2">
                  {competitionsData.filter(c => c.result === 'Runner-up').length}
                </div>
                <p className="text-sm uppercase tracking-wider">Runner-up</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-4xl font-playfair text-accent mb-2">
                  {competitionsData.filter(c => c.result === 'Finalist').length}
                </div>
                <p className="text-sm uppercase tracking-wider">Finalist Positions</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-4xl font-playfair text-accent mb-2">
                  {competitionsData.length}
                </div>
                <p className="text-sm uppercase tracking-wider">Total Competitions</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competitions;
