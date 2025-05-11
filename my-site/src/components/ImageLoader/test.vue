<template>
    <div class="test-container">
     <ImageLoader 
    :duration="200"
     src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
     placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
     @load="handleLoaded"
     />
    </div>
  </template>
  
  <script>

import ImageLoader from './';
  export default {
    components: {
      ImageLoader,
    },
    methods:{
        handleLoaded(){
            console.log('loaded事件抛出')
           
        }
    }
   
  }
  </script>
  
  <style scoped>
  .test-container{
    width: 600px;
    height: 400px;
    border: 2px solid black;
    margin: 0 auto;
  }
  </style>
  