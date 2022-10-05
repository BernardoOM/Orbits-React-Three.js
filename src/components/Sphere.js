import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Sphere({ isSun = false, isEarth = false, isMoon = false, ...props }) {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += delta * 0.5))
    return (
        <mesh ref={ref} {...props}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshPhongMaterial
                color={`${isEarth ? "#2233ff" : isMoon ? "#888888" : ""}`}
                emissive={`${isSun ? "#ffff00" : isEarth ? "#112244" : isMoon ? "#222222" : ""}`}
            />
        </mesh>
    )
}
