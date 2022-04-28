import React from "react";
import xboxLogo from "../images/console logos/og-xbox.png"
import gamecubeLogo from "../images/console logos/gamecube.png"
import ps2Logo from "../images/console logos/ps2.png"
import psvLogo from "../images/console logos/psvita.png"

export default function ConsoleList(){
    return(
        <div className="console-list-con">
            <div className="console-list">
                <a href="#"><img src={xboxLogo}></img></a>
                <a href="#"><img src={gamecubeLogo}></img></a>
                <a href="#"><img src={ps2Logo}></img></a>
                <a href="#"><img src={psvLogo}></img></a>
            </div>
        </div>
    )
}