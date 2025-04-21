<template>
    <div class="test-container">
    <SiteAside/>
    </div>
  </template>
  
  <script>
import SiteAside from './'
import "@/styles/global.less";
  export default {
    components:{
       SiteAside,
    }
   
  }
  </script>
  
  <style scoped lang="less">
 .test-container{
    width: 100px;
    height: 400px;
    margin: 0 auto;
    
 }
  </style>
  