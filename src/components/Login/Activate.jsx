import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from './Popup';  // Asegúrate de tener un componente Popup funcional

export const ActivatePage = () => {
    const { token } = useParams();  // Recuperamos el token de los parámetros de la URL
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Función para verificar la activación del correo
        const verifyEmail = async () => {
            try {
                // Hacemos la petición para activar la cuenta usando el token
                const response = await axios.put(`https://proyecto-germina-production.up.railway.app/api/auth/activate-email?token=${token}`);

                if (response.status === 200) {
                    // Si la respuesta es correcta, mostramos el mensaje de éxito
                    setError('Correo electrónico verificado correctamente.');
                    setShowPopup(true);  // Mostrar popup de éxito
                } else {
                    // Si la respuesta no es la esperada, mostramos un mensaje de error
                    setError(`Error al verificar correo electrónico: ${response.data}`);
                    setShowPopup(true);  // Mostrar popup de error
                }

                // Redirigimos al usuario a la página principal después de unos segundos
                setTimeout(() => {
                    navigate('/');  // Redirigir al inicio
                }, 5000);

            } catch (error) {
                console.error('Error al verificar correo electrónico:', error);
                setError('Error al verificar correo electrónico');
                setShowPopup(true);  // Mostrar popup de error
            }
        };

        // Llamamos a la función de verificación del correo
        verifyEmail();
    }, [token, navigate]);  // Solo vuelve a ejecutarse si el token cambia

    const closePopup = () => {
        setShowPopup(false);  // Cierra el popup cuando el usuario lo desee
    };

    return (
        <div>
            <div className="activate">
                <p style={{ color: 'white' }}>Verificando correo electrónico...</p>
            </div>
            {showPopup && <Popup message={error} onClose={closePopup} />} {/* Mostramos el popup con el mensaje correspondiente */}
        </div>
    );
};
