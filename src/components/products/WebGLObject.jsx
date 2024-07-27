import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';

function Cube() {
  return (
    <mesh position={[-4, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Torus() {
  return (
    <mesh position={[4, 0, 0]}>
      <torusGeometry args={[2, 0.5, 16, 100]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function GlowingSphere() {
  return (
    <mesh position={[0, 4, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="purple" emissive="purple" emissiveIntensity={0.5} />
    </mesh>
  );
}

const WebGLObject = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <Sparkles count={100} size={2} color="white" />
        <Cube />
        <Sphere />
        <Torus />
        <GlowingSphere />
      </Canvas>
    </div>
  );
};

export default WebGLObject;
