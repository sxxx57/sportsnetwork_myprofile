import React, { Component } from "react";
import  "./toggle.css";


class Toggle extends Component{
    state ={}
    render(){
        return (

                <label className="toggle">

                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>

        );
    }
}

export default Toggle;