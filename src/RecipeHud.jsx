import React from "react";
import { useState, useEffect } from "react";

import AddRecipeHud from "./AddRecipeHud";

export default function RecipeHud({ time, randomNumber }) {
    const [counter, setCounter] = useState(time);

    useEffect(() => {
        if (counter > 0) {
            const timer = setInterval(
                () => setCounter((counter) => counter - 1),
                5000
            );
            return () => clearInterval(timer);
        }
    }, [counter]);

    return counter === 0 ? (
        <div className="recipe_container">
            <div className="recipe__flex">
                <AddRecipeHud number={randomNumber} delay={2} />
            </div>
        </div>
    ) : (
        <div className="recipe_container">
            <div className="recipe__flex">
                <AddRecipeHud number={randomNumber} delay={2} />
            </div>
        </div>
    );
}
