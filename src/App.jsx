import React, { useState } from 'react';
import './App.css';
import SignUpForm from "./components/Login/SignUpForm.jsx";
import SignInForm from "./components/Login/SignInForm.jsx";
import OverlayPanel from "./components/Login/overlayPanel.jsx";
import Footer from "./components/Login/Footer.jsx";
import AnimatedDots from "./components/Login/AnimatedDots.jsx";
import Menu from "./components/Menu/Menu.jsx"; // Importa el componente del menú

const App = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
            {/* Aquí se pueden mantener los formularios de inicio de sesión y registro */}
            <div className="form-container sign-up-container">
                <SignUpForm />
            </div>
            <div className="form-container sign-in-container">
                <SignInForm />
            </div>
            <div className="overlay-container">
                <OverlayPanel onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
            </div>

            {/* El menú se muestra después de los formularios */}
            <Menu />

            {/* Footer y Animación de puntos */}
            <Footer />
            <AnimatedDots />
        </div>
    );
};

export default App;
