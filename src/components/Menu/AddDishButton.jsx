import React from "react";

function AddDishButton() {
    const addDish = () => {
        console.log("Añadir nuevo plato");
    };

    return (
        <button className="add-dish-btn" onClick={addDish}>+</button>
    );
}

export default AddDishButton;
