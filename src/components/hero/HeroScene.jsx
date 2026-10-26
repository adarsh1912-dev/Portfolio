import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MathUtils, PMREMGenerator } from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const ACCENT = "#C9F24D";
const METAL = "#B9B5AA";
const WARM = "#EDEAE1";

function createParticlePositions(count) {
  const positions = new Float32Array(count * 3);
  let seed = 27;

  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let index = 0; index < count; index += 1) {
    const radius = 2.1 + random() * 1.1;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);

    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.cos(phi) * 0.72;
    positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }

  return positions;
}

function StudioEnvironment() {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const pmrem = new PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const target = pmrem.fromScene(room, 0.04);

    scene.environment = target.texture;
    scene.environmentIntensity = 1.25;
    pmrem.dispose();
    room.dispose?.();

    return () => {
      scene.environment = null;
      target.dispose();
    };
  }, [gl, scene]);

  return null;
}

function Particles({ count }) {
  const points = useRef(null);
  const positions = useMemo(() => createParticlePositions(count), [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = -state.clock.elapsedTime * 0.018;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={WARM}
        size={0.016}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

function Ring({ radius, rotation, nodes }) {
  return (
    <group rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.009, 8, 220]} />
        <meshStandardMaterial
          color={METAL}
          metalness={1}
          roughness={0.22}
          envMapIntensity={1.35}
        />
      </mesh>

      {nodes.map((node) => (
        <mesh
          key={node.angle}
          position={[
            Math.cos(node.angle) * radius,
            Math.sin(node.angle) * radius,
            0,
          ]}
        >
          <sphereGeometry args={[node.size ?? 0.032, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={node.color === ACCENT ? 3.2 : 0.5}
            roughness={0.35}
            metalness={0.2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Core({ compact }) {
  const root = useRef(null);
  const orbits = useRef(null);
  const intro = useRef(0);
  const pointer = useThree((state) => state.pointer);

  useFrame((state, delta) => {
    if (!root.current) return;

    const dt = Math.min(delta, 0.05);
    const t = state.clock.elapsedTime;

    intro.current = Math.min(1, intro.current + dt / 1.15);
    const eased = 1 - (1 - intro.current) ** 3;

    root.current.scale.setScalar(0.9 + eased * 0.1);
    root.current.position.y = Math.sin(t * 0.42) * 0.05;
    root.current.rotation.y = MathUtils.damp(
      root.current.rotation.y,
      0.2 + t * 0.06 + pointer.x * 0.3,
      2.4,
      dt,
    );
    root.current.rotation.x = MathUtils.damp(
      root.current.rotation.x,
      -pointer.y * 0.18 + Math.sin(t * 0.2) * 0.04,
      2.4,
      dt,
    );

    if (orbits.current) {
      orbits.current.rotation.z += dt * 0.045;
      orbits.current.rotation.x = Math.sin(t * 0.24) * 0.06;
    }
  });

  return (
    <group ref={root}>
      <mesh>
        <icosahedronGeometry args={[1.34, 2]} />
        <meshPhysicalMaterial
          color="#3B3933"
          metalness={0.92}
          roughness={0.2}
          clearcoat={0.5}
          clearcoatRoughness={0.22}
          envMapIntensity={1.15}
          flatShading
        />
      </mesh>

      <group ref={orbits}>
        <Ring
          radius={1.8}
          rotation={[Math.PI / 2, 0, 0]}
          nodes={[{ angle: 0, color: ACCENT }]}
        />
        <Ring
          radius={2}
          rotation={[0, Math.PI / 2, 0.35]}
          nodes={[{ angle: Math.PI * 0.42, color: WARM, size: 0.026 }]}
        />
        <Ring
          radius={2.2}
          rotation={[Math.PI / 3, Math.PI / 4, -0.2]}
          nodes={[{ angle: Math.PI * 1.12, color: ACCENT, size: 0.03 }]}
        />
      </group>

      <Particles count={compact ? 70 : 150} />
    </group>
  );
}

function Scene({ compact }) {
  return (
    <>
      <ambientLight intensity={0.12} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={2.6}
        color={WARM}
      />
      <pointLight
        position={[-3.5, -2, 3]}
        intensity={12}
        distance={9}
        color={ACCENT}
      />
      <pointLight
        position={[3, -1, -3]}
        intensity={6}
        distance={10}
        color="#8B877A"
      />

      <StudioEnvironment />
      <Core compact={compact} />
    </>
  );
}

export default function HeroScene({ active = true }) {
  const compact =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      dpr={compact ? [1, 1.5] : [1, 1.75]}
      gl={{
        antialias: !compact,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0.1, 7.1], fov: 38, near: 0.1, far: 20 }}
      shadows={false}
      frameloop={active ? "always" : "demand"}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 1.03;
      }}
    >
      <Scene compact={compact} />
    </Canvas>
  );
}
