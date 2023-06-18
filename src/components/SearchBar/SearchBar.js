import {Component} from 'react';
import './searchbar.css'

export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.handleSearchSubmitted=this.handleSearchSubmitted.bind(this)
    }
    handleChange(e){ 
        this.props.searchValueChanged(e.target.value)
    }
    handleSearchSubmitted(){
        this.props.onSubmittedSearch()
    }
    render(){
        return(
            <div className="find">
                <input type="text" placeholder="search..." value={this.props.searchValue}onChange={this.handleChange}/>
                <button onClick={this.handleSearchSubmitted}>jjjjjj</button>
            </div>
        )
    }
}