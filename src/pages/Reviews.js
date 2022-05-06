import React, { createElement } from "react";
import ReviewListButtons from "../components/ReviewListButtons";
import reviewsData from "../reviewsData";

import xboxLogo from "../images/console logos/og-xbox.png"
import ps2Logo from "../images/console logos/ps2.png"
import gamecubeLogo from "../images/console logos/gamecube.png"

import scoreZero from "../images/potato-points/zero.webp"
import scoreOne from "../images/potato-points/one.webp"
import scoreTwo from "../images/potato-points/two.webp"
import scoreThree from "../images/potato-points/three.webp"
import scoreFour from "../images/potato-points/four.webp"
import scoreFive from "../images/potato-points/five.webp"
import scoreSix from "../images/potato-points/six.webp"
import scoreSeven from "../images/potato-points/seven.webp"
import scoreEight from "../images/potato-points/eight.webp"
import scoreNine from "../images/potato-points/nine.webp"
import scoreTen from "../images/potato-points/ten.webp"

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
