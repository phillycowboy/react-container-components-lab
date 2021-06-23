// Code MovieReviews Here

import React from 'react';

const MovieReviews = (props) => {
    return(
        <div className="review-list">
            {props.reviews.map((review) => {
                <h1>{review.display_title}</h1>
            })}
        </div>
    )
}
export default MovieReviews