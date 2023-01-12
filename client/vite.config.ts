import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api/v1/user": {
				target: "http://localhost:3000",
				changeOrigin: true,
				secure: false,
			},
			"/api/v1/member": {
				target: "http://localhost:3000",
				changeOrigin: true,
				secure: false,
			},
		},
		port: 5000,
	},
});
