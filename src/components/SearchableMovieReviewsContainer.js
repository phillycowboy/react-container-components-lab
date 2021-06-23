import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'i7sbxKvXbOaViXBgD5iBPA9qfY4RzIdY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`+"&query=";

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.searchMovieReviews(this.state.searchTerm)
    }
    searchMovieReviews(searchTerm){
        fetch(URL+`${searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.searchTerm} 
                    placeholder="Search..." 
                    onChange={ event => {
                        event.persist()
                        return this.setState((prevState) => ({...prevState, searchTerm: event.target.value}))}}/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;
