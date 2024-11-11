import React from 'react';

const OverlayPanel = ({ onSignInClick, onSignUpClick }) => (
    <div className="overlay">
        <div className="overlay-panel overlay-left">
            <h1>Bienvenido</h1>
            <p>Si ya tienes una cuenta, ingresar aqui</p>
            <button className="ghost" onClick={onSignInClick}>Iniciar</button>
        </div>
        <div className="overlay-panel overlay-right">
            <h1>! Hola !</h1>
            <p>Si no tienes cuenta, créala aquí</p>
            <button className="ghost" onClick={onSignUpClick}>Crear</button>
        </div>
    </div>
);

export default OverlayPanel;