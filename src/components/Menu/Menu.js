import { Component } from "react";
import {Link} from 'react-router-dom'
import './MenuBar.css'
import SearchBar from '../SearchBar/SearchBar'

export default class Menu extends Component{
    render(){
        const {searchValue,searchValueChanged,onSubmittedSearch}=this.props
        return(
            <div className="barMenu">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="searchBar">
                    <SearchBar 
                        searchValue={searchValue}
                        searchValueChanged={searchValueChanged}
                        onSubmittedSearch={onSubmittedSearch}
                    />
                </div>
            </div>
        )
    }
}