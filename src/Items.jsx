import { useGLTF } from '@react-three/drei';

export function Plate(props) {
	const { nodes, materials } = useGLTF('/food/plate.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cylinder010.geometry}
				material={nodes.Cylinder010.material}
				position={[0, 0.02, 0]}
				rotation={[-Math.PI, 0, 0]}
				scale={[0.4, 0.02, 0.4]}
			/>
		</group>
	);
}

/* RAW FOOD */

export function RawBread(props) {
	const { nodes, materials } = useGLTF('/food/raw/bread.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.51, 0]} scale={[0.78, 1.368, 0.78]}>
				<mesh
					geometry={nodes.Cube003.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					geometry={nodes.Cube003_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube003_2.geometry}
					material={materials['Material.001']}
				/>
			</group>
		</group>
	);
}

export function RawCheese(props) {
	const { nodes, materials } = useGLTF('/food/raw/cheese.glb');
	return (
		<group {...props} dispose={null} scale={[1.3, 1, 1.3]}>
			<mesh
				geometry={nodes.Circle_1.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_2.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_3.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_4.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_5.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_6.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_7.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_8.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_9.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_10.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_11.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_12.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_13.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_14.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_15.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_16.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_17.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_18.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_19.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_20.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_21.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_22.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_23.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_24.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_25.geometry}
				material={materials['Material.001']}
			/>
			<mesh
				geometry={nodes.Circle_26.geometry}
				material={materials['Material.001']}
			/>
		</group>
	);
}

export function RawLettuce(props) {
	const { nodes, materials } = useGLTF('/food/raw/lettuce.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Sphere002.geometry}
				material={materials['Material.055']}
				position={[0, 0.42, 0]}
				scale={[0.663, 0.585, 0.663]}
			/>
		</group>
	);
}

export function RawSteak(props) {
	const { nodes, materials } = useGLTF('/food/raw/steak.glb');
	return (
		<group {...props} dispose={null}>
			<group
				position={[0, 0.32, 0]}
				rotation={[-1.23, 0, 0]}
				scale={[0.504, 0.06, 0.504]}
			>
				<mesh
					geometry={nodes.Cylinder_1.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					geometry={nodes.Cylinder_2.geometry}
					material={materials['Material.002']}
				/>
				<mesh
					geometry={nodes.Cylinder_3.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					geometry={nodes.Cylinder_4.geometry}
					material={materials['Material.004']}
				/>
			</group>
		</group>
	);
}

export function RawTomato(props) {
	const { nodes, materials } = useGLTF('/food/raw/tomato.glb');

	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.39, 0]} scale={[0.1, 0.04, 0.1]}>
				<mesh
					geometry={nodes.Cylinder001.geometry}
					material={materials['Material.060']}
				/>
				<mesh
					geometry={nodes.Cylinder001_1.geometry}
					material={materials['Material.059']}
				/>
			</group>
		</group>
	);
}

/* CUT */

export function CutCheese(props) {
	const { nodes, materials } = useGLTF('/food/cut/cheese.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cube.geometry}
				material={materials['Material.001']}
				position={[0, 0.02, 0]}
				scale={[0.6, 0.02, 0.6]}
			/>
		</group>
	);
}

export function CutLettuce(props) {
	const { nodes, materials } = useGLTF('/food/cut/lettuce.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Plane.geometry}
				material={materials['Material.055']}
				position={[0, 0.18, 0]}
				rotation={[0.11, 0.2, -0.04]}
				scale={[0.48, 0.52, 0.58]}
			/>
		</group>
	);
}

export function CutSteak(props) {
	const { nodes, materials } = useGLTF('/food/cut/steak.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cube006.geometry}
				material={materials['Material.061']}
				position={[0, 0.07, 0]}
				scale={[0.7, 0.84, 0.7]}
			/>
		</group>
	);
}

export function CutTomato(props) {
	const { nodes, materials } = useGLTF('/food/cut/tomato.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cylinder004.geometry}
				material={materials['Material.063']}
				position={[0, 0.03, 0]}
				rotation={[-Math.PI, 0.15, -Math.PI]}
				scale={[0.308, 0.02, 0.308]}
			/>
		</group>
	);
}

/* COOKED */

export function CookedSteak(props) {
	const { nodes, materials } = useGLTF('/food/cooked/steak.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cube007.geometry}
				material={materials['Material.062']}
				position={[0, 0.07, 0]}
				scale={[0.686, 0.84, 0.686]}
			/>
		</group>
	);
}

const items = [
	{
		component: <Plate />,
		name: 'plate',
		position: [-10, 4, 15],
	},
	{
		component: <RawBread />,
		name: 'raw_bread',
		position: [-9, 4, 15],
	},
	{
		component: <RawCheese />,
		name: 'raw_cheese',
		position: [-8, 4, 15],
	},
	{
		component: <RawLettuce />,
		name: 'raw_lettuce',
		position: [-7, 4, 15],
	},
	{
		component: <RawTomato />,
		name: 'raw_tomato',
		position: [-6, 4, 15],
	},
	{
		component: <RawSteak />,
		name: 'raw_steak',
		position: [-5, 4, 15],
	},
	{
		component: <CutCheese />,
		name: 'cut_cheese',
		position: [-4, 4, 15],
	},
	{
		component: <CutLettuce />,
		name: 'cut_lettuce',
		position: [-3, 4, 15],
	},

	{
		component: <CutTomato />,
		name: 'cut_tomato',
		position: [-2, 4, 15],
	},
	{
		component: <CutSteak />,
		name: 'cut_steak',
		position: [-1, 4, 15],
	},
	{
		component: <CookedSteak />,
		name: 'cooked_steak',
		position: [0, 4, 15],
	},
];

export default items;
