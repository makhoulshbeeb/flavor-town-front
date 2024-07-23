import axios from "axios";

export default Recipes = {
    create: async (recipe_name, description, image_url, preparation_time, cooking_time, ingredient_list, step_list) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/create.php',
            {
                recipe_name, 
                description, 
                image_url, 
                preparation_time, 
                cooking_time, 
                ingredient_list, 
                step_list
            });
        const data = response.data;
        return data;
    },
    comment: async (recipe_id, comment) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/comment.php',
            {
                recipe_id,
                comment
            });
        const data = response.data;
        return data;
    },
    rate: async (recipe_id, rating) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/rate.php',
            {
                recipe_id,
                rating
            });
        const data = response.data;
        return data;
    },
    favorite: async (recipe_id) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/favorite.php',
            {
                recipe_id,
            });
        const data = response.data;
        return data;
    },
    ingredients:  async (recipe_id) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/ingredients.php',
            {
                recipe_id,
            });
        const data = response.data;
        return data;
    },
    steps:  async (recipe_id) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/steps.php',
            {
                recipe_id,
            });
        const data = response.data;
        return data;
    },
    recipe:  async (recipe_name) => {
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/recipes/recipe.php',
            {
                recipe_name,
            });
        const data = response.data;
        return data;
    },
}