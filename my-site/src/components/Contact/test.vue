<template>
    <div class="test-container">
     <Contact/>
     
    </div>
  </template>
  
  <script>
import Contact from './';
  export default {
    components: {
      Contact,
    },
   
  }
  </script>
  
  <style scoped>
  .test-container{
    width: 400px;
    height: 400px;
    background-color: black;
    margin: 0 auto;
    padding-top: 80px;
  }

  </style>
  