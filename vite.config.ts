import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.GITHUB_PAGES
		? '/jinro-memo/' // レポジトリ名を設定
		: './',
	build: {
		outDir: 'docs',
		assetsDir: './'
	},
	plugins: [react()]
})
