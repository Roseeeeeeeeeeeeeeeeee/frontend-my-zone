<template>
    <div class="home-container" ref="container">
        主页
       
    </div>
</template>

<script>
import getBanners from '../../api/banner';


export default {
    async created(){
       const data = await getBanners()
       console.log(data);
       
    },
    methods: {
       
    }
}
</script>

<style scoped></style>