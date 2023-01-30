import { useRapier, RigidBody, CuboidCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Player() {
	const body = useRef();
	const character = useGLTF('./character.glb');

	const { rapier, world } = useRapier();
	const rapierWorld = world.raw();

	const [speed, setSpeed] = useState(1.5);

	const [subscribeKeys, getKeys] = useKeyboardControls();

	let orientation = 'forward';

	/* Do a special action when key is pressed */
	useEffect(() => {
		const unsubscribeRun = subscribeKeys(
			(state) => state.run,
			(value) => {
				if (value) {
					setSpeed(2.25);
				} else {
					setSpeed(1.5);
				}
			}
		);

		const unsubscribePickDrop = subscribeKeys(
			(state) => state.pickdrop,
			(value) => {
				if (value) {
					/* @TODO pickdrop() */
				}
			}
		);

		const unsubscribeUse = subscribeKeys(
			(state) => state.use,
			(value) => {
				if (value) {
					use();
				}
			}
		);

		return () => {
			unsubscribeRun();
			unsubscribePickDrop();
			unsubscribeUse();
		};
	}, []);

	useFrame((state, delta) => {
		/**
		 * Controls & movements
		 */
		const { forward, backward, leftward, rightward } = getKeys();

		body.current.lockRotations(true, false, true);

		const velocity = body.current.linvel();

		if (!forward && !backward) {
			velocity.z = 0;
		}

		if (!leftward && !rightward) {
			velocity.x = 0;
		}

		if (forward) {
			velocity.z = -5 * speed;
			body.current.setRotation({
				w: 0.0,
				x: 0.0,
				y: 1,
				z: 0.0,
			});
			orientation = 'forward';
		}

		if (rightward) {
			velocity.x = 5 * speed;
			body.current.setRotation({ w: 1.0, x: 0.0, y: 1.0, z: 0.0 });
			orientation = 'rightward';
		}

		if (backward) {
			velocity.z = 5 * speed;
			body.current.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			orientation = 'backward';
		}

		if (leftward) {
			velocity.x = -5 * speed;
			body.current.setRotation({ w: -1.0, x: 0.0, y: 1, z: 0.0 });
			orientation = 'leftward';
		}

		if (forward && rightward) {
			velocity.z = -3.54 * speed;
			velocity.x = 3.54 * speed;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: 2,
				z: 0.0,
			});
			orientation = 'forward/lightward';
		}

		if (forward && leftward) {
			velocity.z = -3.54 * speed;
			velocity.x = -3.54 * speed;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: -2,
				z: 0.0,
			});
			orientation = 'forward/leftward';
		}

		if (backward && rightward) {
			velocity.z = 3.54 * speed;
			velocity.x = 3.54 * speed;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: 0.5,
				z: 0.0,
			});
			orientation = 'backward/rightward';
		}

		if (backward && leftward) {
			velocity.z = 3.54 * speed;
			velocity.x = -3.54 * speed;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: -0.5,
				z: 0.0,
			});
			orientation = 'backward/leftward';
		}

		body.current.setLinvel(velocity);
	});

	/* Use */
	const use = () => {
		let origin = body.current.translation();
		origin.y = origin.y + 1.75;

		let vector = null;

		if (orientation === 'forward') {
			origin.z -= 2;
			vector = new THREE.Vector3(0, 0, 1);
		}

		if (orientation === 'backward') {
			origin.z += 2;
			vector = new THREE.Vector3(0, 0, -1);
		}

		if (orientation === 'leftward') {
			origin.x -= 1.5;
			vector = new THREE.Vector3(-1, 0, 0);
		}

		if (orientation === 'rightward') {
			origin.x += 1.5;
			vector = new THREE.Vector3(1, 0, 0);
		}

		if (orientation === 'forward/leftward') {
			origin.z -= 2;
			origin.x -= 1.5;
			vector = new THREE.Vector3(-1, 0, 1);
		}

		if (orientation === 'forward/rightward') {
			origin.z -= 2;
			origin.x += 1.5;
			vector = new THREE.Vector3(1, 0, 1);
		}

		if (orientation === 'backward/leftward') {
			origin.z += 2;
			origin.x -= 1.5;
			vector = new THREE.Vector3(-1, 0, -1);
		}

		if (orientation === 'backward/rightward') {
			origin.z += 2;
			origin.x += 1.5;
			vector = new THREE.Vector3(1, 0, -1);
		}

		const ray = new rapier.Ray(origin, vector);
		const hit = rapierWorld.castRay(ray, 1, true);

		console.log(orientation);
		console.log('Hit:', hit);
		if (hit != null && hit.collider._parent.userData?.type) {
			console.log('Interaction :', hit.collider._parent.userData.type);
		}
	};

	return (
		<RigidBody
			type={'dynamic'}
			colliders={false}
			ref={body}
			position={[1, 1.25, 4]}
			userData={{ type: 'player' }}
		>
			<CuboidCollider args={[1.1, 2.75, 0.9]} position={[0.05, 1.75, 0.05]} />
			<primitive object={character.scene} scale={1} />
		</RigidBody>
	);
}
