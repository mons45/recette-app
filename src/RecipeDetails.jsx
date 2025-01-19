import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams(); 
  const recipe = recipes[id]; 

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="recipe-details max-w-4xl mx-auto p-6">
          <img className=" w-40 h-40 mt-14" src={recipe.image} alt={recipe.label} height="351px" />
          <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.label}</div>
    </div>
      <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
      <p className="text-gray-300 mt-4">{recipe.description}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-300 text-base">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Instructions:</h2>
      <p className="text-gray-300 text-base">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
