
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl mb-4">ALISTAIR</h3>
            <p className="text-gray-400">Luxury model portfolio showcasing high-end fashion campaigns and editorial work.</p>
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@alistair.com" className="hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-playfair text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              <Link to="/competitions" className="text-gray-400 hover:text-white transition-colors">Competitions</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-playfair text-lg mb-4">Contact</h4>
            <p className="text-gray-400">For bookings and inquiries:</p>
            <a href="mailto:bookings@alistair.com" className="text-accent">bookings@alistair.com</a>
            <p className="text-gray-400 mt-2">Represented by:</p>
            <p className="font-medium">Elite Model Management</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Alistair. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-white">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-500 text-sm hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
