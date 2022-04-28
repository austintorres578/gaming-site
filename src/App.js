import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ReviewSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import GameReview from "./components/GameReview";

export default function App(){
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/reviews" element={<ReviewSection/>}/>
                <Route path="/reviews/article" element={<GameReview/>}/>
            </Routes>
            <Footer />
        </div>
    )
};