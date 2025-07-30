import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Search from '../components/search/Search'
import { useLoaderData } from 'react-router-dom'
import CoctailList from '../components/coctails/CoctailList'

const coctailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
// console.log(coctailSearchUrl);

const defaultUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

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

export const loader = async ({request}) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get("search")
    const apiUrl = searchTerm ? `${coctailSearchUrl}${searchTerm}` : defaultUrl
    const response = await axios.get(apiUrl)

    // console.log(response);

    const drinksData = response.data.drinks

    const drinks = Array.isArray(drinksData) ? drinksData : []

    return { drinks, searchTerm }
}

const Landing = () => {

    const { drinks, searchTerm } = useLoaderData()

    // console.log(drinks);
    
    return (
        <div>
            <Search searchTerm={searchTerm}/>
            <CoctailList drinks={drinks}/>
        </div>
    )
}

export default Landing