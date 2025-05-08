<template>
  <div class="blog-detail-container">

    <h2>{{ data.title }}</h2>
    <aside>
      <span>日期：{{ getFormatDate(data.createDate) }}</span>
      <span>浏览：{{ data.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ data.commentNumber }}</a>
      <router-link :to="{
        name: 'BlogCategory',
        params: {
          categoryId: data.category.id
        }

      }">
        {{ data.category.name }}
      </router-link>

    </aside>
    <div class="markdown-body" v-html="data.htmlContent">

    </div>
  </div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
import { getFormatDate } from '../../../utils';
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    getFormatDate,

  }

}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.blog-detail-container {


  padding: 20px;
  position: relative;
  overflow-y: auto;
  // height: 100%;
  // scroll-behavior: smooth;

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2em;
    margin: 0;
  }

  aside {
    font-size: 12px;
    margin-top: 20px;
    color: @gray;

    span,
    a {
      margin-right: 10px
    }
  }

  .markdown-body {
    margin: 40px auto;

  }

}
</style>