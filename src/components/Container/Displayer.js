import { Component } from 'react';
import './App.css';
import Item from '../Item/Item';



class Displayer extends Component{
  constructor(props){
    super(props)
    this.theme=(this.props.category === "movie") ? "film" : "série"
  }
  render(){
    const {movies,category}=this.props 
    let cards=[]
     movies.map(movie=>{
      if(movie.Type===category){
        console.log({type:movie.Type,expected:category})
        cards.push(<Item {...movie} onClickedItem={this.props.onClickedItem} key={movie.imdbID}/>)
      } 
    })

    return (
        <div className="App">
          {
            (cards.length)>0 ? cards :  <div style={{textAlign: "center",fontSize: "25px",width: "100%",color: "yellow"}}> Aucun  {this.theme}   ne correspond à votre recherche</div>
          }
        </div>
    );
  }
}
export default Displayer;
