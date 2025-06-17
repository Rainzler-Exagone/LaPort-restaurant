import React, { useState } from "react";
import MenuCard from "./MenuCard";
import PizzaMenuModal from "./PizzaMenuModal";
import StandardMenuModal from "./StandardMenuModal";
import MenuModal from "./MenuModalRouter";
import { beverageMenu, chickenMenu, clubSandwichMenu, entreesSection, grillMenu, Images, ImagesLivraison, pastaMenu, pizzaLivraisonMenu, poutineMenu, riceMenu, saladMenu, seafoodMenu, SpecialDelivery, submarineMenu, vealMenu } from "@/lib/data";

export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  sauceOptions?: string[];
  options?:string[]
  isAddOn?: boolean
  includes?: string
  proteinOptions?: string[];
  upgradeOptions?: upgradeOption[]
  composition? : string,
  preparation?: string
  size?: string
  temperatureOptions?: string[];
  variantOptions?: string[];
  prices?: string[];
  AddOnes?: string[];
}

interface upgradeOption{
  price: string,
  description: string
}

export interface MenuSection {
  title: string;
  description?: string;
  sizeNote?: string;
  items: MenuItem[] | PizzaItem[];
  sizeLabels?: string[]; 
  extras?: {
    title: string;
    sizeNote?: string;
    items: PizzaItem[];
  };
  combos?: PizzaCombo[];
  footerNote?: string;
}
export interface PizzaItem extends MenuItem {
  sizes?: string[]; // For pizza size variations
  prices?: string[]; // For pizza size variations

}

export interface PizzaCombo  {
  name: string;
  price: string;
  description?: string
}

export interface PizzaSection {
  title: string;
  type:string
  description?: string;
  sizeNote?: string;
  items: PizzaItem[];
  sizeLabels?: string[]; 
  extras: {
    title: string;
    sizeNote?: string;
    items: PizzaItem[];
  };
  combos?: PizzaCombo[];
  footerNote?: string;
}
export interface SaladSection {
  title: string;
  description?: string;
  sizeNote?: string;
  items: SaladItem[];
}
export interface SaladItem extends MenuItem {
   sizes?: string[]; // For pizza size variations

}
interface extras {
   
    title: string;
    sizeNote?: string;
    items: PizzaItem[];
  
}


type AnyMenuSection = MenuSection ;


const MenusSection: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuSection | PizzaSection | null>(null);
   const isPizzaSection = (section: AnyMenuSection): section is PizzaSection => {
    return 'extras' in section && 'sizeNote' in section && 'sizeLabels' in section && 'combos' in section;
  };

 const getMenuSpecificProps = (section: AnyMenuSection): Partial<MenuSection> => {
  return {
    ...('sizeNote' in section && { sizeNote: section.sizeNote }),
    ...('sizeLabels' in section && { sizeLabels: section.sizeLabels }),
    ...('extras' in section && { extras: section.extras }),
    ...('combos' in section && { combos: section.combos }),
    ...('footerNote' in section && { footerNote: section.footerNote })
  };
};

const pizzaMenu: MenuSection = {
  title: "Nos Pizzas",
  description: "Toutes nos pizzas sont une grandeur de plus que la compétition | Choix de sauce à pizza, à la viande ou tomate basilic",
  sizeNote: "Fromage Saputo | 10\" | 12\" | 14\"",
  sizeLabels : ["10","12","14"],
  items: [
    {
      name: "New Milano",
      sizes: ["bamb_", "petite_", "moy__"]
    },
    {
      name: "Spécial La Porte",
      sizes: ["17,95", "21,95", "26,95"],
      description: "toute garnie, oignons et bacon"
    },
    {
      name: "Toute garnie",
      sizes: ["15,95", "20,95", "24,95"]
    },
    {
      name: "Pepperoni (ou bacon) et fromage",
      sizes: ["14,95", "19,95", "23,95"]
    },
    {
      name: "Fruits de mer",
      sizes: ["20,95", "25,95", "33,95"],
      description: "pétoncles, crevettes, goberge"
    },
    {
      name: "Spéciale St-Lin",
      sizes: ["19,95", "24,95", "32,95"],
      description: "boeuf haché, oignons, piments, champignons et fromage"
    },
    {
      name: "Spécial Laurentides",
      sizes: ["17,95", "21,95", "26,95"],
      description: "toute garnie avec spaghetti sauce à la viande"
    },
    {
      name: "Spéciale Déli",
      sizes: ["18,95", "22,95", "27,95"],
      description: "toute garnie avec smoked meat"
    },
    {
      name: "Spéciale 3 viandes",
      sizes: ["18,95", "22,95", "27,95"],
      description: "pepperoni, bacon et saucisse italienne"
    },
    {
      name: "Nature",
      sizes: ["14,95", "17,95", "21,95"],
      description: "tomates et fromage"
    },
    {
      name: "Grecque",
      sizes: ["17,95", "21,95", "26,95"],
      description: "féta, olives noires, oignons, tomates et fromage"
    },
    {
      name: "Végétarienne",
      sizes: ["17,95", "21,95", "26,95"],
      description: "champignons, piments, oignons, tomates, brocoli et chou-fleur"
    },
    {
      name: "Hawaienne",
      sizes: ["17,95", "21,95", "26,95"],
      description: "jambon et ananas"
    }
  ],
  extras: {
    title: "EXTRAS",
    sizeNote: "10\" | 12\" | 14\"",
    items: [
      {
        name: "Légumes",
        sizes: ["2,00", "2,50", "3,00"]
      },
      {
        name: "Viande ou fromage ou anchois",
        sizes: ["3,00", "4,00", "5,00"]
      },
      {
        name: "Crevettes",
        sizes: ["5,00", "6,00", "7,00"]
      }
    ]
  },
  combos: [
    {
      name: "Pizza-Ghetti (Calzone)",
      price: "18,95",
      description: "avec spaghetti sauce à la viande"
    },
    {
      name: "Pizza-poutine",
      price: "21,95"
    },
    {
      name: "Pizza-poutine italienne",
      price: "22,95"
    },
    {
      name: "Assiette italienne (pizza 8 po)",
      price: "18,95",
      description: "avec spaghetti sauce à la viande"
    },
    {
      name: "Pizza-frites",
      price: "18,95"
    },
    {
      name: "Pizza-César",
      price: "18,95"
    }
  ],
  footerNote: "Choix de sauce à pizza, à la viande ou tomate basilic"
};


  const salleMenuItems: MenuSection[] = [
    {
      title: "Table d'hôte (th)",
      items: [
        { name: " Inclus: soupe, café ou thé et dessert ", price: "3,95" },
      ],
    },
    {
      title: "Entrées",
      items: [
        {
          name: "Crevettes ou escargots",
          price: "7,95 (+ gratiné +2,00, + sur pâte à pizza +2,00)",
        },
        { name: "Coquille St-Jacques (entrée)", price: "14,95" },
        { name: "Bâtonnets de fromage (4 bâtonnets)", price: "7,95" },
        { name: "Soupe du jour", price: "3,95" },
        { name: "Soupe à l'oignon gratinée", price: "10,95" },
        { name: "Salade César (petite)", price: "10,95" },
        { name: "Salade du chef (petite)", price: "9,95" },
        { name: "Bruscheta", price: "9,95" },
        { name: "Féra & olives noires", price: "9,95" },
        { name: "Pain à l'ail", price: "4,95" },
        { name: "Pain à l'ail gratiné", price: "7,25" },
        { name: "Ailes de poulet (12)", price: "16,95" },
      ],
    },
    {
      title: "Salades",
      items: [
        {
          name: "Salade maison",
          price: "19,95",
          description:
            "Salade du chef avec crevettes ou poulet grillé sur un nid de riz avec féta",
        },
        {
          name: "Salade du chef",
          price: "13,95",
        },
        {
          name: "Salade césar",
          price: "13,95",
        },
        {
          name: "Salade césar au poulet",
          price: "18,95",
          description: "Grillé ou croustillant",
        },
        {
          name: "Salade combinée",
          price: "18,95",
          description:
            "Jambon, poulet, fromage, oeuf, salade verte, salade de chou",
        },
        {
          name: "Salade au poulet",
          price: "18,95",
        },
        {
          name: "Salade grecque",
          price: "18,95",
        },
      ],
    },
    {
      title: "Club sandwichs (th)",
      items: [
        {
          name: "Club poutine",
          price: "20.95",
          description: "avec salade de chou, sauce BBQ et frites",
        },
        {
          name: "Club sandwich",
          price: "17.95",
          description: "avec salade de chou, sauce BBQ et frites",
        },
        {
          name: "Club spécial maison",
          price: "18.95",
          description:
            "jambon, poulet, fromage - avec salade de chou, sauce BBQ et frites",
        },
      ],
    },
{
  title: "Pâtes et escalopes de veau (th)",
  items: [
    { 
      name: "Spécial La Porte", 
      price: "18.95",
      description: "pepperoni, bacon, piments, champignons, gratiné"
    },
    { 
      name: "Pâtes avec champignon ou pepperoni ou smoked meat", 
      price: "16.95"
    },
    { 
      name: "Pâtes crème et ail ou sauce rosée", 
      price: "12.95"
    },
    { 
      name: "Pâtes crème et ail ou sauce rosée avec crevettes ou poulet", 
      price: "15.95"
    },
    { 
      name: "Pâtes extra viande ou gratiné", 
      price: "5.00",
      description: "supplément"
    },
    { 
      name: "Escalope de veau Parmesan", 
      price: "20.95"
    },
    { 
      name: "Escalope de veau maison", 
      price:" 21.95"
    }
  ]
},
{
  title: "Nos riz (th)",
  items: [
    { 
      name: "Spécial riz frit au poulet et légumes", 
      price: "19.95",
      description: "avec 2 egg rolls et sauce aux prunes"
    },
    { 
      name: "Riz frit au poulet et légumes", 
      price: "16.95"
    },
    { 
      name: "Riz frit aux légumes", 
      price: "14.95"
    },
    { 
      name: "Riz frit nature", 
      price: "10.95"
    },
    { 
      name: "Riz frit au poulet ou bacon", 
      price: "15.95"
    },
    { 
      name: "Riz frit aux crevettes", 
      price: "18.95"
    },
    { 
      name: "Bol de riz nature", 
      price: "4.95"
    },
    { 
      name: "1 egg roll avec sauce aux prunes", 
      price: "3.25"
    },
    { 
      name: "2 egg rolls avec sauce aux prunes", 
      price: "5.25"
    }
  ]
},
{
  title: "Notre grill (th)",
  items: [
    { 
      name: "Filet mignon AAA", 
      price: "42.95",
      description: "avec sauce au poivre, salade, champignons, riz et pommes de terre"
    },
    { 
      name: "Hamburger steak avec oignons", 
      price: "17.95"
    },
    { 
      name: "Brochette de poulet", 
      price: "21.95",
      description: "avec riz, salade, pommes de terre et sauce brune ou tzaziki"
    },
    { 
      name: "Brochettes (2) de souvlaki (porc)", 
      price: "19.95",
      description: "avec riz, salade, pommes de terre et sauce brune ou tzaziki"
    },
    { 
      name: "Demi souvlaki", 
      price: "17.95",
      description: "avec riz, salade, pommes de terre et sauce brune ou tzaziki"
    },
    { 
      name: "Ajout de 3 crevettes papillon", 
      price: "7.00",
      description: "supplément"
    },
    { 
      name: "Pita porc avec frites", 
      price: "13.95"
    },
    { 
      name: "Pita poulet avec frites", 
      price: "16.95"
    },
    { 
      name: "Repas pita au porc", 
      price: "18.95",
      description: "avec riz, salade, patates grecque ou frites"
    },
    { 
      name: "Repas pita au poulet", 
      price: "19.95",
      description: "avec riz, salade, patates grecque ou frites"
    },
    { 
      name: "Pita porc", 
      price: "11.95"
    },
    { 
      name: "Pita poulet", 
      price: "13.95"
    },
    { 
      name: "Assiette de burger spécial", 
      price: "16.95",
      description: "fromage, bacon, oignons caramélisés, salade de chou, frites et sauce"
    }
  ]
},
{
  title: "Poissons et fruits de mer (th)",
  items: [
    { 
      name: "Assiette de fruits de mer", 
      price: "42.95",
      description: "pétoncle, crevettes papillon, filet de sole et crevettes de Matane - avec salade, riz et pommes de terre"
    },
    { 
      name: "Crevettes papillon (8) avec beurre à l'ail", 
      price: "24.95",
      description: "avec salade, riz et pommes de terre"
    },
    { 
      name: "Pétoncles de mer frits", 
      price: "20.95",
      description: "avec salade, riz et pommes de terre"
    },
    { 
      name: "Filet de sole pané", 
      price: "18.95",
      description: "avec salade, riz et pommes de terre"
    },
    { 
      name: "Filet de sole meunière", 
      price: "20.95",
      description: "avec salade, riz et pommes de terre"
    },
    { 
      name: "Fish'n chips", 
      price: "20.95",
      description: "avec salade, riz et pommes de terre"
    },
    { 
      name: "Repas coquille St-Jacques", 
      price: "22.95",
      description: "avec salade, riz et pommes de terre"
    },
    { 
      name: "Assiette surf'n turf", 
      price: "48.95",
      description: "avec sauce au poivre et beurre à l'ail - avec salade, riz et pommes de terre"
    }
  ]
},
{
  title: "Frites et poutines",
  items: [
    { 
      name: "Poutine (petite/grosse)", 
      price: "9.95",
      description: "14,95 pour portion grosse"
    },
    { 
      name: "Poutine italienne (petite/grosse)", 
      price: "10.95",
      description: "15,95 pour portion grosse"
    },
    { 
      name: "Poutine pepperoni (petite/grosse)", 
      price: "10.95",
      description: "15,95 pour portion grosse"
    },
    { 
      name: "Poutine poulet (petite/grosse)", 
      price: "10.95",
      description: "15,95 pour portion grosse"
    },
    { 
      name: "Poutine déli smoked meat (petite/grosse)", 
      price: "11.95",
      description: "16,95 pour portion grosse"
    },
    { 
      name: "Extra fromage ou viande", 
      price: "4.00",
      description: "+5,00 pour portion grosse"
    },
    { 
      name: "Frites (petite/grosse)", 
      price: "3.95",
      description: "8,95 pour portion grosse"
    },
    { 
      name: "Frites sauce", 
      price:"5.25"
    },
    { 
      name: "Frites sauce italienne", 
      price: "6.95"
    },
    { 
      name: "Rondelles d'oignon", 
      price: "6.95"
    }
  ]
},
{
  title: "Sous-marins",
  description: "Tous nos sous-marins sont garnis de laitue, tomates, fromage et choix de vinaigrette maison, italienne ou française",
  items: [
    {
      name: "#1 Steak",
      price: "17.95",
      description: "10\" - 19,95 pour 14\""
    },
    {
      name: "#2 Steak & pepperoni",
      price: "17.95",
      description: "10\" - 19,95 pour 14\""
    },
    {
      name: "#3 Steak & piments verts",
      price:"17.95",
      description: "10\" - 19,95 pour 14\""
    },
    {
      name: "#4 Viandes froides assorties",
      price: "17.95",
      description: "pepperoni, poulet, jambon, mozzarella et cheddar - 10\" - 19,95 pour 14\""
    },
    {
      name: "#5 Steak & champignons",
      price: "17.95",
      description: "10\" - 19,95 pour 14\""
    },
    {
      name: "#6 Spécial maison",
      price: "18.95",
      description: "steak, piments, pepperoni, champignons, fromage, oignons - 10\" - 20,95 pour 14\""
    },
    {
      name: "#7 Poulet grillé",
      price: "19.95",
      description: "10\" - 21,95 pour 14\""
    },
    {
      name: "#8 Végétarien",
      price: "17.95",
      description: "10\" - 19,95 pour 14\""
    },
    {
      name: "Extra légumes",
      price: "3.00",
      description: "+4,00 pour 14\""
    },
    {
      name: "Extra viande ou fromage",
      price: "4.00",
      description: "+5,00 pour 14\""
    }
  ]
},
{
  title: "Breuvages",
  items: [
    {
      name: "Boisson gazeuse (canette)",
      price: "2.95"
    },
    {
      name: "Perrier",
      price: "2.95"
    },
    {
      name: "Shirley Temple",
      price: "3.25"
    },
    {
      name: "Thé ou café",
      price: "2.95"
    },
    {
      name: "Thé vert ou tisane",
      price: "2.95"
    },
    {
      name: "Jus de tomates ou Clamato",
      price: "2.95"
    },
    {
      name: "Bouteille d'eau",
      price: "1.95"
    },
    {
      name: "Chocolat froid",
      price: "2.95"
    }
  ]
},
{
  title: "Menu Enfant",
  description: " (12 ans et moins) Inclus: petit jus ou lait et dessert du jour",
  items: [
    {
      name: "Hamburger et frites",
      price: "10.95"
    },
    {
      name: "Pizza 7\"",
      price: "10.95"
    },
    {
      name: "Pâtes sauce à la viande",
      price: "10.95"
    },
    {
      name: "Doigts de poulet",
      price: "10.95",
      description: "avec salade de chou, frites et sauce"
    },
    {
      name: "Petite poutine",
      price: "9.95"
    },
    {
      name: "1/2 souvlaki",
      price: "12.95",
      description: "avec frites et riz"
    },
    {
      name: "1/2 souvlaki et poutine",
      price: "14.95"
    },
    {
      name: "Hamburger et poutine",
      price: "12.95"
    },
    {
      name: "Doigts de poulet et poutine",
      price: "12.95"
    }
  ]
},
pizzaMenu,
chickenMenu
];



  const livraisonMenuItems: MenuSection[] = [
    entreesSection,
    saladMenu,
    clubSandwichMenu,
    pizzaLivraisonMenu,
    pastaMenu,
    vealMenu,
    grillMenu,
    riceMenu,
    chickenMenu,
    seafoodMenu,
    beverageMenu,
    submarineMenu,
    poutineMenu,
    SpecialDelivery
  ];

  const openModal = (title: string, items: MenuItem[], description?: string, extras? : extras, combos?: PizzaCombo[] ,footerNote?: string) => {
    setSelectedMenu({ title, items, description, extras,combos, footerNote});
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  const buildMenuModalProps = (section: AnyMenuSection): MenuSection => {
  const baseProps = {
    isOpen: true,
    onClose: closeModal,
    title: section.title,
    description: section.description,
    items: section.items,
    footerNote: section.footerNote
  };

  if (isPizzaSection(section)) {
    return {
      ...baseProps,
      sizeNote: section.sizeNote,
      sizeLabels: section.sizeLabels,
      extras: section.extras,  // Now guaranteed to exist
      combos: section.combos
    };
  }

  return baseProps;
};

  return (
    <div className="min-h-screen py-20 px-4 font-finlandica">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-restaurant-red mb-4">
          Nos Menus
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Découvrez nos deux types de menus adaptés à vos besoins
        </p>

        {/* Menu Salle à dining */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Menu Salle à Manger
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {salleMenuItems.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                image={Images[index]}
                onClick={() => openModal(item.title, item.items, item.description, item.extras, item.combos, item.footerNote)}
              />
            ))}
          </div>
        </div>

        {/* Menu Livraison */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Menu Livraison et Commande pour Emporter
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {livraisonMenuItems.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                image={ImagesLivraison[index]}
                onClick={() => openModal(item.title, item.items, item.description,item.extras, item.combos, item.footerNote)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
{selectedMenu && (
  <MenuModal 
    isOpen={!!selectedMenu}
    onClose={closeModal}
    title={selectedMenu.title}
    description={selectedMenu.description}
    items={selectedMenu.items}
    // extras={selectedMenu.extras}
    combos={selectedMenu.combos}
    {...getMenuSpecificProps(selectedMenu)}
  />
)}
      </div>
    </div>
  );
};

export default MenusSection;
