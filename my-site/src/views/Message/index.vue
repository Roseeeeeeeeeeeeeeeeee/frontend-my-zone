<template>
  <div class="message-container" v-loading="isLoading" ref="container">
    <MessageArea title="留言板" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading"
      @submit="handleSubmit" />
    <div class="aside" v-if="isCommentEnd && !isLoading">
      - - - - - -没有更多评论了😜- - - - - -
    </div>
  </div>
</template>

<script>

import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import * as MsgApi from '@/api/message'
import mainScroll from '@/mixins/mainScroll'
import loadingMore from '@/mixins/loadingMore'
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  mixins: [fetchData({
   total:0,
   rows:[]
  }), mainScroll('container'), loadingMore],
  methods: {
    async fetchData() {
      const r = await MsgApi.getMessages(this.page, this.limit);
      console.log(r);
      return r

    },
    async handleSubmit(msg, callback) {
      const r = await MsgApi.postMessage(msg)
      this.data.rows.unshift(r)
      this.data.total++;
      callback('感谢你的留言😘')
    }
  }

}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');
.message-container {
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  padding: 100px;

  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
  .aside{
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 12px;
        color: @gray;
    }
}
</style>