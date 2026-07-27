import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works on a GitHub Pages project subpath
  // (https://<user>.github.io/<repo>/) without hardcoding the repo name.
  base: './',
  // The 3D scene is loaded via React.lazy(() => import('./three/JarStage')),
  // so Three.js is automatically code-split into its own async chunk.
  plugins: [react(), tailwindcss()],
})
