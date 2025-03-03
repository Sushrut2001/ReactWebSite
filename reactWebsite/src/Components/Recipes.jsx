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
                <div className='grid place-items-center grid-cols-2 gap-10'>
                    {recipes.map((recipe) => (
                        <div className='bg-[#E5D0A6] grid grid-cols-3 place-content-around rounded-2xl '>
                            <div className='...'>
                                <img className='rounded-l-2xl h-[150px] w-screen' src={recipe.image} alt={recipe.name} />
                            </div>
                            <div className='col-span-2 text-xl m-1'>
                                <h1 className='text-xl '>Name: {recipe.name}</h1>
                                <h1>Making Time: {recipe.cookTimeMinutes}</h1>
                                <h1>Cuisine: {recipe.cuisine}</h1>
                                <h1>Difficulty: {recipe.difficulty}</h1>
                                <h1>Calories: {recipe.caloriesPerServing}</h1>

                            </div>
                        </div>
                        

                        // <div className='card border transition delay-150 duration-500 ease-in-out hover:-translate-y-5 cursor-pointer bg-[#E5D0A6] rounded' >
                        //     <div className='grid  grid-cols-2 gap-4 m-2 '>
                        //         <div>{recipe.difficulty}</div>
                        //         <div className='grid place-content-end'>Calories: {recipe.caloriesPerServing} <br />Time: {recipe.cookTimeMinutes} min</div>
                        //     </div>
                        //     <div className='grid grid-cols-1 place-content-center'>
                        //         <img className='w-full h-[200px] transition duration-300 hover:opacity-50 grid place-items-center ' src={recipe.image} alt={recipe.name} />
                        //     </div>
                        //     <div className='grid grid-cols-2 place-content-between m-2'>
                        //         <div style={{ fontFamily: 'Dancing Script' }}>{recipe.name}</div>
                        //         <div className='grid place-items-end'>{recipe.cuisine}</div>
                        //         <div>{recipe.rating}</div>
                        //         <div className='grid place-items-end'><button className='bg-[]'>Let's Make</button></div>
                        //     </div>
                        // </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
export default Recipes