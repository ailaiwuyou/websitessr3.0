import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import axios, { AxiosStatic } from "axios";
import VueAxios from "vue-axios";
import router from "./router/index";
import "ant-design-vue/dist/antd.css";
// import VueSocketIO from "vue-socket.io";
// import SocketIO from "socket.io-client";

axios.defaults.baseURL = "https://websiteapi.gaojingbo.com";
// axios.defaults.baseURL = "http://localhost:444";
// axios.defaults.baseURL = "http://42.192.48.145:444";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        axios: AxiosStatic;
        $message: any;
        $socket: any;
        $notification: any;
    }
}

// const socketio = new VueSocketIO({
//     debug: false,
//     // connection: "//localhost:3000/"
//     connection: SocketIO("//42.192.48.145:444"),
//     // vuex: {
//     //     store,
//     //     actionPrefix: "SOCKET_",
//     //     mutationPrefix: "SOCKET_"
//     // },
//     // options: { path: "/my-app/" } //Optional options
// });

const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(VueAxios, axios);
// app.use(socketio);

app.mount("#app");
