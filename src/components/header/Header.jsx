import React from 'react'
import Nav from '../nav/Nav'
import Wrapper from '../../wrappers/NavBar'

const Header = () => {
  return (
    <Wrapper>
        <div className="nav-center">
            <span className="logo">
                MixMaster
            </span>
            <Nav/>
        </div>
    </Wrapper>
  )
}

export default Header