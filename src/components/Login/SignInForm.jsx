import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = ({ navigate }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://proyecto-germina-production.up.railway.app/api/auth/authenticate', {
                user,
                password,
            });

            if (response.status === 200) {
                const data = response.data;
                console.log('Usuario autenticado:', data);

                // Suponiendo que el `data` contiene el token y el rol
                const { token, authorities } = data;

                // Guardar el token y la información del usuario en localStorage (si es necesario)
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify({ user, role: authorities[0] }));

                // Redirigir según el rol
                if (authorities.includes('Administrador')) {
                    navigate('/admin');  // Redirigir a la página de administrador
                } else if (authorities.includes('Usuario')) {
                    navigate('/menu');  // Redirigir a la página de usuario
                } else {
                    navigate('/');  // Página predeterminada si el rol no es reconocido
                }
            } else {
                console.error('Error de autenticación');
                setError('Usuario y/o Contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            setError('Hubo un error al procesar la solicitud');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="Tittle-Login">
                <h1>Iniciar sesión</h1>
            </div>
            <span>Bienvenido a Nevi</span>
            <input
                type="text"
                placeholder="Usuario"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                autoComplete="username" // Cambiar a autoComplete
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password" // Cambiar a autoComplete
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Iniciar sesión</button>
            <a href="#">Olvidé mi contraseña</a>
        </form>
    );
};

export default SignInForm;

