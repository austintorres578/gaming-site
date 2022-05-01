import React from "react";
import DeathsDoor from "../images/DeathsDoor.webp"
import MK11 from "../images/MK11.webp"
import Metro from "../images/Metro.webp"
import Psychonauts from "../images/PsychoNauts.webp"
import TR from "../images/TR.webp"
import { Link } from "react-router-dom"

let screenshotSelector;

export default function FavoriteScreenshots(){

    function revealHiddenOne(){
        screenshotSelector=1;
    };
    function revealHiddenTwo(){
        screenshotSelector=2;
    };
    function revealHiddenThree(){
        screenshotSelector=3;
    };
    function revealHiddenFour(){
        screenshotSelector=4;
    };
    function revealHiddenFive() {
        screenshotSelector=5;
    };

    return(
        <div id="favorite-screenshots-container" className="favorite-screenshots-container">
            <div className="favorite-screenshots-header">
                <h2>Top 5 Screenshots</h2>
            </div>
            <div className="favorite-screenshots">
                <button onClick={revealHiddenOne}><Link to="/favoritescreenshots"><img src={DeathsDoor}></img></Link></button>
                <button onClick={revealHiddenTwo}><Link to="/favoriteScreenshots"><img src={MK11}></img></Link></button>
                <button onClick={revealHiddenThree}><Link to="/favoriteScreenshots"><img src={Metro}></img></Link></button>
                <button onClick={revealHiddenFour}><Link to="/favoriteScreenshots"><img src={Psychonauts}></img></Link></button>
                <button onClick={revealHiddenFive}><Link to="/favoriteScreenshots"><img src={TR}></img></Link></button>
            </div>
        </div>
    )
}

export {screenshotSelector}