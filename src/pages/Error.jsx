import React from 'react'
import errorPage from '../assets/errorpage.svg'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../wrappers/Error'

const Error = () => {

    const error = useRouteError()
    // console.log(error);
    if (error.status === 404) {
        return (
            <Wrapper>
                <div className="error-page">
                    <img src={errorPage} alt="error" />
                    <h3>Page not found</h3>
                    <p>We can not seem to find page you are looking for</p>
                    <Link to="/">Back to home</Link>
                </div>
            </Wrapper>
        )
    }




    return (
        <Wrapper>
            <h3>Something was wrong</h3>
        </Wrapper>
    )
}

export default Error