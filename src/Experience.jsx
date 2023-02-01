import { Debug, Physics } from '@react-three/rapier';
import Level from './Level.jsx';
import Player from './Player.jsx';
import Lights from './Lights.jsx';
import { OrbitControls } from '@react-three/drei';

export default function Experience() {
	return (
		<>
			<OrbitControls />
			<Physics gravity={[0, -9.08, 0]}>
				<Debug />

				<Lights />
				<Level />
				<Player />
			</Physics>
		</>
	);
}
