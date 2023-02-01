import React, { useState, useEffect } from 'react';

const GetRecipe = ({ randomNumber }) => {
	const [recipe, setRecipe] = useState(null);

	//Get a random number between 1 and 8 to get a random recipe
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
		}, 15000);
		return () => clearInterval(interval);
	}, [randomNumber]);

	return recipe ? (
		<div className="recipe_container">
			<div className="recipe__flex">
				<div className="recipe__card-item" id="delayBar">
					<img src={`recipes/Recipe${randomNumber}.png`} alt="recipe" />
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default GetRecipe;
