import React from 'react';

const SignUpForm = () => (
    <form>
            <h1>Crear Cuenta</h1>
            <span>Para tu Gestionar tus pedidos</span>
            <input type="text" placeholder="Nombres Completos"/>
            <input type="email" placeholder="Correo"/>
            <input type="text" placeholder="Cedula"/>
            <input type="text" placeholder="Contraseña"/>
            <button>Enviar</button>
    </form>
);

export default SignUpForm;
