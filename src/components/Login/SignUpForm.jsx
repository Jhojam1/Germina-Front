import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    // Estados para los campos del formulario
    const [fullName, setFullName] = useState('');
    const [numberIdentification, setNumberIdentification] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar los datos al backend
            const response = await axios.post('https://proyecto-germina-production.up.railway.app/api/TempUser/saveTempUser', {
                fullName,
                numberIdentification,
                mail,
                password,
                role: 'Usuario', // Asigna el rol según corresponda
                state: 'Activo', // Puedes ajustar el estado según las necesidades
            });

            if (response.status === 200) {
                setSuccess('Registro exitoso. ¡Ahora puedes iniciar sesión!');
                setError(''); // Limpia el mensaje de error si el registro fue exitoso
                // Limpia los campos
                setFullName('');
                setNumberIdentification('');
                setMail('');
                setPassword('');
            } else {
                setError('Error en el registro');
                setSuccess('');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            setError('Hubo un error al procesar el registro');
            setSuccess('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Crear Cuenta</h1>
            <span>Para gestionar tus pedidos</span>
            <input
                type="text"
                placeholder="Nombres Completos"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Cedula"
                value={numberIdentification}
                onChange={(e) => setNumberIdentification(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default SignUpForm;
