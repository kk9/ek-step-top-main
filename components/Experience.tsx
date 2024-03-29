"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Map } from "@/components/models/Map";
import { Disc } from "@/components/models/Disc";
import { Environment, MapControls } from "@react-three/drei";
import ProgressBar from "./ui/ProgressBar";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import useCategoryStore from "@/store/store";
import * as THREE from "three";
import Details from "./ui/Details";
import About from "./ui/About";
import Overlay from "./ui/Overlay";

const Experience = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const categories = useCategoryStore((state) => state.categories);
  const current = useCategoryStore((state) => state.current);
  const currCategory = categories.find((category) => category.name === current);

  const menuOpen = useCategoryStore((state) => state.menuOpen);
  const menuCategory = useCategoryStore((state) => state.menuCategory);

  return (
    <>
      <Canvas
        className="w-full h-full absolute top-0 left-0 bg-[#BB9877]"
        camera={{ far: 600, position: [2, 2, 2], zoom: 4 }}
      >
        <Environment preset="city" />

         {/* @ts-ignore */}
        <Controls target={new THREE.Vector3(currCategory?.x + 1.5 , 2, currCategory?.y + 1.5)} />

        <Map scale={0.0025} callback={setModelLoaded} />
        {categories.map((category, index) => (
          <Disc key={index} category={category} />
        ))}

        <EffectComposer>
          <Bloom luminanceThreshold={0.7} intensity={0.23} height={300} />
          <Vignette eskil={false} offset={0.1} darkness={0.8} />
        </EffectComposer>
      </Canvas>
      <ProgressBar />
      {categories.map((category, index) => (
        <Details key={index} category={category} />
      ))}
      {menuOpen && menuCategory === "About" && <About />}
      {modelLoaded && <Overlay />}
    </>
  );
};

export default Experience;

const Controls = ({ target }: { target: THREE.Vector3 }) => {
  const controlsRef = useRef<any>(null);

  const [moving, setMoving] = useState(false);
  const lookAt = new THREE.Vector3();

  useFrame(({ camera }) => {
    if (moving) {
      camera.position.lerp(target, 0.025);
      controlsRef.current.target.lerp(target, 0.025);
    }
  });

  useEffect(() => {
    lookAt.copy(target);
    lookAt.y = 3;
    window.addEventListener("click", () => setMoving(false));
    setMoving(true);
  }, [target]);
  const { camera } = useThree();
  useEffect(() => {
    var minPan = new THREE.Vector3(-10, -5, -10);
    var maxPan = new THREE.Vector3(13, 20, 14);
    var _v = new THREE.Vector3();
    controlsRef.current.addEventListener("change", function() {
      _v.copy(controlsRef.current.target);
      controlsRef.current.target.clamp(minPan, maxPan);
      _v.sub(controlsRef.current.target);
      camera.position.sub(_v);
    });
  }, []);

  return <MapControls makeDefault ref={controlsRef} enableRotate={true} enableZoom={true} minDistance={2} />;
};
