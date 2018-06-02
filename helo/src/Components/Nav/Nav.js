import React, {Component} from 'react';
import { Link } from 'react-router-dom';
 
const Nav = () =>{

    return(
    <div> 
            
     <Link to='/Dashboard'>
        <button> Home </button>
     </Link>          
     <Link to='/New Post'>
        <button> New Post </button>
    </Link>
    <Link to = '/'> 
        <button> Logout </button>
    </Link>
    </div>
    )


}

export default Nav;