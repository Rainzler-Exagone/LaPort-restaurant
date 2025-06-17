import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { MenuItem, PizzaItem, PizzaCombo } from './MenusSection'; // Assuming these types are defined
import PizzaMenuModal from './PizzaMenuModal';
import { it } from 'node:test';
import { Badge } from './ui/badge';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
  title: string;
  items: MenuItem[] | PizzaItem[] | PizzaCombo[];
  sizeNote?: string;
  extras?: {
    title: string;
    sizeNote?: string;
    items: PizzaItem[];
  };
  combos?: PizzaCombo[];
  footerNote?: string;
}

const StandardMenuModal: React.FC<MenuModalProps> = ({ 
  isOpen, 
  onClose, 
  description, 
  title, 
  items, 
  sizeNote, 
  extras, 
  combos, 
  footerNote 
}) => {
  const isPizzaMenu = sizeNote !== undefined;
  const isStandardMenu = !isPizzaMenu;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-restaurant-black border-restaurant-red">
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

        {sizeNote && (
          <div className="text-gray-300 text-sm mb-4 p-2 bg-restaurant-black-light rounded">
            {sizeNote}
          </div>
        )}

        {/* Standard Menu Items */}
        {isStandardMenu && (
          <div className="space-y-3">
            {(items as MenuItem[]).map((item, index) => (
              <MenuItemCard key={`std-${index}`} item={item} />
            ))}
             {footerNote && (
              <p className="text-gray-300 text-sm mt-4 italic">
                {footerNote}
              </p>
            )}
          </div>
        )}

        {/* Pizza Menu Items */}
        {isPizzaMenu && (
          <div className="space-y-6">
            <div className="space-y-3">
              {(items as PizzaItem[]).map((item, index) => (
                <PizzaItemCard key={`pizza-${index}`} item={item} />
              ))}
            </div>

            {/* Pizza Extras */}
            {extras && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-restaurant-red mb-2">
                  {extras.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{extras.sizeNote}</p>
                <div className="space-y-3">
                  {extras.items.map((item, index) => (
                    <PizzaItemCard key={`extra-${index}`} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Pizza Combos */}
            {combos && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-restaurant-red mb-3">
                  PIZZA-COMBO
                </h3>
                <div className="space-y-3">
                  {combos.map((combo, index) => (
                    <ComboItemCard key={`combo-${index}`} combo={combo} />
                  ))}
                </div>
              </div>
            )}

           
          </div>
        )}
      </DialogContent>
      <DialogFooter> {footerNote && (
              <p className="text-gray-300 text-sm mt-4 italic">
                {footerNote}
              </p>
            )}</DialogFooter>
    </Dialog>
  );
};

// Sub-components for better organization
const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="p-4 bg-restaurant-black-light rounded-lg border border-restaurant-red/20 hover:border-restaurant-red/50 transition-colors">
    <div className="flex justify-between items-start">
      <h4 className="text-white font-medium">{item.name} </h4><p className='text-gray-300'>{item.size && (item.size)}</p><p>{item.AddOnes && item.AddOnes.length > 0 && (item.AddOnes.map((e)=>(<p className='text-gray-400'>{e}</p>)))}</p>
      <p className="text-restaurant-red font-semibold ml-2">
        {item.price ? `${item.price}` : 'Prix sur demande'}
      </p>
    </div>
    {item.description && (
      <p className="text-gray-300 text-sm mt-1">
        {item.description} {item.sauceOptions && item.sauceOptions.length > 0 && (<h1>{item.sauceOptions.map((e)=>(<p>{e}</p>))}</h1>)}
      </p>
    )}
{    item.proteinOptions && item.proteinOptions.length > 0 && (item.proteinOptions.map((option, index) => (<small key={index} className=' text-gray-400'>{option} </small>)))
}  
    {item.isAddOn && (
      <p className="text-gray-300 text-sm mt-1">
        <Badge className='bg-red-400'>Add-One</Badge>
      </p>
    )}

  </div>

);




const ComboItemCard: React.FC<{ combo: PizzaCombo }> = ({ combo }) => (
  <div className="p-4 bg-restaurant-black-light rounded-lg border border-restaurant-red/20 hover:border-restaurant-red/50 transition-colors">
    <div className="flex justify-between items-start">
      <h4 className="text-white font-medium">{combo.name}</h4>
      <p className="text-restaurant-red font-semibold ml-2">
        {combo.price}€
      </p>
    </div>
    {combo.description && (
      <p className="text-gray-300 text-sm mt-1">
        {combo.description}
      </p>
    )}
  </div>
);

export default StandardMenuModal;







