
import React from 'react';

const PhotosSection: React.FC = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
      title: "Plat Principal"
    },
    {
      url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
      title: "Ambiance Restaurant"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      title: "Intérieur Élégant"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
      title: "Cuisine Raffinée"
    },
    {
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      title: "Desserts Maison"
    },
    {
      url: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=400&fit=crop",
      title: "Service Premium"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-restaurant-red mb-4">
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
