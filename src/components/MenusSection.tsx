
import React, { useState } from 'react';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';

const MenusSection: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<{
    title: string;
    items: string[];
  } | null>(null);

  // Menu Salle à manger
  const salleMenuItems = [
    {
      title: "Table d'hôte",
      items: ["Menu du jour", "Entrée + Plat + Dessert", "Sélection du chef", "Accord mets et vins"]
    },
    {
      title: "Pâtes et escalopes de veau",
      items: ["Escalope à la crème", "Escalope aux champignons", "Pâtes carbonara", "Pâtes aux fruits de mer", "Escalope milanaise"]
    },
    {
      title: "Nos riz",
      items: ["Riz pilaf", "Riz aux légumes", "Riz basmati", "Riz au safran", "Risotto aux champignons"]
    },
    {
      title: "Sous-marins",
      items: ["Sous-marin italien", "Sous-marin végétarien", "Sous-marin au poulet", "Sous-marin aux fruits de mer"]
    },
    {
      title: "Entrées",
      items: ["Salade César", "Bruschetta", "Soupe du jour", "Crevettes tempura", "Carpaccio de bœuf"]
    },
    {
      title: "Notre grill",
      items: ["Steak grillé", "Côtes d'agneau", "Brochettes mixtes", "Saumon grillé", "Poulet grillé"]
    },
    {
      title: "Poissons et fruits de mer",
      items: ["Saumon atlantique", "Crevettes géantes", "Moules marinières", "Plateau de fruits de mer", "Sole meunière"]
    },
    {
      title: "Frites et poutines",
      items: ["Frites classiques", "Poutine traditionnelle", "Poutine au poulet", "Frites épicées", "Poutine aux fruits de mer"]
    },
    {
      title: "Nos salades",
      items: ["Salade grecque", "Salade niçoise", "Salade de chèvre chaud", "Salade aux noix", "Salade de quinoa"]
    },
    {
      title: "Les poulets",
      items: ["Poulet rôti", "Poulet au curry", "Poulet à l'estragon", "Poulet teriyaki", "Ailes de poulet BBQ"]
    },
    {
      title: "Breuvages",
      items: ["Vins sélectionnés", "Bières artisanales", "Cocktails maison", "Jus frais", "Café et thés"]
    },
    {
      title: "Les pizzas",
      items: ["Pizza Margherita", "Pizza 4 saisons", "Pizza aux fruits de mer", "Pizza végétarienne", "Pizza du chef"]
    },
    {
      title: "Club sandwichs",
      items: ["Club sandwich classique", "Club au poulet grillé", "Club végétarien", "Club aux crevettes"]
    },
    {
      title: "Menu enfant",
      items: ["Nuggets et frites", "Mini pizza", "Pâtes au beurre", "Steak haché", "Jus et dessert inclus"]
    }
  ];

  // Menu Livraison et commande pour emporter
  const livraisonMenuItems = [
    {
      title: "EPSI",
      items: ["Spécialité EPSI", "Plat signature", "Formule express", "Menu découverte"]
    },
    {
      title: "Les entrées",
      items: ["Soupe du jour", "Salade mixte", "Crevettes cocktail", "Bruschetta maison"]
    },
    {
      title: "Les pâtes",
      items: ["Spaghetti Bolognaise", "Pennes arrabbiata", "Lasagnes maison", "Raviolis aux épinards"]
    },
    {
      title: "Les poulets",
      items: ["Poulet BBQ", "Poulet au curry", "Ailes de poulet", "Poitrine de poulet grillée"]
    },
    {
      title: "Breuvages",
      items: ["Sodas", "Jus naturels", "Eau minérale", "Boissons chaudes"]
    },
    {
      title: "Nos salades",
      items: ["Salade César", "Salade grecque", "Salade de thon", "Salade composée"]
    },
    {
      title: "Escalopes de veau",
      items: ["Escalope nature", "Escalope à la crème", "Escalope panée", "Escalope aux champignons"]
    },
    {
      title: "Nos riz",
      items: ["Riz pilaf", "Riz cantonnais", "Riz aux légumes", "Riz basmati"]
    },
    {
      title: "Les sous-marins",
      items: ["Sous-marin mixte", "Sous-marin végétarien", "Sous-marin italien", "Sous-marin spécial"]
    },
    {
      title: "Club sandwichs",
      items: ["Club traditionnel", "Club au poulet", "Club végétarien", "Club spécial"]
    },
    {
      title: "De notre grill",
      items: ["Steak grillé", "Brochettes", "Côtelettes", "Saucisses grillées"]
    },
    {
      title: "Poissons et fruits de mer",
      items: ["Saumon grillé", "Crevettes sautées", "Filet de sole", "Plateau fruits de mer"]
    },
    {
      title: "Frites et poutines",
      items: ["Frites maison", "Poutine classique", "Poutine spéciale", "Frites épicées"]
    },
    {
      title: "Les pizzas",
      items: ["Pizza Margherita", "Pizza pepperoni", "Pizza végétarienne", "Pizza spéciale"]
    }
  ];

  const openModal = (title: string, items: string[]) => {
    setSelectedMenu({ title, items });
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-restaurant-red mb-4">
          Nos Menus
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Découvrez nos deux types de menus adaptés à vos besoins
        </p>

        {/* Menu Salle à manger */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Menu Salle à Manger
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {salleMenuItems.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                image={`https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop`}
                onClick={() => openModal(item.title, item.items)}
              />
            ))}
          </div>
        </div>

        {/* Menu Livraison et commande pour emporter */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Menu Livraison et Commande pour Emporter
          </h3>
          <p className="text-center text-gray-300 mb-8">
            Pour plus d'information, cliquez sur l'item de votre choix
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {livraisonMenuItems.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                image={`https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop`}
                onClick={() => openModal(item.title, item.items)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMenu && (
        <MenuModal
          isOpen={!!selectedMenu}
          onClose={closeModal}
          title={selectedMenu.title}
          items={selectedMenu.items}
        />
      )}
    </div>
  );
};

export default MenusSection;
