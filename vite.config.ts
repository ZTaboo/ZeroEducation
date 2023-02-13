import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteMockServe} from "vite-plugin-mock";
import {resolve} from "path"; // 主要用于alias文件路径别名

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~": resolve(__dirname, ".", "src"),
        }
    },
    plugins: [vue(),
        viteMockServe({
            // default
            mockPath: './mock/mock',
            localEnabled: true
        }),
    ],
})
