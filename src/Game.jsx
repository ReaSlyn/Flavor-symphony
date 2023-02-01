import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import GetRecipe from "./GetRecipe.jsx";
import Random from "./Helper/Random.jsx";

export default function Game() {
    const [isRunning, setIsRunning] = useState(false);
    const [isPreviousSaveExisting, setPreviousSaveExisting] = useState(false);

    const loadPreviousSave = () => {
        /* @TODO load previous save */
    };

    //timer
    const [counter, setCounter] = useState(2);
    const [number, setNumber] = useState(Random(1, 8));
    const [recipeGenerated, setRecipeGenerated] = useState(0);
    useEffect(() => {
        if (counter > 0) {
            const timer = setInterval(
                () => setCounter((counter) => counter - 1),
                2000
            );
            return () => clearInterval(timer);
        }
    }, [counter]);

    if (counter === 0) {
        const interval = setInterval(
            () => setRecipeGenerated(recipeGenerated + 1),
            20000
        );

        //Limit the number of recipes generated
        //Level 1: 2 recipes
        //Level 2: 5 recipes
        //Level 3: 8 recipes

        if (recipeGenerated < 3) {
            setNumber(Random(1, 2));
            setCounter(10);
        } else if (recipeGenerated < 6) {
            setNumber(Random(1, 5));
            setCounter(10);
        } else {
            setNumber(Random(1, 8));
            setCounter(10);
        }
        return () => clearInterval(interval);
    }

    return (
        <>
            {!isRunning && (
                <div className="menu">
                    <img className="logo" src="./logo.png" alt="logo" />
                    <div className="buttons">
                        <div
                            className="newgame"
                            onClick={() => setIsRunning(true)}
                        >
                            <img
                                src="./icon/new game.svg"
                                alt="polygon start game"
                            />
                            <p>NEW GAME</p>
                        </div>
                        {isPreviousSaveExisting && (
                            <div
                                className="loadsave"
                                onClick={() => loadPreviousSave()}
                            >
                                <p>LOAD SAVE</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isRunning && (
                <>
                    <Canvas
                        camera={{
                            fov: 45,
                            near: 0.1,
                            position: [0, 24, 20],
                        }}
                    >
                        <Experience />
                    </Canvas>
                    {counter === 0 ? (
                        <GetRecipe time={2} randomNumber={number} />
                    ) : (
                        <GetRecipe time={2} randomNumber={number} />
                    )}
                </>
            )}
        </>
    );
}
