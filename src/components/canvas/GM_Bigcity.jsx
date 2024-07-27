import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "../Loader";

const GMBigcity = () => {
  const cityRef = useRef();
  const gltf = useLoader(GLTFLoader, "./gm_bigcity/scene.gltf");

  useFrame((state) => {
    if (cityRef.current) {
      cityRef.current.rotation.y += 0.001; // ゆっくりと回転
    }
  });

  return (
    <primitive ref={cityRef} object={gltf.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const GMBigcityCanvas = () => {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      // backgroundColor: '#050520'
    }}>
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={true} enablePan={true} />
          <GMBigcity />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GMBigcityCanvas;