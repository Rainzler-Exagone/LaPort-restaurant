import React from 'react';

interface AccueilSectionProps {
  onNavigateToMenus?: () => void;
}

const AccueilSection: React.FC <AccueilSectionProps> = ({ onNavigateToMenus }) => {
  return (
    <div>
    <div className="min-h-screen relative flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/restaurant.mp4" // change to your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Foreground content */}
      <div className="max-w-4xl mx-auto animate-fade-in relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-dancing">
          Bienvenue
        </h1>
        <h2 className="text-3xl md:text-4xl text-restaurant-red mb-8 font-playfair">
          au restaurant la Porte des Laurentides
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed font-playfair">
          Découvrez une expérience culinaire exceptionnelle dans un cadre élégant.
          Nos chefs passionnés vous proposent une cuisine raffinée alliant tradition et modernité.
        </p>
        <div className="flex justify-center">
           <button 
              onClick={onNavigateToMenus}
              className="bg-restaurant-red hover:bg-restaurant-red-dark text-white px-8 py-4 rounded-lg font-semibold font-playfair transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Découvrir nos Menus
            </button>
        </div>
      </div>
       {/* Sharp Triangle Bottom Border - Pointing Down */}
      {/* Transparent Triangle Reveal */}

     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
  <svg 
    className="relative block w-full h-24 md:h-28"  // Increased height
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1200 180"  // Increased viewBox height
    preserveAspectRatio="none"
  >
    {/* Black area that follows the enlarged triangle shape */}
    <path 
      d="M 0 90 L 600 180 L 1200 90 L 1200 180 L 0 180 Z"  // Adjusted coordinates
      fill="black" 
    />
    
    {/* Larger transparent triangle */}
    <polygon 
      points="0,0 1200,0 600,180"  // Extended to new height
      fill="transparent" 
    />
  </svg>
</div>
{/* <div className="absolute  bottom-0 left-0 w-full overflow-hidden leading-none z-30">
  <svg 
    className="relative  block w-full h-12 md:h-16" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none"
  >
    <polygon 
      points="0,0 1200,0 600,120" 
      fill="black"
    />
  </svg>
</div> */}

    </div>



 <div className="py-20 px-4 bg-gradient-to-b from-restaurant-black to-restaurant-black-light">
  
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-restaurant-red mb-6 font-dancing">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-restaurant-red mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">
                Une Tradition Familiale
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
               Depuis 1993, nous servons avec passion.
Depuis plus de 30 ans, Restaurant La Porte des Laurentides accueille ses clients avec le même engagement envers la qualité, la générosité et le service chaleureux. Fondé en 1993, notre établissement est devenu une véritable institution locale, où familles et amis se réunissent pour savourer des plats faits maison dans une ambiance conviviale. Chaque assiette raconte une histoire, chaque visite est un souvenir — et c`est avec fierté que nous continuons à vous servir, génération après génération.
              </p>
  
              <div className="flex items-center space-x-4 pt-4">
                <div className="text-restaurant-red font-bold text-xl">30+</div>
                <div className="text-gray-300">Années d'Excellence</div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chef en cuisine" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-restaurant-red text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">★★★</div>
                  <div className="text-sm">Michelin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccueilSection;
