import { Component } from "react";
import './item.css'

 export default class Item extends Component{

    constructor(props){
        super(props)
        this.itemClicked=this.itemClicked.bind(this)
    }

    itemClicked(e){
      this.props.onClickedItem(e.target.htmlFor)
      // console.log(e.target.htmlFor)
    }
    
    render(){
      // const nom=this.props.nom
      // const age=this.props.age 
      console.log(this.props.Title)
        //Same meaning codes
      const Images=this.props.Images       //Destructuration (comme compact() de php)
      const Title=this.props.Title
      return <fieldset className="cadre" onClick={this.itemClicked}>
        <img src={Images[2]} alt={Title} />
        <label htmlFor={Title}>{Title}</label>
      </fieldset>
    }
}