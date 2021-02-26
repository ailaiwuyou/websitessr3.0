<template>
    <div
        class="login"
        :style="{ backgroundImage: 'url(https://api.xygeng.cn/Bing)' }"
    >
        <a-form
            ref="ruleForm"
            :layout="'vertical'"
            class="login-form"
            :model="account"
            @submit="handleSubmit"
            :wrapper-col="{ span: 24 }"
            :rules="rules"
        >
            <a-form-item ref="username" name="username">
                <a-input v-model:value="account.username" placeholder="用户名">
                    <template #prefix
                        ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
                    /></template>
                </a-input>
            </a-form-item>
            <a-form-item ref="password" name="password">
                <a-input
                    v-model:value="account.password"
                    type="password"
                    placeholder="密码"
                >
                    <template #prefix
                        ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
                    /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button block type="primary" @click="submitF">
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts">
// import { ref, defineComponent, onBeforeUpdate, onUpdated } from "vue";
import { defineComponent } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

export default defineComponent({
    name: "Login",
    data() {
        return {
            account: {
                username: "",
                password: "",
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    setup: () => {},
    methods: {
        submitF() {
            const formRef: any = this.$refs.ruleForm;
            formRef
                .validate()
                .then((value: any) => {
                    console.log(value);
                    this.axios({
                        method: "post",
                        url: "/user/login",
                        data: value,
                    })
                        .then((res: any) => {
                            if (res.data.errorCode === 0) {
                                this.$message.info(res.data.msg, 2);
                                setTimeout(() => {
                                    this.$router.push("/home");
                                }, 2000);
                            } else {
                                this.$message.info(res.data.msg);
                            }
                        })
                        .catch((error: any) => {
                            console.log(error);
                        });
                })
                .catch((error: any) => {
                    console.log("error", error);
                });
        },
        emitAlert(str: String) {
            // eslint-disable-next-line no-alert
            alert(str);
        },
        handleSubmit() {},
    },
    components: { UserOutlined, LockOutlined },
});
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    background-position: center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}
.login-form {
    padding: 20px;
    position: relative;
    max-width: 300px;
    margin: auto;
    margin-top: 10%;
    &::before {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 8px;
        filter: blur(1px);
    }
}
</style>
