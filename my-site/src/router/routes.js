import { delay } from '@/utils'
import "nprogress/nprogress.css";
import { start, done, configure } from 'nprogress';
configure({
    // trickleSpeed: 20,
    showSpinner: false
})
function getPageComponent(pageCompResolver) {
    return async () => {
        start()
        await delay(2000);
        const comp = await pageCompResolver()
        done()
        return comp
    }

}
/**
 * 为什么写成这样不行
 * function getPageComponent(pageCompResolver) {
   
        console.log('开始加载');
     await delay(3000);
    const comp = await pageCompResolver()

    console.log('加载完成');
    return comp
    
}
 */
export default [
    {
        name: 'Home', path: '/', component: getPageComponent(() => import(/*  webpackChunkName: "home" */'@/views/Home')),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'Blog', path: '/article', component: getPageComponent(() => import('@/views/Blog')),

        meta: {
            title: '文章'
        }
    },
    {
        name: 'BlogCategory', path: '/article/cate/:categoryId', component: getPageComponent(() => import('@/views/Blog')),
        meta: {
            title: '文章'
        }
    },
    {
        name: 'BlogDetail', path: '/article/:id', component: getPageComponent(() => import('@/views/Blog/Detail')),
        meta: {
            title: '文章详情'
        }
    },
    {
        name: 'About', path: '/about', component: getPageComponent(() => import('@/views/About')),
        meta: {
            title: '关于我'
        }
    },
    {
        name: 'Project', path: '/project', component: getPageComponent(() => import('@/views/Project')),
        meta: {
            title: '项目&效果'
        }
    },
    {
        name: 'Message', path: '/message', component: getPageComponent(() => import('@/views/Message')),
        meta: {
            title: '留言板'
        }
    },
]
