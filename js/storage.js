// storage.js

// Configuration Constants
export const STORAGE_KEY = 'recipes';
export const THEME_KEY = 'theme-preference'; 

// UPDATED Sample Recipes with metric units (kg, g, ml)
const sampleRecipes = [
    { id: 1, title: "My Famous Banana Bread", description: "The best, moist banana bread recipe, perfect for using up overripe bananas.", ingredients: "3 ripe bananas\n1 egg\n75 ml melted butter\n5g baking soda\n100g sugar\n120g flour", steps: "Preheat oven to 350°F (175°C).\nMash bananas in a large bowl.\nStir in egg and melted butter.\nAdd baking soda, sugar, and flour. Mix until just combined.\nPour into a loaf pan.\nBake for 50-60 minutes.", prepTime: 15, cookTime: 50, difficulty: "Easy", imageURL: "https://images.unsplash.com/photo-1629235946849-43c2c1926610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc1NDQ3&ixlib=rb-4.0.3&q=80&w=400", type: "Veg" },
    { id: 2, title: "Simple Fluffy Pancakes", description: "A classic, easy-to-make breakfast staple, light and fluffy every time.", ingredients: "180g all-purpose flour\n3 1/2 tsp baking powder\n5g salt\n1 tbsp sugar\n300 ml milk\n1 egg\n45g melted butter", steps: "Whisk together dry ingredients.\nIn a separate bowl, mix milk, egg, and melted butter.\nPour the wet ingredients into the dry and mix until just combined.\nPour 60 ml batter onto a lightly oiled hot griddle.\nCook for 2-3 minutes per side, or until golden brown.", prepTime: 10, cookTime: 10, difficulty: "Easy", imageURL: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc1NTQx&ixlib=rb-4.0.3&q=80&w=400", type: "Veg" },
    { id: 3, title: "Paneer Tikka Barbeque", description: "Smoky and spicy Indian cottage cheese marinated in yogurt and spices, grilled to perfection.", ingredients: "450g paneer, cubed\n120g thick yogurt\n2 tbsp ginger-garlic paste\n1 tbsp lemon juice\n1 tsp turmeric\n1 tbsp red chili powder\n1 tbsp garam masala\n1 bell pepper, cubed\n1 onion, cubed\nSalt to taste", steps: "Mix yogurt, spices, paste, and lemon juice to form a marinade.\nAdd paneer, bell pepper, and onion; coat well. Marinate for at least 1 hour.\nThread paneer and vegetables onto skewers.\nGrill or barbeque over medium heat for 10-15 minutes, turning occasionally until charred and cooked.", prepTime: 15, cookTime: 15, difficulty: "Medium", imageURL: "https://images.unsplash.com/photo-1563823055403-11b012351d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc1NjYz&ixlib=rb-4.0.3&q=80&w=400", type: "Veg" },
    { id: 4, title: "Traditional Vegetable Biryani", description: "A fragrant Indian rice dish made with mixed vegetables, saffron, and aromatic spices cooked 'dum' style.", ingredients: "200g Basmati rice\n2 tbsp ghee\n1 onion, sliced\n1 tbsp ginger-garlic paste\n240g mixed vegetables (carrots, beans, peas)\n120g yogurt\n1 tsp turmeric, 1 tsp cumin, 1 tsp coriander\nSaffron strands soaked in milk\nFresh mint and coriander leaves", steps: "Wash and soak rice for 30 minutes.\nSauté onions until golden. Add ginger- garlic paste and spices.\nAdd vegetables and yogurt. Cook until vegetables are half done.\nLayer the curry mix and partially cooked rice in a heavy-bottomed pot.\nDrizzle saffron milk and garnish with herbs.\nSeal the pot (dum cooking) and cook on low heat for 20 minutes.", prepTime: 30, cookTime: 45, difficulty: "Hard", imageURL: "https://images.unsplash.com/photo-1626082895610-c116c14104e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc1Nzcw&ixlib=rb-4.0.3&q=80&w=400", type: "Veg" },
    { id: 5, title: "Authentic Chicken Tikka Masala", description: "Tender chicken marinated in yogurt and spices, served in a rich, creamy tomato gravy.", ingredients: "700g chicken breast, cubed\n240 ml yogurt\n2 tbsp Tikka Masala spice blend\n1 onion, pureed\n1 can crushed tomatoes\n120 ml heavy cream\nButter, ginger, garlic, and cashews (for thickening)", steps: "Marinate chicken in yogurt and half the spice blend for 2 hours. Grill or pan-fry until charred.\nSauté onions, ginger, and garlic. Add remaining spices and crushed tomatoes.\nSimmer the gravy until thick. Blend cashews into the gravy for creaminess.\nStir in the grilled chicken and cream. Simmer for 10 minutes before serving with naan or rice.", prepTime: 20, cookTime: 35, difficulty: "Medium", imageURL: "https://images.unsplash.com/photo-1588168270832-7212d2a45051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc1ODUx&ixlib=rb-4.0.3&q=80&w=400", type: "Non-Veg" },
    { id: 6, title: "Traditional Lamb Rogan Josh (Kashmiri)", description: "A slow-cooked aromatic curry from Kashmir, famous for its deep red color from dried Kashmiri chilies and lack of tomatoes.", ingredients: "450g lamb shoulder, cubed\n240 ml yogurt, whisked\n2 tbsp ginger powder\n2 tbsp fennel powder (saunf)\n2 tbsp Kashmiri red chili powder\n4 cloves cardamom\nCinnamon sticks, bay leaves\nOil/Ghee for searing", steps: "Seal the lamb cubes in hot oil/ghee.\nRemove lamb. Add whole spices and sauté.\nStir in chili powder, ginger powder, and fennel powder quickly.\nReturn lamb to the pot. Add yogurt and cook until oil separates.\nAdd water or stock. Cover and simmer gently for 1.5 - 2 hours until lamb is fork-tender.", prepTime: 20, cookTime: 120, difficulty: "Hard", imageURL: "https://images.unsplash.com/photo-1599814144365-d603a116b080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc1OTQ4&ixlib=rb-4.0.3&q=80&w=400", type: "Non-Veg" },
    { id: 7, title: "Hyderabadi Chicken Biryani", description: "A popular Indian rice dish where marinated chicken is layered with basmati rice and cooked on 'dum' (steam).", ingredients: "450g chicken, marinated (yogurt, ginger, garlic, spices)\n400g Basmati rice\n3 onions, thinly sliced and fried (birista)\nFresh coriander and mint\nSaffron milk (saffron strands soaked in warm milk)\nWhole spices (cinnamon, cloves, cardamom)", steps: "Partially cook the basmati rice (al dente).\nIn a heavy-bottomed pot, layer marinated chicken, birista, mint, coriander, and saffron milk.\nTop with the remaining rice.\nSeal the pot (dum cooking) and cook on very low heat for 30-40 minutes.", prepTime: 25, cookTime: 40, difficulty: "Medium", imageURL: "https://images.unsplash.com/photo-1632551676644-d893427303c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc2MDQ2&ixlib=rb-4.0.3&q=80&w=400", type: "Non-Veg" },
    { id: 8, title: "Goan Fish Curry (Xacuti Style)", description: "A light, tangy, and mildly spiced fish curry made with coconut milk and local Goan spices.", ingredients: "450g firm white fish (Kingfish/Pomfret)\n240 ml coconut milk\n2 tbsp Goan curry paste (or red chili, coriander, cumin, turmeric)\n1 tbsp tamarind paste\n1 onion, finely chopped\nGreen chilies and curry leaves\nSalt to taste", steps: "Sauté onions, green chilies, and curry leaves.\nAdd curry paste and cook for 2 minutes until fragrant.\nStir in coconut milk and tamarind paste. Bring to a gentle simmer.\nAdd fish pieces and salt. Cover and simmer for 5-7 minutes until fish is cooked through.", prepTime: 15, cookTime: 15, difficulty: "Easy", imageURL: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMDc2MjEy&ixlib=rb-4.0.3&q=80&w=400", type: "Non-Veg" }
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
        console.error("Error reading/parsing local storage. Data may be corrupted:", e);
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
    if (storedRecipes.length === 0) {
        const initialData = sampleRecipes.map((r, index) => ({
            ...r,
            id: Date.now() + index, 
            cookTime: r.cookTime || 0,
            isPinned: false, 
        }));
        saveRecipes(initialData);
        return initialData;
    }
    return storedRecipes.map(r => ({ ...r, isPinned: r.isPinned || false }));
}