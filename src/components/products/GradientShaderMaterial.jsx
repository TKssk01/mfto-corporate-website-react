import * as THREE from 'three';
import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';

class GradientShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uScroll: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uScroll;
        varying vec2 vUv;
        void main() {
          vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 1.0, 1.0), vUv.y + uScroll);
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
  }
}

extend({ GradientShaderMaterial });

export default function GradientBackground() {
  const material = useRef();

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.uScroll.value = window.scrollY / window.innerHeight;
    }
  });

  return (
    <mesh scale={[window.innerWidth, window.innerHeight, 1]}>
      <planeGeometry args={[1, 1]} />
      <gradientShaderMaterial ref={material} />
    </mesh>
  );
}
