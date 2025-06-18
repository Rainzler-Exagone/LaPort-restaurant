import { MenuSection, PizzaSection, SaladSection } from "@/components/MenusSection";

export const entreesSection: MenuSection = {
  title: "Entrées",
  items: [
    {
      name: "Crevettes ou escargots",
      price: "7,95",
     description:" + (gratiné) + 2,00 + (sur pâte à pizza) + 2.00 "
    },
    {
      name: "Coquille St-Jacques",
      price: "14,95",
      description: "(entrée)"
    },
    {
      name: "Bâtonnets de fromage",
      price: "7,95",
      description: "(4 bâtonnets)"
    },
    {
      name: "Soupe du jour",
      price: "3,95"
    },
    {
      name: "Soupe à l'oignon gratinée",
      price: "10,95"
    },
    {
      name: "Salade César",
      price: "10,95"
    },
    {
      name: "Salade du chef",
      price: "9,95"
    },
    {
      name: "Bruscheta",
      price: "9,95"
    },
    {
      name: "Féta & olives noires",
      price: "9,95"
    },
    {
      name: "Pain à l'ail",
      price: "4,95"
    },
    {
      name: "Pain à l'ail gratiné",
      price: "7,25"
    },
    {
      name: "Ailes de poulet",
      price: "16,95",
      description: "(12 pièces)"
    }
  ]
};

export const saladMenu: SaladSection = {
  title: "Nos Salades",
  sizeNote: "Petite | Grosse", // Added size note for the table header
  items: [
    {
      name: "Salade maison",
      sizes: ["17,95", "19,95"],
      description: "salade du chef avec crevettes ou poulet grillé sur un nid de riz avec fromage féta"
    },
    {
      name: "Salade du chef",
      sizes: ["10,95", "13,95"]
    },
    {
      name: "Salade césar",
      sizes: ["10,95", "13,95"]
    },
    {
      name: "Salade césar au poulet",
      price: "18,95", // Using price instead of sizes for items with no size variation
      description: "grillé ou croustillant"
    },
    {
      name: "Salade combinée",
      price: "18,95",
      description: "jambon, poulet, fromage, oeuf, salade verte, salade de chou"
    },
    {
      name: "Salade au poulet",
      price: "18,95"
    },
    {
      name: "Salade grecque",
      price: "18,95"
    }
  ]
};

export const clubSandwichMenu: MenuSection = {
  title: "Club Sandwichs",
  description: "Tous nos clubs sont servis avec salade de chou, sauce BBQ et frites",
  items: [
    {
      name: "Club poutine",
      price: "20,95"
    },
    {
      name: "Club sandwich",
      price: "17,95"
    },
    {
      name: "Club spécial maison",
      price: "18,95",
      description: "jambon, poulet, fromage"
    }
  ]}


  export const pizzaLivraisonMenu: PizzaSection = {
  title: "Les Pizzas",
  type:"pizza",
  description: "Toutes nos pizzas sont une grandeur de plus que la compétition | Choix de sauce à pizza: sauce à la viande ou sauce tomate basilic",
  sizeNote: "Fromage Saputo | 10\" | 12\" | 14\" | 16\" | 17\" | 18\"",
  items: [
    {
      name: "New Milano",
      sizes: ["bamb_", "petite_", "moy__", "large", "x-large", "jumbo"]
    },
    {
      name: "Spécial La Porte",
      sizes: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"],
      description: "toute garnie, oignons, bacon"
    },
    {
      name: "Toute garnie",
      sizes: ["15,95", "20,95", "24,95", "28,95", "34,95", "36,95"]
    },
    {
      name: "Pepperoni (ou bacon) et fromage",
      sizes: ["14,95", "19,95", "23,95", "27,95", "32,95", "34,95"]
    },
    {
      name: "Fruits de mer",
      sizes: ["20,95", "25,95", "33,95", "36,95", "42,95", "44,95"],
      description: "pétoncles, crevettes, goberge"
    },
    {
      name: "Spéciale St-Lin",
      sizes: ["19,95", "24,95", "32,95", "35,95", "41,95", "43,95"],
      description: "boeuf haché, oignons, piments, champignons, fromage"
    },
    {
      name: "Spécial Laurentides",
      sizes: ["17,95", "21,95", "26,95", "30,95", "34,95", "37,95"],
      description: "toute garnie avec spaghetti sauce à la viande"
    },
    {
      name: "Spéciale Déli",
      sizes: ["18,95", "22,95", "27,95", "31,95", "36,95", "40,95"],
      description: "toute garnie avec smoked meat"
    },
    {
      name: "Spéciale 3 viandes",
      sizes: ["18,95", "22,95", "27,95", "31,95", "36,95", "40,95"],
      description: "pepperoni, bacon et saucisse italienne"
    },
    {
      name: "Nature",
      sizes: ["14,95", "17,95", "21,95", "23,95", "29,95", "31,95"],
      description: "tomates, fromage"
    },
    {
      name: "Grecque",
      sizes: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"],
      description: "féta, olives noires, oignons, tomates, fromage"
    },
    {
      name: "Végétarienne",
      sizes: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"],
      description: "champignons, piments, oignons, tomates, brocoli, chou-fleur"
    },
    {
      name: "Hawaienne",
      sizes: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"],
      description: "jambon et ananas"
    }
  ],
  extras: {
    title: "EXTRAS",
    sizeNote: "10\" | 12\" | 14\" | 16\" | 17\" | 18\"",
    items: [
      {
        name: "Légumes",
        sizes: ["2,00", "2,50", "3,00", "4,50", "5,25", "6,25"]
      },
      {
        name: "Viande ou fromage ou anchois",
        sizes: ["3,00", "4,00", "5,00", "5,50", "6,75", "7,25"]
      },
      {
        name: "Crevettes",
        sizes: ["5,00", "6,00", "7,00", "9,00", "11,00", "13,00"]
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
  footerNote: "Choix de sauce à pizza: sauce à la viande ou sauce tomate basilic"
};



export const pastaMenu: MenuSection = {
  title: "Pâtes",
  items: [
    {
      name: "Spécial La Porte",
      sizes: ["16,95", "18,95"],  // Matches portionLabels order
      description: "avec pepperoni, bacon, piments, champignons, gratiné"
    },
    {
      name: "Boulettes de viande",
      sizes: ["14,95", "16,95"]
    },
    {
      name: "Sauce à la viande",
      sizes: ["11,95", "12,95"]
    },
    {
      name: "À la crème et ail",
      price: "16,95"  // Fixed price items still use simple price
    },
    {
      
        name: "Extra viande ou gratiné",
        sizes: ["+4,00", "+5,00"]  // Matches portionLabels order
      
    }
  ]
};


export const vealMenu: MenuSection = {
  title: "Escalopes de Veau",
  description: "Toutes nos escalopes sont servies avec accompagnement au choix",
  items: [
    {
      name: "Escalope de veau Parmesan",
      price: "20,95",
      description: "avec spaghetti sauce à la viande"
    },
    {
      name: "Escalope de veau maison",
      price: "21,95"
    },
    {
      name: "Escalope à la crème",
      price: "20,95",
      sauceOptions: ["Crème", "Champignons", "Rosée"]
    },
    {
      name: "Escalope milanaise",
      price: "19,95"
    }
  ]
};


export const grillMenu: MenuSection = {
  title: "Notre Grill",
  description: "Servi avec frites et salade",
  items: [
    {
      name: "Filet mignon AAA",
      price: "42,95",
      description: "avec sauce au poivre, salade, champignons, riz et pommes de terre"
    },
    {
      name: "Hamburger steak avec oignons",
      price: "17,95"
    },
    {
      name: "Brochette de poulet",
      price: "21,95",
      description: "avec riz, salade, pommes de terre et sauce brune ou tzaziki",
      options: ["Sauce brune", "Tzaziki"]
    },
    {
      name: "Brochettes (2) de souvlaki (porc)",
      price: "19,95",
      description: "avec riz, salade, pommes de terre et sauce brune ou tzaziki"
    },
    {
      name: "Demi souvlaki",
      price: "17,95",
      description: "avec riz, salade, pommes de terre et sauce brune ou tzaziki"
    },
    {
      name: "Ajout de 3 crevettes papillon",
      price: "+7,00",
      isAddOn: true
    },
    {
      name: "Pita porc avec frites",
      price: "13,95"
    },
    {
      name: "Pita poulet avec frites",
      price: "16,95"
    },
    {
      name: "Repas pita au porc",
      price: "18,95",
      description: "avec riz, salade, patates grecque ou frites",
      options: ["Patates grecques", "Frites"]
    },
    {
      name: "Repas pita au poulet",
      price: "19,95",
      description: "avec riz, salade, patates grecque ou frites",
      options: ["Patates grecques", "Frites"]
    },
    {
      name: "Pita porc",
      price: "11,95"
    },
    {
      name: "Pita poulet",
      price: "13,95"
    },
    {
      name: "Hamburger (100% boeuf)",
      price: "6,95"
    },
    {
      name: "Cheeseburger (100% boeuf)",
      price: "7,95"
    }
  ]
};


export const riceMenu: MenuSection = {
  title: "Nos Riz",
  description: "Tous nos plats de riz sont préparés frais quotidiennement",
  items: [
    {
      name: "Spécial riz frit au poulet et légumes",
      price: "19,95",
      description: "avec 2 egg rolls et sauce aux prunes"
    },
    {
      name: "Riz frit au poulet et légumes",
      price: "16,95"
    },
    {
      name: "Riz frit aux légumes",
      price: "14,95"
    },
    {
      name: "Riz frit nature",
      price: "10,95"
    },
    {
      name: "Riz frit au poulet ou bacon",
      price: "15,95",
      proteinOptions: ["Poulet", "Bacon"]
    },
    {
      name: "Riz frit aux crevettes",
      price: "18,95"
    },
    {
      name: "Bol de riz nature",
      price: "4,95"
    },
    {
      name: "1 egg roll",
      price: "3,25",
      description: "avec sauce aux prunes"
    },
    {
      name: "2 egg rolls",
      price: "5,25",
      description: "avec sauce aux prunes"
    }
  ]
};



export const chickenMenu: MenuSection = {
  title: "Les Poulets",
  description: "avec salade de chou, sauce, frites et pain",
  footerNote:"(changez vos frites en poutine pour 5,95 de plus)",
  items: [
    {
      name: "Assiette de doigts de poulet",
      price: "18,95",
      includes: "avec salade verte, frites et sauce"
    },
    {
      name: "Assiette d'ailes de poulet",
      price: "15,95",
      includes: "avec salade de chou, frites et sauce",
    },
  ]
};


export const seafoodMenu: MenuSection = {
  title: "Poissons et Fruits de Mer",
  description: "Servis avec salade, riz et pommes de terre",
  items: [
    {
      name: "Assiette de fruits de mer",
      price: "42,95",
      composition: "pétoncle, crevettes papillon, filet de sole et crevettes de Matane"
    },
    {
      name: "Crevettes papillon (8) avec beurre à l'ail",
      price: "24,95"
    },
    {
      name: "Pétoncles de mer frits", 
      price: "20,95"
    },
    {
      name: "Filet de sole pané",
      price: "18,95",
      preparation: "pané"
    },
    {
      name: "Filet de sole meunière",
      price: "20,95",
      preparation: "meunière" 
    },
    {
      name: "Fish'n chips",
      price: "20,95"
    },
    {
      name: "Repas coquille St-Jacques",
      price: "22,95"
    }
  ]
};


export const beverageMenu: MenuSection = {
  title: "Breuvages",
  description: "Rafraîchissements pour accompagner votre repas",
  items: [
    {
      name: "Boisson gazeuse",
      price: "2,95",
      size: "canette"
    },
    {
      name: "Perrier",
      price: "2,95",
    },
    {
      name: "Shirley Temple",
      price: "3,25"
    },
    {
      name: "Thé ou café",
      price: "2,95",
    },
    {
      name: "Thé vert ou tisane",
      price: "2,95",
    },
    {
      name: "Jus de tomates ou Clamato",
      price: "2,95",
    },
    {
      name: "Bouteille d'eau",
      price: "1,95",
    },
    {
      name: "Chocolat chaud ou froid",
      price: "2,95",
    }
  ]
};


export const submarineMenu: MenuSection = {
  title: "Nos Sous-marins",
  description: "Tous nos sous-marins sont garnis de laitue, tomates, fromage et choix de vinaigrette maison, italienne ou française",
  items: [
    {
      name: "#1 Steak",
      sizes: ["17,95", "19,95"]
    },
    {
      name: "#2 Steak & pepperoni",
      sizes: ["17,95", "19,95"]
    },
    {
      name: "#3 Steak & piments verts",
      sizes: ["17,95", "19,95"]
    },
    {
      name: "#4 Viandes froides assorties",
      sizes: ["17,95", "19,95"],
      description: "pepperoni, poulet, jambon, mozzarella, cheddar"
    },
    {
      name: "#5 Steak & champignons",
      sizes: ["17,95", "19,95"]
    },
    {
      name: "#6 Spécial maison",
      sizes: ["18,95", "20,95"],
      description: "steak, piments, pepperoni, champignons, fromage, oignons"
    },
    {
      name: "#7 Poulet grillé",
      sizes: ["19,95", "21,95"]
    },
    {
      name: "#8 Végétarien",
      sizes: ["17,95", "19,95"]
    },
    {
      name: "Extra légumes",
      sizes: ["3,00", "4,00"],
    },
    {
      name: "Extra viande ou fromage",
      sizes: ["4,00", "5,00"],
    }
  ]
};


export const poutineMenu: MenuSection = {
  title: "Frites et Poutines",
  description: "Portion (petite ou grosse)",
  items: [
    {
      name: "Poutine",
      sizes: ["9,95", "14,95"]
    },
    {
      name: "Poutine italienne",
      sizes: ["10,95", "15,95"]
    },
    {
      name: "Poutine pepperoni",
      sizes: ["10,95", "15,95"]
    },
    {
      name: "Poutine poulet",
      sizes: ["10,95", "15,95"]
    },
    {
      name: "Poutine déli smoked meat",
      sizes: ["11,95", "16,95"]
    },
    {
      name: "Extra fromage ou viande",
      sizes: ["+4,00", "+5,00"],
    },
    {
      name: "Frites",
      sizes: ["3,95", "8,95"]
    },
    {
      name: "Frites sauce",
      price: "5,25"  // Single price as string
    },
    {
      name: "Frites sauce italienne",
      price: "6,95"
    },
    {
      name: "Rondelles d'oignon",
      price: "6,95"
    }
  ]
};

export const SpecialDelivery: MenuSection = {
  title: "Spécial livraison",
  items: [
    {
      name: "1 pizza 14\" (moyenne)",
      description: "toute garnie ou pepperoni fromage",
      price: "37,95",
      AddOnes: [
        "+ 2 petites poutines",
        "+ 2 petits spaghettis"
      ]
    },
    {
      name: "2 lasagnes gratinées ou Laporte",
      price: "34,95",
      AddOnes: [
        "+ 2 pains à l'ail"
      ]
    },
    {
      name: "2 pizzas 16\" (large)",
      description: "toutes garnies ou pepperoni fromage",
      price: "59,95",
      AddOnes: [
        "+ 1 frite familiale",
        "+ 4 liqueurs"
      ]
    },
    {
      name: "2 sous-marins 14\" (au choix)",
      price: "43,95",
      AddOnes: [
        "+ 2 frites",
        "+ 2 liqueurs"
      ]
    },
    {
      name: "Spécial familial 4 pâtes gratinées",
      price: "36,95",
      options: [
        "Spaghetti",
        "Rigatoni",
        "Lasagne",
        "Pennine"
      ]
    },
    {
      name: "Spécial familial 4 pâtes sauce à la viande",
      price: "30,95",
      options: [
        "Spaghetti",
        "Rigatoni",
        "Lasagne",
        "Pennine"
      ]
    }
  ]
};

export const Images: string[] =[
  "/assets/images/tabledhot.jpg",
  "/assets/images/entrée.jpg",
  "/assets/images/salades.jpg",
  "/assets/images/sandwiches.jpg",
  "/assets/images/escalop.jpg",
  "/assets/images/riz.jpg",
  "/assets/images/grill.jpg",
  "/assets/images/fruit-de-mere.jpg",
  "/assets/images/frit.jpg",
  "/assets/images/sous-marins.jpg",
  "/assets/images/breuvage.jpg",
  "/assets/images/menu-enfant.jpg",
  "/assets/images/pizza.jpg",
    "/assets/images/plat-poulet.jpg",

]
export const ImagesLivraison: string[] =[
  "/assets/images/entrée.jpg",
  "/assets/images/salades.jpg",
  "/assets/images/sandwiches.jpg",
  "/assets/images/pizza.jpg",
  "/assets/images/pates.jpg",
  "/assets/images/escalop.jpg",
  "/assets/images/grill.jpg",
  "/assets/images/riz.jpg",
  "/assets/images/plat-poulet.jpg",
  "/assets/images/fruit-de-mere.jpg",
  "/assets/images/breuvage.jpg",
  "/assets/images/sous-marins.jpg",
  "/assets/images/frit.jpg",
  "/assets/images/poulet.jpg"
]



 export const specials = [
    {
      id: 1,
      price: "37,95",
      title: "1 PIZZA 14\" (MOYENNE)",
      description: "Toute garnie ou pepperoni fromage + 2 petites poutines ou 2 petits spaghettis sauce à la viande"
    },
    {
      id: 2,
      price: "59,95",
      title: "2 PIZZAS 16\" (LARGE)",
      description: "Toute garnie ou pepperoni fromage + 1 frite familiale + 4 liqueurs"
    },
    {
      id: 3,
      price: "34,95",
      title: "2 LASAGNES",
      description: "Gratinée ou La Porte + 2 pains à l'ail"
    },
    {
      id: 4,
      price: "44,95",
      title: "2 SOUS-MARINS 14\"",
      description: "Au choix + 2 frites et 2 liqueurs"
    },
    {
      id: 5,
      price: "36,95",
      title: "FAMILIALE 4 PÂTES GRATINÉ",
      description: "Choix de 4 sortes de pâtes : Penne, lasagne, spaghetti, rigatoni"
    },
    {
      id: 6,
      price: "30,95",
      title: "FAMILIALE 4 PÂTES SAUCE VIANDE",
      description: "Choix de 4 sortes de pâtes : Penne, lasagne, spaghetti, rigatoni"
    }
  ];
