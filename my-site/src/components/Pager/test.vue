<template>
    <div>
    <Pager 
        :total="total"
        :current="current"
        @page-change="handlePageChange"
    />
    </div>
  </template>
  
  <script>
import Pager from './index.vue'
  export default {
    components: {
        Pager
    },
    data() {
    return {
      current: 4,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载当前页数据");
    },
  },
  }
  </script>
  
  <style scoped>
  
  </style>
  