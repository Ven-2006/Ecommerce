/* ==========================================================================
   PRODUCT DATA
   Single source of truth for every pastry sold on the site.
   Each product: id, name, category, price (PHP), image, description.
   ========================================================================== */

const PRODUCTS = [
  // ---------- TART ----------
  {
    id: "egg-tart",
    name: "Egg Tart",
    category: "tart",
    price: 20,
    image: "images/egg-tart.png",
    description: "A buttery, flaky pastry shell filled with rich, smooth, and creamy egg custard, baked until perfectly golden."
  },
  {
    id: "mango-tart",
    name: "Mango Tart",
    category: "tart",
    price: 20,
    image: "images/mango-tart.png",
    description: "A buttery, flaky pastry shell filled with rich, smooth, and sweet mango custard, baked until perfectly golden."
  },
  {
    id: "apple-tart",
    name: "Apple Tart",
    category: "tart",
    price: 20,
    image: "images/apple-tart.png",
    description: "A buttery, flaky crust filled with sweet, tender apple slices and a light caramel glaze."
  },

  // ---------- BRAZO DE MERCEDES ----------
  {
    id: "brazo-cakeroll",
    name: "Brazo de Mercedes: Cake Roll",
    category: "brazo",
    price: 120,
    image: "images/brazo-cakeroll.png",
    description: "A soft and fluffy meringue roll filled with smooth, creamy custard. Available in bite-size pieces or as a classic cake roll."
  },
  {
    id: "brazo-bitesize",
    name: "Brazo de Mercedes: Bite Size",
    category: "brazo",
    price: 30,
    image: "images/brazo-bitesize.png",
    description: "A soft and fluffy meringue roll filled with smooth, creamy custard. Available in bite-size pieces or as a classic cake roll."
  },

  // ---------- CUPCAKE ----------
  {
    id: "cupcake-banana",
    name: "Cupcake: Banana",
    category: "cupcake",
    price: 15,
    image: "images/cupcake-banana.png",
    description: "A soft, moist banana-flavored cupcake topped with smooth cream and fresh banana slices."
  },
  {
    id: "cupcake-doublechoco",
    name: "Cupcake: Double Choco Moist",
    category: "cupcake",
    price: 15,
    image: "images/cupcake-doublechoco.png",
    description: "An extra-moist chocolate cupcake covered with rich chocolate frosting and chocolate toppings."
  },
  {
    id: "cupcake-darkwhite",
    name: "Cupcake: Dark & White Choco",
    category: "cupcake",
    price: 15,
    image: "images/cupcake-darkwhite.png",
    description: "A rich chocolate cupcake topped with a combination of dark and white chocolate cream."
  },

  // ---------- EMPANADA ----------
  {
    id: "empanada-hamcheese",
    name: "Empanada: Ham & Cheese",
    category: "empanada",
    price: 15,
    image: "images/empanada-hamcheese.png",
    description: "A golden, crispy pastry filled with savory ham and creamy melted cheese, making it a delicious and satisfying snack."
  },
  {
    id: "empanada-chicken",
    name: "Empanada: Chicken",
    category: "empanada",
    price: 15,
    image: "images/empanada-chicken.png",
    description: "A flaky pastry filled with tender chicken, vegetables, and flavorful seasonings."
  },
  {
    id: "empanada-beef",
    name: "Empanada: Beef",
    category: "empanada",
    price: 15,
    image: "images/empanada-beef.png",
    description: "A golden, crispy pastry filled with savory seasoned beef, vegetables, and spices."
  },
  {
    id: "empanada-tuna",
    name: "Empanada: Tuna",
    category: "empanada",
    price: 15,
    image: "images/empanada-tuna.png",
    description: "A golden pastry filled with savory tuna, vegetables, and creamy, seasoned filling."
  },
  {
    id: "empanada-pork",
    name: "Empanada: Pork",
    category: "empanada",
    price: 15,
    image: "images/empanada-pork.png",
    description: "A crispy pastry filled with juicy seasoned pork, vegetables, and aromatic spices."
  },

  // ---------- ENSAYMADA ----------
  {
    id: "ensaymada-choco",
    name: "Ensaymada: Choco",
    category: "ensaymada",
    price: 15,
    image: "images/ensaymada-choco.png",
    description: "A soft, fluffy ensaymada topped with creamy chocolate, chocolate drizzle, and chocolate shavings."
  },
  {
    id: "ensaymada-ube",
    name: "Ensaymada: Ube",
    category: "ensaymada",
    price: 15,
    image: "images/ensaymada-ube.png",
    description: "A soft, buttery ensaymada topped with sweet purple ube and grated cheese."
  },
  {
    id: "ensaymada-cheese",
    name: "Ensaymada: Cheese",
    category: "ensaymada",
    price: 15,
    image: "images/ensaymada-cheese.png",
    description: "A fluffy, buttery ensaymada generously topped with creamy butter and shredded cheese."
  },
  {
    id: "ensaymada-creamcheese",
    name: "Ensaymada: Cream Cheese",
    category: "ensaymada",
    price: 15,
    image: "images/ensaymada-creamcheese.png",
    description: "A soft and sweet ensaymada topped with smooth cream and a generous layer of grated cheese."
  },

  // ---------- OTHERS ----------
  {
    id: "banana-loaf-bread",
    name: "Banana Moist Loaf Bread",
    category: "others",
    price: 120,
    image: "images/banana-loaf-bread.png",
    description: "A soft, moist, and flavorful banana loaf made with ripe bananas. Perfectly sweet and great for breakfast, merienda, or dessert."
  },
  {
    id: "pizza-hamcheese",
    name: "Pizza: Ham & Cheese",
    category: "others",
    price: 149,
    image: "images/pizza-hamcheese.png",
    description: "A freshly baked pizza topped with savory ham and melted cheese on a soft, flavorful crust. A simple classic that's perfect for sharing."
  },
  {
    id: "choco-dip-donuts",
    name: "Chocolate Dip Donuts",
    category: "others",
    price: 15,
    image: "images/choco-dip-donuts.png",
    description: "Soft and fluffy donuts dipped in smooth, rich chocolate for a satisfying chocolatey treat."
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    category: "others",
    price: 15,
    image: "images/cinnamon-roll.png",
    description: "A soft and fluffy roll filled with aromatic cinnamon sugar and baked to perfection. Sweet, warm, and perfect for any time of day."
  },
  {
    id: "spanish-bread",
    name: "Spanish Bread",
    category: "others",
    price: 10,
    image: "images/spanish-bread.png",
    description: "A soft and fluffy Filipino bread filled with a sweet, buttery, and slightly crunchy breadcrumb filling. Perfect for a quick snack."
  }
];

const CATEGORY_LABELS = {
  all: "All Products",
  brazo: "Brazo De Mercedes",
  empanada: "Empanada",
  ensaymada: "Ensaymada",
  cupcake: "Cupcake",
  tart: "Tart",
  others: "Others"
};

/* Helpers reused by product & detail pages */
function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatPeso(amount) {
  return "\u20B1" + Number(amount).toFixed(2);
}
