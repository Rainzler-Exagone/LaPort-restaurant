import React from 'react';
import PizzaMenuModal from './PizzaMenuModal';
import { MenuItem, PizzaItem, PizzaCombo } from './MenusSection';
import StandardMenuModal from './StandardMenuModal';
import SaladMenuModal from './SaladModal';
import PizzaLivraisonMenuModal from './PizzaLivraisonMenuModal';
import PatesMenuModal from './PatesMenuModal';
import SubmarineMenuModal from './submarineMenuModal';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  items?: (MenuItem | PizzaItem)[];
  sizeLabels?: string[];
  sizeNote?: string;
  extras?: {
    title: string;
    sizeNote?: string;
    items: PizzaItem[];
  };
  combos?: PizzaCombo[];
  footerNote?: string;
}
const MenuModal: React.FC<MenuModalProps> = (props) => {
  switch (props.title )  {
    case 'Nos Pizzas':
      return <PizzaMenuModal {...props} />;
    case 'Les Pizzas':
      return <PizzaLivraisonMenuModal {...props}/>
    case 'Nos Salades ':
    case 'Frites et Poutines':
      return <SaladMenuModal {...props} />;
    case 'Pâtes':
      return <PatesMenuModal {...props} />;
    case 'Nos Sous-marins':
      return <SubmarineMenuModal {...props} />;
    default:
      return <StandardMenuModal {...props} items={props.items ?? []} />;
  }
};


export default MenuModal;
