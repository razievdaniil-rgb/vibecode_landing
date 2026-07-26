import * as THREE from 'three'

type LabelOptions = {
  name?: string
  line?: string
  bg?: string
  accent?: string
  ink?: string
  macro?: string
}

/**
 * Draws the wrap-around jar label onto a 2D canvas and returns it as a texture.
 * Fully procedural — no external image assets, easy to recolor per product.
 */
export function makeLabelTexture({
  name = 'KINETIK',
  line = 'WHEY ISOLATE',
  bg = '#0b0c0e',
  accent = '#ff3d14',
  ink = '#f4f2ec',
  macro = '27g PROTEIN',
}: LabelOptions = {}): THREE.CanvasTexture {
  const w = 1024
  const h = 512
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!

  // Base
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  // Accent band down the middle-front (label wraps, so center = front face)
  const bandX = w * 0.5
  ctx.fillStyle = accent
  ctx.fillRect(bandX - 150, 0, 300, h)

  // Thin rules top & bottom
  ctx.fillStyle = ink
  ctx.fillRect(0, 40, w, 3)
  ctx.fillRect(0, h - 43, w, 3)

  // Vertical repeating tagline strip on the sides
  ctx.save()
  ctx.fillStyle = '#2a2e35'
  ctx.font = "700 26px 'Space Mono', monospace"
  ctx.textBaseline = 'middle'
  const strip = 'FUEL THE MACHINE · '
  ctx.fillText(strip.repeat(6), 20, 70)
  ctx.fillText(strip.repeat(6), 20, h - 70)
  ctx.restore()

  // Brand name — big, on the accent band (front)
  ctx.save()
  ctx.translate(bandX, h * 0.42)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = bg
  ctx.font = "900 96px 'Archivo', sans-serif"
  ctx.fillText(name, 0, 0)

  // Product line under name
  ctx.fillStyle = bg
  ctx.font = "700 30px 'Space Mono', monospace"
  ctx.fillText(line, 0, 74)
  ctx.restore()

  // Macro callout box (front, lower)
  ctx.save()
  ctx.translate(bandX, h * 0.82)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.strokeStyle = bg
  ctx.lineWidth = 4
  ctx.strokeRect(-130, -30, 260, 60)
  ctx.fillStyle = bg
  ctx.font = "900 34px 'Archivo', sans-serif"
  ctx.fillText(macro, 0, 2)
  ctx.restore()

  // "SUPPLEMENT FACTS" tab on the right side of the wrap
  ctx.save()
  ctx.fillStyle = ink
  ctx.font = "700 22px 'Space Mono', monospace"
  ctx.textAlign = 'left'
  ctx.fillText('SUPPLEMENT', bandX + 180, h * 0.4)
  ctx.fillText('FACTS →', bandX + 180, h * 0.4 + 30)
  ctx.font = "400 16px 'Space Mono', monospace"
  ctx.fillStyle = '#7d7c76'
  ctx.fillText('30 SERVINGS', bandX + 180, h * 0.4 + 66)
  ctx.fillText('NET WT 960g', bandX + 180, h * 0.4 + 90)
  ctx.restore()

  // Batch code on the left side of the wrap
  ctx.save()
  ctx.fillStyle = '#7d7c76'
  ctx.font = "400 16px 'Space Mono', monospace"
  ctx.textAlign = 'right'
  ctx.fillText('LOT KX-4471', bandX - 180, h * 0.4)
  ctx.fillText('TESTED ✓', bandX - 180, h * 0.4 + 24)
  ctx.restore()

  const tex = new THREE.CanvasTexture(canvas)
  tex.anisotropy = 8
  tex.colorSpace = THREE.SRGBColorSpace
  // Because the label wraps a cylinder, offset so the "front" band faces camera
  tex.wrapS = THREE.RepeatWrapping
  tex.offset.x = 0.25
  return tex
}
