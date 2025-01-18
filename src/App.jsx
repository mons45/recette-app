import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Search from "./Search";
import Recipe from "./Recipe";
import RecipeDetails from "./RecipeDetails";
import Header from "./Header";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleRecipes = (recipe) => {
    setRecipes(recipe);
  };

  return (
    <Router>
      <div className="App place-items-center">
        <Header />
        <Routes>
          <Route path="/search" element={<Search getdata={handleRecipes} />} />
          <Route path="/recipes" element={<Recipe recipes={recipes} />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails recipes={recipes} />}
          />
          <Route
            path="/"
            element={
              <div className="text-center text-zinc-700">
                <h1 className="text-zinc-300 text-lg mt-60">Welcome to How To Cook</h1>
                <p className="text-zinc-300 text-lg">Start by searching for recipes!</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
