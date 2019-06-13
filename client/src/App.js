import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beers from "./pages/Beers";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Beers} />
          <Route exact path="/beers" component={Search} />
          <Route exact path="/beers/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
