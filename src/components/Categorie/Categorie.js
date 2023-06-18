import { Component } from "react";
import './Categorie.css'

class Title extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name}=this.props
        return (
            <div className="title">
                <div>{name}</div>
            </div>
        )
    }
}

export default Title