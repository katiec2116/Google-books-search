import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header"
import Search from "./pages/Search"
import NoMatch from "./pages/NoMatch"
import Saved from "./pages/Saved"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <Router>
      <div>
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;