<template>
  <div class="pager-container">
    <a :class="{ disabled: current === 1 }" @click=handleClick(1)>|&lt;&lt;</a>
    <a :class="{ disabled: current === 1 }" @click=handleClick(current-1)>&lt;&lt;</a>
    <!-- 索引部分· -->
    <a v-for="(item, i) in pages" :key="i" :class="{ active: item === current }" @click="handleClick(item)">{{item}}</a>
    <a :class="{ disabled: current === pageNums }" @click="handleClick(current + 1)">&gt;&gt;</a>
    <a :class="{ disabled: current === pageNums }" @click="handleClick(pageNums)">&gt;&gt;|</a>

  </div>
</template>

<script>

export default {
  props: {
    current: {
      type: Number,
      required: false,
      default: 1
    },
    total: { // 表示总的数据量，不是总页数
      type: Number,
      required: false,
      default: 0
    },
    limit: {
      type: Number,
      required: false,
      default: 10
    },
    visibleNumber: {
      type: Number,
      required: false,
      default: 10
    },
  },
  computed: {
    pageNums() {
      return Math.ceil(this.total / this.limit)
    },
    visibleMin() {
      let min = this.current - Math.floor(this.limit / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.limit - 1;
      if (max > this.pageNums) {
        max = this.pageNums
      }
      return max
    },
    pages() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums
    }
  },
  methods: {
    handleClick(newPage) {
      if(newPage < 1){
        newPage = 1;

      }
      if(newPage > this.pageNums)
      {
        newPage = this.pageNums
      }
      if(newPage === this.current)
      {
        return;
      }
      this.$emit('page-change',newPage)
    }
  }
}
</script>



<style lang="less" scoped>
@import '~@/styles/style.less';

.pager-container {
  display: flex;
  justify-content: center;
  margin: 30px 0;

  a {
    margin: 0 3px;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }

}
</style>