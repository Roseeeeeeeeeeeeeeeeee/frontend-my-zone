<template>
    <div class="site-aside-container">
        <div class="avatar">
            <Avatar
                url="https://img1.baidu.com/it/u=1592846363,3525204503&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667" />
        </div>
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

    .avatar {
        display: flex;
        justify-content: center;
    }
}
</style>