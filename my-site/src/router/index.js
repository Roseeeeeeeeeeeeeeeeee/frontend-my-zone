import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { titleController } from '@/utils';
if (!window.VueRouter) {
    Vue.use(VueRouter); // 使用一个vue插件
  }

const router = new VueRouter({
    routes,//路由匹配规则
    mode :'history'
});
router.afterEach((to,from)=>{
    if(to.meta.title){
        titleController.setRouteTitle(to.meta.title)
    }
})
export default router;