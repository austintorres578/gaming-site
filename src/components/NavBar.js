import React from "react";
import {NavLink, Link} from "react-router-dom";
import logo from "../images/site-banner.webp";


export default function NavBar(){

    return (
        <nav id="home-nav-bar" className="home-nav-bar">
            <div className="nav-logo">
                <a><Link to="/"><img className="site-logo" src={logo}></img></Link></a>
            </div>
            <div className="nav-links-container">
                <ul id="nav-links" className="nav-links">
                    <NavLink to="/" className={({isActive})=>(isActive ? "active-page":"")}><li id="home-link" className="home-link">Home</li></NavLink>
                    <NavLink to="/reviews" className={({isActive})=>(isActive ? "active-page":"")}><li id="reviews-link" className="reviews-link">Reviews</li></NavLink>
                </ul>
            </div>
        </nav>
    )
};
