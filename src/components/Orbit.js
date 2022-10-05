import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Orbit(props) {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += delta * 0.5))

    return (
        <object3D ref={ref} {...props}>
            {props.children}
        </object3D>
    )
}
