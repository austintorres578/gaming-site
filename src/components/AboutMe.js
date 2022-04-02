import React from "react";
import aboutMePic from "../images/AboutMePic.png"

export default function AboutMe(){
    return(
        <div className="about-me-container">
            <div className="about-me">
                <div className="about-me-header">
                    <h2>About Me</h2> 
                </div>
                <div className="about-me-img-container">
                    <img src={aboutMePic}></img>
                </div>
                <div className="about-me-text">
                    <h4>Hello I'm Austin,</h4>
                    <p>Im a gaming enthusiast that enjoys a varitey of different video game genres but my favorite is survival horror. I created this site so I can keep track of all the games ive beaten and hopefully help me stay committed to one game at a time :)</p>
                </div>
            </div>
        </div>
    )
}