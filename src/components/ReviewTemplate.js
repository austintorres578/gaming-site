import React from "react";



export default function ReviewTemplate(props){
    let divStyle = {
        backgroundImage: 'url(' + props.backgroundImage + ')',
      };


      
    return(
        <div className="review-template-container">
            <div className="review-template-header">
                <h2>Review</h2>
                <img></img>
            </div>
            <div className="review-template">
                <div style={divStyle} id="review-template-information-container" className="review-template-information-container">
                    <div className="review-template-information">
                        <h2>{props.game}</h2>
                        <p><strong>Platform:</strong> {props.platform}</p>
                        <p><strong>Release:</strong> {props.release}</p>
                        <p><strong>Developer:</strong> {props.developer}</p>
                        <p><strong>Publisher:</strong> {props.publisher}</p>
                        <p><strong>Genre:</strong> {props.genre}</p>
                        <p><strong>Description:</strong> {props.description}</p>
                    </div>
                    <div className="review-template-box-art">
                        <img src={props.boxArt}></img>
                    </div>
                </div>
                <div className="review-score">
                    <img src={props.score}></img>
                </div>
                <hr></hr>
                <div className="review-template-review-area">
                    <div className="visuals-container">
                        <h1>Presentation</h1>
                        <p>{props.presentation}
                        </p>
                    </div>
                    <div className="story-container">
                        <h1>Writing</h1>
                        <p>{props.story}
                        </p>
                    </div>
                    <div className="gameplay-container">
                        <h1>Gameplay</h1>
                        <p>{props.gameplay}
                        </p>
                    </div>
                    <div className="conclusion-container">
                        <h1>Conclusion</h1>
                        <p>{props.conclusion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
