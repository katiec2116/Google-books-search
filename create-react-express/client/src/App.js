import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header"
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch"
import 'bulma/css/bulma.css'

function App() {
  return (

    <Router>
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/saved" component={Saved} /> */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;