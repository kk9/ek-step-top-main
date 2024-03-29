"use client";
import useCategoryStore, { Category } from "@/store/store";
import { useFrame } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";

export function Disc({ category }: { category: Category }) {
  const textureLodaer = new THREE.TextureLoader();
  const image = useMemo(() => textureLodaer.load(category.imageUrl), []);
  const nameImage = useMemo(() => textureLodaer.load(category.nameImageUrl), []);
  const exploreText = useMemo(() => textureLodaer.load('./images/explore-text.png'),[]);
  const toggleMenu = useCategoryStore((state) => state.toggleMenu);
  const setMenuCategory = useCategoryStore((state) => state.setMenuCategory);
  const introDone = useCategoryStore((state) => state.introDone);

  const discRef = React.useRef<any>();
  const ringRef = React.useRef<any>();

  useFrame(({ camera }) => {
    if (!discRef.current || !ringRef.current) return;
    ringRef.current.rotation.z += 0.005;
    discRef.current.rotation.y = Math.atan2(camera.position.x - discRef.current.position.x, camera.position.z - discRef.current.position.z);
  });
  const handleClick = () => {
    toggleMenu();
    setMenuCategory(category.name);
  };

  return (
    <>
      <group position={[category.x, introDone ? 0.3 : -1, category.y]} dispose={null} ref={discRef} onClick={handleClick}>

        <mesh position={[0, 0.2, 0]} scale={0.5}>
          <circleGeometry args={[0.18, 32]} attach="geometry" />
          <meshStandardMaterial attach="material" side={THREE.DoubleSide} map={exploreText} transparent emissive={'white'} emissiveIntensity={2} emissiveMap={exploreText}/>
        </mesh>

        <mesh ref={ringRef}>
          <ringGeometry args={[0.13, 0.18, 32]} attach="geometry" />
          <meshStandardMaterial attach="material" side={THREE.DoubleSide} map={nameImage} transparent emissive={'white'} emissiveIntensity={1.2} emissiveMap={nameImage}/>
        </mesh>
        <mesh >
          <circleGeometry args={[0.13, 32]} attach="geometry" />
          <meshStandardMaterial attach="material" side={THREE.DoubleSide} map={image} emissive={'white'} emissiveIntensity={1.5} emissiveMap={image}/>
        </mesh>
      </group>
    </>
  );
}
