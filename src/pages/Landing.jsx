import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Search from '../components/search/Search'
import { useLoaderData } from 'react-router-dom'
import CoctailList from '../components/coctails/CoctailList'

const coctailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
// console.log(coctailSearchUrl);

const searchCoctailsQuery = (searchTerm) => {
    return {
        queryKey: ["search", searchTerm || "all"],
        queryFn: async () => {
            const response = await axios.get(`${coctailSearchUrl}${searchTerm}`)
            console.log(response.data);
            if (!response.data.drinks || typeof response.data.drinks !== "object") {
                return []
            }
            return response.data
        }
    }
}

export const loader = async () => {
    const searchTerm = "Margarita"
    const response = await axios.get(`${coctailSearchUrl}${searchTerm}`)

    // console.log(response);

    return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {

    const { drinks, searchTerm } = useLoaderData()

    // console.log(drinks);
    
    return (
        <div>
            <Search />
            <CoctailList drinks={drinks}/>
        </div>
    )
}

export default Landing