import React from 'react';
import {Component} from 'react'
import MenuBar from '../components/Menu/MenuBar'
import Video from '../components/Container/Video'
import Movies from '../data/Movies'
import './main.css'


export default class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            searchValue:'',
            movies:Movies
        }
        this.onSubmittedSearch=this.onSubmittedSearch.bind(this)
        this.searchValueChanged=this.searchValueChanged.bind(this)
        this.findMovie=this.findMovie.bind(this)
        this.handleItemClick=this.handleItemClick.bind(this)
        this.returnSameValue=(value)=>value.Title
        this.findObject=this.findObject.bind(this)
    }
    /**
     * When the searchValue is submitted
     */
    onSubmittedSearch(){
        this.findMovie(this.state.searchValue)
    }
    /**
     * During the search (not submitted yet)
     */
    searchValueChanged(FilterText){
        this.setState({searchValue:FilterText})
    }

    /**
     * Finding the movie in the list
     * @param string movie 
     */
    findMovie(movie){
        if(movie !== ""){
            const foundValue=Movies.filter(item=>this.returnSameValue(item).toLocaleLowerCase().includes(movie.toLocaleLowerCase()))
            this.setState({movies:foundValue})
        }else{
            this.setState({movies:Movies})
        }
    }

    /**
     * Finding the corresponded object to the movie title
     * @param {String} title 
     * @returns {Object}
     */
    findObject(title){
        return Movies.filter(item=>this.returnSameValue(item).toLocaleLowerCase().includes(title.toLocaleLowerCase()))
    }

    /**
     * Redirect to the details page for the movie
     * @param {String} target 
     */
    handleItemClick(target){
        localStorage.setItem('movie',JSON.stringify(this.findObject(target)))
        console.log(localStorage)
        window.location.replace('http://localhost:3000/details')
    }

    /**
     * Rendering
     * @returns {element}
     */
    render(){
        console.log({mounted:this.state.movies})
        return(
            <React.Fragment>
                <div id="nav" className="nav">
                    <MenuBar 
                        searchValue={this.state.searchValue}
                        searchValueChanged={this.searchValueChanged}
                        onSubmittedSearch={this.onSubmittedSearch}
                    />
                        
                </div>
                <div className="bloc">
                    <div id="movies">
                        <Video 
                            name='movie' 
                            movies={this.state.movies}
                            onClickedItem={this.handleItemClick}
                        />
                    </div><br/>
                    <div id="series">
                        <Video 
                            name='series' 
                            movies={this.state.movies}
                            onClickedItem={this.handleItemClick}
                        />
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
