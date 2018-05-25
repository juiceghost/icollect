import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Pricing from "./Pricing";
import Login from "./Login";
import Gallery from "./Gallery";
import Edit from "./Edit";
import About from "./About";
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
 
  render() {
    let name="Welcome to iCollect";
    let name1="iCollect";
    let mail="mailto:kristian@test.se" 
    let info ="All rights reserved to Kristian.Kjeldson"   
    return (
      <HashRouter>
      <div className="App">           
          <h1>{name}</h1>     
                <div>                
                    <ul className="header">
                        <li><NavLink exact to="/">About</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/collection">Collection</NavLink></li>
                        <li><NavLink to="/Login">Login</NavLink></li>
                    </ul>  
                    <div className="content">
                        <Route exact path="/" component={About} />
                        <Route path="/pricing" render={() => <Pricing />} />
                        <Route path="/collection" render={() => <Gallery />} />
                        <Route path="/Login" render={() => <Login />} />

                      <div className="footer">                 
           <h5>{info}</h5>
           <a href={mail}><h6>Contact Kristian</h6></a>
                     
                    </div>
                </div>              
         </div>   
         </div>
            </HashRouter>  
        
    );
  }
}

export default App;
