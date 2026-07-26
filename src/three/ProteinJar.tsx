import { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { makeLabelTexture } from './makeLabelTexture'

type ProteinJarProps = {
  accent?: string
  labelName?: string
  labelLine?: string
  macro?: string
  /** continuous idle spin speed (rad/s) */
  spin?: number
  /** follow pointer for a parallax tilt */
  pointerParallax?: boolean
  /** external rotation driver (e.g. scroll), radians; disables idle spin when set */
  rotationY?: number
}

/**
 * Fully procedural protein tub: body + shoulder + screw lid, wrapped with a
 * canvas-generated label. No external model or texture assets.
 */
export function ProteinJar({
  accent = '#ff3d14',
  labelName = 'KINETIK',
  labelLine = 'WHEY ISOLATE',
  macro = '27g PROTEIN',
  spin = 0.35,
  pointerParallax = true,
  rotationY,
}: ProteinJarProps) {
  const group = useRef<THREE.Group>(null)

  // Regenerate once web fonts are ready so the label isn't drawn in a fallback face.
  const [fontsReady, setFontsReady] = useState(false)
  useEffect(() => {
    let alive = true
    document.fonts?.ready.then(() => alive && setFontsReady(true))
    return () => {
      alive = false
    }
  }, [])

  const labelTex = useMemo(
    () => makeLabelTexture({ accent, name: labelName, line: labelLine, macro }),
    // fontsReady intentionally re-triggers regeneration after fonts load
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accent, labelName, labelLine, macro, fontsReady],
  )

  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: labelTex,
        roughness: 0.32,
        metalness: 0.05,
        envMapIntensity: 1.1,
      }),
    [labelTex],
  )

  const lidMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(accent),
        roughness: 0.28,
        metalness: 0.1,
        envMapIntensity: 1.2,
      }),
    [accent],
  )

  const plasticMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0b0c0e'),
        roughness: 0.35,
        metalness: 0.15,
      }),
    [],
  )

  useFrame((state, delta) => {
    if (!group.current) return
    if (rotationY !== undefined) {
      group.current.rotation.y = rotationY
    } else {
      group.current.rotation.y += delta * spin
    }
    if (pointerParallax) {
      const px = state.pointer.x
      const py = state.pointer.y
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -py * 0.18,
        0.06,
      )
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        px * 0.12,
        0.06,
      )
    }
  })

  return (
    <group ref={group} rotation={[0.05, 0, 0]}>
      {/* Main body — labelled */}
      <mesh castShadow material={bodyMat} position={[0, -0.15, 0]}>
        <cylinderGeometry args={[1, 1, 2.1, 96, 1, false]} />
      </mesh>

      {/* Top rim / shoulder (short dark plastic ring) */}
      <mesh castShadow material={plasticMat} position={[0, 0.98, 0]}>
        <cylinderGeometry args={[0.92, 1, 0.22, 96]} />
      </mesh>

      {/* Screw-thread neck */}
      <mesh material={plasticMat} position={[0, 1.14, 0]}>
        <cylinderGeometry args={[0.78, 0.82, 0.16, 96]} />
      </mesh>

      {/* Lid — accent colored, slightly wider */}
      <mesh castShadow material={lidMat} position={[0, 1.36, 0]}>
        <cylinderGeometry args={[0.86, 0.86, 0.34, 96]} />
      </mesh>
      {/* Lid top cap bevel */}
      <mesh castShadow material={lidMat} position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.8, 0.86, 0.06, 96]} />
      </mesh>

      {/* Bottom bevel */}
      <mesh castShadow material={plasticMat} position={[0, -1.24, 0]}>
        <cylinderGeometry args={[1, 0.94, 0.12, 96]} />
      </mesh>
    </group>
  )
}
