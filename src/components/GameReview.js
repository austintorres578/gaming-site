import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ReviewTemplate from "./ReviewTemplate";
import YearlyReviews from "./YearlyReviews";

import scoreZero from "../images/potato-points/zero.png"
import scoreOne from "../images/potato-points/one.png"
import scoreTwo from "../images/potato-points/two.png"
import scoreThree from "../images/potato-points/three.png"
import scoreFour from "../images/potato-points/four.png"
import scoreFive from "../images/potato-points/five.png"
import scoreSix from "../images/potato-points/six.png"
import scoreSeven from "../images/potato-points/seven.png"
import scoreEight from "../images/potato-points/eight.png"
import scoreNine from "../images/potato-points/nine.png"
import scoreTen from "../images/potato-points/ten.png"


import { selectedReview } from "./ReviewListButtons";

let gameScoreImage;

let selectedReviewVariable = selectedReview;


export default function GameReview(){ 

    function refreshChecker(){
        if(selectedReviewVariable={}){
            selectedReviewVariable=JSON.parse(localStorage.getItem('recentReview'));
        }
    }

    function scoreImageAssigner(){
        if(selectedReviewVariable.score==="0"){
            gameScoreImage=scoreZero;
        }
        else if(selectedReviewVariable.score==="1"){
            gameScoreImage=scoreOne;
        }
        else if(selectedReviewVariable.score==="2"){
            gameScoreImage=scoreTwo;
        }
        else if(selectedReviewVariable.score==="3"){
            gameScoreImage=scoreThree;
        }
        else if(selectedReviewVariable.score==="4"){
            gameScoreImage=scoreFour;
        }
        else if(selectedReviewVariable.score==="5"){
            gameScoreImage=scoreFive;
        }
        else if(selectedReviewVariable.score==="6"){
            gameScoreImage=scoreSix;
        }
        else if(selectedReviewVariable.score==="7"){
            gameScoreImage=scoreSeven;
        }
        else if(selectedReviewVariable.score==="8"){
            gameScoreImage=scoreEight;
        }
        else if(selectedReviewVariable.score==="9"){
            gameScoreImage=scoreNine;
        }
        else if(selectedReviewVariable.score==="10"){
            gameScoreImage=scoreTen;
        }
    }

    refreshChecker()
    scoreImageAssigner()
      
      var presentationArray = []
      for (const key in selectedReviewVariable.presentation) {
        presentationArray.push([ key, selectedReviewVariable.presentation[key] ])
      }
      var storyArray = []
      for (const key in selectedReviewVariable.story) {
        storyArray.push([ key, selectedReviewVariable.story[key] ])
      }
      var gameplayArray = []
      for (const key in selectedReviewVariable.gameplay) {
        gameplayArray.push([ key, selectedReviewVariable.gameplay[key] ])
      }

      

        function getSub(Array){
        let texts = []
                for (let index = 0; index < Array.length; index++){
            texts.push(<h2>{Array[index][0]}</h2>)
            texts.push(<p>{Array[index][1]}</p>)
        }
        return texts
    }
      
    
    return(
        <div className="game-reviews-container">
            <div>
                <ReviewTemplate 
                game={selectedReviewVariable.game}
                platform={selectedReviewVariable.platform}
                release={selectedReviewVariable.release}
                developer={selectedReviewVariable.developer}
                publisher={selectedReviewVariable.publisher}
                genre={selectedReviewVariable.genre}
                description={selectedReviewVariable.description}
                boxArt={selectedReviewVariable.boxArt}
                backgroundImage={selectedReviewVariable.backgroundImage}
                score={gameScoreImage}
                presentation={getSub(presentationArray)}
                story={getSub(storyArray)}
                gameplay={getSub(gameplayArray)}
                conclusion={selectedReviewVariable.conclusion}
                />
            </div>
            <div>
                <YearlyReviews />     
            </div>   
        </div>
    )
    
}