import axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://localhost/flavor-town/flavor-town-back/api",
        withCredentials: false,
    });

export const Recipes = {
    create: async (recipe_name, description, image_url, preparation_time, cooking_time, ingredient_list, step_list) => {
        const response = await instance.post('/recipes/create.php',
            {
                recipe_name,
                description,
                image_url,
                preparation_time,
                cooking_time,
                ingredient_list,
                step_list
            });
        return response;
    },
    comment: async (recipe_id, comment) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/comment.php',
            {
                recipe_id,
                comment
            });
        return response;
    },
    rate: async (recipe_id, rating) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/rate.php',
            {
                recipe_id,
                rating
            });
        return response;
    },
    favorite: async (recipe_id) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/favorite.php',
            {
                recipe_id,
            });
        return response;
    },
    ingredients: async (recipe_id) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/ingredients.php',
            {
                recipe_id,
            });
        return response;
    },
    steps: async (recipe_id) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/steps.php',
            {
                recipe_id,
            });
        return response;
    },
    recipe: async (recipe_id) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/recipe.php',
            {
                recipe_id,
            });
        return response;
    },
    search: async (recipe_name) => {
        const response = await instance.post('http://localhost/flavor-town/flavor-town-back/api/recipes/search.php',
            {
                recipe_name,
            });
        return response;
    },
}