import React, { useState, useEffect } from 'react';
import Random from './Helper/Random';
import RecipeHud from './RecipeHud';

const GetRecipe = ({ time, randomNumber }) => {
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		const interval = setInterval(async () => {
			try {
				const res = await fetch(
					`http://localhost:5100/api/recipeFood/idRecipe=${randomNumber}`
				);
				const result = await res.json();
				setRecipe(result);
			} catch (error) {
				console.error(error);
			}
		}, time * 1000);
		return () => clearInterval(interval);
	}, [randomNumber, time]);

	return recipe ? (
		<GetNewRecipe recipe={recipe} time={time} randomNumber={randomNumber} />
	) : null;
};

const GetNewRecipe = ({ recipe, time, randomNumber }) => {
	const [counter, setCounter] = useState(time);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prevCounter) => prevCounter - 1);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	return counter === 0 ? (
		<RecipeHud time={time} randomNumber={randomNumber} />
	) : (
		<RecipeHud time={time} randomNumber={randomNumber} />
	);
};

export default GetRecipe;
