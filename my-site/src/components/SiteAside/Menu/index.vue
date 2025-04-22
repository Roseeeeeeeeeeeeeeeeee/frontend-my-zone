<template>
    <nav class="menu-container">
       <router-link 
       :to="item.link" 
       v-for="item in items" 
       :key="item.link" 
       active-class="selected" 
       exact-active-class=""
       :exact="item.exact"
       >
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.title }}</span>
       </router-link>

    </nav>
</template>

<script>
import Icon from '@/components/Icon'

export default {
    data() {
        return {

            items: [
                {
                    icon: 'home',
                    title: '首页',
                    link: '/',
                    exact: true
                },
                {
                    icon: 'blog',
                    title: '文章',
                    link: '/blog',
                    exact: false // 是否启用路由的精确匹配
                },
                {
                    icon: 'about',
                    title: '关于我',
                    link: '/about',
                    exact: true
                },
                {
                    icon: 'code',
                    title: '项目&效果',
                    link: '/project',
                    exact: true
                },
                {
                    icon: 'chat',
                    title: '留言板',
                    link: '/messgae',
                    exact: true
                },
            ]
        }
    },
    components: {
        Icon
    },
   


}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.menu-container {

    color: @gray;
    margin: 24px 0;

    a {
        display: flex;
        align-items: center;
        height: 30px;
        padding: 0 50px;
        height: 45px;
        &.selected {
            background-color: darken(@words, 5%);
        }
        &:hover{
            color: #fff;
        }
    }

    .icon {
        width: 30px;
       

    }

}
</style>