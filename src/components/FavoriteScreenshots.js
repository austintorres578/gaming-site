import React from "react";
import imageOne from "../images/Splinter-Cell-1.webp"
import ImageTwo from "../images/MK11.webp"
import ImageThree from "../images/Metro.webp"
import ImageFour from "../images/PsychoNauts.webp"
import ImageFive from "../images/TR.webp"
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
                <h2>Favorite Screenshots</h2>
            </div>
            <div className="favorite-screenshots">
                <button onClick={revealHiddenOne}><Link to="/favoritescreenshots"><img src={imageOne}></img></Link></button>
                <button onClick={revealHiddenTwo}><Link to="/favoriteScreenshots"><img src={ImageTwo}></img></Link></button>
                <button onClick={revealHiddenThree}><Link to="/favoriteScreenshots"><img src={ImageThree}></img></Link></button>
                <button onClick={revealHiddenFour}><Link to="/favoriteScreenshots"><img src={ImageFour}></img></Link></button>
                <button onClick={revealHiddenFive}><Link to="/favoriteScreenshots"><img src={ImageFive}></img></Link></button>
            </div>
        </div>
    )
}

export {screenshotSelector}