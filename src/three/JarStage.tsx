import { Scene } from './Scene'
import { ProteinJar } from './ProteinJar'

type JarStageProps = {
  accent?: string
  labelName?: string
  labelLine?: string
  macro?: string
  spin?: number
  float?: boolean
  cameraZ?: number
}

/**
 * Single default export so the whole three.js dependency graph splits into one
 * lazy-loaded chunk (see React.lazy usage in Hero).
 */
export default function JarStage({
  accent,
  labelName,
  labelLine,
  macro,
  spin,
  float = true,
  cameraZ,
}: JarStageProps) {
  return (
    <Scene float={float} cameraZ={cameraZ}>
      <ProteinJar
        accent={accent}
        labelName={labelName}
        labelLine={labelLine}
        macro={macro}
        spin={spin}
      />
    </Scene>
  )
}
