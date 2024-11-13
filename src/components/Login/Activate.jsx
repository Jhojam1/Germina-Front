import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from './Popup';

export const ActivatePage = () => {
    const { token } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get('https://proyecto-germina-production.up.railway.app/api/auth/verify-email', {
                    params: { token }
                });
                if (response.status === 200) {
                    setError('Correo electrónico verificado correctamente.');
                    setShowPopup(true); // Mostrar popup
                } else {
                    setError(`Error al verificar correo electrónico: ${response.data} .`);
                    setShowPopup(true); // Mostrar popup
                    return;
                }
                setTimeout(() => {
                    navigate('/')
                }, 5000);

                return;

            } catch (error) {
                console.error('Error verifying email:', error);
                setError('Error al verificar correo electrónico');
                setShowPopup(true); // Mostrar popup
                return;
            }
        };

        verifyEmail();
    }, [token]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="activate">
                <p style={{ color: 'white' }}>Verificando correo electrónico...</p>
            </div>
            {showPopup && <Popup message={error} onClose={closePopup} />}
        </div>
    );
};

export const Activate = () => {
    const { token } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            console.log(token);
            try {
                const response = await axios.get(`https://proyecto-germina-production.up.railway.app/api/auth/verify-email?token=${token}`);

                if (response.status === 200) {
                    setError('Correo electrónico verificado correctamente.');
                    setShowPopup(true); // Mostrar popup
                } else {
                    setError(`Error al verificar correo electrónico: ${response.data} .`);
                    setShowPopup(true); // Mostrar popup
                    return;
                }
                setTimeout(() => {
                    navigate('/')
                }, 5000);

                return;

            } catch (error) {
                console.error('Error verifying email:', error);
                setError('Error al verificar correo electrónico');
                setShowPopup(true); // Mostrar popup
                return;
            }
        };

        verifyEmail();
    }, [token]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="activate">
                <p style={{ color: 'white' }}>Verificando correo electrónico...</p>
            </div>
            {showPopup && <Popup message={error} onClose={closePopup} />}
        </div>
    );
};
