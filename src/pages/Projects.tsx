
import { useState, useEffect } from 'react';
import { ChevronDown, X, ExternalLink, Camera, Users, CalendarDays, MapPin } from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ImageCarousel } from '@/components/ImageCarousel';
import { cn } from '@/lib/utils';

// Types
interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: number;
  cover: string;
  description: string;
  location: string;
  photographer: string;
  team: string;
  images: ProjectImage[];
  video?: string;
}

// Project Data
const projectsData: Project[] = [
  {
    id: 'gucci-spring-summer',
    title: 'Gucci Spring/Summer',
    client: 'Gucci',
    category: 'Campaign',
    year: 2023,
    cover: 'https://images.unsplash.com/photo-1584184924103-e310d9dc82fc',
    description: 'Leading the 2023 Spring/Summer campaign for Gucci, shot in the scenic landscapes of Tuscany. The collection explores themes of heritage and modernity, blending classic Gucci elements with fresh perspectives.',
    location: 'Tuscany, Italy',
    photographer: 'Alessandro Michele',
    team: 'Gucci Creative Team',
    images: [
      { src: 'https://images.unsplash.com/photo-1584184924103-e310d9dc82fc', alt: 'Gucci campaign main shot' },
      { src: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac5', alt: 'Gucci campaign detail' },
      { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a', alt: 'Gucci campaign outdoor' },
      { src: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db', alt: 'Gucci campaign portrait' }
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vogue-italia',
    title: 'Vogue Italia Editorial',
    client: 'Vogue',
    category: 'Editorial',
    year: 2023,
    cover: 'https://images.unsplash.com/photo-1596902852634-2d8b1c358255',
    description: 'A bold editorial for Vogue Italia exploring contrasts between light and shadow. The concept revolved around modern interpretations of classic art movements, bringing renaissance-inspired poses into contemporary fashion context.',
    location: 'Milan, Italy',
    photographer: 'Paolo Roversi',
    team: 'Vogue Italia Editorial Team',
    images: [
      { src: 'https://images.unsplash.com/photo-1596902852634-2d8b1c358255', alt: 'Vogue Italia cover shot' },
      { src: 'https://images.unsplash.com/photo-1521302200778-33c603469e6f', alt: 'Vogue Italia editorial page 1' },
      { src: 'https://images.unsplash.com/photo-1620800692591-f8d91597b213', alt: 'Vogue Italia editorial page 2' },
      { src: 'https://images.unsplash.com/photo-1599595344070-c456bea6ee11', alt: 'Vogue Italia editorial page 3' }
    ]
  },
  {
    id: 'dior-homme',
    title: 'Dior Homme Fragrance',
    client: 'Dior',
    category: 'Fragrance',
    year: 2022,
    cover: 'https://images.unsplash.com/photo-1541643600914-78b084683601',
    description: 'Face of the Dior Homme fragrance campaign, shot in Paris. The concept explores masculinity and elegance, set against the backdrop of Parisian architecture and nightlife.',
    location: 'Paris, France',
    photographer: 'Steven Klein',
    team: 'Dior Beauty Creative Team',
    images: [
      { src: 'https://images.unsplash.com/photo-1541643600914-78b084683601', alt: 'Dior Homme campaign main' },
      { src: 'https://images.unsplash.com/photo-1621784563807-3a8f432073e7', alt: 'Dior Homme campaign detail' },
      { src: 'https://images.unsplash.com/photo-1598971639058-c613e7d46657', alt: 'Dior Homme campaign night scene' },
      { src: 'https://images.unsplash.com/photo-1582015752624-e8b1c8367408', alt: 'Dior Homme campaign portrait' }
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'prada-runway',
    title: 'Prada FW Runway',
    client: 'Prada',
    category: 'Runway',
    year: 2022,
    cover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    description: 'Opening and closing the Prada Fall/Winter runway show in Milan. The collection featured bold geometric patterns and innovative textures, pushing the boundaries of menswear.',
    location: 'Milan, Italy',
    photographer: 'Runway Photography Team',
    team: 'Prada Show Production',
    images: [
      { src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', alt: 'Prada runway opening look' },
      { src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b', alt: 'Prada runway second look' },
      { src: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35', alt: 'Prada runway detail' },
      { src: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01', alt: 'Prada runway closing look' }
    ]
  },
  {
    id: 'burberry-campaign',
    title: 'Burberry Heritage',
    client: 'Burberry',
    category: 'Campaign',
    year: 2021,
    cover: 'https://images.unsplash.com/photo-1664575198308-3959904fa430',
    description: 'A campaign celebrating Burberry\'s heritage and iconic outerwear collection. Shot across the English countryside to connect with the brand\'s British roots and history.',
    location: 'London, UK',
    photographer: 'Alasdair McLellan',
    team: 'Burberry Creative Direction',
    images: [
      { src: 'https://images.unsplash.com/photo-1664575198308-3959904fa430', alt: 'Burberry campaign main shot' },
      { src: 'https://images.unsplash.com/photo-1577455394560-0002ffb7fc15', alt: 'Burberry campaign countryside' },
      { src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3', alt: 'Burberry campaign detail' },
      { src: 'https://images.unsplash.com/photo-1603217040347-361966e2e618', alt: 'Burberry campaign portrait' }
    ]
  },
  {
    id: 'louis-vuitton',
    title: 'Louis Vuitton Travel',
    client: 'Louis Vuitton',
    category: 'Campaign',
    year: 2021,
    cover: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    description: 'Face of the Louis Vuitton travel collection campaign, shot across various global destinations. The campaign captures the essence of luxury travel and the brand\'s commitment to craftsmanship.',
    location: 'Multiple Locations',
    photographer: 'Mert & Marcus',
    team: 'Louis Vuitton Creative Studio',
    images: [
      { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f', alt: 'Louis Vuitton campaign main' },
      { src: 'https://images.unsplash.com/photo-1594759845217-e9b5ee023587', alt: 'Louis Vuitton campaign japan' },
      { src: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad', alt: 'Louis Vuitton campaign desert' },
      { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', alt: 'Louis Vuitton campaign portrait' }
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];
  const years = ['All', ...Array.from(new Set(projectsData.map(project => project.year.toString())))];
  
  // Reset scroll position when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter projects
  useEffect(() => {
    let filtered = [...projectsData];
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (selectedYear !== 'All') {
      filtered = filtered.filter(project => project.year.toString() === selectedYear);
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedYear]);
  
  // Handle project click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
        height="h-[50vh]"
      >
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <RevealOnScroll>
              <h1 className="heading-xl text-white mb-6">Projects</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-xl">
                Explore my portfolio of campaigns, editorials, and runway shows with leading fashion brands.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Filters */}
      <section className="bg-white py-8 sticky top-0 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Category</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 border border-input bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent min-w-[150px]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
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
            
            {/* Results Count */}
            <div className="ml-auto text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.1} direction="up">
                  <div 
                    className="group cursor-pointer card-hover"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                      <img 
                        src={project.cover} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-sm">View Project</span>
                      </div>
                    </div>
                    <h3 className="font-playfair text-xl mb-1">{project.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground text-sm">{project.client}</p>
                      <p className="text-muted-foreground text-sm">{project.year}</p>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No projects found with the selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedYear('All');
                }}
                className="mt-4 px-4 py-2 text-sm border border-input rounded-md hover:bg-secondary transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <div 
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity",
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            
            {/* Modal Scrollable Content */}
            <div className="min-h-[50vh]">
              {/* Image Slider */}
              <div className="h-[60vh]">
                <ImageCarousel images={selectedProject.images} />
              </div>
              
              {/* Project Details */}
              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="heading-lg mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                    <span className="inline-block text-sm px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {selectedProject.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <CalendarDays size={16} />
                      <span>{selectedProject.year}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-8">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h3 className="text-sm uppercase text-muted-foreground tracking-wider mb-1">Client</h3>
                      <p className="font-medium">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase text-muted-foreground tracking-wider mb-1">Photographer</h3>
                      <p className="font-medium flex items-center gap-1">
                        <Camera size={16} />
                        {selectedProject.photographer}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase text-muted-foreground tracking-wider mb-1">Team</h3>
                      <p className="font-medium flex items-center gap-1">
                        <Users size={16} />
                        {selectedProject.team}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Video (if available) */}
                {selectedProject.video && (
                  <div className="mb-8">
                    <h3 className="text-xl font-playfair mb-4">Behind the Scenes</h3>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <iframe 
                        src={selectedProject.video} 
                        title="Project video"
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                
                {/* Back to projects */}
                <div className="flex justify-center mt-8">
                  <button 
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-input rounded-md hover:bg-secondary/80 transition-colors duration-300"
                  >
                    Back to Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
