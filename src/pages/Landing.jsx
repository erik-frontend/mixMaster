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
    const apiUrl = searchTerm
        ? `${coctailSearchUrl}${searchTerm}`
        : defaultUrl
    return {
        queryKey: ["coctails", searchTerm || "default"],
        queryFn: async () => {
            const response = await axios.get(apiUrl)
            // console.log(response.data);
            const drinksData = response.data.drinks
            return Array.isArray(drinksData) ? drinksData : []
        }
    }
}

export const loader =
    (queryClient) =>
        async ({ request }) => {
            const url = new URL(request.url)
            const searchTerm = url.searchParams.get("search") || ""
            await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm))
            // console.log(response);
            return { searchTerm }
        }

const Landing = () => {

    const { searchTerm } = useLoaderData()

    const {
        data: drinks = [],
        isLoading,
        isError,
    } = useQuery(searchCoctailsQuery(searchTerm))

    if(isLoading) {
        return <p style={{textAlign:"center"}}>Loading coctails...</p>
    }

    if(isError) {
        return <p style={{textAlign:"center", color:"red"}}>Failed to load coctails</p>
    }

    return (
        <div>
            <Search searchTerm={searchTerm} />
            <CoctailList drinks={drinks} />
        </div>
    )
}

export default Landing