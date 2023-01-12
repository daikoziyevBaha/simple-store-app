import React from "react";
import './app.css';
import { Routes, Route } from 'react-router-dom';
import { CardPage, HomePage } from "../pages";
import Header from "../header";

const App = () => {
    return (
        <main className="container">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart-page" element={<CardPage />} />
            </Routes>
        </main>
    )
}

export default App;