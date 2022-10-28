import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
        <div className='error-div'>
          <h1 className='error-h'>'Oops! something went wrong'</h1>
          <p className='error-p'>404 Error - Page not found!</p>
           <Link to='/' className='error-link'>
              <button className='error-button'>Go Home</button>
           </Link>
       </div>
  )
}

export default Error