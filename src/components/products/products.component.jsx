import React, { useEffect, useRef } from 'react';
import ComputersCanvas from '../canvas/Computers';
import EarthCanvas from '../canvas/Earth';
import PackmoneyCanvas from '../canvas/Pack_money';
import GMBigcityCanvas from '../canvas/GM_Bigcity';
import './products.styles.scss';

const features = [
  {
    id: 1,
    title: "Algorithm using our unique theory",
    description: "Our automated trading systems leverage sophisticated financial engineering and machine learning algorithms to capture minute market movements. Our proprietary algorithms quickly identify market inefficiencies, ensuring optimal trading opportunities are never missed.",
    FeatureComponent: ComputersCanvas
  },
  {
    id: 2,
    title: "24/7 System Operation and Stability",
    description: "Our expert team continuously monitors the stability and efficiency of our systems. We swiftly respond to market changes and consistently optimize performance, providing clients with a reliable environment to focus on their trading activities.",
    FeatureComponent: EarthCanvas
  },
  {
    id: 3,
    title: "Expert Education and Consulting",
    description: "We offer educational programs led by financial engineering experts and experienced traders. Through up-to-date market trend analysis and risk management strategy consulting, we support our clients in enhancing their investment skills.",
    FeatureComponent: PackmoneyCanvas
  }
];

const FeatureSection = ({ id, title, description, FeatureComponent, reverse = false }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className={`feature-section feature-section-${id} ${reverse ? 'feature-section-reverse' : ''}`}>
      <div className="feature-content">
        <div className="feature-text">
          <h3 className="feature-title">{id}. {title}</h3>
          <p className="feature-description">{description}</p>
        </div>
        <div className={`feature-image feature-image-${id}`} ref={imageRef}>
          <FeatureComponent />
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-container">
        <h1 className="products-title">Services of MFTO</h1>
        <div className="product-showcase-wrapper">
          <div className="product-showcase">
            <GMBigcityCanvas />
          </div>
        </div>
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            {...feature}
            reverse={index === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;










// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Header from '../header/header.component';
// import './products.styles.scss';

// const Products = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mountElement = mountRef.current; // 値を一時変数に保存
//     // Three.js setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // OrbitControls setup
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;

//     // Background
//     const textureLoader = new THREE.TextureLoader();
//     const bgTexture = textureLoader.load('/path-to-your-office-background-image.jpg');
//     scene.background = bgTexture;

//     // Create product showcases
//     const createProductShowcase = (text, position) => {
//       const group = new THREE.Group();

//       // Create text
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       canvas.width = 256;
//       canvas.height = 256;
      
//       context.fillStyle = 'rgba(255, 255, 255, 0.8)';
//       context.fillRect(0, 0, canvas.width, canvas.height);
      
//       context.font = 'bold 24px Arial';
//       context.fillStyle = 'black';
//       context.textAlign = 'center';
//       context.fillText(text, canvas.width / 2, canvas.height / 2);

//       const texture = new THREE.CanvasTexture(canvas);
//       const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//       const geometry = new THREE.PlaneGeometry(2, 2);
//       const plane = new THREE.Mesh(geometry, material);
      
//       group.add(plane);

//       // Add a 3D object representing the product
//       const productGeometry = new THREE.BoxGeometry(1, 1, 1);
//       const productMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
//       const product = new THREE.Mesh(productGeometry, productMaterial);
//       product.position.set(0, -1.5, 0);
      
//       group.add(product);

//       group.position.set(...position);
//       scene.add(group);
      
//       return group;
//     };

//     const productShowcases = [
//       createProductShowcase('Automated Trading Systems', [-4, 0, 0]),
//       createProductShowcase('System Operation', [0, 0, 0]),
//       createProductShowcase('Education & Consulting', [4, 0, 0])
//     ];

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(0, 1, 0);
//     scene.add(directionalLight);

//     camera.position.z = 10;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       productShowcases.forEach(showcase => {
//         showcase.rotation.y += 0.01;
//       });
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       // mountRef.current の代わりに mountElement を使用
//       mountElement.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div ref={mountRef} style={{ width: '100%', height: 'calc(100vh - 60px)' }} />
//     </div>
//   );
// };

// export default Products;

