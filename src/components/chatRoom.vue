<template>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="dataList">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-card :title="item.title">{{ item.username }}</a-card>
            </a-list-item>
        </template>
    </a-list>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        const dataList: any[] = [];
        return { dataList };
    },

    mounted() {},
    created() {
        this.getUserList();
    },
    methods: {
        getUserList() {
            this.axios
                .get("/chat/userlist")
                .then((res: any) => {
                    if (res.data.errorCode === 0) {
                        this.dataList = res.data.data;
                    } else {
                        this.$message.error("接口错误");
                    }
                })
                .catch(() => {
                    this.$message.error("接口错误");
                });
        },
    },
});
</script>
