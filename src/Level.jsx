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
			<RigidBody type="fixed" position={[0, 1.25, 0]}>
				<CuboidCollider args={[12, 10, 2]} position={[0, 1.25, 12.5]} />
				<CuboidCollider args={[12, 10, 2]} position={[0, 1.25, -10.25]} />
				<CuboidCollider args={[2, 10, 12]} position={[13.25, 1.25, 0]} />
				<CuboidCollider args={[2, 10, 12]} position={[-13.35, 1.25, 0]} />
				<CuboidCollider args={[12, 1, 12]} position={[0, 12, 0]} />
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
				userData={{ name: 'counter', usable: true }}
			>
				<CuboidCollider args={[4, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={counter.scene} scale={1} />
			</RigidBody>

			{/* Cube Plates */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[2, 0.25, 9.25]}
				userData={{ name: 'plates', usable: true }}
			>
				<CuboidCollider args={[1.35, 1.75, 1.1]} position={[0, 1.75, 0]} />
				<primitive object={cubePlates.scene} scale={1} />
			</RigidBody>

			{/* Foodbox */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-3, 0.25, 9.25]}
				userData={{ name: 'box_bread', usable: true }}
			>
				<CuboidCollider args={[0.9, 1, 1]} position={[0, 1, 0]} />
				<primitive object={breadBox.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-6.5, 0.25, 9.25]}
				userData={{ name: 'box_steak', usable: true }}
			>
				<CuboidCollider args={[0.9, 1, 1]} position={[0, 1, 0]} />
				<primitive object={steakBox.scene} scale={1} />
			</RigidBody>

			{/* Central Foodbox */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-2.5, 0.25, 2]}
				userData={{ name: 'box_lettuce', usable: true }}
			>
				<CuboidCollider args={[0.9, 1, 1]} position={[0, 1, 0]} />
				<primitive object={lettuceBox.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[1.25, 0.25, 2]}
				userData={{ name: 'box_tomato', usable: true }}
			>
				<CuboidCollider args={[0.9, 1, 1]} position={[0, 1, 0]} />
				<primitive object={tomatoBox.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[5, 0.25, 2]}
				userData={{ name: 'box_cheese', usable: true }}
			>
				<CuboidCollider args={[0.9, 1, 1]} position={[0, 1, 0]} />
				<primitive object={cheeseBox.scene} scale={1} />
			</RigidBody>

			{/* Central Table */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-2.5, 0.25, 0]}
				userData={{ name: 'workboard', usable: true }}
			>
				<CuboidCollider args={[1.2, 0.95, 1.1]} position={[0.1, 0.95, -0.1]} />
				<TableLeftWorkBoard />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[0.15, 0.25, -0.05]}>
				<CuboidCollider args={[1.2, 0.95, 1.1]} position={[-0.1, 0.95, 0]} />
				<TableRight />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[2.5, 0.25, 0]}
				userData={{ name: 'workboard', usable: true }}
			>
				<CuboidCollider args={[1.2, 0.95, 1.1]} position={[0.1, 0.95, -0.1]} />
				<TableLeftWorkBoard />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[5.15, 0.25, -0.05]}>
				<CuboidCollider args={[1.2, 0.95, 1.1]} position={[-0.1, 0.95, 0]} />
				<TableRight />
			</RigidBody>

			{/* Fridge */}
			<RigidBody type="fixed" colliders={false} position={[-10, 0.25, 0]}>
				<CuboidCollider args={[1.15, 2.75, 1]} position={[0.25, 2.75, 0.1]} />
				<primitive object={fridge.scene} scale={1} />
			</RigidBody>

			{/* Sinks */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-10, 0.25, 4]}
				userData={{ name: 'sink' }}
			>
				<CuboidCollider args={[0.95, 1.25, 2.5]} position={[0.1, 1, 0.1]} />
				<primitive object={rightSink.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-10, 0.25, -4]}
				userData={{ name: 'sink' }}
			>
				<CuboidCollider args={[0.95, 1.25, 2.5]} position={[0.1, 1, 0.1]} />
				<primitive object={leftSink.scene} scale={1} />
			</RigidBody>

			{/* Cooking */}
			<RigidBody type="fixed" colliders={false} position={[-5.25, 0.25, -7.25]}>
				<CuboidCollider args={[1.3, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={cubeLeft.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[-2.75, 0.25, -7.3]}
				userData={{ name: 'pan', usable: true }}
			>
				<CuboidCollider args={[1.3, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={cubeRightPan.scene} scale={1} />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[0.25, 0.25, -7.3]}>
				<CuboidCollider args={[1.3, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={cubeLeftPot.scene} scale={1} />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[2.8, 0.25, -7.3]}>
				<CuboidCollider args={[1.3, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={cubeRightMixer.scene} scale={1} />
			</RigidBody>
			<RigidBody
				type="fixed"
				colliders={false}
				position={[5.75, 0.25, -7.19]}
				userData={{ name: 'pan', usable: true }}
			>
				<CuboidCollider args={[1.3, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={cubeLeftPan.scene} scale={1} />
			</RigidBody>
			<RigidBody type="fixed" colliders={false} position={[8.25, 0.25, -7.3]}>
				<CuboidCollider args={[1.3, 1.25, 1.1]} position={[0, 1, 0]} />
				<primitive object={cubeRightPot.scene} scale={1} />
			</RigidBody>

			{/* Bin */}
			<RigidBody
				type="fixed"
				colliders={false}
				position={[10.5, 0.25, -5]}
				userData={{ name: 'bin', usable: true }}
			>
				<CuboidCollider args={[1, 1.25, 1]} position={[0, 1, 0]} />
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
