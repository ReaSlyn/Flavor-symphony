import { Physics } from '@react-three/rapier';
import Level from './Level.jsx';
import Player from './Player.jsx';
import Lights from './Lights.jsx';

export default function Experience() {
	return (
		<>
			<Physics gravity={[0, -9.08, 0]}>
				<Lights />
				<Level />
				<Player />
			</Physics>
		</>
	);
}
