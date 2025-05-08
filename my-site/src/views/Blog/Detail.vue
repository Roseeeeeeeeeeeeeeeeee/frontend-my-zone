<template>

    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogDetail :data="data" v-if="data" />
            <BlogComment v-if="!isLoading" />
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
import mainScroll from '@/mixins/mainScroll';
import { getBlog } from '@/api/blog';
import BlogComment from './components/BlogComment.vue';
export default {
    mixins: [fetchData(null),mainScroll('mainContainer')],
    components: {
        Layout,
        BlogTOC,
        BlogDetail,
        BlogComment,

    },
    methods: {
        async fetchData() {
            const r = await getBlog(this.$route.params.id);
            // console.log(r);
            return r
        },
       
    },
    updated() {
        const hash = location.hash
        location.hash = '';
        setTimeout(() => {
            location.hash = hash
        }, 50);
    },
   
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