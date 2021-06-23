import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Y9JUiKOw4EnUJzMsXBVNSP0XOfjZBTYw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        this.getMovieReviews()
    }

    getMovieReviews(){
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }
    // reviews: data.results 
    // 

    render(){
        // console.log(this.state.reviews)
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer