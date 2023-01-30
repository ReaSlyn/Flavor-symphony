export default function Lights() {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 20, 30]} intensity={2} />
		</>
	);
}
