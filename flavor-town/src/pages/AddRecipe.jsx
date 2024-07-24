import './AddRecipe.css';
import { Recipes } from '../api/Recipes';
import Input from '../components/Input';
import Button from '../components/Button';
import { useEffect, useState } from 'react';

export default function AddRecipe() {

    const [numberIngredients, setNumberIngredients] = useState(1);
    const [numberSteps, setNumberSteps] = useState(1);

    const [recipeName, setRecipeName] = useState();
    const [description, setDescription] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [preparationTime, setPreparationTime] = useState();
    const [cookingTime, setCookingTime] = useState();
    const [stepsList, setStepsList] = useState();
    const [ingredientsList, setIngredientsList] = useState([]);
    const [quantityList, setQuantityList] = useState([]);

    useEffect(() => {
        setTimeout(() => { }, 100);
    }, [numberIngredients, numberSteps])

    return (
        <div className='add-recipe-panel'>
            <h1>Share your own Recipe</h1>
            <Input name='recipe_name' id='recipe_name' placeholder='Recipe Name' change={setRecipeName}></Input>
            <Input name='description' id='description' placeholder='Description' change={setDescription}></Input>
            <Input name='image_url' id='image_url' placeholder='Image URL' change={setImageUrl}></Input>
            <Input name='preparation_time' id='preparation_time' placeholder='Peparation Time' change={setPreparationTime}></Input>
            <Input name='cooking_time' id='cooking_time' placeholder='Cooking Time' change={setCookingTime}></Input>
            {[...Array(numberIngredients)].map((e, i) => {
                return (
                    <div className='flex'>
                        <Input name={`ingredient${i}`} id={`ingredient${i}`} placeholder={`Ingredient ${i}`}></Input>
                        <Input name={`quantity${i}`} id={`quantity${i}`} placeholder={`Quantity`}></Input>
                    </div>
                )
            })}
            <Button onClick={setNumberIngredients(numberIngredients + 1)}> Add Ingredient</Button>
            {[...Array(numberSteps)].map((e, i) => {
                return (
                    <Input name={`step${i}`} id={`step${i}`} placeholder={`Step ${i}`}></Input>
                )
            })}
            <Button onClick={setNumberSteps(numberSteps + 1)}> Add Ingredient</Button>
            <Button onClick={createRecipe}>Submit</Button>


        </div>
    );
}
function createRecipe(
    recipeName,
    description,
    imageUrl,
    preparationTime,
    cookingTime,
    stepsList,
    ingredientsList,
    quantityList) {

    const map = new Map();
    for (let i = 0; i < ingredientsList.length; i++) {
        map.set(ingredientsList[i], quantityList[i]);
    }
    Recipes.create(recipeName, description, imageUrl, preparationTime, cookingTime, map, stepsList).then(result=>{
        console.log(result);
    })
}