import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Packmoney = () => {
  const packmoney = useGLTF("./pack_money/scene.gltf");

  return (
    <primitive object={packmoney.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const PackmoneyCanvas = () => {
  return (
    <Canvas
      // shadows // シャドウ（影）を有効にする
      frameloop='demand' // 'demand'に設定することで、必要に応じてフレームを更新する
      dpr={[1, 2]} // ディスプレイのピクセル密度を1から2の範囲に設定する（高解像度ディスプレイ対応）
      gl={{ preserveDrawingBuffer: true }} // 描画バッファを保持する（スクリーンショットなどのため）
      camera={{
        fov: 45, // カメラの視野角を45度に設定
        near: 0.1, // カメラの近クリッピング面を0.1に設定
        far: 200, // カメラの遠クリッピング面を200に設定
        position: [-4, 3, 6], // カメラの初期位置を設定（x, y, z）
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* CanvasLoaderコンポーネントをフォールバックとして設定。Packmoneyが読み込まれるまで表示する */}
        <OrbitControls
          autoRotate // 自動回転を有効にする
          enableZoom={false} // ズームを無効にする
          maxPolarAngle={Math.PI / 2} // カメラの最大ポーラー角度を設定（カメラの上下移動範囲を制限）
          minPolarAngle={Math.PI / 2} // カメラの最小ポーラー角度を設定（カメラの上下移動範囲を制限）
        />
        <Packmoney />
        {/* Packmoneyコンポーネントをシーンに追加する */}

        <Preload all />
        {/* すべてのアセットを事前読み込みする */}
      </Suspense>
    </Canvas>

  );
};
export default PackmoneyCanvas;
