import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
export const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
            <Navbar/>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route
                exact 
                path="/"
                component={HeroesScreen}
             />
            <Route
                exact 
                path="/dc" 
                component={DcScreen}
            />
            <Route
                exact 
                path="/marvel" 
                component={MarvelScreen}
            />
            <Redirect to='/marvel' />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
