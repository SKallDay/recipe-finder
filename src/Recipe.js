import React, {useEfect, useState} from 'react';
import style from './recipe.module.css'

const Recipe = ({label, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h3>{label}</h3>
      <p>{calories}</p>
      <img src={image} alt=""/>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe;