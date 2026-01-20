import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        landingpage: "landingpage.html",
        loginform: "loginform.html",
        dashboard: "dashboard.html"
      }
    }
  }
})
