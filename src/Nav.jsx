import React from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { MyContext } from './Context';
import { MdOutlineShoppingCart } from 'react-icons/md';


function Nav() {
    const{search,setsearch,cart}= useContext(MyContext)
    
  return (
    <div className='nav'>
        <Link className='link' to="/"> <h5>Home</h5></Link>
       
        <Link  className='link'to="/cart"> <MdOutlineShoppingCart size={"22px"} /> <p className='num'>{cart.length}</p> </Link>
    
    </div>
  )
}

export default Nav
