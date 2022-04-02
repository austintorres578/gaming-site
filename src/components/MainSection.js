import React from "react"
import AboutMe from "./AboutMe"
import InProgress from "./InProgress"
import GamingNews from "./GamingNews"

export default function MainSection(){
    return(
        <section className="main-section-container">
            <div className="main-section">
                <InProgress />
                <AboutMe />
            </div>
            <div className="gaming-news-container">
                <GamingNews />
            </div>
        </section>
    )
}