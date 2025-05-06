<template>
  <div class="blog-category-container" v-loading="isLoading">

    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData.js'
import { getBlogTypes } from '../../../api/blog'
import RightList from './RightList'
export default {
  mixins: [fetchData([])],
  methods: {
    async fetchData() {
      const r = await getBlogTypes();
      // console.log(r);

      return r

    },
    handleSelect(item) {

      const query = {
        page: 1,
        limit: this.limit
      }
      if (item.id === -1) {

        this.$router.push({
          name: 'Blog',
          params: {},
          query
        })
      } else {
        this.$router.push({
          name: 'BlogCategory',
          params: {
            categoryId: item.id
          },
          query
        })
      }

    }
  },
  components: {
    RightList,

  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1
    },
    limit() {
      return +this.$route.query.limit || 10
    },
    list() {

      const totalCount = this.data.reduce(
        (sum, it) => {
          sum += it.articleCount;
          return sum
        }, 0)
      const result = [
        { name: '全部', articleCount: totalCount, id: -1 },
        ...this.data
      ]
      return result.map((it) => {
        return {
          ...it,
          isActive: it.id === this.categoryId,
          aside:it.articleCount+'篇'
        }
      })
    }
  }

}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.blog-category-container {

  width: 300px;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  height: 100%;

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }

}
</style>