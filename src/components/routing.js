import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Contact  from "./Pages/Contact/Contact"

export const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/library" />
        <Route exact path="/ccc" />
        <Route exact path="/admissions" />
        <Route exact path="/campuslife" />
        <Route exact path="/examination" />
        <Route exact path="/about" />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
