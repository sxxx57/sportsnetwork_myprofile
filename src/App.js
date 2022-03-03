
import './App.css';
import Toggle from "./component/toggle/toggle";
import Greeting from "./component/greeting/greeting";
import Greeting2 from "./component/greeting/greeting2";
import Page from "./component/page";
import BusinessPage from "./component/page2";

import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";


import React, {useState} from "react";

function App() {
    const[toggled,setToggled] = useState(false)

  return (
    <div className="App">
{/*        <Router>
            <Switch>
                <Route path="/" component={Page} />
                <Route path="/BusinessMode" component={BusinessPage} />
            </Switch>
            <Link to="/BusinessMode"> link </Link>
        </Router>*/}
        <div>
            {toggled ? <Greeting2/> : <Greeting/>}
        </div>
        <Toggle onChange={(event)=>setToggled(event.target.checked)}/>
        <div>
            {toggled ? <BusinessPage/> : <Page/>}
        </div>
    </div>

  );
}

export default App;
