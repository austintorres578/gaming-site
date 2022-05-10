import React from "react";

import imageOne from "../images/Splinter-Cell-1.webp"
import ImageTwo from "../images/MK11.webp"
import ImageThree from "../images/Metro.webp"
import ImageFour from "../images/PsychoNauts.webp"
import ImageFive from "../images/TR.webp"
import xIcon from "../images/x.png"

import { Link } from "react-router-dom";

import { screenshotSelector } from "./FavoriteScreenshots";

export default function HiddenFavoriteImages(){

    let screenshotSelectorVariable = screenshotSelector;
    let hiddenImageVariable;


    function check(){
        if(screenshotSelectorVariable===1){
            hiddenImageVariable=imageOne
        }else if(screenshotSelectorVariable===2){
            hiddenImageVariable=ImageTwo
        }else if(screenshotSelectorVariable===3){
            hiddenImageVariable=ImageThree
        }else if(screenshotSelectorVariable===4){
            hiddenImageVariable=ImageFour
        }else if(screenshotSelectorVariable===5){
            hiddenImageVariable=ImageFive
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