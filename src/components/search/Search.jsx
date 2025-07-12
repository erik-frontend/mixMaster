import React from 'react'
import Wrapper from '../../wrappers/Search'
import { useNavigation, Form } from 'react-router-dom'

const Search = () => {

    // const navigation = useNavigation()

    // const isSubmitting = navigation.state === "submitting"

    return (
        <Wrapper>
            <form className="form">
                <input type="search" className="form-input" name='search' />
                <button className="btn" type='submit'>
                    {/* {isSubmitting ? "searching" : "search"} */}
                    search
                </button>
            </form>
        </Wrapper>
    )
}

export default Search