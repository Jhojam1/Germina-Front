import React from "react";

function Dish({ id, img, title, description }) {
    const editDish = () => {
        console.log("Editar plato:", id);
    };

    const openPopup = () => {
        console.log("Abrir popup para:", id);
    };

    return (
        <div className="dish" id={id}>
            <img src={img} alt={title} />
            <div className="content">
                <div className="description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="buttons">
                    <button className="edit-btn" onClick={editDish}>Editar</button>
                    <button className="order-btn" onClick={openPopup}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default Dish;
