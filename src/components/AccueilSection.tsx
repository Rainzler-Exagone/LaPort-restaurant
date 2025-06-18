import { User } from "lucide-react";
import React from "react";
import Partners from "./PartnersSections";
import SpecialsSection from "./SpecialsSection";

interface AccueilSectionProps {
  onNavigateToMenus?: () => void;
}

const AccueilSection: React.FC<AccueilSectionProps> = ({
  onNavigateToMenus,
}) => {
  return (
    <>
    <div>
      <section id="accueil">
        <div className="min-h-screen relative flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/assets/rest.mp4" // change to your video path
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Foreground content */}
        <div className="max-w-4xl mx-auto animate-fade-in relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            Bienvenue
          </h1>
          <h2 className="text-3xl md:text-4xl text-restaurant-red mb-8 font-montserrat">
            au restaurant la Porte des Laurentides
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed font-montserrat">
            Découvrez une expérience culinaire exceptionnelle dans un cadre
            élégant. Nos chefs passionnés vous proposent une cuisine raffinée
            alliant tradition et modernité.
          </p>
          <div className="flex justify-center">
            <button
              onClick={onNavigateToMenus}
              className="bg-restaurant-red hover:bg-restaurant-red-dark text-white px-8 py-4 rounded-lg font-semibold font-montserrat transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Découvrir nos Menus
            </button>
          </div>
        </div>
        {/* Sharp Triangle Bottom Border - Pointing Down */}
        {/* Transparent Triangle Reveal */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
          <svg
            className="relative block w-full h-24 md:h-28" // Increased height
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 180" // Increased viewBox height
            preserveAspectRatio="none"
          >
            {/* Black area that follows the enlarged triangle shape */}
            <path
              d="M 0 90 L 600 180 L 1200 90 L 1200 180 L 0 180 Z" // Adjusted coordinates
              fill="black"
            />

            {/* Larger transparent triangle */}
            <polygon
              points="0,0 1200,0 600,180" // Extended to new height
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
       <section>
        <SpecialsSection/>
       </section>
      </section>
    <section id="histoire">
        <div  className="py-20 px-4 bg-gradient-to-b from-restaurant-black to-restaurant-black-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-restaurant-red mb-6 font-montserrat">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-restaurant-red mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4 font-montserrat">
                Une Tradition Familiale
              </h3>
              <p className="text-gray-300 leading-relaxed font-montserrat text-lg">
                Depuis qu’il est arrivé au Québec en 1966, Spiro Mourelatos
                entretient une vive passion pour le milieu de la restauration. À
                seulement 19 ans, il a fondé son premier restaurant, Place
                Mont-Laurier Pizza, en 1970. Onze ans plus tard, lui et M.
                Tuffié ont créé le Napoli, à Amos en Abitibi, qui connaît
                toujours une grande popularité. En 1987, trois ans après s’être
                établis à Terrebonne, les deux complices ont fondé à Saint-Lin
                La Porte des Laurentides, qui appartient aujourd’hui à M. Tuffié
                et à son fils.
                <br />
                <br />
                « <span className="font-bold">J’aime et j’aimerai toujours la cuisine</span> »,
                soutient M. Mourelatos, lui qui n`a d’yeux et de projets que
                pour ce domaine qui le passionne.
              </p>

              <div className="flex items-center space-x-4 pt-4 font-montserrat">
                <div className="text-restaurant-red font-bold text-xl">30+</div>
                <div className="text-gray-300">Années d'Excellence</div>
              </div>
            </div>
            
            
           <div className="relative lg:pl-8 px-4">
  <div className="flex flex-col lg:block w-full h-auto lg:h-[600px] space-y-6 lg:space-y-0">
    
    {/* Top Image (On mobile: first column) */}
    <div className="relative w-full lg:absolute lg:inset-0 lg:w-5/6 lg:h-5/6 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
      <img 
        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Team collaboration"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
    </div>

    {/* Bottom Image (On mobile: second column) */}
    <div className="relative w-full lg:absolute lg:-bottom-8 lg:-right-4 lg:w-5/6 lg:h-5/6 rounded-2xl overflow-hidden shadow-xl transform lg:-rotate-3 transition-transform duration-500">
      <img 
        src="/assets/photos/certificat.jpg" 
        alt="Innovation workspace"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/10 to-pink-600/10"></div>
    </div>

  </div>
</div>
      
      
             
{/*               

            <div className="flex flex-col md:relative ">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef en cuisine"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              
               <div className="absolute -bottom-8 -right-8 w-5/6 h-6/5 rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img 
                  src="/assets/photos/certificat.jpg" 
                  alt="Certificat"
                  className="w-auto h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/10 to-pink-600/10"></div>
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </section>
      
    </div>
    <Partners/>
    </>
  );
};

export default AccueilSection;
