import React from "react";
import Dish from "./Dish";


function Menu() {
    const dishes = [
        { id: "dish1", img: arrozImg, title: "Plato 1", description: "Descripción del plato 1." },
        { id: "dish2", img: arrozChicharronImg, title: "Plato 2", description: "Descripción del plato 2." },
        { id: "dish3", img: moteImg, title: "Plato 3", description: "Descripción del plato 3." },
        { id: "dish4", img: pescadoImg, title: "Plato 4", description: "Descripción del plato 4." }
    ];

    return (
        <div className="menu">
            {dishes.map(dish => (
                <Dish key={dish.id} id={dish.id} img={dish.img} title={dish.title} description={dish.description} />
            ))}
            <AddDishButton />
        </div>
    );
}

export default Menu;
