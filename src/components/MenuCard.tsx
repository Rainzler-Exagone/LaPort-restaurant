
import React from 'react';
import { Card, CardContent, CardDescription } from '@/components/ui/card';

interface MenuCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, image, onClick }) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-restaurant-black/80 border-restaurant-red/30 hover:border-restaurant-red overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-restaurant-black/90 via-transparent to-transparent" />
      </div>
      <CardContent className="p-4 ">
        <h3 className="text-lg font-semibold text-white group-hover:text-restaurant-red transition-colors duration-300">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
