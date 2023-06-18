import React, {Component} from 'react'
import Displayer from './Displayer'
import Categorie from '../Categorie/Categorie'

export default class Video extends Component{
    render(){
        const name=this.props.name
        const title= name==='movie' ? "Films" : "Séries"
        return(
            <React.Fragment>
  
                <Categorie name={title}/> 
                  
                <div id="films">
                    <Displayer 
                        movies={this.props.movies} 
                        onClickedItem={this.props.onClickedItem} 
                        category={name}
                    />
                </div>
            </React.Fragment>
        )
    }
} 