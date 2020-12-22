import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import Register from "../components/Register";
import Login from "../components/Login";
import NotLogIn from "../components/NotLogIn";
import NotLogInDet from "../components/NotLogInDet";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipe/:id" exact component={Recipe} />
      <Route path="/recipe" exact component={NewRecipe} />
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/notLog" exact component={NotLogIn}/>
      <Route path="/det" exact component={NotLogInDet}/>
    </Switch>
  </Router>
);