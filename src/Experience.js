import {
  Center,
  Float,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { useState } from "react";

export default function Experience() {
  const donuts = useRef([]);
  const [torusGeometry, setTorusGeomertry] = useState();
  const [matcap] = useMatcapTexture("E6BF3C_5A4719_977726_FCFC82", 256);
  const array = [Array[100]];
  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <torusGeometry ref={setTorusGeomertry} args={[1, 0.6, 16, 32]} />
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Center>
          <Text3D
            font="./fonts/Shiromeda_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.002}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={0.5}
          >
            ፍሬአብ መስፍን
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </Float>

      <Float speed={0.5}>
        {[...Array(100)].map((value, index) => (
          <mesh
            ref={(element) => (donuts.current[index] = element)}
            key={index}
            geometry={torusGeometry}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshMatcapMaterial matcap={matcap} />
          </mesh>
        ))}
      </Float>
    </>
  );
}
