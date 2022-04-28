import React, { createElement } from "react";
import ReviewListButtons from "../components/ReviewListButtons";
import reviewsData from "../reviewsData";

import xboxLogo from "../images/console logos/og-xbox.png"
import ps2Logo from "../images/console logos/ps2.png"
import gamecubeLogo from "../images/console logos/gamecube.png"

import scoreZero from "../images/potato-points/zero.png"
import scoreOne from "../images/potato-points/one.png"
import scoreTwo from "../images/potato-points/two.png"
import scoreThree from "../images/potato-points/three.png"
import scoreFour from "../images/potato-points/four.png"
import scoreFive from "../images/potato-points/five.png"
import scoreSix from "../images/potato-points/six.png"
import scoreSeven from "../images/potato-points/seven.png"
import scoreEight from "../images/potato-points/eight.png"
import scoreNine from "../images/potato-points/nine.png"
import scoreTen from "../images/potato-points/ten.png"

export default function Reviews(){

    const reviewListButtons = reviewsData.map(item =>{
        return(
            <ReviewListButtons 
            key={item.id}
            {...item}
            /> 
        )
    })


    return(
        <div className="reviews-container">
            <div className="reviews">
                <div className="reviews-header">
                    <h2>Reviews</h2>
                </div>
                <div className="temporary-reviews-list-container">
                    <ul id="temporary-reviews-list" className="temporary-reviews-list">
                        {reviewListButtons}
                    </ul>
                </div>
            </div>
        </div>
    )
}