<template>
    <div>111</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Main",

    methods: {},
    created() {
        this.axios
            .get("/user/getInfo")
            .then((res: any) => {
                if (res.data.errorCode === 0) {
                    this.$router.push("/home");
                } else {
                    this.$router.push("/login");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
});
</script>

<style scoped lang="less"></style>
