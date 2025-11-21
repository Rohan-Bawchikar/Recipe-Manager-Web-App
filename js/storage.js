// storage.js

// Configuration Constants
export const STORAGE_KEY = "recipes";
export const THEME_KEY = "theme-preference";

// --- UPDATED Sample Recipes: CORRECTED file paths using FORWARD SLASHES (/) ---
const sampleRecipes = [
  {
    id: 1,
    title: "My Famous Banana Bread",
    description:
      "The best, moist banana bread recipe, perfect for using up overripe bananas.",
    ingredients:
      "3 ripe bananas\n1 egg\n75 ml melted butter\n5g baking soda\n100g sugar\n120g flour",
    steps:
      "Preheat oven to 350°F (175°C).\nMash bananas in a large bowl.\nStir in egg and melted butter.\nAdd baking soda, sugar, and flour. Mix until just combined.\nPour into a loaf pan.\nBake for 50-60 minutes.",
    prepTime: 15,
    cookTime: 50,
    difficulty: "Easy",
    imageURL: "/Assets/1.jpg",
    type: "Veg",
  },
  {
    id: 2,
    title: "Simple Fluffy Pancakes",
    description:
      "A classic, easy-to-make breakfast staple, light and fluffy every time.",
    ingredients:
      "180g all-purpose flour\n3 1/2 tsp baking powder\n5g salt\n1 tbsp sugar\n300 ml milk\n1 egg\n45g melted butter",
    steps:
      "Whisk together dry ingredients.\nIn a separate bowl, mix milk, egg, and melted butter.\nPour the wet ingredients into the dry and mix until just combined.\nPour 60 ml batter onto a lightly oiled hot griddle.\nCook for 2-3 minutes per side, or until golden brown.",
    prepTime: 10,
    cookTime: 10,
    difficulty: "Easy",
    imageURL: "/Assets/Simple Fluffy Pancakes.jpg",
    type: "Veg",
  },
  {
    id: 3,
    title: "Paneer Tikka Barbeque",
    description:
      "Smoky and spicy Indian cottage cheese marinated in yogurt and spices, grilled to perfection.",
    ingredients:
      "450g paneer, cubed\n120g thick yogurt\n2 tbsp ginger-garlic paste\n1 tbsp lemon juice\n1 tsp turmeric\n1 tbsp red chili powder\n1 tbsp garam masala\n1 bell pepper, cubed\n1 onion, cubed\nSalt to taste",
    steps:
      "Mix yogurt, spices, paste, and lemon juice to form a marinade.\nAdd paneer, bell pepper, and onion; coat well. Marinate for at least 1 hour.\nThread paneer and vegetables onto skewers.\nGrill or barbeque over medium heat for 10-15 minutes, turning occasionally until charred and cooked.",
    prepTime: 15,
    cookTime: 15,
    difficulty: "Medium",
    imageURL: "/Assets/2.jpeg",
    type: "Veg",
  },
  {
    id: 4,
    title: "Traditional Vegetable Biryani",
    description:
      "A fragrant Indian rice dish made with mixed vegetables, saffron, and aromatic spices cooked 'dum' style.",
    ingredients:
      "200g Basmati rice\n2 tbsp ghee\n1 onion, sliced\n1 tbsp ginger-garlic paste\n240g mixed vegetables (carrots, beans, peas)\n120g yogurt\n1 tsp turmeric, 1 tsp cumin, 1 tsp coriander\nSaffron strands soaked in milk\nFresh mint and coriander leaves",
    steps:
      "Wash and soak rice for 30 minutes.\nSauté onions until golden. Add ginger- garlic paste and spices.\nAdd vegetables and yogurt. Cook until vegetables are half done.\nLayer the curry mix and partially cooked rice in a heavy-bottomed pot.\nDrizzle saffron milk and garnish with herbs.\nSeal the pot (dum cooking) and cook on low heat for 20 minutes.",
    prepTime: 30,
    cookTime: 45,
    difficulty: "Hard",
    imageURL: "/Assets/Traditional Vegetable Biryani.jpg",
    type: "Veg",
  },
  {
    id: 5,
    title: "Authentic Chicken Tikka Masala",
    description:
      "Tender chicken marinated in yogurt and spices, served in a rich, creamy tomato gravy.",
    ingredients:
      "700g chicken breast, cubed\n240 ml yogurt\n2 tbsp Tikka Masala spice blend\n1 onion, pureed\n1 can crushed tomatoes\n120 ml heavy cream\nButter, ginger, garlic, and cashews (for thickening)",
    steps:
      "Marinate chicken in yogurt and half the spice blend for 2 hours. Grill or pan-fry until charred.\nSauté onions, ginger, and garlic. Add remaining spices and crushed tomatoes.\nSimmer the gravy until thick. Blend cashews into the gravy for creaminess.\nStir in the grilled chicken and cream. Simmer for 10 minutes before serving with naan or rice.",
    prepTime: 20,
    cookTime: 35,
    difficulty: "Medium",
    imageURL: "/Assets/Authentic Chicken Tikka Masala .jpg",
    type: "Non-Veg",
  },
  {
    id: 6,
    title: "Traditional Lamb Rogan Josh (Kashmiri)",
    description:
      "A slow-cooked aromatic curry from Kashmir, famous for its deep red color from dried Kashmiri chilies and lack of tomatoes.",
    ingredients:
      "450g lamb shoulder, cubed\n240 ml yogurt\n2 tbsp ginger powder\n2 tbsp fennel powder (saunf)\n2 tbsp Kashmiri red chili powder\n4 cloves cardamom\nCinnamon sticks, bay leaves\nOil/Ghee for searing",
    steps:
      "Seal the lamb cubes in hot oil/ghee.\nRemove lamb. Add whole spices and sauté.\nStir in chili powder, ginger powder, and fennel powder quickly.\nReturn lamb to the pot. Add yogurt and cook until oil separates.\nAdd water or stock. Cover and simmer gently for 1.5 - 2 hours until lamb is fork-tender.",
    prepTime: 20,
    cookTime: 120,
    difficulty: "Hard",
    imageURL: "/Assets/Lamb Rogan Josh.jpg",
    type: "Non-Veg",
  },
  {
    id: 7,
    title: "Hyderabadi Chicken Biryani",
    description:
      "A popular Indian rice dish where marinated chicken is layered with basmati rice and cooked on 'dum' (steam).",
    ingredients:
      "450g chicken, marinated (yogurt, ginger, garlic, spices)\n400g Basmati rice\n3 onions, thinly sliced and fried (birista)\nFresh coriander and mint\nSaffron milk (saffron strands soaked in warm milk)\nWhole spices (cinnamon, cloves, cardamom)",
    steps:
      "Partially cook the basmati rice (al dente).\nIn a heavy-bottomed pot, layer marinated chicken, birista, mint, coriander, and saffron milk.\nTop with the remaining rice.\nSeal the pot (dum cooking) and cook on very low heat for 30-40 minutes.",
    prepTime: 25,
    cookTime: 40,
    difficulty: "Medium",
    imageURL: "/Assets/indian-chicken-biryani.webp",
    type: "Non-Veg",
  },
  {
    id: 8,
    title: "Goan Fish Curry (Xacuti Style)",
    description:
      "A light, tangy, and mildly spiced fish curry made with coconut milk and local Goan spices.",
    ingredients:
      "450g firm white fish (Kingfish/Pomfret)\n240 ml coconut milk\n2 tbsp Goan curry paste (or red chili, coriander, cumin, turmeric)\n1 tbsp tamarind paste\n1 onion, finely chopped\nGreen chilies and curry leaves\nSalt to taste",
    steps:
      "Sauté onions, green chilies, and curry leaves.\nAdd curry paste and cook for 2 minutes until fragrant.\nStir in coconut milk and tamarind paste. Bring to a gentle simmer.\nAdd fish pieces and salt. Cover and simmer for 5-7 minutes until fish is cooked through.",
    prepTime: 15,
    cookTime: 15,
    difficulty: "Easy",
    imageURL: "/Assets/Goan Fish Curry.jpg",
    type: "Non-Veg",
  },
];

export function loadRecipes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData)) {
        return parsedData;
      } else {
        console.warn("Local storage data corrupted or non-array. Resetting.");
        return [];
      }
    }
  } catch (e) {
    console.error(
      "Error reading/parsing local storage. Data may be corrupted:",
      e
    );
  }
  return [];
}

export function saveRecipes(recipeArray) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipeArray));
  } catch (e) {
    console.error("Error saving to local storage:", e);
  }
}

export function initializeData() {
  let storedRecipes = loadRecipes();

  // Create a map of Recipe Title -> Correct Local Asset Path
  const recipeMap = new Map(sampleRecipes.map((r) => [r.title, r.imageURL]));

  if (storedRecipes.length === 0) {
    // If storage is empty, initialize with the correct local paths
    const initialData = sampleRecipes.map((r, index) => ({
      ...r,
      id: Date.now() + index,
      cookTime: r.cookTime || 0,
      isPinned: false,
    }));
    saveRecipes(initialData);
    return initialData;
  }

  // If loading existing data from storage, clean up old URLs and ensure local path is correct.
  return storedRecipes.map((r) => {
    let newImageURL = r.imageURL;

    // Always enforce the correct local path from the map, overriding any old external/incorrect stored path
    newImageURL = recipeMap.get(r.title) || r.imageURL;

    // Clean up any extra query params (leftovers from cachebusting)
    if (newImageURL && newImageURL.includes("?")) {
      newImageURL = newImageURL.split("?")[0];
    }

    // Ensure path uses forward slashes
    if (newImageURL && newImageURL.includes("\\")) {
      newImageURL = newImageURL.replace(/\\/g, "/");
    }

    return {
      ...r,
      isPinned: r.isPinned || false,
      imageURL: newImageURL,
    };
  });
}
