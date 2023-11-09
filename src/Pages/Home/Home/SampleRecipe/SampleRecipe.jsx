import { useEffect, useState } from "react";
import Recipe from "./Recipe";


const SampleRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('/receipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        <div className="mb-16">
            <div className="max-w-2xl text-center mx-auto mb-6">
            <h2 className="text-2xl font-bold mb-6 text-primary underline">Popular Recipes</h2>
            <p className="text-center font-bold">Welcome to OFF.Recipe Book, where we bring the joy of cooking to your fingertips, no matter where you are. Our mission is to make cooking and meal planning a delightful experience for food lovers of all levels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                recipes.map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    ></Recipe>)
            }
             </div>
        </div>
    );
};

export default SampleRecipe;