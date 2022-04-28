import React from "react";
import DeathsDoor from "../images/DeathsDoor.webp"
import MK11 from "../images/MK11.webp"
import Metro from "../images/Metro.webp"
import Psychonauts from "../images/PsychoNauts.webp"
import TR from "../images/TR.webp"
import xMark from "../images/x.png"

export default function HiddenImages(){
    function restorePage(){
        document.getElementById("home-nav-bar").style.display="block";
        document.getElementById("main-section").style.display="grid";
        document.getElementById("gaming-links-container").style.display="block";
        document.getElementById("footer-container").style.display="flex";
        document.getElementById("body").style.backgroundColor="#9199BE";
    }

    function removeHiddenOne(){
        document.getElementById("hidden-image-one-container").style.display="none";
        restorePage();
    };

    function removeHiddenTwo(){
        document.getElementById("hidden-image-two-container").style.display="none";
        restorePage();
    };
    function removeHiddenThree(){
        document.getElementById("hidden-image-three-container").style.display="none";
        restorePage();
    };
    function removeHiddenFour(){
        document.getElementById("hidden-image-four-container").style.display="none";
        restorePage();
    };
    function removeHiddenFive(){
        document.getElementById("hidden-image-five-container").style.display="none";
        restorePage();
    };

    return(
        <div className="hidden-images-container">
             <div className="hidden-images">
                <div id="hidden-image-one-container">
                    <div id="hidden-image-one">
                        <a href="#favorite-screenshots-container"><button onClick={removeHiddenOne}><img src={xMark}></img></button></a>
                        <img src={DeathsDoor}></img>
                    </div>
                </div>
                <div id="hidden-image-two-container">
                    <div id="hidden-image-two">
                        <a href="#favorite-screenshots-container"><button onClick={removeHiddenTwo}><img src={xMark}></img></button></a>
                        <img src={MK11}></img>
                    </div>
                </div>
                <div id="hidden-image-three-container">
                    <div id="hidden-image-three">
                        <a href="#favorite-screenshots-container"><button onClick={removeHiddenThree}><img src={xMark}></img></button></a>
                        <img src={Metro}></img>
                    </div>
                </div>
                <div id="hidden-image-four-container">
                    <div id="hidden-image-four">
                        <a href="#favorite-screenshots-container"><button onClick={removeHiddenFour}><img src={xMark}></img></button></a>
                        <img src={Psychonauts}></img>
                    </div>
                </div>
                <div id="hidden-image-five-container">
                    <div id="hidden-image-five">
                        <a href="#favorite-screenshots-container"><button onClick={removeHiddenFive}><img src={xMark}></img></button></a>
                        <img src={TR}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}