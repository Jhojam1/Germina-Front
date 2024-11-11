import React from 'react';

const SignInForm = () => (
    <form>
        <h1>Iniciar sesion</h1>
        <span>Bienvenido a Nevi</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <a href="#">Olvide mi contraseña</a>
        <button>Iniciar</button>
    </form>
);

export default SignInForm;
