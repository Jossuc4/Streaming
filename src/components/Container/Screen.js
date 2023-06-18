import {Component} from 'react'
import '../../pages/Details.css'

export default class Screen extends Component{
    render(){
        const {Images}=this.props.movie
        return(
            <div className="descScreen">
                <div id="image">
                    <img src={Images[2]} alt=" "/>
                    <div id="focuser"></div>
                </div>
                <div id="line"></div>
            </div>
        )
    }
}