import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>
          Mini Store
        </h1>
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
      </nav>

      <Route exact path="/">
        <Home />
      </Route>

    </div>
  );
}

export default App;
