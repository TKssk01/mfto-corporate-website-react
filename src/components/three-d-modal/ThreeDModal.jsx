import React, { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import * as THREE from 'three';

Modal.setAppElement('#root');

const ThreeDModal = ({ isOpen, onRequestClose }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);

  const handleResize = useCallback(() => {
    const currentCamera = cameraRef.current;
    const currentRenderer = rendererRef.current;
    const currentMount = mountRef.current;

    if (currentCamera && currentRenderer && currentMount) {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      currentCamera.aspect = width / height;
      currentCamera.updateProjectionMatrix();
      currentRenderer.setSize(width, height);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer();
    rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(rendererRef.current.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cubeRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(cubeRef.current);

    cameraRef.current.position.z = 5;

    // Animation
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (currentMount && rendererRef.current) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      if (cubeRef.current) {
        cubeRef.current.geometry.dispose();
        cubeRef.current.material.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      // Reset refs
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      cubeRef.current = null;
    };
  }, [isOpen, handleResize]);

  return createPortal(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: { inset: '40px', padding: 0, backgroundColor: 'transparent', border: 'none' }
      }}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </Modal>,
    document.body
  );
};

export default ThreeDModal;