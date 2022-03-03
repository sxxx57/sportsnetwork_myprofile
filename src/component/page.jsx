import Interests from "./tags/interests";
import Unsure from "./tags/unsure";
import Hate from "./tags/dislike";
import './page.css'
import React, {Component} from "react";

class Page extends Component{
    state ={}
    render(){
        return (
            <label className="page-container">
                <Interests/>
                <Unsure/>
                <Hate/>
            </label>

        );
    }
}

export default Page;