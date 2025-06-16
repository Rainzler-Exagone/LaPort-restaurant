
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: string[];
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, title, items }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-restaurant-black border-restaurant-red">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-restaurant-red mb-4">
            {title}
          </DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-restaurant-red transition-colors"
          >
            <X size={24} />
          </button>
        </DialogHeader>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div 
              key={index}
              className="p-4 bg-restaurant-black-light rounded-lg border border-restaurant-red/20 hover:border-restaurant-red/50 transition-colors"
            >
              <h4 className="text-white font-medium">{item}</h4>
              <p className="text-gray-300 text-sm mt-1">
                Délicieux plat préparé avec les meilleurs ingrédients
              </p>
              <p className="text-restaurant-red font-semibold mt-2">
                Prix sur demande
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
