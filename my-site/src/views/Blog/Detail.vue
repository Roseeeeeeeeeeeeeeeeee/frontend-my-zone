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
import { getBlog } from '@/api/blog';
import BlogComment from './components/BlogComment.vue';
export default {
    mixins: [fetchData(null)],
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
        handleScroll() {
            this.$bus.$emit('mainScroll', this.$refs.mainContainer)
        },
        setScroll(top) {
            this.$refs.mainContainer.scrollTop = top
        }
    },
    updated() {
        const hash = location.hash
        location.hash = '';
        setTimeout(() => {
            location.hash = hash
        }, 50);
    },
    mounted() {
        this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
    },
    created() {
        this.$bus.$on('setMainScroll', this.setScroll)
    },
    beforeDestroy() {
        this.$bus.$emit("mainScroll");
        this.$bus.$off("setMainScroll", this.setScroll);
        this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
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