
import './App.css';
import Toggle from "./component/toggle/toggle";
import Greeting from "./component/greeting/greeting";
import Page from "./component/page";

import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import BusinessPage from "./component/page2";

import React, {useState} from "react";

function App() {

  return (
    <div className="App">
{/*        <Router>
            <Switch>
                <Route path="/" component={Page} />
                <Route path="/BusinessMode" component={BusinessPage} />
            </Switch>
            <Link to="/BusinessMode"> link </Link>
        </Router>*/}
        <Greeting/>
        <Toggle/>
        <Page/>
    </div>

  );
}

export default App;
