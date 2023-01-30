import { Perf } from 'r3f-perf';
import { Debug, Physics } from '@react-three/rapier';
import Level from './Level.jsx';
import Player from './Player.jsx';
import Lights from './Lights.jsx';

export default function Experience() {
	return (
		<>
			{/* <Perf position="bottom-left" /> */}

			<Physics gravity={[0, -9.08, 0]}>
				<Debug />

				<Lights />
				<Level />
				<Player />
			</Physics>
		</>
	);
}
