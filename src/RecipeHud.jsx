import React from "react";
import { useState, useEffect } from "react";

import AddRecipeHud from "./AddRecipeHud";

export default function RecipeHud({ props }) {
    const [number, setNumber] = useState(props.number);
    const [counter, setCounter] = useState(props.time);
    const [randomNumber, setRandomNumber] = useState(props.randomNumber);

    console.log(props.number);

    useEffect(() => {
        if (counter > 0) {
            const timer = setInterval(() => setCounter(counter - 1), 5000);
            return () => clearInterval(timer);
        }
    }, [counter]);

    // useEffect(() => {
    //     if (counter === 0) {
    //         const interval = setInterval(
    //             () => setNumber(Math.floor(Math.random() * 8) + 1),
    //             10000
    //         );
    //         setCounter(2);
    //         return () => clearInterval(interval);
    //     }
    // }, [counter]);

    return counter === 0 ? (
        // <>

        <div className="recipe_container">
            //{" "}
            <div className="recipe__flex">
                // <AddRecipeHud number={3} delay={3} />
                //{" "}
            </div>
            //{" "}
        </div>
    ) : (
        //     <div className="recipe_container">
        //         <div className="recipe__flex">
        //             <AddRecipeHud number={3} delay={counter} />
        //         </div>
        //     </div>
        // </>

        <>
            <div className="recipe_container">
                <div className="recipe__flex">
                    <AddRecipeHud number={props.number} delay={3} />
                </div>
            </div>
        </>
    );
}
