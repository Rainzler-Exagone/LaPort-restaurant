import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { MenuItem, PizzaItem, PizzaCombo } from './MenusSection';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  items?: (MenuItem | PizzaItem)[];
  sizeNote?: string;
  extras?: {
    title: string;
    sizeNote?: string;
    items: PizzaItem[];
  };
  combos?: PizzaCombo[];
  footerNote?: string;
}

const PizzaLivraisonMenuModal: React.FC<MenuModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  items = [], 
  sizeNote, 
  extras, 
  combos, 
  footerNote 
}) => {
  const renderMenuItem = (item: MenuItem | PizzaItem) => {
    if ('sizes' in item && item.sizes) {
      return (
        <tr className="border-b border-restaurant-red/20 hover:bg-restaurant-black-light transition-colors">
          <td className="py-3 px-4 text-white font-medium">
            {item.name}
            {item.description && (
              <p className="text-gray-300 text-sm mt-1">{item.description}</p>
            )}
          </td>
          {item.sizes.map((size, i) => (
            <td key={i} className="py-3 px-4 text-restaurant-red text-center">
              {size}
            </td>
          ))}
        </tr>
      );
    }
    return (
      <tr className="border-b border-restaurant-red/20 hover:bg-restaurant-black-light transition-colors">
        <td className="py-3 px-4 text-white font-medium">
          {item.name}
          {item.description && (
            <p className="text-gray-300 text-sm mt-1">{item.description}</p>
          )}
        </td>
        <td colSpan={3} className="py-3 px-4 text-restaurant-red text-center">
          {item.price || 'Prix sur demande'}
        </td>
      </tr>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-restaurant-black border-restaurant-red">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-restaurant-red mb-2">
            {title}
          </DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-restaurant-red transition-colors"
          >
            <X size={24} />
          </button>
        </DialogHeader>

        {description && (
          <DialogDescription>
            <p className='text-lg text-gray-100 mb-4'>{description}</p>
          </DialogDescription>
        )}

          

        {/* Main Items Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-restaurant-red">
                <th className="py-2 px-4 text-left text-white">Item</th>
                <th className="py-2 px-4 text-center text-white">10"</th>
                <th className="py-2 px-4 text-center text-white">12"</th>
                <th className="py-2 px-4 text-center text-white">14"</th>
                <th className="py-2 px-4 text-center text-white">16"</th>
                <th className="py-2 px-4 text-center text-white">17"</th>
                <th className="py-2 px-4 text-center text-white">18"</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => renderMenuItem(item))}
            </tbody>
          </table>
        </div>

        {/* Extras Section */}


        {extras && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-restaurant-red mb-2">
              {extras.title}
            </h3>
            {extras.sizeNote && (
              <p className="text-gray-300 text-sm mb-3">{extras.sizeNote}</p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-restaurant-red">
                    <th className="py-2 px-4 text-left text-white">Extra</th>
                    <th className="py-2 px-4 text-center text-white">10"</th>
                    <th className="py-2 px-4 text-center text-white">12"</th>
                    <th className="py-2 px-4 text-center text-white">14"</th>
                    <th className="py-2 px-4 text-center text-white">16"</th>
                    <th className="py-2 px-4 text-center text-white">17"</th>
                    <th className="py-2 px-4 text-center text-white">18"</th>
                  </tr>
                </thead>
                <tbody>
                  {extras.items.map((item, index) => renderMenuItem(item))}
                </tbody>
              </table>
            </div>
          </div>
        )}
       

        {/* Combos Section */}
        {combos && combos.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-restaurant-red mb-3">
              PIZZA-COMBO
            </h3>
            <div className="space-y-3">
              {combos.map((combo, index) => (
                <div 
                  key={`combo-${index}`}
                  className="p-4 bg-restaurant-black-light rounded-lg border border-restaurant-red/20 hover:border-restaurant-red/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-white font-medium">{combo.name}</h4>
                    {combo.price && (
                      <p className="text-restaurant-red font-semibold ml-2">
                        {combo.price}
                      </p>
                    )}
                  </div>
                  {combo.description && (
                    <p className="text-gray-300 text-sm mt-1">
                      {combo.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {footerNote && (
          <p className="text-gray-300 text-sm mt-4 italic">
            {footerNote}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PizzaLivraisonMenuModal;