import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MathUtils, PMREMGenerator } from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const ACCENT = "#D3F04A";

const LAYERS = [
  {
    key: "data",
    finalY: -0.58,
    startY: -1.28,
    position: [0, -1.28, 0],
    rotation: [0, -0.12, 0.012],
    material: {
      color: "#4B463A",
      metalness: 0.35,
      roughness: 0.54,
      envMapIntensity: 0.9,
    },
  },
  {
    key: "logic",
    finalY: 0.02,
    startY: 0.02,
    position: [0.04, 0.02, 0.02],
    rotation: [0, 0.1, -0.008],
    material: {
      color: "#9C9587",
      metalness: 0.85,
      roughness: 0.3,
      envMapIntensity: 1.2,
    },
  },
  {
    key: "interface",
    finalY: 0.62,
    startY: 1.32,
    position: [-0.03, 1.32, 0],
    rotation: [0, -0.06, 0.01],
    material: {
      color: "#E8DFCF",
      metalness: 0.05,
      roughness: 0.45,
      clearcoat: 0.3,
      clearcoatRoughness: 0.5,
      envMapIntensity: 0.95,
    },
  },
];

function StudioEnvironment() {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const pmrem = new PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const target = pmrem.fromScene(room, 0.04);

    scene.environment = target.texture;
    scene.environmentIntensity = 1.2;
    pmrem.dispose();
    room.dispose?.();

    return () => {
      scene.environment = null;
      target.dispose();
    };
  }, [gl, scene]);

  return null;
}

function Stack() {
  const group = useRef(null);
  const layers = useRef([]);
  const intro = useRef(0);
  const pointer = useThree((state) => state.pointer);

  const geometries = useMemo(
    () => ({
      data: new RoundedBoxGeometry(2.9, 0.24, 1.9, 6, 0.09),
      logic: new RoundedBoxGeometry(2.5, 0.22, 1.65, 6, 0.08),
      interface: new RoundedBoxGeometry(2.1, 0.2, 1.4, 6, 0.07),
    }),
    [],
  );

  useEffect(
    () => () => Object.values(geometries).forEach((geometry) => geometry.dispose()),
    [geometries],
  );

  useFrame((state, delta) => {
    if (!group.current) return;

    const dt = Math.min(delta, 0.05);
    const t = state.clock.elapsedTime;

    intro.current = Math.min(1, intro.current + dt / 1.25);
    const eased = 1 - (1 - intro.current) ** 3;

    group.current.scale.setScalar(0.94 + eased * 0.06);
    group.current.position.y = Math.sin(t * 0.5) * 0.03;
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      Math.sin(t * 0.16) * 0.18 + pointer.x * 0.18 + eased * 0.06,
      2.4,
      dt,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      0.04 - pointer.y * 0.08,
      2.4,
      dt,
    );

    layers.current.forEach((layer, index) => {
      if (!layer) return;
      const config = LAYERS[index];
      const targetY =
        MathUtils.lerp(config.startY, config.finalY, eased) +
        Math.sin(t * 0.62 + index * 1.7) * 0.012;
      layer.position.y = targetY;
    });
  });

  return (
    <group ref={group}>
      {LAYERS.map((layer, index) => (
        <mesh
          key={layer.key}
          ref={(node) => {
            layers.current[index] = node;
          }}
          geometry={geometries[layer.key]}
          position={layer.position}
          rotation={layer.rotation}
        >
          {index === 2 ? (
            <meshPhysicalMaterial {...layer.material} />
          ) : (
            <meshStandardMaterial {...layer.material} />
          )}

          {index === 2 ? (
            <>
              <mesh position={[0.64, 0.11, 0.3]}>
                <sphereGeometry args={[0.075, 24, 24]} />
                <meshStandardMaterial
                  color={ACCENT}
                  emissive={ACCENT}
                  emissiveIntensity={0.5}
                  roughness={0.3}
                  metalness={0.1}
                  toneMapped={false}
                />
              </mesh>
              <mesh position={[-0.28, 0.105, 0.38]}>
                <boxGeometry args={[0.64, 0.012, 0.11]} />
                <meshStandardMaterial
                  color="#17150F"
                  roughness={0.7}
                  metalness={0.1}
                />
              </mesh>
            </>
          ) : null}
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  useEffect(() => {
    const aspect = size.width / size.height;

    if (aspect < 0.65) {
      camera.fov = 52;
    } else if (aspect > 1.25) {
      camera.fov = 30;
    } else {
      camera.fov = 40;
    }

    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  }, [camera, size]);

  return null;
}

function Scene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.16} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} color="#F1EBDD" />
      <pointLight
        position={[-3.2, 0.8, 3]}
        intensity={9}
        distance={9}
        color={ACCENT}
      />
      <pointLight
        position={[3, -2, -3]}
        intensity={5}
        distance={11}
        color="#A9A18E"
      />

      <StudioEnvironment />
      <Stack />
    </>
  );
}

export default function HeroScene({ active = true }) {
  const compact = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      dpr={compact ? [1, 1.5] : [1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [3.3, 2.6, 5.3], fov: 42, near: 0.1, far: 24 }}
      shadows={false}
      frameloop={active ? "always" : "demand"}
      onCreated={({ gl, camera }) => {
        gl.toneMappingExposure = 1.08;
        camera.lookAt(0, 0, 0);
      }}
    >
      <Scene />
    </Canvas>
  );
}
