import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
    root: "dev", // Set the dev folder as the root for development
});
