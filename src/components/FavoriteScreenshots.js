import React from "react";
import DeathsDoor from "../images/DeathsDoor.webp"
import MK11 from "../images/MK11.webp"
import Metro from "../images/Metro.webp"
import Psychonauts from "../images/PsychoNauts.webp"
import TR from "../images/TR.webp"


export default function FavoriteScreenshots(){

    let revealHiddenOne = () => {
        document.getElementById("hidden-image-one-container").style.display="block";
        document.getElementById("home-nav-bar").style.display="none";
        document.getElementById("main-section").style.display="none";
        document.getElementById("gaming-links-container").style.display="none";
        document.getElementById("footer-container").style.display="none";
        document.getElementById("body").style.backgroundColor="black";
    };
    let revealHiddenTwo = () => {
        document.getElementById("hidden-image-two-container").style.display="block";
        document.getElementById("home-nav-bar").style.display="none";
        document.getElementById("main-section").style.display="none";
        document.getElementById("gaming-links-container").style.display="none";
        document.getElementById("footer-container").style.display="none";
        document.getElementById("body").style.backgroundColor="black";
    };
    let revealHiddenThree = () => {
        document.getElementById("hidden-image-three-container").style.display="block";
        document.getElementById("home-nav-bar").style.display="none";
        document.getElementById("main-section").style.display="none";
        document.getElementById("gaming-links-container").style.display="none";
        document.getElementById("footer-container").style.display="none";
        document.getElementById("body").style.backgroundColor="black";
    };
    let revealHiddenFour = () => {
        document.getElementById("hidden-image-four-container").style.display="block";
        document.getElementById("home-nav-bar").style.display="none";
        document.getElementById("main-section").style.display="none";
        document.getElementById("gaming-links-container").style.display="none";
        document.getElementById("footer-container").style.display="none";
        document.getElementById("body").style.backgroundColor="black";
    };
    let revealHiddenFive = () => {
        document.getElementById("hidden-image-five-container").style.display="block";
        document.getElementById("home-nav-bar").style.display="none";
        document.getElementById("main-section").style.display="none";
        document.getElementById("gaming-links-container").style.display="none";
        document.getElementById("footer-container").style.display="none";
        document.getElementById("body").style.backgroundColor="black";
    };

    return(
        <div id="favorite-screenshots-container" className="favorite-screenshots-container">
            <div className="favorite-screenshots-header">
                <h2>Top 5 Screenshots</h2>
            </div>
            <div className="favorite-screenshots">
                <button onClick={revealHiddenOne}><a href="#hidden-image-one-container"><img src={DeathsDoor}></img></a></button>
                <button onClick={revealHiddenTwo}><a href="#hidden-image-two-container"><img src={MK11}></img></a></button>
                <button onClick={revealHiddenThree}><a href="#hidden-image-three-container"><img src={Metro}></img></a></button>
                <button onClick={revealHiddenFour}><a href="#hidden-image-four-container"><img src={Psychonauts}></img></a></button>
                <button onClick={revealHiddenFive}><a href="#hidden-image-five-container"><img src={TR}></img></a></button>
            </div>
        </div>
    )
}