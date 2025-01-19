import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const Recipe = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <h1 className="text-zinc-300 text-center text-lg m-56">
        We’re sorry, no recipes found. Try another search term!
      </h1>
    );
  }
  return (
    <div className="cards grid grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <Link to={`/recipe/${index}`} key={index}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default Recipe;

