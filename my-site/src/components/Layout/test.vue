<template>
    <div class="test-container">
        <Layout>
            <template #left>
                <div class="left">
                    这是左边
                </div>
            </template>
            
                <div class="main">
                    这shis这是右边hishihsi
                   
                </div>
           
            <template #right>
                <div class="right">
                  这是右边这是右边这是右边这是右边这是右边这是右边 
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>

import Layout from './';
import '@/styles/global.less';

export default {
    components: {
        Layout,
    },


}
</script>

<style scoped>
.test-container {
    width: 60%;
    height: 600px;
    border: 1px solid;
    margin: 10px auto;
    white-space: nowrap;
}

.left {
    width: 200px;
    height: 100%;
    background-color: cadetblue;

}
.main{
    width: 100%;
    height: 100%;
    background-color: red;
}
.right{
    width: 100px;
    height: 100%;
    background-color: aqua;
}
</style>