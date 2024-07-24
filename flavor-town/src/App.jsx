import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import Recipe from './pages/Recipe';
import FloatingButton from './components/FloatingButton';
import AddRecipe from './pages/AddRecipe';
import { useEffect, useState } from 'react';

function App() {
  const [recipeId, setRecipeId]=useState(1);
  useEffect(()=>{console.log(recipeId)});
  return (
    <div className="App">
      <Header></Header>
      <Display displayTitle={'Featured'} panel_number={8} setRecipeId={setRecipeId} ></Display>
      <Recipe recipe_id={recipeId}>{recipeId}</Recipe>
      {/* <AddRecipe></AddRecipe> */}
      <FloatingButton></FloatingButton>
    </div>
  );
}

export default App;
