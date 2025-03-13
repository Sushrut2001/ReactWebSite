import React, { useEffect, useState } from 'react'
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const fetchData = async () => {
        const api = 'https://dummyjson.com/recipes';
        const request = await fetch(api);
        const response = await request.json();
        setRecipes(response.recipes);
        console.log(response)
    }


    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className="bg-[#0C4D2E] h-auto">
            <div className="mb-10">
                <h1 style={{ fontFamily: 'Pacifico, cursive' }} className=" text-center pt-5  text-white text-5xl underline">Recipes</h1>
            </div>
            <div className='conatiner mx-auto p-6'>
                <div className='grid place-items-center  md:grid-cols-2 gap-10'>
                    {recipes.map((recipe) => (
                        <div className='bg-[#E5D0A6] grid md:grid-cols-3 transition-transform duration-300 ease-in-out transform hover:scale-105 place-content-around rounded-2xl md:rounded-2xl '>
                            <div className='...'>
                                <img className='rounded-t-2xl object-cover  md:rounded-l-2xl duration-300 hover:opacity-50  h-[150px] w-screen' src={recipe.image} alt={recipe.name} />
                            </div>
                            <div className=' md:col-span-2 text-xl m-1'>
                                <h1 className='text-xl '>Name: {recipe.name}</h1>
                                <h1>Making Time: {recipe.cookTimeMinutes} min</h1>
                                <h1>Cuisine: {recipe.cuisine}</h1>
                                <h1>Difficulty: {recipe.difficulty}</h1>
                                <h1>Calories: {recipe.caloriesPerServing}</h1>

                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
export default Recipes