import { useRapier, RigidBody, CuboidCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { items, recipes } from './Items.jsx';

export default function Player() {
	/* Items */
	let indexItemCarrying = -1;
	let itemsRef = useRef([]);

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

	useFrame(() => {
		/* Carrying item */
		if (indexItemCarrying !== -1) {
			let playerOrigin = body.current.translation();
			let item = itemsRef.current[indexItemCarrying];

			/* Change carried item rotation and translation by orientation */
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

		/* Stop player when no key are pressed */
		if (!forward && !backward) {
			velocity.z = 0;
		}

		if (!leftward && !rightward) {
			velocity.x = 0;
		}

		/* change rotation and velocity direction when key are pressed */
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

		/* Apply velocity direction */
		body.current.setLinvel(velocity);
	});

	/* Detect scene objects with a raycast that hit the physic world (collision) */
	const itemDetection = (yOffset) => {
		let origin = body.current.translation();
		origin.y = yOffset;

		let vector = new THREE.Vector3(0, 0, -1);

		/* Change origin and direction of raycast by the orientation */
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

		/* Create raycast with origin and direction to record the first hit */
		const ray = new rapier.Ray(origin, vector);
		const hit = rapierWorld.castRay(ray, 1, true);

		return { hit };
	};

	/* Pick & drop food */
	const pickdrop = () => {
		let { hit } = itemDetection(4);

		/* Drop item if the player carried one */
		if (indexItemCarrying !== -1) {
			indexItemCarrying = -1;
			return;
		}

		/* Return the scene object is not a food related item */
		if (!hit?.collider._parent.userData?.item) {
			return;
		}

		/* Find the item ref index to manipulate it's position */
		indexItemCarrying = itemsRef.current.findIndex(
			(item) => item.handle === hit.collider._parent.handle
		);
	};

	/* Reset position of carried item when used */
	const resetPositionAfterUse = (index) => {
		itemsRef.current[index].setTranslation(
			new THREE.Vector3(
				items[index].position[0],
				items[index].position[1],
				items[index].position[2]
			)
		);
	};

	/* Interact with scene */
	const use = () => {
		let { hit } = itemDetection(1);

		/* If the player is carrying an item and wants to fuse it with the detected one */
		if (indexItemCarrying !== -1) {
			if (hit?.collider._parent.userData?.item) {
				let indexItemDetected = itemsRef.current.findIndex(
					(item) => item.handle === hit.collider._parent.handle
				);

				let indexRecipe = recipes.findIndex(
					(recipe) =>
						recipe.component.includes(items[indexItemCarrying].name) &&
						recipe.component.includes(items[indexItemDetected].name)
				);

				if (indexRecipe !== -1) {
					resetPositionAfterUse(indexItemDetected);
					resetPositionAfterUse(indexItemCarrying);
					indexItemCarrying = recipes[indexRecipe].result;
				}
			}
		}

		/* Return if the scene object is not useful in the gameplay */
		if (!hit?.collider._parent.userData?.usable) {
			return;
		}

		/* Teleport food item to player */
		if (hit?.collider._parent.userData.name === 'plates') {
			itemsRef.current[0].setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			itemsRef.current[0].setTranslation(new THREE.Vector3(2, 4, 9.5));
		}

		if (hit?.collider._parent.userData.name === 'box_bread') {
			itemsRef.current[1].setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			itemsRef.current[1].setTranslation(new THREE.Vector3(-3, 4, 9));
		}

		if (hit?.collider._parent.userData.name === 'box_cheese') {
			itemsRef.current[2].setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			itemsRef.current[2].setTranslation(new THREE.Vector3(5, 4, 2));
		}

		if (hit?.collider._parent.userData.name === 'box_lettuce') {
			itemsRef.current[3].setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			itemsRef.current[3].setTranslation(new THREE.Vector3(-2.5, 4, 2));
		}

		if (hit?.collider._parent.userData.name === 'box_tomato') {
			itemsRef.current[4].setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			itemsRef.current[4].setTranslation(new THREE.Vector3(1.25, 4, 2.1));
		}

		if (hit?.collider._parent.userData.name === 'box_steak') {
			itemsRef.current[5].setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
			itemsRef.current[5].setTranslation(new THREE.Vector3(-6.5, 4, 9.25));
		}

		/* Cut food and teleport transformed food in hand */
		if (
			hit?.collider._parent.userData.name === 'workboard' &&
			['raw_tomato', 'raw_cheese', 'raw_lettuce', 'raw_steak'].includes(
				items[indexItemCarrying].name
			)
		) {
			resetPositionAfterUse(indexItemCarrying);
			indexItemCarrying += 4;
		}

		/* Cook food and teleport transformed food in hand */
		if (hit?.collider._parent.userData.name === 'pan') {
			if (items[indexItemCarrying].name === 'cut_steak') {
				resetPositionAfterUse(indexItemCarrying);
				indexItemCarrying = 10;
			}
		}

		/* Send food to the order */
		if (hit?.collider._parent.userData.name === 'counter') {
			console.log('counter');
		}

		/* Teleport the food at it's initial position to make it disappear */
		if (hit?.collider._parent.userData.name === 'bin') {
			resetPositionAfterUse(indexItemCarrying);
			indexItemCarrying = -1;
		}
	};

	return (
		<>
			{/* Player */}
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

			{/* Items */}
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
