import React from 'react';
import ReactDOM from 'react-dom/client'; // Usamos la nueva API
import AppRouter from '/src/components/AppRouter/AppRouter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); // Creamos el root
root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);
