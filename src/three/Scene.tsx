import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, ContactShadows, Lightformer } from '@react-three/drei'

type SceneProps = {
  children: ReactNode
  /** disable float wrapper (e.g. scroll-driven scenes) */
  float?: boolean
  cameraZ?: number
  shadows?: boolean
}

/**
 * Shared studio rig. Reflections come from a procedural Lightformer environment
 * (rendered to a cubemap in-engine) — no remote HDRI fetch, so it works offline
 * and never blocks the jar behind a network Suspense.
 */
export function Scene({
  children,
  float = true,
  cameraZ = 6,
  shadows = true,
}: SceneProps) {
  const content = float ? (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
      {children}
    </Float>
  ) : (
    children
  )

  return (
    <Canvas
      dpr={[1, 2]}
      shadows={shadows}
      camera={{ position: [0, 0.2, cameraZ], fov: 38 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
    >
      {/* Direct lights: warm key + cool rim + volt accent */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={2.6}
        color="#fff2ec"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 2, -3]} intensity={1.3} color="#4d63ff" />
      <pointLight position={[2, -1, 3]} intensity={14} color="#ff5a2e" distance={14} />

      {/* Procedural reflections — no external assets */}
      <Environment resolution={256} frames={1}>
        <color attach="background" args={['#0b0c0e']} />
        <Lightformer
          intensity={2.4}
          position={[0, 3, 2]}
          scale={[8, 3, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={3}
          position={[-3, 0, 2]}
          scale={[2, 6, 1]}
          color="#ff5a2e"
        />
        <Lightformer
          intensity={2}
          position={[3, 0, 2]}
          scale={[2, 6, 1]}
          color="#4d63ff"
        />
        <Lightformer
          intensity={1.2}
          position={[0, -3, 1]}
          scale={[6, 2, 1]}
          color="#ffffff"
        />
      </Environment>

      <Suspense fallback={null}>{content}</Suspense>

      {shadows && (
        <ContactShadows
          position={[0, -1.85, 0]}
          opacity={0.5}
          scale={9}
          blur={2.6}
          far={4}
          color="#000000"
        />
      )}
    </Canvas>
  )
}
