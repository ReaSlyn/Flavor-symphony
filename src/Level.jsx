import * as THREE from 'three';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';

export function TableLeftWorkBoard(props) {
	const { nodes, materials } = useGLTF('/props/table_left_work_board.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 1.68, 0]} scale={0.11}>
				<mesh
					geometry={nodes.Cube009.geometry}
					material={materials['Material.035']}
				/>
				<mesh
					geometry={nodes.Cube009_1.geometry}
					material={materials['Material.043']}
				/>
				<mesh
					geometry={nodes.Cube009_2.geometry}
					material={materials['Material.044']}
				/>
			</group>
		</group>
	);
}

export function TableRight(props) {
	const { nodes, materials } = useGLTF('/props/table_right.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cube045.geometry}
				material={materials['Material.035']}
				position={[0, 1.61, 0]}
				scale={0.11}
			/>
		</group>
	);
}

function Bounds() {
	return (
		<>
			<RigidBody type="fixed" restitution={0}>
				<CuboidCollider args={[12, 2, 0.5]} position={[0, 1, 11]} />
				<CuboidCollider args={[12, 2, 0.5]} position={[0, 1, -8.75]} />
				<CuboidCollider args={[0.5, 2, 12]} position={[11.75, 1, 0]} />
				<CuboidCollider args={[0.5, 2, 12]} position={[-11.85, 1, 0]} />
			</RigidBody>
		</>
	);
}

function Kitchen() {
	const counter = useGLTF('./props/counter.glb');
	const cubePlates = useGLTF('./props/cube_plates.glb');
	const fridge = useGLTF('./props/fridge.glb');
	const breadBox = useGLTF('./props/bread_box.glb');
	const cheeseBox = useGLTF('./props/cheese_box.glb');
	const lettuceBox = useGLTF('./props/lettuce_box.glb');
	const steakBox = useGLTF('./props/steak_box.glb');
	const tomatoBox = useGLTF('./props/tomato_box.glb');
	const rightSink = useGLTF('./props/right_sink.glb');
	const leftSink = useGLTF('./props/left_sink.glb');
	const cubeLeft = useGLTF('./props/cube_left.glb');
	const cubeRightPan = useGLTF('./props/cube_right_pan.glb');
	const cubeLeftPot = useGLTF('./props/cube_left_pot.glb');
	const cubeRightMixer = useGLTF('./props/cube_right_mixer.glb');
	const cubeLeftPan = useGLTF('./props/cube_left_pan.glb');
	const cubeRightPot = useGLTF('./props/cube_right_pot.glb');
	const bin = useGLTF('./props/bin.glb');

	return (
		<>
			{/* Counter */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[7.25, 0.25, 9.25]}
				userData={{ type: 'counter' }}
			>
				<CuboidCollider args={[4, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={counter.scene} scale={1} />
			</RigidBody>

			{/* Cube Plates */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[2, 0.25, 9.25]}
				userData={{ type: 'plates' }}
			>
				<CuboidCollider args={[1.35, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubePlates.scene} scale={1} />
			</RigidBody>

			{/* Foodbox */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-3, 0.25, 9.25]}
				userData={{ type: 'box_bread' }}
			>
				<CuboidCollider args={[0.9, 5, 1]} position={[0, 2, 0]} />
				<primitive object={breadBox.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-6.5, 0.25, 9.25]}
				userData={{ type: 'box_steak' }}
			>
				<CuboidCollider args={[0.9, 5, 1]} position={[0, 2, 0]} />
				<primitive object={steakBox.scene} scale={1} />
			</RigidBody>

			{/* Central Foodbox */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-2, 0.25, 2]}
				userData={{ type: 'box_lettuce' }}
			>
				<CuboidCollider args={[0.9, 5, 1]} position={[0, 2, 0]} />
				<primitive object={lettuceBox.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[1.25, 0.25, 2]}
				userData={{ type: 'box_tomato' }}
			>
				<CuboidCollider args={[0.9, 5, 1]} position={[0, 2, 0]} />
				<primitive object={tomatoBox.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[4.5, 0.25, 2]}
				userData={{ type: 'box_cheese' }}
			>
				<CuboidCollider args={[0.9, 5, 1]} position={[0, 2, 0]} />
				<primitive object={cheeseBox.scene} scale={1} />
			</RigidBody>

			{/* Central Table */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-2.5, 0.25, 0]}
				userData={{ type: 'workboard' }}
			>
				<CuboidCollider args={[1.2, 5, 1.1]} position={[0.1, 2, -0.1]} />
				<TableLeftWorkBoard />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[0.15, 0.25, -0.05]}>
				<CuboidCollider args={[1.2, 5, 1.1]} position={[-0.1, 2, 0]} />
				<TableRight />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[2.5, 0.25, 0]}
				userData={{ type: 'workboard' }}
			>
				<CuboidCollider args={[1.2, 5, 1.1]} position={[0.1, 2, -0.1]} />
				<TableLeftWorkBoard />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[5.15, 0.25, -0.05]}>
				<CuboidCollider args={[1.2, 5, 1.1]} position={[-0.1, 2, 0]} />
				<TableRight />
			</RigidBody>

			{/* Fridge */}
			<RigidBody type="fixed" colliders={false} position={[-10, 0.25, 0]}>
				<CuboidCollider args={[1.15, 5, 1]} position={[0.25, 2, 0.1]} />
				<primitive object={fridge.scene} scale={1} />
			</RigidBody>

			{/* Sinks */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-10, 0.25, 4]}
				userData={{ type: 'sink' }}
			>
				<CuboidCollider args={[0.95, 5, 2.5]} position={[0.1, 2, 0.1]} />
				<primitive object={rightSink.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-10, 0.25, -4]}
				userData={{ type: 'sink' }}
			>
				<CuboidCollider args={[0.95, 5, 2.5]} position={[0.1, 2, 0.1]} />
				<primitive object={leftSink.scene} scale={1} />
			</RigidBody>

			{/* Cooking */}
			<RigidBody type="fixed" colliders={false} position={[-5.25, 0.25, -7.25]}>
				<CuboidCollider args={[1.3, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubeLeft.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-2.75, 0.25, -7.3]}
				userData={{ type: 'pan' }}
			>
				<CuboidCollider args={[1.3, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubeRightPan.scene} scale={1} />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[0.25, 0.25, -7.3]}>
				<CuboidCollider args={[1.3, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubeLeftPot.scene} scale={1} />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[2.8, 0.25, -7.3]}>
				<CuboidCollider args={[1.3, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubeRightMixer.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[5.75, 0.25, -7.19]}
				userData={{ type: 'pan' }}
			>
				<CuboidCollider args={[1.3, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubeLeftPan.scene} scale={1} />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[8.25, 0.25, -7.3]}>
				<CuboidCollider args={[1.3, 5, 1.1]} position={[0, 2, 0]} />
				<primitive object={cubeRightPot.scene} scale={1} />
			</RigidBody>

			{/* Bin */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[10.5, 0.25, -5]}
				userData={{ type: 'bin' }}
			>
				<CuboidCollider args={[1, 5, 1]} position={[0, 2, 0]} />
				<primitive object={bin.scene} scale={1} />
			</RigidBody>
		</>
	);
}

export default function Level() {
	const map = useGLTF('./map.glb');

	return (
		<>
			<RigidBody type={'fixed'} colliders={false} position={[0, 0, -4]}>
				<CuboidCollider args={[100, 0, 100]} position={[0, 0.25, 0]} />
				<primitive object={map.scene} scale={1} />
			</RigidBody>
			<Kitchen />
			<Bounds />
		</>
	);
}
