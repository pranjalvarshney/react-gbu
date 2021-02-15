import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/library" />
        <Route exact path="/ccc" />
        <Route exact path="/admissions" />
        <Route exact path="/campuslife" />
        <Route exact path="/examination" />
        <Route exact path="/about" />
        <Route exact path="/contact" />
      </Switch>
    </BrowserRouter>
  );
};
