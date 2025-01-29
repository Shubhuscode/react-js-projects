import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '72fa6d7c';
  const APP_KEY = '1046b1d712a9b5b58e0780399edc590f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    getRecipes();
  }, [query])
  const getRecipes = async () => {
    const response = await fetch
          (`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setRecipes(data.meals || []);
   // console.log(data);

  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.idMeal}
            title={recipe.strMeal}
            //calories={recipe.recipe.calories}
            image={recipe.strMealThumb}
            ingredients={Object.keys(recipe)
                  .filter(key=>key.startsWith('strIngredient')&&recipe[key])
                  .map(key=>({strIngredient:recipe[key]}))
            }
          />

        ))}
      </div>

    </div>
  );
}

export default App;
