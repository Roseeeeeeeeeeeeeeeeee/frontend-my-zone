import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/Detail.vue';
import Message from '@/views/Message';
import Project from '@/views/Project';
export default [
    { name:'Home',path : '/',component : Home},
    { name:'Blog',path : '/article',component : Blog},
    { name : 'BlogCategory',path : '/article/cate/:categoryId',component : Blog},
    { name : 'BlogDetail',path : '/article/:id',component : BlogDetail},
    { name:'About',path : '/about',component : About},
    { name:'Project',path : '/project',component : Project },
    { name:'Message',path : '/message',component : Message },
]
