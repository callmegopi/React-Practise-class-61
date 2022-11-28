import { Component } from "react";
import { Kushi } from "./Greetings";

export default class SwathiClassz extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello from swathi class component",
            wlecome:"Hello swathi welcome to you"
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.setState({message:"Hello Swathi Darling, how are you"})}}>change msg</button>
                <button onClick={()=>{this.setState({wlecome:"Hello from kuchore"})}}>Change Msg-2</button>
                <Kushi {...this.state}/>
            </div>
        )
    }
}