import React, { Component } from 'react'
import './dislike.css';
import image from'./image-hate.jpg'


class Hate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skills: ["Running"]
        }
        this.inputRef = React.createRef()
    }

    // remove skill
    removeSkill = i => {
        const skills = this.state.skills
        skills.splice(i, 1)
        this.setState({
            skills: skills
        })
    }

    // add skill
    addSkill = e => {
        const skills = this.state.skills
        const value = e.target.value
        if(e.key === "Enter" && value){
            // check if duplicate skill
            if(skills.find(skill => skill.toLowerCase() === value.toLowerCase())){
                return alert("No duplicate value allowed")
            }
            // else add skill to skills array
            skills.push(value)
            // set new state
            this.setState({
                skills
            })
            // when submit skill, set current input filed null
            this.inputRef.current.value = null
        } else if(e.key === "Backspace" && !value){
            // if no value and hit backspace we will remove previous skill
            this.removeSkill(skills.length - 1)
        }
    }


    render() {
        const {skills} = this.state
        return (
            <div className="container">
            <div className="dislike-container">
                <h1> Definitely not! </h1>
                <img src={image} height={200} width={200} />
                <div className="skill">
                    <ul>
                        { skills.map((skill, i) => {
                            return (
                                <li style={{ background: "red"}} key={i}> {skill} <button onClick={() => this.removeSkill(i)}>+</button> </li>
                            )
                        }) }
                        <li className="input-skill">
                            <input placeholder="Add Not Interest" onKeyDown={this.addSkill} type="text" size="4" ref={this.inputRef} />
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Hate