"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function EngineeringCore({ compact = false }: { compact?: boolean }) {
  const assembly = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const particles = useRef<THREE.Points>(null);
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(270);
    for (let index = 0; index < positions.length; index += 3) {
      const radius = 2.3 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    if (assembly.current) {
      assembly.current.rotation.y += delta * 0.08;
      assembly.current.rotation.x = THREE.MathUtils.lerp(assembly.current.rotation.x, pointerY * 0.13, 0.035);
      assembly.current.rotation.z = THREE.MathUtils.lerp(assembly.current.rotation.z, -pointerX * 0.08, 0.035);
    }
    if (inner.current) inner.current.rotation.z -= delta * 0.28;
    if (particles.current) particles.current.rotation.y -= delta * 0.025;
  });

  const ringColor = "#00d4ff";
  const scale = compact ? 0.82 : 1;

  return (
    <group ref={assembly} scale={scale} rotation={[0.2, -0.35, -0.12]}>
      <group ref={inner}>
        <mesh>
          <icosahedronGeometry args={[0.72, 2]} />
          <meshStandardMaterial color="#07171a" metalness={0.95} roughness={0.2} emissive="#002d36" emissiveIntensity={1.2} />
        </mesh>
        <mesh scale={1.04}>
          <icosahedronGeometry args={[0.72, 1]} />
          <meshBasicMaterial color={ringColor} wireframe transparent opacity={0.45} />
        </mesh>
        {Array.from({ length: 8 }).map((_, index) => (
          <mesh key={index} rotation={[0, 0, (index * Math.PI) / 4]} position={[0, 0, 0]}>
            <boxGeometry args={[2.55, 0.025, 0.055]} />
            <meshStandardMaterial color="#32454b" metalness={1} roughness={0.16} emissive="#003b46" emissiveIntensity={0.55} />
          </mesh>
        ))}
      </group>

      {[1.3, 1.72, 2.15].map((radius, index) => (
        <group key={radius} rotation={[index * 0.48, index * 0.72, index * 0.24]}>
          <mesh>
            <torusGeometry args={[radius, index === 1 ? 0.018 : 0.028, 8, 160]} />
            <meshBasicMaterial color={index === 1 ? "#ffffff" : ringColor} transparent opacity={index === 1 ? 0.24 : 0.62 - index * 0.12} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, 0.012, 8, 160]} />
            <meshBasicMaterial color={ringColor} transparent opacity={0.2} />
          </mesh>
        </group>
      ))}

      {Array.from({ length: 6 }).map((_, index) => {
        const angle = (index / 6) * Math.PI * 2;
        return (
          <mesh key={index} position={[Math.cos(angle) * 2.15, Math.sin(angle) * 2.15, 0]} rotation={[0.4, angle, angle]}>
            <octahedronGeometry args={[index % 2 ? 0.13 : 0.18, 0]} />
            <meshStandardMaterial color={index % 2 ? "#cad1d3" : ringColor} metalness={0.9} roughness={0.15} emissive={ringColor} emissiveIntensity={index % 2 ? 0.2 : 1.4} />
          </mesh>
        );
      })}

      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={ringColor} size={0.025} transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  );
}

export function EngineeringScene({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`engineering-canvas ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, compact ? 7.2 : 6.3], fov: compact ? 42 : 48 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 3, 5]} intensity={2.5} color="#c9f7ff" />
        <pointLight position={[-3, -1, 3]} intensity={35} color="#00d4ff" distance={9} />
        <EngineeringCore compact={compact} />
      </Canvas>
    </div>
  );
}
