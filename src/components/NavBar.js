import React from "react";
import logo from "../images/Screenshot (158).png"

export default function NavBar(){
    return (
        <nav className="home-nav-bar">
            <div className="nav-logo">
                <img className="site-logo" src={logo}></img>
                <h1>Austin's Gaming Blog</h1>
            </div>
            <hr></hr>
            <div className="nav-links">
                <ul>
                    <li className="home-link"><a href="#">Home</a></li>
                    <li className="reviews-link"><a href="#">Reviews</a></li>
                </ul>
            </div>
        </nav>
    )
};