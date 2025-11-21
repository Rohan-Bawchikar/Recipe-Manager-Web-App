// validation.js

/**
 * Validates the recipe form data.
 * @param {object} formData - Object containing form input values.
 * @returns {string[]} An array of error messages. Empty array if valid.
 */
export function validateRecipe(formData) {
    const { title, description, ingredients, steps, prepTime, cookTime, difficulty, imageURL, type } = formData;
    const errors = [];

    if (!title || !description || !ingredients || !steps || !difficulty || !type) {
        errors.push("• All required fields (*) must be filled out.");
    }
    if (isNaN(prepTime) || prepTime <= 0) {
        errors.push("• Prep Time must be a positive number.");
    }
    if (isNaN(cookTime) || cookTime < 0) {
        errors.push("• Cook Time must be a non-negative number.");
    }
    if (imageURL && !/^https?:\/\/.*/i.test(imageURL)) {
         errors.push("• Image URL must be a valid web link starting with http or https.");
    }

    return errors;
}