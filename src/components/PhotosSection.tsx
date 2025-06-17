
import React from 'react';

const PhotosSection: React.FC = () => {
  const photos = [
    {
      url: "/assets/photos/IMG_6346.jpg",
      title: "Espace Sanitaire"
    },
    {
      url: "/assets/photos/IMG_6349.jpg",
      title: "Espace Sanitaire"
    },
    {
      url: "/assets/photos/IMG_6350.jpg",
      title: "Salle à manger"
    },
    {
      url: "/assets/photos/IMG_6351.jpg",
      title: "Salle à manger"
    },
    {
      url: "/assets/photos/IMG_6352.jpg",
      title: "Salle à manger"
    },
    {
      url: "/assets/photos/IMG_6353.jpg",
      title: "Espace Sanitaire"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto font-finlandica">
        <h2 className="text-4xl font-bold  text-center text-restaurant-red mb-4">
          Galerie Photos
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Découvrez l'atmosphère unique de notre restaurant
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img 
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-restaurant-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
