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
                <button onClick={revealHiddenOne}><img src={DeathsDoor}></img></button>
                <button onClick={revealHiddenTwo}><img src={MK11}></img></button>
                <button onClick={revealHiddenThree}><img src={Metro}></img></button>
                <button onClick={revealHiddenFour}><img src={Psychonauts}></img></button>
                <button onClick={revealHiddenFive}><img src={TR}></img></button>
            </div>
        </div>
    )
}