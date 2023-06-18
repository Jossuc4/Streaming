import { Component } from 'react';
import './App.css';

export default class Image extends Component{
    render(){
        const {Images,imdbID}=this.props.movie
        let images=[]
        let x=0
        Images.map(i=>(images.push(<div key={x++}><img src={i}/></div>)))
        return(
            <div className="images">
               {images}
            </div>
        )
    }
}