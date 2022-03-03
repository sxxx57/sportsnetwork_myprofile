import React, { Component } from "react";
import  "./toggle.css";
const Toggle = ({onChange})=><label className="toggle"><input type="checkbox" onChange={onChange} /> <span className="slider"></span>
</label>

export default Toggle;