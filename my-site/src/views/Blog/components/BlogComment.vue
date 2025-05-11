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
import loadingMore from '@/mixins/loadingMore'
export default {
    mixins: [fetchData({
        total: 0, rows: []
    }),loadingMore],
    data() {
        return {
            page: 1,
            limit: 10,
            
        }
    },
   
   
    methods: {
        async fetchData() {
            const r = await getComments(this.page, this.limit, this.$route.params.id)
            // console.log(r);
            return r
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