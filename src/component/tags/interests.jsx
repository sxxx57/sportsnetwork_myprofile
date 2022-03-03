import React, { Component } from 'react'
import './interests.css';
import image from'./image-interests.jpg'


class Interets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skills: []
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
            <div className="interest-container">
                <h1> I'm in </h1>
                <img src={image} height={100} width={100} />
                <div className="skill">
                    <ul>
                        { skills.map((skill, i) => {
                            return (
                                <li key={i}> {skill} <button onClick={() => this.removeSkill(i)}>+</button> </li>
                            )
                        }) }
                        <li className="input-skill">
                            <input placeholder="Add Interests" onKeyDown={this.addSkill} type="text" size="4" ref={this.inputRef} />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Interets