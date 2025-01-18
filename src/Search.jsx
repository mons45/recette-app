import { useState } from "react";
import { Link } from "react-router-dom";



const APP_ID = '82e453da';
const APP_KEY = '3bb5d1a3b992f408b9003effd74c9c22';

const Search = ({getdata})=>{
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    console.log(recipes.length);
    console.log(recipes);
    const fetchRecipes = async () => {
    const response = await fetch(
    `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits.map(hit => hit.recipe));
    getdata(recipes);
    };
    const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
    };
    

    return(
        <form onSubmit={handleSearch} className="m-4 mt-20">
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une recette..."
            className="border-2 border-gray-300 rounded p-2 mr-2 placeholder:text-zinc-900 text-zinc-950"
            />
            <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            >
             <Link to="/recipes" >Search</Link>

            </button>
        </form>
    )
}


export default Search;