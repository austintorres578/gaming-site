import React from "react";
import DeathsDoor from "../images/DeathsDoor.png"
import MK11 from "../images/MK11.png"
import Metro from "../images/Metro.png"
import Psychonauts from "../images/PsychoNauts.png"
import TR from "../images/TR.png"
import xMark from "../images/x.png"

export default function HiddenImages(){

    function removeHiddenOne(){

        document.getElementById("hidden-image-one-container").style.display="none";
        document.getElementById("home-nav-bar").style.display="block";
        document.getElementById("main-section").style.display="grid";
        document.getElementById("gaming-links-container").style.display="block";
        document.getElementById("footer-container").style.display="flex";
        document.getElementById("body").style.backgroundColor="#9199BE";
    };

    function removeHiddenTwo(){
        document.getElementById("hidden-image-two-container").style.display="none";
        document.getElementById("home-nav-bar").style.display="block";
        document.getElementById("main-section").style.display="grid";
        document.getElementById("gaming-links-container").style.display="block";
        document.getElementById("footer-container").style.display="flex";
        document.getElementById("body").style.backgroundColor="#9199BE";
    };
    function removeHiddenThree(){
        document.getElementById("hidden-image-three-container").style.display="none";
        document.getElementById("home-nav-bar").style.display="block";
        document.getElementById("main-section").style.display="grid";
        document.getElementById("gaming-links-container").style.display="block";
        document.getElementById("footer-container").style.display="flex";
        document.getElementById("body").style.backgroundColor="#9199BE";
    };
    function removeHiddenFour(){
        document.getElementById("hidden-image-four-container").style.display="none";
        document.getElementById("home-nav-bar").style.display="block";
        document.getElementById("main-section").style.display="grid";
        document.getElementById("gaming-links-container").style.display="block";
        document.getElementById("footer-container").style.display="flex";
        document.getElementById("body").style.backgroundColor="#9199BE";
    };
    function removeHiddenFive(){
        document.getElementById("hidden-image-five-container").style.display="none";
        document.getElementById("home-nav-bar").style.display="block";
        document.getElementById("main-section").style.display="grid";
        document.getElementById("gaming-links-container").style.display="block";
        document.getElementById("footer-container").style.display="flex";
        document.getElementById("body").style.backgroundColor="#9199BE";
    };

    return(
        <div className="hidden-images-container">
             <div className="hidden-images">
                <div id="hidden-image-one-container">
                    <div id="hidden-image-one">
                        <button onClick={removeHiddenOne}><img src={xMark}></img></button>
                        <img src={DeathsDoor}></img>
                    </div>
                </div>
                <div id="hidden-image-two-container">
                    <div id="hidden-image-two">
                        <button onClick={removeHiddenTwo}><img src={xMark}></img></button>
                        <img src={MK11}></img>
                    </div>
                </div>
                <div id="hidden-image-three-container">
                    <div id="hidden-image-three">
                        <button onClick={removeHiddenThree}><img src={xMark}></img></button>
                        <img src={Metro}></img>
                    </div>
                </div>
                <div id="hidden-image-four-container">
                    <div id="hidden-image-four">
                        <button onClick={removeHiddenFour}><img src={xMark}></img></button>
                        <img src={Psychonauts}></img>
                    </div>
                </div>
                <div id="hidden-image-five-container">
                    <div id="hidden-image-five">
                        <button onClick={removeHiddenFive}><img src={xMark}></img></button>
                        <img src={TR}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}