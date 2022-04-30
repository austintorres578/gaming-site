import React from "react";
import Home from "./pages/Home";
import ReviewSection from "./components/ReviewsSection";
import { BrowserRouter, Route, Router, Routes, HashRouter } from "react-router-dom";
import GameReview from "./components/GameReview";

export default function App(){
    return(
            <HashRouter>
                <Routes>
                    <Route index element={<Home />} /> 
                    <Route path="/reviews" element={<ReviewSection/>}/>
                    <Route path="/reviews/article" element={<GameReview/>}/>
                </Routes>
            </HashRouter>
    )
};