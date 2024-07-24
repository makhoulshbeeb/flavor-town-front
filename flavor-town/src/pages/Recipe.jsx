import { useState, useEffect } from 'react';
import { Recipes } from '../api/Recipes'
import './Recipe.css'



export default function Recipe({ recipe_id }) {
    const [recipe, setRecipe] = useState();
    const [ingredients, setIngredients] = useState();
    const [steps, setSteps] = useState();
    useEffect(() => {
        setTimeout(() => {
            Recipes.recipe(recipe_id).then(result => { setRecipe(result.data) });
            Recipes.ingredients(recipe_id).then(result => { setIngredients(result.data) });
            Recipes.steps(recipe_id).then(result => { setSteps(result.data) });

        }, 100);

    }, [recipe_id]);

    if (recipe && ingredients && steps) {
        return (
            <div>
                <div className='recipe-container'>
                    <div className="recipe-img" style={{ backgroundImage: `url(${recipe[0]['image_url']})` }}></div>
                    <div className='recipe-description'>
                        <h1>{recipe[0].name}</h1>
                        <p>Preparation Time: {recipe[0].preparation_time}min</p>
                        <p>Cooking Time: {recipe[0].cooking_time}min</p>
                        <br></br>
                        <h3 style={{ textAlign: 'left' }}>{recipe[0].description}</h3>
                        {ingredients.map(ingredient => {
                            return (
                                <>
                                    <br></br>
                                    <div key={ingredient.id} className='ingredient-item'>
                                        <span>{ingredient.name}</span>
                                        <span>{ingredient.quantity}</span>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className='recipe-steps'>
                    {steps.map(step => (
                        <><div key={step.id}>
                            <h3>Step: {step.step_number}</h3>
                            <p>{step.instruction}</p>
                        </div>
                            <br></br>
                        </>
                    )

                    )}
                </div>
            </div>
        )
    }
}