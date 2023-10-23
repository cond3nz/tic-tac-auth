import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      display: "standalone",
      manifest: {
        name: 'cond3nz tic-tac-auth',
        short_name: 'TTA',
        description: 'Zaebalsya',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "src/assets/react.svg",
            "sizes": "48x48",
          },
          {
            "src": "src/assets/react.svg",
            "sizes": "72x72 96x96 128x128 256x256"
          },
          {
            "src": "src/assets/react.svg",
            "sizes": "257x257"
          }
        ]
      }
     })
  ],
  
})
