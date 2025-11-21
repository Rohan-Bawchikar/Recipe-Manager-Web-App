// app.js

import { loadRecipes, saveRecipes, initializeData, THEME_KEY } from '../storage.js';
import { validateRecipe } from '../validation.js';
import { 
    showView, toggleTheme, loadThemePreference, 
    renderRecipeList, renderRecipeDetail, 
    populateEditForm, displayFormErrors, hideFormErrors,
    prepareAddForm 
} from '../ui.js';


let recipes = []; // State container for all recipes

/**
 * Fetches data from form inputs.
 * @returns {object} Recipe data object.
 */
function getFormData() {
    const id = document.getElementById('recipe-id').value;
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const steps = document.getElementById('steps').value.trim();
    const prepTime = parseInt(document.getElementById('prepTime').value);
    const cookTime = parseInt(document.getElementById('cookTime').value) || 0;
    const difficulty = document.getElementById('difficulty').value;
    const imageURL = document.getElementById('imageURL').value.trim();
    const type = document.getElementById('type').value; 

    return { id, title, description, ingredients, steps, prepTime, cookTime, difficulty, imageURL, type };
}


// --- CRUD and Core Logic ---

function handleRecipeSubmit(e) {
    e.preventDefault();
    
    const formData = getFormData();
    const errors = validateRecipe(formData);
    
    if (errors.length > 0) {
        displayFormErrors(errors);
        return;
    }
    hideFormErrors();

    // Ensure we have the latest data before modifying
    recipes = loadRecipes();

    const { id, ...newRecipeData } = formData;
    
    if (id) {
        // Update existing recipe
        const index = recipes.findIndex(r => r.id == id);
        if (index > -1) {
            // Preserve pin status and ID on edit
            newRecipeData.isPinned = recipes[index].isPinned; 
            recipes[index] = { ...recipes[index], ...newRecipeData };
            saveRecipes(recipes); 
            
            // Refresh the detail view immediately with new data
            showRecipeDetail(recipes[index].id); 
        }
    } else {
        // Create new recipe
        const newRecipe = { ...newRecipeData, id: Date.now(), isPinned: false };
        recipes.push(newRecipe);
        saveRecipes(recipes); 
        
        // Switch to list view and refresh the list
        showView('list-view'); 
        filterRecipes(); // Force re-render of list
    }
}

function deleteRecipe(id) {
    if (!confirm("Are you sure you want to permanently delete this recipe?")) {
        return;
    }

    // Reload to ensure we are filtering the latest list
    recipes = loadRecipes();
    recipes = recipes.filter(r => r.id != id);
    saveRecipes(recipes);
    
    // Switch to list view and immediately refresh the UI
    showView('list-view'); 
    filterRecipes(); 
}

function togglePin(id) {
    // Reload recipes to ensure we have the latest state
    recipes = loadRecipes();
    
    const recipeIndex = recipes.findIndex(r => r.id == id);
    if (recipeIndex > -1) {
        // Toggle the pin state
        recipes[recipeIndex].isPinned = !recipes[recipeIndex].isPinned;
        
        // Save to storage
        saveRecipes(recipes);
        
        // 1. Update the Detail View button state immediately
        // We pass the specific updated recipe object to renderRecipeDetail
        renderRecipeDetail(recipes[recipeIndex]);
        
        // 2. Refresh the background list view so the sorting updates
        filterRecipes(); 
    }
}

function editRecipe(id) {
    recipes = loadRecipes(); // Ensure fresh data
    const recipe = recipes.find(r => r.id == id);
    if (!recipe) return;

    populateEditForm(recipe);
    showView('form-view');
}

function showRecipeDetail(id) {
    recipes = loadRecipes(); // Ensure fresh data
    const recipe = recipes.find(r => r.id == id);
    if (!recipe) {
        console.error('Recipe not found with ID:', id);
        showView('list-view');
        return;
    }
    renderRecipeDetail(recipe);
}

function filterRecipes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    const typeFilter = document.getElementById('type-filter').value; 

    // Always reload recipes from storage before filtering to ensure the UI reflects the DB
    recipes = loadRecipes();

    let filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm);
        const matchesDifficulty = difficultyFilter === 'All' || recipe.difficulty === difficultyFilter;
        const matchesType = typeFilter === 'All' || recipe.type === typeFilter;

        return matchesSearch && matchesDifficulty && matchesType;
    });

    // Sort: Pinned first, then Alphabetical by title
    filteredRecipes.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return a.title.localeCompare(b.title);
    });

    renderRecipeList(filteredRecipes);
}

// --- Initialization ---

function init() {
    // 1. Load Theme
    loadThemePreference(localStorage.getItem(THEME_KEY) || 'light');
    
    // 2. Load Data
    recipes = initializeData();
    
    // 3. Attach Event Listeners
    const recipeForm = document.getElementById('recipe-form');
    if (recipeForm) {
        recipeForm.addEventListener('submit', handleRecipeSubmit);
    }
    
    // 4. Initial Render
    showView('list-view'); 
    filterRecipes(); // Initial render of the list
}

// Execute initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);


// --- EXPOSE GLOBAL APP INTERFACE ---
window.RecipeApp = {
    toggleTheme: () => toggleTheme(theme => localStorage.setItem(THEME_KEY, theme)),
    showView: showView,
    prepareAddForm: prepareAddForm, 
    showRecipeDetail: showRecipeDetail,
    editRecipe: editRecipe,
    deleteRecipe: deleteRecipe,
    togglePin: togglePin,
    filterRecipes: filterRecipes
};