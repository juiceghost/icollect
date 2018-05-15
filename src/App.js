import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Pricing from "./Pricing";
import Login from "./Login";
import Gallery from "./Gallery";
import Edit from "./Edit";
import About from "./About";

import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to iCollect</h1>
        </header>
        <p className="App-intro">
        <HashRouter>
                <div>
                    <h1>iCollect</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">About</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/collection">Collection</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={About} />
                        <Route path="/pricing" render={() => <Pricing />} />
                        <Route path="/collection" render={() => <Gallery />} />
                    </div>
                </div>
            </HashRouter>
        </p>
      </div>
    );
  }
}

export default App;
