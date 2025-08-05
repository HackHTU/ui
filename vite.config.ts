import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Tailwind CSS configuration
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/ui/',
    plugins: [vue(), tailwindcss()],
});
