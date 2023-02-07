import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/jinro-memo/', // レポジトリ名を設定
	build: {
		outDir: 'docs',
		assetsDir: './'
	},
	plugins: [react()]
})
