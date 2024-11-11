import React from 'react';
import './MenuPage.css';  // Asegúrate de tener este archivo CSS para los estilos.

const MenuPage = () => {
    // Funciones para manejar los eventos de los botones
    const editDish = (dishId) => {
        console.log(`Editando el plato: ${dishId}`);
        // Aquí puedes agregar lógica para editar el plato
    };

    const openPopup = () => {
        console.log('Abriendo el popup');
        // Aquí puedes abrir el popup para realizar una orden
    };

    return (
        <div>
            <header>
                <div className="username">Andres Lozano</div>
                <div className="header-container">
                    <button className="logout-btn">
                        <img src="src/images/salida.svg" alt="Icono de salir" /> Salir
                    </button>
                </div>
            </header>

            <h1 className="menu-title">Menú del Día</h1>

            <div className="menu">
                <div className="dish" id="dish1">
                    <img src="src/images/arroz.jpg" alt="Plato 1" />
                    <div className="content">
                        <div className="description">
                            <h3>Plato 1</h3>
                            <p>Descripción del plato 1.</p>
                        </div>
                        <div className="buttons">
                            <button className="edit-btn" onClick={() => editDish('dish1')}>Editar</button>
                            <button className="order-btn" onClick={openPopup}>Ordenar</button>
                        </div>
                    </div>
                </div>

                <div className="dish" id="dish2">
                    <img src="src/images/arroz_chicharron.jpg" alt="Plato 2" />
                    <div className="content">
                        <div className="description">
                            <h3>Plato 2</h3>
                            <p>Descripción del plato 2.</p>
                        </div>
                        <div className="buttons">
                            <button className="edit-btn" onClick={() => editDish('dish2')}>Editar</button>
                            <button className="order-btn" onClick={openPopup}>Ordenar</button>
                        </div>
                    </div>
                </div>

                <div className="dish" id="dish3">
                    <img src="src/images/Mote.jpg" alt="Plato 3" />
                    <div className="content">
                        <div className="description">
                            <h3>Plato 3</h3>
                            <p>Descripción del plato 3.</p>
                        </div>
                        <div className="buttons">
                            <button className="edit-btn" onClick={() => editDish('dish3')}>Editar</button>
                            <button className="order-btn" onClick={openPopup}>Ordenar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
