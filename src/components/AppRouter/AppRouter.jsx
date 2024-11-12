import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '/src/components/Login/Login.jsx';
import MenuPage from "../Menu/MenuPage.jsx";

const AppRouter = () => {
    return (
        <Router
            v7_startTransition
            v7_relativeSplatPath
        >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;


