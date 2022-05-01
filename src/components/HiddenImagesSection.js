import favoriteImageOne from "../images/DeathsDoor.webp"
import favoriteImageTwo from "../images/Metro.webp"
import favoriteImageThree from "../images/MK11.webp"
import favoriteImageFour from "../images/DeathsDoor.webp"
import favoriteImageFive from "../images/PsychoNauts.webp"

import React from "react";

import HiddenFavoriteImages from "./HiddenFavoriteImages";

export default function HiddenImagesSection(){

    return(
        <div className="hidden-images-section-container">
            <HiddenFavoriteImages/>
        </div>
    )
}