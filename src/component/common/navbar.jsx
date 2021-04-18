import React from 'react';
import {NavLink,Link,Route} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link  className="navbar-brand mr-5" style={{fontSize:35,fontWeight:"bold"}} to="#">Vivly</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
          <nav className="navbar-nav mr-auto">
            
              <NavLink className="nav-link" to="/movies">Home<span className="sr-only">(current)</span></NavLink>
            
            
              <NavLink className="nav-link" to="/Rentals">Rentals</NavLink>
            
           
              <NavLink className="nav-link" to="/Customers">Customers</NavLink>

              <NavLink className="nav-link" to="/login">Login</NavLink>
              
        </nav>
           
       
      </nav>
     );
}
 
export default Navbar;