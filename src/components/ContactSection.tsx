
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-restaurant-red mb-4">
          Nous Joindre
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Contactez-nous pour réserver votre table ou pour toute information
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-4">
                <MapPin className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Adresse</h3>
              </div>
              <p className="text-gray-300">
                123 Rue de la Gastronomie<br />
                Québec, QC G1R 2L3<br />
                Canada
              </p>
            </div>

            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-4">
                <Phone className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Téléphone</h3>
              </div>
              <p className="text-gray-300">
                Restaurant: (418) 123-4567<br />
                Livraison: (418) 123-4568
              </p>
            </div>

            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-4">
                <Clock className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Heures d'ouverture</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>Lundi - Jeudi: 11h00 - 22h00</p>
                <p>Vendredi - Samedi: 11h00 - 23h00</p>
                <p>Dimanche: 12h00 - 21h00</p>
              </div>
            </div>

            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-4">
                <Mail className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-300">
                info@restaurant.com<br />
                reservation@restaurant.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-restaurant-black/80 p-8 rounded-lg border border-restaurant-red/30">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-restaurant-black border border-restaurant-red/30 rounded-lg text-white focus:border-restaurant-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-restaurant-black border border-restaurant-red/30 rounded-lg text-white focus:border-restaurant-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 bg-restaurant-black border border-restaurant-red/30 rounded-lg text-white focus:border-restaurant-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 bg-restaurant-black border border-restaurant-red/30 rounded-lg text-white focus:border-restaurant-red focus:outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-restaurant-red hover:bg-restaurant-red-dark text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
