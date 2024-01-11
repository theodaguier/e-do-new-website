"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/three/cyclorama.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Matériau}
        position={[0, 0, 1]}
        rotation={[0.2, 500, 0]}
        scale={[1.4, 0.025, 1.15]}
      />
    </group>
  );
}

useGLTF.preload("/assets/three/cyclorama.glb");
