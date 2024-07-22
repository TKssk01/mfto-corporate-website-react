import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import * as THREE from 'three';

Modal.setAppElement('#root');

const ThreeDModal = ({ isOpen, onRequestClose }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      // クリーンアップ関数内で参照を保持する
      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, [isOpen]);

  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={{ content: { inset: 'auto', padding: 0 } }}>
      <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
    </Modal>,
    document.body
  );
};

export default ThreeDModal;
