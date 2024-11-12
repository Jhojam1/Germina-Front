import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import SignUpForm from "./SignUpForm.jsx";
import SignInForm from "./SignInForm.jsx";
import OverlayPanel from "./overlayPanel.jsx";
import Footer from "./Footer.jsx";
import AnimatedDots from "./AnimatedDots.jsx";

const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="Login-Page">
            <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    <SignUpForm />
                </div>

                <div className="form-container sign-in-container">
                    <SignInForm navigate={navigate} />
                </div>

                <div className="overlay-container">
                    <OverlayPanel onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
                </div>

                <Footer />
                <AnimatedDots />
            </div>
        </div>
    );
};

export default Login;
