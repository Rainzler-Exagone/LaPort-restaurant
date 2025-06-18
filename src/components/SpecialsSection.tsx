
import { specials } from '@/lib/data';
import React from 'react';

const SpecialsSection: React.FC = () => {


  return (
       <div 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlay from black to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-restaurant-red mb-6 font-montserrat">
              Nos Spéciaux
            </h2>
            <div className="w-24 h-1 bg-restaurant-red mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg font-montserrat max-w-2xl mx-auto">
              Découvrez nos offres exceptionnelles, parfaites pour partager en famille ou entre amis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((special) => (
              <div key={special.id} className="group relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur-sm border border-gray-700 hover:border-restaurant-red transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="absolute top-4 right-4 bg-restaurant-red text-white px-4 py-2 rounded-full font-bold text-lg font-dancing">
                  {special.price}
                </div>
                
                <div className="p-6 pt-16">
                  <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                    {special.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-montserrat text-sm">
                    {special.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
  );
};

export default SpecialsSection;
