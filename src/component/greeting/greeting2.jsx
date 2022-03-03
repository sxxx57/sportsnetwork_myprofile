import React, { Component } from "react";
import './greeting.css'
class Greeting2 extends Component{
    state ={}
    render(){
        return (
            <div className="greeting-container">
                <h1 className="business-mode">Business Mode</h1>
                <h3 className="greeting-title">I'M PERSONALLY INTERESTED IN</h3>
                <p className="content">We guessed some of your favourite activities here. <span>🙂 </span>Edit and add more to help people connect with you.</p>
            </div>
        );
    }
}

export default Greeting2;