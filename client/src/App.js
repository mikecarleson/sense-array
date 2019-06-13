import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beers from "./pages/Beers";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/beers/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
