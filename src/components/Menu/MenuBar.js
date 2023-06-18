import {Component} from 'react';
import './MenuBar.css'
import SearchBar from '../SearchBar/SearchBar'

export default class MenuBar extends Component{
    render(){
        const {searchValue,searchValueChanged,onSubmittedSearch}=this.props
        return(
            <div className='bar'>
                <div><a href="#films">Films</a></div>
                <div><a href="#series">Series</a></div>
                <div>
                <SearchBar 
                    searchValue={searchValue}
                    searchValueChanged={searchValueChanged}
                    onSubmittedSearch={onSubmittedSearch}
                />
                </div>
            </div>
        );
    }
}
