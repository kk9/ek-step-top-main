import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import * as THREE from "three";

interface MapProps {
  scale: number;
  callback: (e: boolean) => void;
}

export function Map(props: MapProps) {
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF("/models/map.gltf");
  applyProps(materials.wall, { color: "#D2B595" });
  applyProps(materials.water, { color: "#FFE5B4" });
  useEffect(() => {
    if (nodes && materials) props.callback(true);
  }, [nodes, materials]);

  return (
    <>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.1, -6]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#A1A096" side={THREE.DoubleSide} />
      </mesh>
      <group {...props} dispose={null} position={[10, 0, -10]}>
        <mesh geometry={nodes.ASPHALT029.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING044.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER047.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT049.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRAVEL012.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT047.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT028.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT055.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT030.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING045.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT048.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT050.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER048.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT029.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT056.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRAVEL013.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING046.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT032.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING047.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER050.geometry} material={materials.water} />
        <mesh geometry={nodes.GRAVEL015.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT050.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT031.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT058.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT037.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING052.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER055.geometry} material={materials.water} />
        <mesh geometry={nodes.WALL_DEFAULT055.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT055.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRASS006.geometry} material={materials.wall} />
        <mesh geometry={nodes.HEDGE002.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT036.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT063.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT038.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING053.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT056.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT056.geometry} material={materials.wall} />
        <mesh geometry={nodes.HEDGE002_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT037.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT064.geometry} material={materials.wall} />
        <mesh geometry={nodes.SAND031.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT039.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER057.geometry} material={materials.water} />
        <mesh geometry={nodes.ROAD_MARKING054.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT057.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT057.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT038.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT065.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRASS007.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT040.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING055.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER058.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT058.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT058.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT039.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT066.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT044.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING059.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT062.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT062.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT043.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT070.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER062.geometry} material={materials.water} />
        <mesh geometry={nodes.ASPHALT045.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING060.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER063.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT063.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT063.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRAVEL018.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT044.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT071.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT046.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER064.geometry} material={materials.water} />
        <mesh geometry={nodes.ROAD_MARKING061.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT064.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT064.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT045.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT072.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT047.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING062.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER065.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT065.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT065.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRAVEL019.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT046.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT073.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT048.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING063.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER066.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT066.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT066.geometry} material={materials.wall} />
        <mesh geometry={nodes.GRAVEL020.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT047.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT074.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT052.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT070.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT070.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER070.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT051.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT078.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT053.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING068.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER071.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT071.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT071.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT052.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT079.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT054.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING069.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER072.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT072.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT072.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT053.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT080.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT055.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING070.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT073.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT073.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER073.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT054.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT081.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT059.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING074.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER076.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT077.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT077.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT058.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT085.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT060.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING075.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT078.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT078.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER077.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT059.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT086.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT061.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING076.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT079.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT079.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER078.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT060.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT087.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT062.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING077.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER079.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT080.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT080.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT061.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT088.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT064.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING079.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT082.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT082.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER081.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT063.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT090.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT067.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING082.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT085.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT085.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER084.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT066.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT093.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT068.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER085.geometry} material={materials.water} />
        <mesh geometry={nodes.ROAD_MARKING083.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT086.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT086.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT067.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT094.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT069.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING084.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT087.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT087.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT068.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT095.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER086.geometry} material={materials.water} />
        <mesh geometry={nodes.ASPHALT072.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING087.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER089.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT090.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT090.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT071.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT098.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT073.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING088.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT091.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT091.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT072.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT099.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER090.geometry} material={materials.water} />
        <mesh geometry={nodes.ASPHALT074.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING089.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT092.geometry} material={materials.wall} />
        <mesh geometry={nodes.FENCE_DEFAULT092.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER091.geometry} material={materials.water} />
        <mesh geometry={nodes.BUILDING_DEFAULT073.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT100.geometry} material={materials.wall} />
        <mesh geometry={nodes.ASPHALT075.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROAD_MARKING090.geometry} material={materials.wall} />
        <mesh geometry={nodes.WATER092.geometry} material={materials.water} />
        <mesh geometry={nodes.FENCE_DEFAULT093.geometry} material={materials.wall} />
        <mesh geometry={nodes.WALL_DEFAULT093.geometry} material={materials.wall} />
        <mesh geometry={nodes.BUILDING_DEFAULT074.geometry} material={materials.wall} />
        <mesh geometry={nodes.ROOF_DEFAULT101.geometry} material={materials.wall} />
      </group>
    </>
  );
}

useGLTF.preload("models/map.gltf");
