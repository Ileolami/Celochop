import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173, // specify the port if needed
  },
  plugins: [react()],
});
