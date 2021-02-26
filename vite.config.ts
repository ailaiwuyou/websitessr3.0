import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [vue()],
// });
export default {
    server: {
        cors: true,
        https: false,
    },
    plugins: [vue()],
};
