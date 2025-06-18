import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    window.scrollTo({
      top: 0, // adjust offset for fixed navbar
      behavior: "smooth",
    });
    onSectionChange(id); // update state
  };

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "menus", label: "Menus" },
    { id: "photos", label: "Photos" },
    { id: "contact", label: "Nous Joindre" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              className="flex items-center gap-2"
              onClick={() => {
                onSectionChange("accueil");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                src="/assets/images/restaurant-logo.png"
                alt="Restaurant Logo"
                className="h-14 w-auto md:h-20 rounded-lg"
              />
              <h1 className="text-4xl font-dancing text-gray-200">La Porte</h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-montserrat">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-restaurant-red border-b-2 border-restaurant-red"
                      : "text-white hover:text-restaurant-red hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-restaurant-red transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-restaurant-black/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-restaurant-red bg-restaurant-red/10"
                      : "text-white hover:text-restaurant-red hover:bg-restaurant-red/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
