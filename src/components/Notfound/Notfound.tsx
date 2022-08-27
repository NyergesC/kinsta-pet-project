import React from 'react'
import { Link } from 'react-scroll'

const NotFound = () => {
  return (
    <div>
        <h2>Sorry</h2>
        <p>Page cannot be not found</p>
        <Link to="/home">Back to the homepage...</Link>
        
        
   </div>
  )
}

export default NotFound
