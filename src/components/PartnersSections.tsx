import { Facebook, Instagram, Linkedin, Twitter, User } from "lucide-react";
import React from "react";

const Partners: React.FC = () => {
  return (
    <section id="partenaires" className=" bg-gradient-to-b from-restaurant-black-light to-restaurant-black  py-16 lg:py-20 font-finlandica">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-200 mb-4">
            Partenaires de Confiance
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Travailler aux côtés des leaders de l'industrie pour obtenir des
            résultats exceptionnels{" "}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-4">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-4 border-white">
                <User className="w-12 h-12 lg:w-16 lg:h-16 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-1">Saputo</h3>
          </div>

          <div className="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <div className="relative mb-4">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-4 border-white">
                <User className="w-12 h-12 lg:w-16 lg:h-16 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-1">
              Moilano
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
