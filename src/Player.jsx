import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Player() {
	const body = useRef();
	const character = useGLTF('./character.glb');

	const [speed, setSpeed] = useState(1.5);

	const [subscribeKeys, getKeys] = useKeyboardControls();

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
					/* @TODO use(); */
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
		}

		if (rightward) {
			velocity.x = 5 * speed;
			body.current.setRotation({ w: 1.0, x: 0.0, y: 1.0, z: 0.0 });
		}

		if (backward) {
			velocity.z = 5 * speed;
			body.current.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
		}

		if (leftward) {
			velocity.x = -5 * speed;
			body.current.setRotation({ w: -1.0, x: 0.0, y: 1, z: 0.0 });
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
		}

		body.current.setLinvel(velocity);
	});

	return (
		<RigidBody
			type={'dynamic'}
			colliders={false}
			ref={body}
			position={[1, 5, 4]}
		>
			<CuboidCollider args={[1.1, 2.75, 0.9]} position={[0.05, 1.75, 0.05]} />
			<primitive object={character.scene} scale={1} />
		</RigidBody>
	);
}
