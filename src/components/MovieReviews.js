// Code MovieReviews Here

import React from 'react';

const MovieReviews = (props) => {
    return(
        <div className="review-list">
            {props.reviews.map((review) => {
                // console.log(review)
                return(
                    <div className="review">
                        <h1>{review.display_title}</h1>
                        <h3>{review.byline}</h3>
                        <h3>{review.headline}</h3>
                        <p>{review.summary_short}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
export default MovieReviews