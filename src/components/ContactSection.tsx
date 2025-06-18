import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id='contact'>
      <div className="min-h-screen py-20 px-4 font-montserrat">
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
                802 rue St-Isidore<br />
                St-Lin-Laurentides<br />
                Canada
              </p>
            </div>

            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-4">
                <Phone className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Téléphone</h3>
              </div>
              <p className="text-gray-300">
                Restaurant: (450) 439-1711<br />
              </p>
            </div>

            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-6">
                <Clock className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Heures d'ouverture et de livraison</h3>
              </div>
              <div className="grid gap-3">
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/60">
                  <span className="text-white font-medium">Lundi</span>
                  <span className="text-gray-300">11h00 --à-- 21h00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/60">
                  <span className="text-white font-medium">Mardi</span>
                  <span className="text-gray-300">11h00 --à-- 21h00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/60">
                  <span className="text-white font-medium">Mercredi</span>
                  <span className="text-gray-300">11h00 --à-- 21h00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/80">
                  <span className="text-white font-medium">Jeudi</span>
                  <span className="text-gray-300">11h00 --à-- 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/80">
                  <span className="text-white font-medium">Vendredi</span>
                  <span className="text-gray-300">11h00 --à-- 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/80">
                  <span className="text-white font-medium">Samedi</span>
                  <span className="text-gray-300">11h00 --à-- 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-restaurant-black-light/50 rounded border-l-3 border-restaurant-red/60">
                  <span className="text-white font-medium">Dimanche</span>
                  <span className="text-gray-300">11h00 --à-- 21h00</span>
                </div>
              </div>
            </div>

            <div className="bg-restaurant-black/80 p-6 rounded-lg border border-restaurant-red/30">
              <div className="flex items-center mb-4">
                <Mail className="text-restaurant-red mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-300">
                clo472@hotmail.com<br />
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
    </section>
  );
};

export default ContactSection;
