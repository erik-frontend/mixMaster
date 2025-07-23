import React from 'react'
import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {

    const error = useRouteError()

  return (
    <div className='page-error'>
        <h2>Something Went Wrong</h2>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default SinglePageError