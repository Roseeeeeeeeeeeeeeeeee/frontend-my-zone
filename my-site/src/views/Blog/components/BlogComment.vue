<template>
    <div class="blog-comment-container">
        <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isListLoading"
            @submit="handleSubmit" />
            <div class="aside" v-if="isCommentEnd && !isListLoading">
                - - - - - -没有更多评论了😜- - - - - -
            </div>
    </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import { getComments, postComment } from '@/api/blog'
import MessageArea from '@/components/MessageArea'
import loadingMore from '@/mixins/loadingMore';
import { SERVER_URL } from '../../../urlConfig';
export default {
    mixins: [fetchData({
        total: 0, rows: []
    }),loadingMore],
    data() {
        return {
            page: 1,
            limit: 10,
            isListLoading:false
            
        }
    },
   
   
    methods: {
        async fetchData() {
            const r = await getComments(this.page, this.limit, this.$route.params.id)
            // console.log(r);
            
            
            r.rows.forEach(e => {
                e.avatar =  SERVER_URL + e.avatar 
            });
            return r
        },
        
         
        async handleSubmit(formData, callback) {
            console.log('insu');
            const res = await postComment({
                blogId: this.$route.params.id,
                ...formData,
            });
            res.avatar = SERVER_URL + res.avatar
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