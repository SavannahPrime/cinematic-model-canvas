
import { useEffect } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ContactForm } from '@/components/ContactForm';
import { ParallaxSection } from '@/components/ParallaxSection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b"
        height="h-[40vh]"
      >
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <RevealOnScroll>
              <h1 className="heading-xl text-white mb-4">Contact</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-xl">
                Get in touch for bookings, collaborations, or press inquiries.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <RevealOnScroll direction="left">
              <div className="space-y-10">
                <div>
                  <h2 className="heading-md mb-6">Let's Connect</h2>
                  <p className="body-text mb-8">
                    Whether you're interested in booking me for a campaign, editorial, or 
                    runway show, I'd love to hear from you. Please use the form or contact 
                    details below to get in touch.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@alistair.com" className="text-accent hover:underline">
                        contact@alistair.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Representation</h3>
                      <p>Elite Model Management</p>
                      <p className="text-muted-foreground">New York & Paris</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>Contact agency for booking inquiries</p>
                      <a href="tel:+12125551234" className="text-accent hover:underline">
                        +1 (212) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <h3 className="font-semibold mb-4">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2 border border-input rounded-md hover:bg-secondary transition-colors duration-300"
                    >
                      <Instagram size={18} />
                      <span>Instagram</span>
                      <ExternalLink size={14} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2 border border-input rounded-md hover:bg-secondary transition-colors duration-300"
                    >
                      <Facebook size={18} />
                      <span>Facebook</span>
                      <ExternalLink size={14} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2 border border-input rounded-md hover:bg-secondary transition-colors duration-300"
                    >
                      <Twitter size={18} />
                      <span>Twitter</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            
            {/* Contact Form */}
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="bg-secondary p-8 rounded-lg">
                <h2 className="heading-md mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white py-20 border-t border-border">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="heading-md">Representation</h2>
              <p className="text-muted-foreground mt-2">
                I am represented by Elite Model Management in these locations.
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-playfair text-xl mb-4">New York</h3>
                <p className="mb-2">245 Fifth Avenue</p>
                <p className="mb-2">New York, NY 10016</p>
                <p className="mb-4">United States</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  View on map <ExternalLink size={14} />
                </a>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-playfair text-xl mb-4">Paris</h3>
                <p className="mb-2">18 Rue Réaumur</p>
                <p className="mb-2">75003 Paris</p>
                <p className="mb-4">France</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  View on map <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Contact;
