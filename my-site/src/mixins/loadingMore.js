
/**
 * 用于集成”加载更多“的功能，如加载更多评论、留言
 */
export default{
    created() {
        // window.fetchMoreComment = this.fetchMoreComment
        this.$bus.$on('mainScroll', this.handleScroll)
    },
    destroyed(){
        this.$bus.$off('mainScroll', this.handleScroll)
       
    },
    computed:{
        isCommentEnd(){
            return this.data.total <= this.data.rows.length
        }
    },
    methods:{
        async fetchMoreComment() {
            if(this.isCommentEnd || this.data.rows.length === 0){
                this.isListLoading= false
                return
            }
            this.page++;
            this.isListLoading = true
            const resp = await this.fetchData()

            
            this.isListLoading = false
            this.data.rows = this.data.rows.concat(resp.rows);

        },
        handleScroll(dom) {
            if (this.isListLoading || !dom) {
                return
            }
           
            
            const gap = 10 // 表明滚动到离底部在100px内就可以更新评论了
            const curGap = Math.abs(dom.scrollHeight - (dom.scrollTop + dom.clientHeight))
            if (curGap <= gap ) {
                this.fetchMoreComment()
            }
        },
    }
}