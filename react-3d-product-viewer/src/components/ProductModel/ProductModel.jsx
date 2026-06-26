import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ProductModel = ({ id, color }) => {
  const meshRef = useRef();

  // Auto-rotate the model slightly
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  // Render high-quality procedural meshes for demo and fallback
  if (id === 'cyber-helmet') {
    return (
      <group ref={meshRef}>
        {/* Main helmet base */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        {/* Glowing visor */}
        <mesh position={[0, 0.2, 0.8]} castShadow>
          <boxGeometry args={[1.5, 0.3, 0.6]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Helmet ear guards / vents */}
        <mesh position={[1.1, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[-1.1, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Cyber neck ring */}
        <mesh position={[0, -1, 0]}>
          <torusGeometry args={[0.8, 0.15, 16, 100]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.4} />
        </mesh>
      </group>
    );
  }

  if (id === 'torus-knot') {
    return (
      <group ref={meshRef}>
        {/* Core glowing sphere */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
        {/* Intersecting Torus Knot */}
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[1, 0.32, 120, 16]} />
          <meshStandardMaterial
            color="#475569"
            metalness={0.95}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.1}
            clearcoat={1.0}
          />
        </mesh>
      </group>
    );
  }

  if (id === 'core-sphere') {
    return (
      <group ref={meshRef}>
        {/* Outer refractive crystal sphere */}
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial
            color={color}
            transmission={0.8}
            thickness={1.5}
            roughness={0.15}
            metalness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            ior={1.5}
          />
        </mesh>
        {/* Inner floating energy core */}
        <mesh>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    );
  }

  return null;
};

export default ProductModel;
