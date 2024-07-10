import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Corrected to a string
    port: 5176, // specify the port if needed
  },
  plugins: [react()],
});