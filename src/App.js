
import './App.css';
import Toggle from "./component/toggle/toggle";
import Greeting from "./component/greeting/greeting";
import Page from "./component/page";

import React, {useState} from "react";

function App() {

  return (
    <div className="App">
        <Greeting/>
        <Toggle/>
        <Page/>

    </div>
  );
}

export default App;
