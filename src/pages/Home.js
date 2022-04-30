import React from "react";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import NavBar from "../components/NavBar";

export default function Home(){
    return(
        <div>
            <NavBar />
            <MainSection />
            <Footer />
        </div>
    )
}