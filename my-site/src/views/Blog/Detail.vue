<template>

    <Layout>
        <div class="main-container" v-loading="isLoading">
            <BlogDetail :data="data" v-if="data" />
        </div>
        <template #right>
            <div class="right-container" v-loading="isLoading">
                <BlogTOC v-if="data" :toc="data.toc" />
            </div>
        </template>
    </Layout>

</template>

<script>
import Layout from '@/components/Layout'
import BlogTOC from './components/BlogTOC.vue';
import BlogDetail from './components/ BlogDetail.vue';
import fetchData from '@/mixins/fetchData'
import { getBlog } from '@/api/blog';
export default {
    mixins: [fetchData(null)],
    components: {
        Layout,
        BlogTOC,
        BlogDetail
    },
    methods: {
        async fetchData() {
            const r = await getBlog(this.$route.params.id);
            console.log(r);
            return r
        }
    }
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.main-container {
    height: 100%;
    overflow-y: scroll;
    padding: 30px;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.right-container {
    width: 300px;
    position: relative;
    height: 100%;
    padding: 20px;
}
</style>