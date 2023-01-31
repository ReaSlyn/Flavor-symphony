import { useRapier, RigidBody, CuboidCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import * as Item from './Items.jsx';

export default function Player() {
	/* ITEMS */

	let indexItemCarrying = -1;
	let itemsRef = useRef([]);

	let items = [
		{
			component: <Item.Plate />,
			name: 'plate',
			position: [1, 1.25, 4],
		},
		{
			component: <Item.RawBread />,
			name: 'raw_bread',
			position: [1, 1.25, 4],
		},
		{
			component: <Item.RawCheese />,
			name: 'raw_cheese',
			position: [1, 1.25, 4],
		},
		{
			component: <Item.RawLettuce />,
			name: 'raw_lettuce',
			position: [1, 1.25, 4],
		},
		{
			component: <Item.RawTomato />,
			name: 'raw_tomato',
			position: [1, 1.25, 4],
		},
		{
			component: <Item.RawSteak />,
			name: 'raw_steak',
			position: [1, 1.25, 4],
		},
	];

	/* Player */
	const body = useRef();
	const character = useGLTF('./character.glb');

	const { rapier, world } = useRapier();
	const rapierWorld = world.raw();

	const [subscribeKeys, getKeys] = useKeyboardControls();

	let orientation = 'backward';

	/* Do a special action when key is pressed */
	useEffect(() => {
		const unsubscribePickDrop = subscribeKeys(
			(state) => state.pickdrop,
			(value) => {
				if (value) {
					pickdrop();
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
			unsubscribePickDrop();
			unsubscribeUse();
		};
	}, []);

	useFrame((state, delta) => {
		/* Carrying item */
		if (indexItemCarrying !== -1) {
			let playerOrigin = body.current.translation();
			let item = itemsRef.current[indexItemCarrying];

			if (orientation === 'forward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x, 3, playerOrigin.z - 1.8)
				);
				item.setRotation({
					w: 0.0,
					x: 0.0,
					y: 1,
					z: 0.0,
				});
			}

			if (orientation === 'backward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x, 3, playerOrigin.z + 1.8)
				);
				item.setRotation({
					w: 1.0,
					x: 0.0,
					y: 0.0,
					z: 0.0,
				});
			}

			if (orientation === 'leftward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x - 1.8, 3, playerOrigin.z)
				);
				item.setRotation({ w: -1.0, x: 0.0, y: 1, z: 0.0 });
			}

			if (orientation === 'rightward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x + 1.8, 3, playerOrigin.z)
				);
				item.setRotation({ w: 1.0, x: 0.0, y: 1.0, z: 0.0 });
			}

			if (orientation === 'forward/leftward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x - 1.5, 3, playerOrigin.z - 2)
				);
				item.setRotation({
					w: 1.0,
					x: 0.0,
					y: 0.5,
					z: 0.0,
				});
			}

			if (orientation === 'forward/rightward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x + 1.5, 3, playerOrigin.z - 2)
				);
				item.setRotation({
					w: 1.0,
					x: 0.0,
					y: -0.5,
					z: 0.0,
				});
			}

			if (orientation === 'backward/leftward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x - 1.5, 3, playerOrigin.z + 2)
				);
				item.setRotation({
					w: 1.0,
					x: 0.0,
					y: -0.5,
					z: 0.0,
				});
			}

			if (orientation === 'backward/rightward') {
				item.setTranslation(
					new THREE.Vector3(playerOrigin.x + 2, 3, playerOrigin.z + 2)
				);
				item.setRotation({
					w: 1.0,
					x: 0.0,
					y: 0.5,
					z: 0.0,
				});
			}
		}

		/**
		 * Controls & movements
		 */
		const { forward, backward, leftward, rightward } = getKeys();
		const velocity = body.current.linvel();

		if (!forward && !backward) {
			velocity.z = 0;
		}

		if (!leftward && !rightward) {
			velocity.x = 0;
		}

		if (forward) {
			velocity.z = -5 * 1.5;
			body.current.setRotation({
				w: 0.0,
				x: 0.0,
				y: 1,
				z: 0.0,
			});
			orientation = 'forward';
		}

		if (rightward) {
			velocity.x = 5 * 1.5;
			body.current.setRotation({ w: 1.0, x: 0.0, y: 1.0, z: 0.0 });
			orientation = 'rightward';
		}

		if (backward) {
			velocity.z = 5 * 1.5;
			body.current.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			orientation = 'backward';
		}

		if (leftward) {
			velocity.x = -5 * 1.5;
			body.current.setRotation({ w: -1.0, x: 0.0, y: 1, z: 0.0 });
			orientation = 'leftward';
		}

		if (forward && rightward) {
			velocity.z = -3.54 * 1.5;
			velocity.x = 3.54 * 1.5;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: 2,
				z: 0.0,
			});
			orientation = 'forward/lightward';
		}

		if (forward && leftward) {
			velocity.z = -3.54 * 1.5;
			velocity.x = -3.54 * 1.5;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: -2,
				z: 0.0,
			});
			orientation = 'forward/leftward';
		}

		if (backward && rightward) {
			velocity.z = 3.54 * 1.5;
			velocity.x = 3.54 * 1.5;
			body.current.setRotation({
				w: 1.0,
				x: 0.0,
				y: 0.5,
				z: 0.0,
			});
			orientation = 'backward/rightward';
		}

		if (backward && leftward) {
			velocity.z = 3.54 * 1.5;
			velocity.x = -3.54 * 1.5;
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

	const itemDetection = () => {
		let origin = body.current.translation();
		origin.y = origin.y + 3;

		let vector = new THREE.Vector3(0, 0, -1);

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

		return { hit };
	};

	/* Pick & drop food */
	const pickdrop = () => {
		let { hit } = itemDetection();

		if (indexItemCarrying !== -1) {
			indexItemCarrying = -1;
			return;
		}

		if (!hit?.collider._parent.userData?.item) {
			return;
		}

		indexItemCarrying = itemsRef.current.findIndex(
			(item) => item.handle === hit.collider._parent.handle
		);
	};

	/* Interact with scene */
	const use = () => {
		let { hit } = itemDetection();

		if (!hit?.collider._parent.userData?.usable) {
			return;
		}

		if (
			[
				'box_steak',
				'box_cheese',
				'box_bread',
				'box_lettuce',
				'box_tomato',
				'plates',
			].includes(hit?.collider._parent.userData.name)
		) {
			items.push({
				component: <Item.Plate />,
				name: 'plate',
				position: [1, 1.25, 4],
			});
			console.log(items);
		}

		if (indexItemCarrying === -1) {
			return;
		}

		if (hit?.collider._parent.userData.name === 'workboard') {
			console.log('workboard');
		}

		if (hit?.collider._parent.userData.name === 'pan') {
			console.log('pan');
		}

		if (hit?.collider._parent.userData.name === 'counter') {
			console.log('counter');
		}

		if (hit?.collider._parent.userData.name === 'bin') {
		}

		/* hit?.collider._parent.userData.name */
		/* hit?.collider._parent.handle */
	};

	return (
		<>
			<RigidBody
				type={'dynamic'}
				colliders={false}
				ref={body}
				position={[1, 1.25, 4]}
				userData={{ name: 'player' }}
				enabledRotations={[false, true, false]}
			>
				<CuboidCollider args={[1.1, 2.75, 0.9]} position={[0.05, 1.75, 0.05]} />
				<primitive object={character.scene} scale={1} />
			</RigidBody>

			{/* ITEMS */}
			{items.map((item, index) => {
				return (
					<RigidBody
						ref={(el) => (itemsRef.current[index] = el)}
						type={'dynamic'}
						colliders={false}
						position={item.position}
						enabledRotations={[false, true, false]}
						friction={5}
						userData={{ name: item.name, item: true }}
						key={index}
					>
						<CuboidCollider args={[0.8, 3.5, 0.8]} position={[0, 3.5, 0]} />
						{item.component}
					</RigidBody>
				);
			})}
		</>
	);
}
