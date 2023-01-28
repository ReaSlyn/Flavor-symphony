import { Perf } from 'r3f-perf';
import { Debug, Physics } from '@react-three/rapier';

import Level from './Level.jsx';
import Player from './Player.jsx';

export default function Experience() {
	return (
		<>
			{/* <Perf position="bottom-left" /> */}

			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<Physics gravity={[0, -9.08, 0]}>
				{/* <Debug /> */}

				<Level />
				<Player />
			</Physics>
		</>
	);
}
