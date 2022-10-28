import React from 'react'

import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav-div'>
        <div className='nav-random'>
            Random<span style={{color: "teal"}}>Api</span>
        </div>
        <div className='nav-ul'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/profile' className='link'>Profile</Link>
            <Link to='/users' className='link'>Users</Link>
        </div>
    </div>
  )
}

export default Navbar;