import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Presentation from "./pages/Presentation";
import Header from "./components/Header"
import Banner from "./components/Banner"
import Signin from "./pages/Signin";

var hist = createBrowserHistory();

function App() {
  return (
      <div className="App">
        <Router history={hist}>
        <Header />
        <Switch>
            <Route path="/" exact component={Presentation}/>
            <Route path="/Signin" exact component={Signin}/>
            <Redirect to="/" />
        </Switch>
        </Router>
      </div>
  );
}

export default App;
