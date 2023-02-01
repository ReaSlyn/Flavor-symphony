import React, { useState, useEffect } from 'react';

const AddRecipeHud = ({ delay, number }) => {
	const [localDelay, setLocalDelay] = useState(delay);
	console.log(number);

	useEffect(() => {
		const timer =
			localDelay > 0 && setInterval(() => setLocalDelay(localDelay - 1), 10000);
		return () => clearInterval(timer);
	}, [localDelay]);

	return localDelay > 0 ? (
		<div className="recipe__card-item" id="delayBar">
			<img src={`recipes/Recipe${number}.png`} alt="recipe" />
		</div>
	) : (
		<div className="recipe__card-item" id="delayBar">
			<img src={`recipes/Recipe${number}.png`} alt="recipe" />
		</div>
	);
};

export default AddRecipeHud;
