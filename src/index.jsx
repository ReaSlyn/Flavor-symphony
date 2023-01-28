import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { KeyboardControls } from '@react-three/drei';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<KeyboardControls
		map={[
			{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
			{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
			{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
			{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
			{ name: 'run', keys: ['Shift'] },
			{ name: 'use', keys: ['Ctrl'] },
			{ name: 'pickdrop', keys: ['Space'] },
		]}
	>
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				position: [0, 24, 20],
			}}
		>
			<Experience />
		</Canvas>
	</KeyboardControls>
);
