import React from 'react'
import Wrapper from '../../wrappers/Search'
import { useNavigation, Form } from 'react-router-dom'

const Search = ({searchTerm}) => {

    const navigation = useNavigation()

    const isSubmitting = navigation.state === "submitting"

    return (
        <Wrapper>
            <Form className="form">
                <input 
                type="search" 
                className="form-input" 
                name='search'
                defaultValue={searchTerm}
                placeholder='search coctails...'
                />
                <button className="btn" type='submit'>
                    {isSubmitting ? "searching" : "search"}
                </button>
            </Form>
        </Wrapper>
    )
}

export default Search