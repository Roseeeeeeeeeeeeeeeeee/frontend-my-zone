<template>
    <div class="test-container">
    <Menu />
   
    </div>
  </template>
  
  <script>
import Menu from './'
import "@/styles/global.less";
  export default {
    components:{
        Menu
    }
   
  }
  </script>
  
  <style scoped lang="less">
  @import '~@/styles/global.less';
  .test-container{
    width: 400px;
    height: 400px;
    border: 2px solid black;
    margin: 0 auto;
    background-color: black;
  }
  </style>
  