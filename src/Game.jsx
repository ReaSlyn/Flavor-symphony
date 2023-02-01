import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

export default function Game() {
	const [isRunning, setIsRunning] = useState(false);
	const [isPreviousSaveExisting, setPreviousSaveExisting] = useState(false);

	const loadPreviousSave = () => {
		/* @TODO load previous save */
	};

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
			)}
		</>
	);
}
