import {Component} from 'react'
import '../../pages/Details.css'

export default class Descriptions extends Component{
    render(){
        const{Plot,imdbRating,Title,Genre,Actors}=this.props.movie
        return(
            <fieldset className="descField">
                <div id="desc">
                    <h1><span className='titre'>Titre:</span> {Title}</h1>
                    <p><span className="rsm">Genre:</span><span className='focus'> {Genre}</span></p>
                    <p> <span className="rsm">Actors:</span> <span className='focus'>{Actors}</span></p>
                </div>
                <div>
                    <h3 id="points">Rating: <span className="Rating">{imdbRating}</span></h3>
                    <p><span className="rsm">Resume:</span> {Plot}</p>
                </div>
            </fieldset>
        )
    }
}