import React from "react";

export default function InProgress(){
    return(
        <div className="in-progress-container">
            <div className="in-progress-header">
                <h1>Review In Progress</h1>
            </div>
            <div className="in-progress-content">
                <div className="in-progress-text">
                    <h2>Sly Cooper: Thieves in Time</h2>
                    <p><strong>Platform:</strong> PS Vita</p>
                    <p><strong>Release:</strong> Feb 05, 2013</p>
                    <p><strong>Developer:</strong> Sanzaru Games</p>
                    <p><strong>Publisher:</strong> Sony Interactive Entertainment</p>
                    <p><strong>Genre:</strong> Platformer</p>
                    <p><strong>Description:</strong> Play as the reformed Cooper gang and go back in time to multiple different time periods in order to stop whoever is erasing Cooper history. </p>
                </div>
                <div className="in-progress-image">
                    <img src="https://images.pushsquare.com/fcce92c2328e8/sly-cooper-thieves-in-time-cover.cover_large.jpg"></img>
                </div>
            </div>
        </div>
    )
}