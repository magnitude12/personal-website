import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Astro = ({ isMobile }) => {
  const astro = useGLTF("./astro/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.50} groundColor='black' />
      <spotLight
        position={[-10, 20, 5]}
        angle={.12}
        penumbra={1}
        intensity={1800}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={astro.scene}
        scale={isMobile ? 1.65 : 1.65}
        position={isMobile ? [0, -1.5, -0.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.5, -0.1]}
      />
    </mesh>
  );
};

const AstroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Astro isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AstroCanvas;