<template>
  <div class="about-container" v-loading="loading || !isSiteLoaded">
   
    <iframe 
    v-if="data"
    class="about-content" 
    :src="data"
     frameborder="0"
    @load="isSiteLoaded = true"></iframe>
  </div>
 </template>
  
  <script>
  
 import { mapState } from 'vuex';
  export default {
    data(){
      return{
        isSiteLoaded:false
      }
    },
     computed : mapState('about',['data','loading']),
     created(){
      this.$store.dispatch('about/fetchData')
     }
  }
  </script>
  
  <style scoped lang="less">
  .about-container{
    width: 100%;
    height: 100%;
    position: relative;

  }
  .about-content{
    width: 100%;
    height: 100%;
    display: block;
   
    border: none;
    padding: 0;
  }
 
  </style>
  
  