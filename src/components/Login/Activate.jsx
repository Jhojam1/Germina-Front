import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from './Popup';

export const ActivatePage = () => {
    const { token } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            setLoading(true);
            try {
                // Realizamos la solicitud para activar la cuenta usando el token
                const response = await axios.put(`https://proyecto-germina-production.up.railway.app/api/auth/activate-email?token=${token}`);

                if (response.status === 200) {
                    setError('Correo electrónico verificado correctamente.');
                } else {
                    setError(`Error al verificar correo electrónico: ${response.data}`);
                }
                setShowPopup(true);
            } catch (error) {
                // Manejamos el error, mostrando el mensaje específico si está disponible
                console.error('Error al verificar correo electrónico:', error);
                setError(error.response?.data?.message || 'Error al verificar correo electrónico');
                setShowPopup(true);
            } finally {
                setLoading(false);
                // Redirigimos al usuario a la página principal después de 5 segundos
                setTimeout(() => {
                    navigate('/');
                }, 5000);
            }
        };

        // Llamamos a la función de verificación del correo
        verifyEmail();
    }, [token, navigate]);

    const closePopup = () => {
        setShowPopup(false);  // Cierra el popup cuando el usuario lo desee
    };

    return (
        <div>
            <div className="activate">
                <p style={{ color: 'white' }}>
                    {loading ? 'Verificando correo electrónico...' : 'Resultado de la verificación'}
                </p>
            </div>
            {showPopup && <Popup message={error} onClose={closePopup} />}
        </div>
    );
};
