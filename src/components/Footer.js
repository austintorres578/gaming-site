import React from "react";
import InstagramLogo from "../images/Instagram_logo_2016.svg.webp"
import TwitterLogo from "../images/R.png"

export default function Footer(){
    return(
        <footer id="footer-container" className="footer-container">
            <a href="https://www.instagram.com/cpg_reviews/"><img className="instagram-logo" src={InstagramLogo}></img></a>
            <a href="https://twitter.com/CPG_Reviews"><img className="twitter-logo" src={TwitterLogo}></img></a>
        </footer>
    )
}