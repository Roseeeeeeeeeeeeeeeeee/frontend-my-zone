<template>
    <div class="blog-comment-container">
        <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading"
            @submit="handleSubmit" />
            <div class="aside" v-if="isCommentEnd">
                - - - - - -没有更多评论了😜- - - - - -
            </div>
    </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import { getComments, postComment } from '@/api/blog'
import MessageArea from '@/components/MessageArea'
export default {
    mixins: [fetchData({
        total: 0, rows: []
    })],
    data() {
        return {
            page: 1,
            limit: 10,
            
        }
    },
    computed:{
        isCommentEnd(){
            return this.data.total <= this.data.rows.length
        }
    },
    created() {
        // window.fetchMoreComment = this.fetchMoreComment
        this.$bus.$on('mainScroll', this.handleScroll)
    },
    destroyed(){
        this.$bus.$off('mainScroll', this.handleScroll)
       
    },
    methods: {
        async fetchData() {
            const r = await getComments(this.page, this.limit, this.$route.params.id)
            // console.log(r);
            return r
        },
        async fetchMoreComment() {
            if(this.isCommentEnd){
                return
            }
            this.page++;
            this.isLoading = true
            const resp = await this.fetchData()
            this.isLoading = false
            this.data.rows = this.data.rows.concat(resp.rows);

        },
        handleScroll(dom) {
            if (this.isLoading || !dom) {
                return
            }
           
            
            const gap = 10 // 表明滚动到离底部在100px内就可以更新评论了
            const curGap = Math.abs(dom.scrollHeight - (dom.scrollTop + dom.clientHeight))
            if (curGap <= gap ) {
                this.fetchMoreComment()
            }


        },
        async handleSubmit(formData, callback) {
            const res = await postComment({
                blogId: this.$route.params.id,
                ...formData,
            });
            this.data.total++;
            this.data.rows.unshift(res)
            callback('感谢您的评论💐');

        }
    },
    components: {
        MessageArea,
    }



}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.blog-comment-container {
    margin: 30px 0;
    .aside{
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 12px;
        color: @gray;
    }
}
</style>