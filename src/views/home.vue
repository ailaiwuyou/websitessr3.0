<template>
    <a-layout id="components-layout-demo-top" class="layout">
        <a-layout-header>
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="horizontal"
                :selectedKeys="[currentMenu]"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="chatroom" @click="titleClick"
                    >聊天室</a-menu-item
                >
                <a-menu-item key="machinelearning" @click="titleClick"
                    >机器学习</a-menu-item
                >
                <a-menu-item key="about" @click="titleClick">关于</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Ant Design ©2020 Created by Ant UED
        </a-layout-footer>
    </a-layout>
    <!-- <div class="main">
        <h1>
            <a-upload
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                :before-upload="beforeUpload"
                :customRequest="uploadImg"
            >
                <img v-if="imageUrl" :src="`http://${imageUrl}`" alt="avatar" />
                <div v-else>
                    <a-icon :type="loading ? 'loading' : 'plus'" />
                    <div class="ant-upload-text">
                        Upload
                    </div>
                </div>
            </a-upload>
        </h1>
    </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        const currentMenu: String = "chatroom";
        return {
            // checkNick: false,
            // form: this.$form.createForm(this, { name: "dynamic_rule" }),
            // message: "",
            // imageUrl: "",
            // loading: false,
            currentMenu,
        };
    },
    mounted() {
        this.getHighLightMenu();
        // this.$socket.emit("connect");
        this.getData();
    },
    // sockets: {
    //     cmdMsg(data: any) {
    //         // 监听message事件，方法是后台定义和提供的
    //         this.$notification.open({
    //             message: "Welcome",
    //             description: data.isself
    //                 ? `欢迎你，${data.username}`
    //                 : `你的好友，${data.username}已上线`,
    //             placement: "topRight",
    //         });
    //     },
    // },
    methods: {
        getHighLightMenu() {
            const tempCurrentMenu: String = window.location.href.split(
                "/home/"
            )[1];

            this.currentMenu = tempCurrentMenu;
        },
        titleClick(item: any) {
            this.currentMenu = item.key;
            this.$router.push(`/home/${item.key}`);
        },
        // uploadImg(info) {
        //     const self = this;
        //     const fileTarget = info.file;
        //     const formData = new FormData();
        //     const reader = new FileReader();
        //     reader.readAsDataURL(fileTarget);
        //     reader.onload = function (e) {
        //         formData.append("file", e.target.result);
        //         formData.append("filename", fileTarget.name);
        //         self.$axios({
        //             method: "post",
        //             url: "/media/uploadimg",
        //             data: formData,
        //             headers: {
        //                 "Content-Type": "multipart/form-data",
        //             },
        //         }).then((res) => {
        //             self.imageUrl = res.data.data.url;
        //         });
        //     };
        // },
        // beforeUpload(file) {
        //     const isJpgOrPng =
        //         file.type === "image/jpeg" || file.type === "image/png";
        //     if (!isJpgOrPng) {
        //         this.$message.error("You can only upload JPG file!");
        //     }
        //     const isLt2M = file.size / 1024 / 1024 < 2;
        //     if (!isLt2M) {
        //         this.$message.error("Image must smaller than 2MB!");
        //     }
        //     return isJpgOrPng && isLt2M;
        // },
        getData() {
            this.axios
                .get("/user/getInfo")
                .then((res: any) => {
                    if (res.data.errorCode === 0) {
                        console.log(res.data.data);
                        // this.$socket.emit("online", res.data.data);
                    } else {
                        // this.$router.push("/login");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
});
</script>

<style lang="less" scoped>
#components-layout-demo-top {
    height: 100%;
    .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
    }
}
</style>
