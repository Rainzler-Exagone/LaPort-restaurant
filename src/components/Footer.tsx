import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

interface FooterProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ activeSection, onSectionChange }) => {
    const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'menus', label: 'Menus' },
    { id: 'photos', label: 'Photos' },
    { id: 'contact', label: 'Nous Joindre' }
  ];
  return (
    <footer className="bg-black text-white font-finlandica">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Logo & Contact */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src="/assets/images/logoNew.png" alt="logo" />
              </div>
              <span className="text-lg font-bold leading-tight">
                Restaurant la Porte <br /> des Laurentides
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-1">📞 450-439-1711</p>
            <p className="text-sm text-gray-400 mb-4">📍 802 rue St-Isidore, St-Lin-Laurentides, QC</p>

            <div className="flex space-x-3 mt-2">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links Spread Horizontally */}
          <div className="flex flex-wrap gap-6 justify-evenly w-full lg:w-auto text-sm text-gray-300">
            <button   onClick={() => {onSectionChange('acceuil'); 
            window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); }} className="hover:text-white transition">Partenaires</button>
            <button    onClick={() => {onSectionChange('menus'); 
            window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); }}  className="hover:text-white transition">Menus</button>
            <button   onClick={() => {onSectionChange('contact'); 
            window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); }} className="hover:text-white transition">Contact</button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-xs">
          © 2025 Restaurant la Porte des Laurentides. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
