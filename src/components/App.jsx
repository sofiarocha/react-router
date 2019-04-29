import React from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

const App = () => {
    return (
        <BrowserRouter>
              <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/our-history" activeClassName="selected"> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/our-history" component={History} />
                </Switch>
              </div>
        </BrowserRouter>
    );
};

export default App;
