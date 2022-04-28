import React from "react";
import PlaceHolderImage from "../images/mario-block.png"


export default function YearlyReviews(){
    return(
        <div className="yearly-reviews-container">
            <div className="yearly-reviews-header">
                <h2>Top 5 2022 Reviews</h2>
            </div>
            <div className="yearly-reviews-image">
                <img src="https://th.bing.com/th/id/R.8c137138c79994aefb0cb0a596c79cd0?rik=JybD4WwCr%2f4Obw&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20090319181645%2fsplintercell%2fimages%2f5%2f5c%2fSplinter_Cell_cover.jpg&ehk=XiGytYoTRL6J5J3XVYpOTETygUqmvwOzT4fBRIy3bZY%3d&risl=&pid=ImgRaw&r=0"></img>
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
                <img src={PlaceHolderImage}></img>
            </div>
        </div>
    )
}
