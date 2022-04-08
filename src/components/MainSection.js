import React from "react"
import FavoriteScreenshots from "./FavoriteScreenshots"
import HiddenImages from "./HiddenImages"
import InProgress from "./InProgress"
import YearlyReviews from "./YearlyReviews"

export default function MainSection(){
    return(
        <section className="main-section-container">
            <div id="main-section" className="main-section">
                <InProgress />
            </div>
            <HiddenImages />
            <div id="gaming-links-container" className="gaming-links-container">
                <YearlyReviews />
                <FavoriteScreenshots />
            </div>
        </section>
    )
}