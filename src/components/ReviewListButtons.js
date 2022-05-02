import React from "react";
import xboxLogo from "../images/console logos/og-xbox.png"
import gamecubeLogo from "../images/console logos/gamecube.png"
import ps2Logo from "../images/console logos/ps2.png"
import psvLogo from "../images/console logos/psvita.png"
import { Link } from "react-router-dom";

import scoreZero from "../images/potato-points/zero.webp"
import scoreOne from "../images/potato-points/one.webp"
import scoreTwo from "../images/potato-points/two.webp"
import scoreThree from "../images/potato-points/three.webp"
import scoreFour from "../images/potato-points/four.webp"
import scoreFive from "../images/potato-points/five.webp"
import scoreSix from "../images/potato-points/six.webp"
import scoreSeven from "../images/potato-points/seven.webp"
import scoreEight from "../images/potato-points/eight.webp"
import scoreNine from "../images/potato-points/nine.webp"
import scoreTen from "../images/potato-points/ten.webp"

let selectedReview ={};

export default function ReviewListButton(props){

    let logoImage;
    let scoreImage;
    let gameIdNumber = props.id;


        function consoleLogoAssigner(){
            if(props.platform==="Xbox"){
                logoImage=xboxLogo;
            }
            else if(props.platform==="PS Vita"){
                logoImage=psvLogo;
            }
            else if(props.platform==="Gamecube"){
                logoImage=gamecubeLogo;
            };
        }

        function scoreImageAssigner(){
            if(props.score==="0"){
                scoreImage=scoreZero;
            }
            else if(props.score==="1"){
                scoreImage=scoreOne;
            }
            else if(props.score==="2"){
                scoreImage=scoreTwo;
            }
            else if(props.score==="3"){
                scoreImage=scoreThree;
            }
            else if(props.score==="4"){
                scoreImage=scoreFour;
            }
            else if(props.score==="5"){
                scoreImage=scoreFive;
            }
            else if(props.score==="6"){
                scoreImage=scoreSix;
            }
            else if(props.score==="7"){
                scoreImage=scoreSeven;
            }
            else if(props.score==="8"){
                scoreImage=scoreEight;
            }
            else if(props.score==="9"){
                scoreImage=scoreNine;
            }
            else if(props.score==="10"){
                scoreImage=scoreTen;
            }
        }
        function reviewSelector(){
            console.log(props)
            selectedReview=props;
            localStorage.setItem("recentReview",JSON.stringify(selectedReview))
        };

         consoleLogoAssigner();
         scoreImageAssigner();

    
    return(
        <li>
            <button id="test-button" onClick={reviewSelector}><Link to={"/reviews/article"}>{props.game}</Link></button>
                <div id="review-list-images" className="review-list-images">
                    <img src={logoImage}id="review-list-console-logo" className="review-list-console-logo"></img>
                    <img src={scoreImage} id="review-score" className="review-score"></img>
                    <p id="game-id" className="game-id">{gameIdNumber}</p>
                </div>
        </li>
    )
};

export {selectedReview}

