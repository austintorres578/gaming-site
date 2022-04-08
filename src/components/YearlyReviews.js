import React from "react";
import PlaceHolderImage from "../images/mario-block.png"

export default function YearlyReviews(){
    return(
        <div className="yearly-reviews-container">
            <div className="yearly-reviews-header">
                <h2>Top 5 2022 Reviews</h2>
            </div>
            <div className="yearly-reviews-image">
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
            </div>
        </div>
    )
}