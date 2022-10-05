import "./App.css"
import { Canvas } from "@react-three/fiber"
import Orbit from "./components/Orbit"
import Sphere from "./components/Sphere"

export default function App() {
    return (
        <div id="canvas-container">
            <Canvas camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 50, 0] }}>
                <pointLight color={0xffffff} intensity={3} />
                <Orbit position={[0, 0, 0]}>
                    <Sphere position={[0, 0, 0]} scale={[5, 5, 5]} isSun={true} />
                    <Orbit position={[10, 0, 0]}>
                        <Sphere scale={[1, 1, 1]} isEarth={true} />
                        <Orbit position={[2, 0, 0]}>
                            <Sphere scale={[0.5, 0.5, 0.5]} isMoon={true} />
                        </Orbit>
                    </Orbit>
                </Orbit>
            </Canvas>
        </div>
    )
}
