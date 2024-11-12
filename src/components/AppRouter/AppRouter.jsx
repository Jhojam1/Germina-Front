import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '/src/components/Login/Login.jsx';
import MenuPage from "../Menu/MenuPage.jsx";
import { Activate } from '/src/components/Login/Activate.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/activate/:token" element={<Activate />} /> {/* Nueva ruta para Activate */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
