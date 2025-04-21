<template>
    <div class="site-aside-container">

        <div class="avatar">
            <Avatar
                url="https://img1.baidu.com/it/u=1592846363,3525204503&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667" />
        </div>
        <h1 class="title">张婧仪的小窝</h1>
        <Menu />
        <Contact />
    </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
export default {

    components: {
        Avatar, Menu, Contact
    },



}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.site-aside-container {
    width: 100%;
    height: 100%;
    background-color: @dark;

    overflow-y:scroll;
    overflow-x: hidden;
    padding: 20px 0;
    .title{
        text-align: center;
        margin-top: 10px;
        color: rgb(170, 236, 185);
        font-size: 25px;
    }
    .avatar {
        display: flex;
        justify-content: center;
      
    }
}
</style>