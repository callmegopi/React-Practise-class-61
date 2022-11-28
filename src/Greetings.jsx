import { Component } from "react";
import React from "react";

export class Kushi extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return(
            <div>
                <h2>{this.props.message}</h2>
                <h2>{this.props.wlecome}</h2>
            </div>
        )
    }
}