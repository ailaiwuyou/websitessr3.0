import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import Main from "../views/main.vue";
import Home from "../views/home.vue";
import ChatRoom from "../components/chatRoom.vue";
import MachineLearning from "../components/machineLearning.vue";
import About from "../components/about.vue";

// import MachineLearning from "../components/machineLearning";
// import ChatRoom from "../components/chatRoom";
// import About from "../components/about";

const routes = [
    { path: "/", name: "Main", component: Main },
    { path: "/login", name: "Login", component: Login },
    {
        path: "/home",
        name: "Home",
        component: Home,
        redirect: "/home/chatroom",
        children: [
            {
                path: "chatroom",
                name: "ChatRoom",
                component: ChatRoom,
            },
            {
                path: "machineLearning",
                name: "MachineLearning",
                component: MachineLearning,
            },
            {
                path: "about",
                name: "About",
                component: About,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
