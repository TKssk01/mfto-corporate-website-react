import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "../Loader";

// GMBigcityコンポーネント: GLTFモデルをロードして回転させる
const GMBigcity = () => {
  const cityRef = useRef(); // cityRefはGLTFモデルへの参照を保持
  const gltf = useLoader(GLTFLoader, "./gm_bigcity/scene.gltf"); // GLTFモデルをロード

  // useFrameフック: 毎フレーム実行される処理
  useFrame((state) => {
    if (cityRef.current) {
      cityRef.current.rotation.y += 0.001; // ゆっくりとY軸回転
    }
  });

  return (
    // primitiveコンポーネント: GLTFモデルをシーンに追加
    <primitive ref={cityRef} object={gltf.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// GMBigcityCanvasコンポーネント: キャンバスをセットアップし、GMBigcityコンポーネントを表示
const GMBigcityCanvas = () => {
  return (
    <div style={{
      width: '100%', // 幅を100%に設定
      height: '500px', // 高さを500pxに設定
      // backgroundColor: '#050520' // 背景色を設定（コメントアウト）
    }}>
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        {/* Canvasコンポーネント: Three.jsのレンダリングコンテキストを作成 */}
        <Suspense fallback={<CanvasLoader />}>
          {/* Suspenseコンポーネント: 非同期コンポーネントのフォールバックを設定 */}
          <ambientLight intensity={0.5} /> {/* 環境光を追加し、シーン全体を照らす */}
          <pointLight position={[10, 10, 10]} intensity={1} /> {/* 点光源を追加し、特定の位置からシーンを照らす */}
          <OrbitControls enableZoom={true} enablePan={true} /> {/* OrbitControlsコンポーネント: ズームとパンを有効に */}
          <GMBigcity /> {/* GMBigcityコンポーネントをシーンに追加 */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GMBigcityCanvas; // GMBigcityCanvasコンポーネントをエクスポート
