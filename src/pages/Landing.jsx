import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Search from '../components/search/Search'

const coctailSearchUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?s="
// console.log(coctailSearchUrl);

const searchCoctailsQuery = (searchTerm) => {
    return{
        queryKey:["search", searchTerm || "all"],
        queryFn: async() => {
            const response = await axios.get(`${coctailSearchUrl}${searchTerm}`)
            console.log(response.data);
            if(!response.data.drinks || typeof response.data.drinks !== "object"){
                return []
            }
            return response.data
        }
    }
}

searchCoctailsQuery()
const Landing = () => {

    const searchTerm = ""

    const {} = useQuery(searchCoctailsQuery(searchTerm))

    if(isLoading) return <p>loading...</p>
    if(error) return <p>error... {error.message}</p>

  return (
    <div>
        <Search/>
    </div>
  )
}

export default Landing