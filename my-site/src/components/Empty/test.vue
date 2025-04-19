<template>
    <div class="test-container">
     <Empty/>
    </div>
  </template>
  
  <script>
import Empty from './';
  export default {
    components: {
      Empty,
    },
   
  }
  </script>
  
  <style scoped>
  .test-container{
    width: 400px;
    height: 600px;
    border: 2px solid black;
    /* 保证实现其内部组件自居中时的position:absolute有效 */
    position: relative;
  }
  </style>
  