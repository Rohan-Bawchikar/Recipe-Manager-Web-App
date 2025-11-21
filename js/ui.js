// ui.js

// Constants used for UI purposes
export const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/400x250/ecf0f1/7f8c8d?text=Recipe+Image';

/**
 * Toggles dark/light theme and updates the icon.
 * @param {function} callback - Function to save theme preference to storage (app.js handles this).
 */
export function toggleTheme(callback) {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    callback(isDarkMode ? 'dark' : 'light');
    updateThemeToggleIcon(isDarkMode);
}

/**
 * Loads the initial theme preference from storage.
 * @param {string} savedTheme - 'dark' or 'light'.
 */
export function loadThemePreference(savedTheme) {
    const isDarkMode = savedTheme === 'dark';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateThemeToggleIcon(isDarkMode);
}

function updateThemeToggleIcon(isDarkMode) {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('i');
    if (toggleButton && icon) {
        if (isDarkMode) {
            icon.className = 'fas fa-moon';
            toggleButton.title = 'Switch to Light Mode';
        } else {
            icon.className = 'fas fa-sun';
            toggleButton.title = 'Switch to Dark Mode';
        }
    }
}

export function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');
}

/**
 * Renders a single recipe card.
 */
function createRecipeCard(recipe) {
    const imageUrl = recipe.imageURL || DEFAULT_IMAGE_URL;
    const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);
    const pinnedClass = recipe.isPinned ? 'is-pinned' : ''; 

    // Note: onclick calls must use the global RecipeApp namespace
    return `
        <div class="recipe-card ${pinnedClass}" data-id="${recipe.id}" onclick="RecipeApp.showRecipeDetail(${recipe.id})">
            <div class="card-image-container">
                <img src="${imageUrl}" alt="${recipe.title}" class="card-image" onerror="this.src='${DEFAULT_IMAGE_URL}';">
            </div>
            <div class="card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description.substring(0, 80)}${recipe.description.length > 80 ? '...' : ''}</p>
                
                <div class="card-footer">
                    <span class="difficulty-tag difficulty-${recipe.difficulty}">${recipe.difficulty}</span>
                    <span class="type-tag type-${recipe.type}">${recipe.type}</span>
                    <div class="card-time">
                        <i class="fas fa-clock"></i> ${totalTime} mins
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderRecipeList(recipeArray) {
    const listElement = document.getElementById('recipe-list');
    listElement.innerHTML = ''; 

    if (recipeArray.length === 0) {
        listElement.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d;">No recipes found matching your criteria. Try adjusting the search or filter settings.</p>';
        return;
    }
    
    recipeArray.forEach(recipe => {
        listElement.innerHTML += createRecipeCard(recipe);
    });
}

/**
 * Renders the full details of a specific recipe using the visual overlay style.
 */
export function renderRecipeDetail(recipe) {
    const ingredientsHtml = recipe.ingredients.split('\n').filter(s => s.trim() !== '').map(item => `<li>${item.trim()}</li>`).join('');
    const stepsHtml = recipe.steps.split('\n').filter(s => s.trim() !== '').map(item => `<li>${item.trim()}</li>`).join('');
    const imageUrl = recipe.imageURL || DEFAULT_IMAGE_URL;

    // Pin Button State
    const isPinned = recipe.isPinned;
    const pinText = isPinned ? 'Unpin Recipe' : 'Pin Recipe';
    const pinClass = isPinned ? 'pinned' : '';
    
    const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);

    const detailContent = document.getElementById('recipe-detail-content');
    
    // Note: onclick calls must use the global RecipeApp namespace
    detailContent.innerHTML = `
        <div id="recipe-detail-overlay">
            
            <div class="detail-image-wrapper">
                <img src="${imageUrl}" alt="${recipe.title}" onerror="this.src='${DEFAULT_IMAGE_URL}';">
            </div>

            <div class="detail-text-content">
                
                <h2>${recipe.title}</h2>
                
                <p class="detail-description-box">
                    ${recipe.description}
                    
                    <div class="detail-attributes">
                        <span class="difficulty-tag difficulty-${recipe.difficulty}">${recipe.difficulty}</span>
                        <span class="type-tag type-${recipe.type}">${recipe.type}</span>
                    </div>

                </p>
                
                <div class="detail-metadata">
                    <div class="detail-time-box">
                        <i class="fas fa-clock"></i> 
                        <span class="time-label">Prep:</span> ${recipe.prepTime} mins | 
                        <span class="time-label">Cook:</span> ${recipe.cookTime || 0} mins | 
                        <span class="time-label">Total:</span> ${totalTime} mins
                    </div>
                    
                    <div class="detail-actions"> 
                        <button class="pin-button ${pinClass}" onclick="RecipeApp.togglePin(${recipe.id})">
                            <i class="fas fa-thumbtack"></i> ${pinText} 
                        </button>
                        <button class="edit-button" onclick="RecipeApp.editRecipe(${recipe.id})">
                            <i class="fas fa-edit"></i> Edit Recipe
                        </button>
                        <button class="delete-button" onclick="RecipeApp.deleteRecipe(${recipe.id})">
                            <i class="fas fa-trash"></i> Delete Recipe
                        </button>
                    </div>
                </div>
                
                <h3>Ingredients</h3>
                <ul>${ingredientsHtml}</ul>
        
                <h3>Steps</h3>
                <ol>${stepsHtml}</ol>
                
            </div>
            
        </div>
    `;
    
    showView('detail-view');
}

export function prepareAddForm() {
    document.getElementById('recipe-form').reset();
    document.getElementById('recipe-id').value = '';
    document.getElementById('form-title').textContent = 'Add';
    document.getElementById('submit-button').innerHTML = '<i class="fas fa-save"></i> Save Recipe';
    document.getElementById('form-errors').style.display = 'none';
    document.getElementById('type').value = 'Veg'; 
}

export function populateEditForm(recipe) {
    document.getElementById('recipe-id').value = recipe.id;
    document.getElementById('form-title').textContent = 'Edit';
    document.getElementById('title').value = recipe.title;
    document.getElementById('description').value = recipe.description;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('steps').value = recipe.steps;
    document.getElementById('prepTime').value = recipe.prepTime;
    document.getElementById('cookTime').value = recipe.cookTime || 0;
    document.getElementById('difficulty').value = recipe.difficulty;
    document.getElementById('imageURL').value = recipe.imageURL || '';
    document.getElementById('type').value = recipe.type || 'Veg'; 
    
    document.getElementById('submit-button').innerHTML = '<i class="fas fa-save"></i> Update Recipe';
    document.getElementById('form-errors').style.display = 'none';
}

export function displayFormErrors(errors) {
    const errorBox = document.getElementById('form-errors');
    errorBox.innerHTML = errors.join('<br>');
    errorBox.style.display = 'block';
}

export function hideFormErrors() {
    document.getElementById('form-errors').style.display = 'none';
}