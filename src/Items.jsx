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

/* BURGER */

export function BurgerSteak(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger steak.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.51, 0]} scale={[0.65, 1.14, 0.65]}>
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
				<mesh
					geometry={nodes.Cube003_3.geometry}
					material={materials['Material.003']}
				/>
			</group>
		</group>
	);
}

export function BurgerLettuce(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger lettuce.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.34, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.008']}
				/>
			</group>
		</group>
	);
}

export function BurgerTomato(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger tomato.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.34, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_4.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_5.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_6.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_7.geometry}
					material={materials['Material.010']}
				/>
			</group>
		</group>
	);
}

export function BurgerCheese(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger cheese.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.33, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.007']}
				/>
			</group>
		</group>
	);
}

export function BurgerLettuceCheese(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger lettuce cheese.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.39, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_4.geometry}
					material={materials['Material.007']}
				/>
			</group>
		</group>
	);
}

export function BurgerLettuceTomato(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger lettuce tomato.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.4, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_4.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_5.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_6.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_7.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_8.geometry}
					material={materials['Material.010']}
				/>
			</group>
		</group>
	);
}

export function BurgerTomatoCheese(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger tomato cheese.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.38, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_4.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_5.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_6.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_7.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_8.geometry}
					material={materials['Material.007']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakLettuce(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger steak lettuce.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.55, 0.01]} scale={[0.65, 1.06, 0.65]}>
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
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube003_3.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					geometry={nodes.Cube003_4.geometry}
					material={materials['Material.003']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakTomato(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger steak tomato.glb');
	return (
		<group {...props} dispose={null}>
			<group
				position={[0, 0.4, 0]}
				rotation={[-Math.PI, 0.15, -Math.PI]}
				scale={[-0.18, -0.02, -0.18]}
			>
				<mesh
					geometry={nodes.Cylinder011.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cylinder011_1.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cylinder011_2.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cylinder011_3.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cylinder011_4.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cylinder011_5.geometry}
					material={materials['Material.005']}
				/>
				<mesh
					geometry={nodes.Cylinder011_6.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					geometry={nodes.Cylinder011_7.geometry}
					material={materials['Material.005']}
				/>
				<mesh
					geometry={nodes.Cylinder011_8.geometry}
					material={materials['Material.019']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakCheese(props) {
	const { nodes, materials } = useGLTF('/food/burger/burger steak cheese.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.53, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.006']}
				/>
				<mesh
					geometry={nodes.Cube001_4.geometry}
					material={materials['Material.007']}
				/>
			</group>
		</group>
	);
}

export function BurgerLettuceTomatoCheese(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger lettuce tomato cheese.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.43, 0.02]} scale={[0.64, 0.92, 0.64]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube001_3.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_4.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_5.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_6.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_7.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_8.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube001_9.geometry}
					material={materials['Material.007']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakLettuceTomato(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger steak lettuce tomato.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.59, 0.01]} scale={[0.65, 0.98, 0.65]}>
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
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube003_3.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					geometry={nodes.Cube003_4.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					geometry={nodes.Cube003_5.geometry}
					material={materials['Material.014']}
				/>
				<mesh
					geometry={nodes.Cube003_6.geometry}
					material={materials['Material.014']}
				/>
				<mesh
					geometry={nodes.Cube003_7.geometry}
					material={materials['Material.014']}
				/>
				<mesh
					geometry={nodes.Cube003_8.geometry}
					material={materials['Material.014']}
				/>
				<mesh
					geometry={nodes.Cube003_9.geometry}
					material={materials['Material.014']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakTomatoCheese(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger steak tomato cheese.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.3, 0.01]} scale={[0.65, 0.86, 0.65]}>
				<mesh
					geometry={nodes.Cube002.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					geometry={nodes.Cube002_1.geometry}
					material={materials['Material.005']}
				/>
				<mesh
					geometry={nodes.Cube002_2.geometry}
					material={materials['Material.005']}
				/>
				<mesh
					geometry={nodes.Cube002_3.geometry}
					material={materials['Material.019']}
				/>
				<mesh
					geometry={nodes.Cube002_4.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube002_5.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube002_6.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube002_7.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube002_8.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube002_9.geometry}
					material={materials['Material.002']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakLettuceCheese(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger steak lettuce cheese.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.2, 0]} scale={[0.65, 0.69, 0.65]}>
				<mesh
					geometry={nodes.Circle003.geometry}
					material={materials['Material.072']}
				/>
				<mesh
					geometry={nodes.Circle003_1.geometry}
					material={materials['Material.073']}
				/>
				<mesh
					geometry={nodes.Circle003_2.geometry}
					material={materials['Material.074']}
				/>
				<mesh
					geometry={nodes.Circle003_3.geometry}
					material={materials['Material.073']}
				/>
				<mesh
					geometry={nodes.Circle003_4.geometry}
					material={materials['Material.076']}
				/>
				<mesh
					geometry={nodes.Circle003_5.geometry}
					material={materials['Material.077']}
				/>
			</group>
		</group>
	);
}

export function BurgerSteakLettuceTomatoCheese(props) {
	const { nodes, materials } = useGLTF(
		'/food/burger/burger steak lettuce tomato cheese.glb'
	);
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.88, 0.01]} scale={[1, 1.44, 1]}>
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
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube003_3.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					geometry={nodes.Cube003_4.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					geometry={nodes.Cube003_5.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube003_6.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube003_7.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube003_8.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube003_9.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube003_10.geometry}
					material={materials['Material.002']}
				/>
			</group>
		</group>
	);
}

const items = [
	{
		component: <Plate />,
		name: 'plate',
		position: [-35, 4, 30],
	},
	{
		component: <RawBread />,
		name: 'raw_bread',
		position: [-30, 4, 30],
	},
	{
		component: <RawCheese />,
		name: 'raw_cheese',
		position: [-25, 4, 30],
	},
	{
		component: <RawLettuce />,
		name: 'raw_lettuce',
		position: [-20, 4, 30],
	},
	{
		component: <RawTomato />,
		name: 'raw_tomato',
		position: [-15, 4, 30],
	},
	{
		component: <RawSteak />,
		name: 'raw_steak',
		position: [-10, 4, 30],
	},
	{
		component: <CutCheese />,
		name: 'cut_cheese',
		position: [-5, 4, 30],
	},
	{
		component: <CutLettuce />,
		name: 'cut_lettuce',
		position: [0, 4, 30],
	},

	{
		component: <CutTomato />,
		name: 'cut_tomato',
		position: [5, 4, 30],
	},
	{
		component: <CutSteak />,
		name: 'cut_steak',
		position: [10, 4, 30],
	},
	{
		component: <CookedSteak />,
		name: 'cooked_steak',
		position: [15, 4, 30],
	},
	{
		component: <BurgerCheese />,
		name: 'burger_cheese',
		position: [-35, 4, 40],
	},
	{
		component: <BurgerLettuce />,
		name: 'burger_lettuce',
		position: [-30, 4, 40],
	},
	{
		component: <BurgerLettuceTomato />,
		name: 'burger_lettuce_tomato',
		position: [-25, 4, 40],
	},
	{
		component: <BurgerSteak />,
		name: 'burger_steak',
		position: [-20, 4, 40],
	},
	{
		component: <BurgerTomato />,
		name: 'burger_tomato',
		position: [-10, 4, 40],
	},
	{
		component: <BurgerSteakTomato />,
		name: 'burger_steak_tomato',
		position: [0, 4, 40],
	},
	{
		component: <BurgerSteakLettuce />,
		name: 'burger_steak_lettuce',
		position: [5, 4, 40],
	},
	{
		component: <BurgerSteakCheese />,
		name: 'burger_steak_cheese',
		position: [10, 4, 40],
	},
	{
		component: <BurgerTomatoCheese />,
		name: 'burger_tomato_cheese',
		position: [20, 4, 40],
	},
	{
		component: <BurgerLettuceCheese />,
		name: 'burger_lettuce_cheese',
		position: [25, 4, 40],
	},
	{
		component: <BurgerSteakLettuceTomato />,
		name: 'burger_steak_lettuce_tomato',
		position: [30, 4, 40],
	},
	{
		component: <BurgerSteakLettuceCheese />,
		name: 'burger_steak_lettuce_cheese',
		position: [-25, 4, 50],
	},
	{
		component: <BurgerSteakTomatoCheese />,
		name: 'burger_steak_tomato_cheese',
		position: [-15, 4, 50],
	},
	{
		component: <BurgerSteakLettuceTomatoCheese />,
		name: 'burger_steak_lettuce_tomato_cheese',
		position: [-10, 4, 50],
	},
	{
		component: <BurgerLettuceTomatoCheese />,
		name: 'burger_lettuce_tomato_cheese',
		position: [-5, 4, 50],
	},
];

const recipes = [
	{ component: ['raw_bread', 'cut_cheese'], result: 11 },
	{ component: ['raw_bread', 'cut_lettuce'], result: 12 },
	{ component: ['raw_bread', 'cooked_steak'], result: 14 },
	{ component: ['raw_bread', 'cut_tomato'], result: 15 },

	{ component: ['burger_lettuce', 'cut_tomato'], result: 13 },
	{ component: ['burger_tomato', 'cut_lettuce'], result: 13 },
	{ component: ['burger_tomato', 'cooked_steak'], result: 16 },
	{ component: ['burger_steak', 'cut_tomato'], result: 16 },
	{ component: ['burger_lettuce', 'cooked_steak'], result: 17 },
	{ component: ['burger_steak', 'cut_lettuce'], result: 17 },
	{ component: ['burger_cheese', 'cooked_steak'], result: 18 },
	{ component: ['burger_steak', 'cut_cheese'], result: 18 },
	{ component: ['burger_tomato', 'cut_cheese'], result: 19 },
	{ component: ['burger_cheese', 'cut_tomato'], result: 19 },
	{ component: ['burger_lettuce', 'cut_cheese'], result: 20 },
	{ component: ['burger_cheese', 'cut_lettuce'], result: 20 },

	{ component: ['burger_steak_tomato', 'cut_lettuce'], result: 21 },
	{ component: ['burger_steak_lettuce', 'cut_tomato'], result: 21 },
	{ component: ['burger_lettuce_tomato', 'cooked_steak'], result: 21 },
	{ component: ['burger_steak_lettuce', 'cut_cheese'], result: 22 },
	{ component: ['burger_steak_cheese', 'cut_lettuce'], result: 22 },
	{ component: ['burger_cheese_lettuce', 'cooked_steak'], result: 22 },
	{ component: ['burger_steak_tomato', 'cut_cheese'], result: 23 },
	{ component: ['burger_steak_cheese', 'cut_tomato'], result: 23 },
	{ component: ['burger_cheese_tomato', 'cooked_steak'], result: 23 },
	{ component: ['burger_lettuce_tomato', 'cut_cheese'], result: 25 },
	{ component: ['burger_lettuce_cheese', 'cut_tomato'], result: 25 },
	{ component: ['burger_tomato_cheese', 'cut_lettuce'], result: 25 },

	{
		component: ['burger_steak_lettuce_tomato', 'cut_cheese'],
		result: 24,
	},
	{
		component: ['burger_steak_lettuce_cheese', 'cut_tomato'],
		result: 24,
	},
	{
		component: ['burger_steak_tomato_cheese', 'cut_lettuce'],
		result: 24,
	},
	{
		component: ['burger_cheese_lettuce_tomato', 'cooked_steak'],
		result: 24,
	},
];

export { items, recipes };
