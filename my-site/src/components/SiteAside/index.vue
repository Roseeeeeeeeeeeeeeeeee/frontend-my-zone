<template>
    <div class="site-aside-container">
        <template v-if="data">
            <div class="avatar">
                <Avatar :url="data.avatar" />
            </div>
            <h1 class="title">{{ data.siteTitle }}</h1>
        </template>

        <Menu v-if="data"/>
        <Contact v-if="data"/>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
import { mapState } from 'vuex';
export default {

    components: {
        Avatar, Menu, Contact
    },
    computed: mapState('setting', ['data'])



}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.site-aside-container {
    width: 100%;
    height: 100%;
    background-color: @dark;

    overflow-y: scroll;
    overflow-x: hidden;
    padding: 20px 0;

    .title {
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