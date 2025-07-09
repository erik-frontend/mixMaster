import React from 'react'
import { navLinks } from '../../utils/Data'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-links'>
        {navLinks && (
            navLinks.map((link, index) => (
                <NavLink key={index} className="nav-link" to={link.path}>{link.name}</NavLink>
            )) 
        )}
        
    </div>
  )
}

export default Nav