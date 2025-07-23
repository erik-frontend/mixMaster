import React from 'react'
import Wrapper from '../../wrappers/CoctailCard'
import { Link } from 'react-router-dom'

const CoctailCard = ({ id, name, image, info, glass }) => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{glass}</h5>
                <p>{info}</p>
                <Link className='btn' to={`/coctail/${id}`}>details</Link>
            </div>
        </Wrapper>
    )
}

export default CoctailCard