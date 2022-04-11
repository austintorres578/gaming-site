import React from "react";
import logo from "../images/Screenshot (179).png"

export default function NavBar(){
    return (
        <nav id="home-nav-bar" className="home-nav-bar">
            <div className="nav-logo">
                <img className="site-logo" src={logo}></img>
            </div>
            <div className="nav-links">
                <ul>
                    <li className="home-link"><a href="#">Home</a></li>
                </ul>
            </div>
        </nav>
    )
};