import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = recipes[id]; // Retrieve the recipe using the ID

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="recipe-details max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
      <p className="text-gray-600 mt-4">{recipe.description}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-700 text-base">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Instructions:</h2>
      <p className="text-gray-700 text-base">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
