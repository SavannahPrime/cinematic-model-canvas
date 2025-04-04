
import { cn } from '@/lib/utils';
import { RevealOnScroll } from './RevealOnScroll';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  {
    name: 'Gucci',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Gucci-Logo-700x394.png'
  },
  {
    name: 'Dior',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Dior-Logo-700x394.png'
  },
  {
    name: 'Louis Vuitton',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo-700x394.png'
  },
  {
    name: 'Vogue',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Vogue_Logo.svg/1200px-Vogue_Logo.svg.png'
  },
  {
    name: 'Prada',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Prada-Logo-700x394.png'
  }
];

interface BrandLogosProps {
  className?: string;
  title?: string;
}

export function BrandLogos({ className, title = "Featured Collaborations" }: BrandLogosProps) {
  return (
    <section className={cn("py-16 bg-secondary/50", className)}>
      <div className="container-custom">
        <RevealOnScroll>
          <h2 className="heading-md text-center mb-12">{title}</h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <RevealOnScroll 
              key={brand.name}
              delay={index * 0.1}
              direction="up"
            >
              <div className="flex items-center justify-center p-4 h-24">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
