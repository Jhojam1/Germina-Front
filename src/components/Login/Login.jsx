import React, { useState } from 'react';
import './Login.css';  // Asegúrate de que tus estilos están aquí

import SignUpForm from "./SignUpForm.jsx";
import SignInForm from "./SignInForm.jsx";
import OverlayPanel from "./overlayPanel.jsx";
import Footer from "./Footer.jsx";
import AnimatedDots from "./AnimatedDots.jsx";

const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
            {/* Formulario de registro */}
            <div className="form-container sign-up-container">
                <SignUpForm />
            </div>

            {/* Formulario de inicio de sesión */}
            <div className="form-container sign-in-container">
                <SignInForm />
            </div>

            {/* Contenedor de overlay con los botones */}
            <div className="overlay-container">
                <OverlayPanel onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
            </div>

            {/* Footer y animación de puntos */}
            <Footer />
            <AnimatedDots />
        </div>
    );
};

export default Login;
