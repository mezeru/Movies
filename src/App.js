import React, { Component } from 'react';
import Movies from "./component/movies.jsx"
import Navbar from "./component/common/navbar.jsx"
import Customers from './component/pages/Customers.jsx';
import Rentals from './component/pages/Rentals.jsx'
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import NotFound from './component/pages/not-found.jsx'
import Login from './component/pages/loginForm.jsx'
 

function App() {
  return (
  <div>
  <Navbar/> 
   <main className="container">
   <div className="content">

    <Switch>
    <Route path='/Login' component={Login}/>
    <Route path='/Customers' component={Customers} />
    <Route path='/Rentals' component={Rentals} />
    <Route path='/not-found' component={NotFound} />
    <Route path='/movies' component={Movies} />
    <Route path='/login' component={Login} />
    <Redirect exact from='/' to='/movies'/>
    <Redirect exact to='/not-found'/>
    </Switch>
    </div>

   </main>
  </div>
  );
}

export default App;
