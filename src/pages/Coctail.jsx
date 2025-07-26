import axios from 'axios'
import React from 'react'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import Wrapper from '../wrappers/CoctailPage'

const singleCoctailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

export const loader = async ({ params }) => {
  // console.log(params.id);
  const { id } = params
  const { data } = await axios.get(`${singleCoctailUrl}${id}`)
  return { id, data }
}

const Coctail = () => {

  const { id, data } = useLoaderData()
  // console.log(data.drinks[0]);

  if(!data.drinks) return <Navigate to="/"/>

  const singleDrink = data.drinks[0]

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  //  console.log(singleDrink);

  const validIngridients = Object.keys(singleDrink)
    .filter(key => key.startsWith("strIngredient") && singleDrink[key] !== null)
    .map(key => singleDrink[key])


  // console.log(validIngridients);
  
  return (
    <Wrapper>
      <header>
        <Link to="/" className='btn'>Back Home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className='img' />
        <div className="drink-info">
          <p><span className="drink-data">Name: </span>{name}</p>
          <p><span className="drink-data">Category: </span>{category}</p>
          <p><span className="drink-data">Info: </span>{info}</p>
          <p><span className="drink-data">Glass: </span>{glass}</p>
          <p><span className="drink-data">Ingridients: </span>{" "}
            {validIngridients.map((item, index) => {
              return(
                <span className='ing' key={index}>
                  {item}
                  {index < validIngridients.length - 1 ? ", " : ""}
                </span>
              )
            })}
          </p>
          <p><span className="drink-data">Instructions: </span>{instructions}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Coctail