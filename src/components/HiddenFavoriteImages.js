import React from "react";

import favoriteImageOne from "../images/DeathsDoor.webp"
import favoriteImageTwo from "../images/MK11.webp"
import favoriteImageThree from "../images/Metro.webp"
import favoriteImageFour from "../images/PsychoNauts.webp"
import favoriteImageFive from "../images/TR.webp"
import xIcon from "../images/x.png"

import { Link } from "react-router-dom";

import { screenshotSelector } from "./FavoriteScreenshots";

export default function HiddenFavoriteImages(){

    let screenshotSelectorVariable = screenshotSelector;
    let hiddenImageVariable;


    function check(){
        if(screenshotSelectorVariable===1){
            hiddenImageVariable=favoriteImageOne
        }else if(screenshotSelectorVariable===2){
            hiddenImageVariable=favoriteImageTwo
        }else if(screenshotSelectorVariable===3){
            hiddenImageVariable=favoriteImageThree
        }else if(screenshotSelectorVariable===4){
            hiddenImageVariable=favoriteImageFour
        }else if(screenshotSelectorVariable===5){
            hiddenImageVariable=favoriteImageFive
        }
    };

    check();

    console.log(hiddenImageVariable)

    return(
        <div className="hidden-images-container">
            <Link to="/"><button><img src={xIcon}></img></button></Link>
            <div  id="hidden-image-container" className="hidden-image-container">
                <div id="hidden-image-content" className="hidden-image-content">
                    <img id="hidden-image" src={hiddenImageVariable}></img>
                </div>
            </div>
        </div>
    )
}