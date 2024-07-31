import React, { Suspense, useEffect, useState } from "react"; // ReactおよびSuspense, useEffect, useStateフックをインポート
import { Canvas } from "@react-three/fiber"; // three.jsのラッパーであるCanvasコンポーネントをインポート
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // dreiから便利なコンポーネントをインポート

import CanvasLoader from "../Loader"; // ローダーコンポーネントをインポート

const Computers = ({ isMobile }) => { // Computersコンポーネントを定義し、isMobileプロップを受け取る
  const computer = useGLTF("./desktop_pc/scene.gltf"); // GLTFファイルを読み込む

  return (
    <mesh> {/* メッシュオブジェクトを返す */}
      <hemisphereLight intensity={0.15} groundColor='black' /> {/* 半球ライトを追加 */}
      <spotLight
        position={[-20, 50, 10]} // スポットライトの位置
        angle={0.12} // スポットライトの角度
        penumbra={1} // スポットライトのペナンブラ
        intensity={1} // スポットライトの強度
        castShadow // 影をキャストする
        shadow-mapSize={1024} // 影の解像度
      />
      <pointLight intensity={1} /> {/* ポイントライトを追加 */}
      <primitive
        object={computer.scene} // 読み込んだGLTFファイルのシーンオブジェクト
        scale={isMobile ? 0.7 : 0.75} // モバイルデバイスのサイズに応じてスケールを変更
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // モバイルデバイスの位置に応じて位置を変更
        rotation={[-0.01, -0.2, -0.1]} // オブジェクトの回転
      />
    </mesh>
  );
};

const ComputersCanvas = () => { // ComputersCanvasコンポーネントを定義
  const [isMobile, setIsMobile] = useState(false); // isMobileという状態を定義し、初期値をfalseに設定

  useEffect(() => { // コンポーネントがマウントされたときに実行されるuseEffectフック
    // 画面サイズの変更を監視するリスナーを追加
    const mediaQuery = window.matchMedia("(max-width: 450px)");

    // isMobile状態の初期値を設定
    setIsMobile(mediaQuery.matches);

    // メディアクエリの変更を処理するコールバック関数を定義
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // メディアクエリの変更を監視するリスナーを追加
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // コンポーネントがアンマウントされたときにリスナーを削除
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // 空の依存配列で、初回レンダリング時にのみ実行

  return (
    <Canvas
      frameloop='demand' // フレームループを必要なときにのみ実行
      shadows // シャドウを有効にする
      dpr={[1, 2]} // デバイスピクセル比を設定
      camera={{ position: [20, 3, 7], fov: 25 }} // カメラの位置と視野を設定
      gl={{ preserveDrawingBuffer: true }} // 描画バッファを保持する
    >
      <Suspense fallback={<CanvasLoader />}> {/* 非同期コンポーネントを待つ間にローダーを表示 */}
        <OrbitControls
          enableZoom={true} // ズームを有効にする
          maxPolarAngle={Math.PI} // 垂直回転の最大角度を設定
          minPolarAngle={0} // 垂直回転の最小角度を設定
        />
        <Computers isMobile={isMobile} /> {/* Computersコンポーネントをレンダリングし、isMobileプロップを渡す */}
      </Suspense>

      <Preload all /> {/* 全てのリソースをプリロード */}
    </Canvas>
  );
};

export default ComputersCanvas; // ComputersCanvasコンポーネントをエクスポート
