import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Cloud = ({ count, color, size, spread, speed }) => {
    const ref = useRef();
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * spread[0];
            arr[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
            arr[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
        }
        return arr;
    }, [count, spread]);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        ref.current.rotation.y = t * speed;
        ref.current.rotation.x = Math.sin(t * 0.12) * 0.06;
        const { x, y } = state.pointer;
        ref.current.position.x += (x * 0.7 - ref.current.position.x) * 0.03;
        ref.current.position.y += (y * 0.45 - ref.current.position.y) * 0.03;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={size}
                color={color}
                transparent
                opacity={0.8}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export const HeroParticles = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let webgl = false;
        try {
            const c = document.createElement("canvas");
            webgl = !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
        } catch {
            webgl = false;
        }
        setEnabled(!reduced && webgl);
    }, []);

    if (!enabled) return null;

    return (
        <div className="pointer-events-none absolute inset-0 z-[6]" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
            >
                <Cloud count={220} color="#E9C96A" size={0.055} spread={[16, 9, 6]} speed={0.03} />
                <Cloud count={120} color="#7FBF8E" size={0.04} spread={[18, 10, 7]} speed={-0.02} />
            </Canvas>
        </div>
    );
};
