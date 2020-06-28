import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('tofu')

  const APP_ID = 'dd2ff2fa';
  const APP_KEY = 'e12f69fc4944fe3b41ac25d4ad0de304';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchRecipes();
  },[query]);

  const fetchRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSarch = e => {
    setSearch(e.target.value);
  }

  const getSearch= e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-input" type="text" value={search} onChange={updateSarch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) =>(
        <Recipe
          key={index}
          label={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
