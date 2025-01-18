const RecipeCard = ({ recipe }) => {
    return (
    <div className="max-w-sm border-2 rounded-2xl overflow-hidden shadow-lg border-zinc-300 border-spacing-1 m-3 ">
    <img className="w-full h-[351px]" src={recipe.image} alt={recipe.label} height="351px" />
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{recipe.label}</div>
    </div>
    </div>
    );
    };
    export default RecipeCard;
    