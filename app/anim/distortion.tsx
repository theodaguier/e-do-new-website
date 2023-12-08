// // DistortionEffect.tsx
// import React, { useRef, useEffect, useMemo } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// interface DistortionEffectProps {
//   imageUrl: string;
//   isHovered: boolean;
// }

// const DistortionEffect: React.FC<DistortionEffectProps> = ({
//   imageUrl,
//   isHovered,
// }) => {
//   const mesh = useRef<THREE.Mesh>();
//   const { size, viewport, gl } = useThree();
//   const aspect = size.width / viewport.width;

//   const texture = useMemo(
//     () => new THREE.TextureLoader().load(imageUrl),
//     [imageUrl]
//   );

//   const material = useMemo(
//     () =>
//       new THREE.ShaderMaterial({
//         uniforms: {
//           uTexture: { value: texture },
//           uTime: { value: 0.0 },
//           uIsHovered: { value: isHovered },
//         },
//         vertexShader: `
//           varying vec2 vUv;
//           void main() {
//             vUv = uv;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }
//         `,
//         fragmentShader: `
//           varying vec2 vUv;
//           uniform sampler2D uTexture;
//           uniform float uTime;
//           uniform bool uIsHovered;

//           void main() {
//             vec2 distortedUV = vUv;
//             distortedUV -= 0.5;
//             distortedUV *= 1.0 + 0.1 * sin(10.0 * length(distortedUV));
//             distortedUV += 0.5;

//             gl_FragColor = texture2D(uTexture, uIsHovered ? distortedUV : vUv);
//           }
//         `,
//       }),
//     [texture, isHovered]
//   );

//   useEffect(() => {
//     if (isHovered) {
//       material.uniforms.uTime.value = 0.0;
//       const animate = () => {
//         material.uniforms.uTime.value += 0.05;
//         requestAnimationFrame(animate);
//       };
//       animate();
//     }
//   }, [isHovered, material]);

//   useFrame(() => {
//     if (mesh.current) {
//       material.uniforms.uTime.value += 0.05;
//     }
//   });

//   return (
//     <mesh ref={mesh} position={[0, 0, 0]} scale={[aspect, 1, 1]}>
//       <planeGeometry args={[1, 1 * aspect]} />
//       <primitive object={material} />
//     </mesh>
//   );
// };

// export default DistortionEffect;
