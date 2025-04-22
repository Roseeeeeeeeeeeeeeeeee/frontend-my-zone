<template>
    <nav class="menu-container">
       <router-link 
       :to="{name : item.name}" 
       v-for="item in items" 
       :key="item.name" 
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
                    name: 'Home',
                    exact: true
                },
                {
                    icon: 'blog',
                    title: '文章',
                    name: 'Blog',
                    exact: false // 是否启用路由的精确匹配
                },
                {
                    icon: 'about',
                    title: '关于我',
                    name: 'About',
                    exact: true
                },
                {
                    icon: 'code',
                    title: '项目&效果',
                    name: 'Project',
                    exact: true
                },
                {
                    icon: 'chat',
                    title: '留言板',
                    name: 'Message',
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