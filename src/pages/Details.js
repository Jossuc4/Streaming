import {Component} from 'react';
import React from 'react'
import Menu from '../components/Menu/Menu'
import './Details.css'
import Screen from '../components/Container/Screen'
import Descriptions from '../components/Container/Descriptions'
import Image from '../components/Container/Image';

export default class extends Component{
    constructor(props){
        super(props)
        this.state={
            searchValue:'',
            movie:JSON.parse(localStorage.getItem('movie'))[0]
        }
        this.searchValueChanged=this.searchValueChanged.bind(this)
        this.onSubmittedSearch=this.onSubmittedSearch.bind(this)
    }
    onSubmittedSearch(){
        alert("Vous devez revenir à l'accueil pour chercher un film/série")
    }
    searchValueChanged(target){
        this.setState({searchValue:target})
    }
    render(){
        console.log(this.state.movie)
       return(
        <div>
            <Menu
                searchValue={this.state.searchValue}
                searchValueChanged={this.searchValueChanged}
                onSubmittedSearch={this.onSubmittedSearch}
            />        
            <Screen movie={this.state.movie}/>
            <Descriptions movie={this.state.movie}/>
            <Image movie={this.state.movie}/>
        </div>
       ) 
    }
}