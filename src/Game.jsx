import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

/* function Random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
} */

export default function Game() {
	const [isRunning, setIsRunning] = useState(false);
	const [isPreviousSaveExisting, setPreviousSaveExisting] = useState(false);

	const loadPreviousSave = () => {
		/* @TODO load previous save */
	};

	/* Timer */
	// const [randomNumber, setRandomNumber] = useState(null);
	// const [recipeGenerated, setRecipeGenerated] = useState(0);

	// useEffect(() => {
	// 	if (!isRunning) return;

	// 	/* Change customer order every 15 seconds  */
	// 	const interval = setInterval(() => {
	// 		setRecipeGenerated((recipeGenerated) => recipeGenerated + 1);
	// 	}, 15000);

	// 	return () => clearInterval(interval);
	// }, [isRunning]);

	// useEffect(() => {
	// 	/*
	// 	Available recipes by recipeGenerated
	// 	Level 1: 2 recipes
	// 	Level 2: 5 recipes
	// 	Level 3: 8 recipes
	// 	*/
	// 	if (recipeGenerated <= 1) {
	// 		setRandomNumber(Random(1, 2));
	// 	} else if (recipeGenerated < 5) {
	// 		setRandomNumber(Random(1, 5));
	// 	} else {
	// 		setRandomNumber(Random(1, 8));
	// 	}
	// }, [recipeGenerated]);

	return (
		<>
			{/* Home screen menu */}
			<div className="menu">
				<img className="logo" src="./logo.png" alt="logo" />
				<div className={`buttons ${isRunning ? 'hide' : ''}`}>
					<div className="newgame" onClick={() => setIsRunning(true)}>
						<img src="./icon/new game.svg" alt="polygon start game" />
						<p>NEW GAME</p>
					</div>
					{isPreviousSaveExisting && (
						<div className="loadsave" onClick={() => loadPreviousSave()}>
							<p>LOAD SAVE</p>
						</div>
					)}
				</div>
			</div>

			{/* Game */}
			{isRunning && (
				<>
					<Canvas
						className={`canvas ${isRunning ? 'show' : ''}`}
						camera={{
							fov: 45,
							near: 0.1,
							position: [0, 24, 20],
						}}
					>
						<Experience />
					</Canvas>
					{/* Order Generation */}
					{/* <GetRecipe randomNumber={randomNumber} /> */}
				</>
			)}
		</>
	);
}
