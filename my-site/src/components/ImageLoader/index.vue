<template>
   <div class="image-loader-container">
  
    <img :src="placeholder" class="placeholder" v-if="!allDown">
    <img @load="handleLoaded" :src="src" :style="{
        opcity:originOpcity,
        transition : `${duration}ms`
    }">
   </div>
</template>
  
  <script>

  export default{
    data(){
        return{
            isLoaded:false,
            allDown : false
        }
    },
    props : {
        src:{
            required : true,
            type:String,
        },
        placeholder:{
            type : String,
            required : true,

        },
        duration : {
            type : Number,
            default : 500 //毫秒
        }


    },

    computed :{
        originOpcity(){
            return this.isLoaded ? 1 : 0;
        }
    },
    methods :{
        handleLoaded(){
            this.isLoaded = true;
            setTimeout(()=>{
                this.allDown = true;
                this.$emit('loaded')
            },this.duration)
        }
    }
    
    
  }
  </script>
  
  <style scoped lang="less">
  @import '~@/styles/mixin.less';
  .image-loader-container{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img{
       .self-fill();
        object-fit:cover;
    }
    .origin{
        opacity: 0;
    }
    .placeholder{
        filter: blur(20px);

    }
  }
  </style>
  
  