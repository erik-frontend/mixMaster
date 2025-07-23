import React from 'react'
import CoctailCard from './CoctailCard'
import Wrapper from '../../wrappers/CoctailList'

const CoctailList = ({drinks}) => {
    // console.log(drinks);
    
    if(!drinks) {
       return <h3>No mutch coctails found...</h3>
    }

    const formattedDrinks = drinks.map(item => {
        const {idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass} = item
        return {
            id, name, image, info, glass
        }
    })

  return (
    <Wrapper>
        {formattedDrinks.map(item => {
            return <CoctailCard key={item.id} {...item}/>
        })}
    </Wrapper>
  )
}

export default CoctailList