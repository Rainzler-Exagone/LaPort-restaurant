import React from 'react';

const AccueilSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-dancing">
          Bienvenue
        </h1>
        <h2 className="text-3xl md:text-4xl text-restaurant-red mb-8 font-playfair">
          Restaurant Gastronomique
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Découvrez une expérience culinaire exceptionnelle dans un cadre élégant. 
          Nos chefs passionnés vous proposent une cuisine raffinée alliant tradition et modernité.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-restaurant-red hover:bg-restaurant-red-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Découvrir nos Menus
          </button>
          <button className="border border-restaurant-red text-restaurant-red hover:bg-restaurant-red hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Réserver une Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccueilSection;
