<template>
    <nav class="menu-container">
        <a :href="item.link" v-for="item in items" :key="item.link" :class="{
            seleted: isSeleted(item)
        }">
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.title }}</span>
        </a>

    </nav>
</template>

<script>
import Icon from '../Icon'
export default {
    data() {
        return {

            items: [
                {
                    icon: 'home',
                    title: '首页',
                    link: '/',
                },
                {
                    icon: 'blog',
                    title: '文章',
                    link: '/blog',
                    startWith: true // 以link开头的路径均可
                },
                {
                    icon: 'about',
                    title: '关于我',
                    link: '/about',
                },
                {
                    icon: 'code',
                    title: '项目&效果',
                    link: '/project',
                },
                {
                    icon: 'chat',
                    title: '留言板',
                    link: '/messgae',
                },
            ]
        }
    },
    components: {
        Icon
    },
    methods: {
        isSeleted(item) {
            let curPathname = location.pathname.toLowerCase();
            let link = item.link.toLowerCase()
            if (item.startWith) {
                return curPathname.startsWith(link);
            } else {
                return curPathname === link;
            }
        }
    }


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
        

        &.seleted {
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