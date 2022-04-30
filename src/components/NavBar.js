import React from "react";
import logo from "../images/site-banner.webp"
import { Link } from "react-router-dom";

export default function NavBar(){

    function indicateSectionHome(){
        if(document.getElementById("home-link").style.borderBottom="none"){
            document.getElementById("home-link").style.borderBottom="solid 5px orange";
            document.getElementById("reviews-link").style.borderBottom="none";
        }
    };
    function indicateSectionReviews(){
        if(document.getElementById("reviews-link").style.borderBottom="none"){
            document.getElementById("reviews-link").style.borderBottom="solid 5px orange";
            document.getElementById("home-link").style.borderBottom="none";
        }
    };

    return (
        <nav id="home-nav-bar" className="home-nav-bar">
            <div className="nav-logo">
                <a><Link onClick={indicateSectionHome} to="/"><img className="site-logo" src={logo}></img></Link></a>
            </div>
            <div className="nav-links">
                <ul>
                    <li id="home-link" className="home-link"><Link onClick={indicateSectionHome} to="/">Home</Link></li>
                    <li id="reviews-link"><Link onClick={indicateSectionReviews} to="/reviews">Reviews</Link></li>
                </ul>
            </div>
        </nav>
    )
};