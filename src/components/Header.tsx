import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
           <Link to={'/'}> <li>Home</li> </Link>
           <Link to={'/train'}> <li>Train</li> </Link>
           <Link to={'/veg'}> <li>Veg</li> </Link>
           <Link to={'/onam'}> <li>Onam</li> </Link>
           <Link to={'/onam2'}> <li>Onam2</li> </Link>
           <Link to={'/onam3'}> <li>Onam3</li> </Link>
        </ul>
    </div>
  )
}

export default Header