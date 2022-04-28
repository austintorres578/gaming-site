import React from "react";
import ConsoleList from "./ConsoleList";
import Reviews from "../pages/Reviews";
import ReviewTemplate from "./ReviewTemplate";
import YearlyReviews from "./YearlyReviews";

export default function ReviewSection(){
    return(
        <section className="review-section-container">
            <div className="review-section">
                <Reviews /> 
            </div>
            <div className="review-yearly-reviews-container">
                <YearlyReviews />  
            </div>
        </section>
    )
}