import './style.css';
import ReactDOM from 'react-dom/client';
import Game from './Game.jsx';
import { KeyboardControls } from '@react-three/drei';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<KeyboardControls
		map={[
			{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
			{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
			{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
			{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
			{ name: 'use', keys: ['Shift'] },
			{ name: 'pickdrop', keys: ['Space'] },
		]}
	>
		<Game />
	</KeyboardControls>
);
