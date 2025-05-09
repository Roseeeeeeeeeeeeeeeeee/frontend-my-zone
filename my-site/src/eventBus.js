// //事件总线

// //手写事件总线
// const listeners = {};
// export default {
//     //绑定事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     //解绑事件
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     //触发事件
//     $emit(eventName,...args){
//         if(![listeners[eventName]]){
//             return;
//         }
//         for(const handler of listeners[eventName]){
//             handler(...args);
//         }
//     }
// }

//Vue中已经封装好的事件总线(即已经在Vue中封装好了上述对象的三个方法)

import Vue from "vue";
/**
 * 事件：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：滚动的dom元素，若传undefined则表示此元素已经销毁
 * 
 * 事件：setMainScroll
 * 含义：当需要设置主区域的滚动条位置时触发
 * 参数：滚动高度
 */
const app = new Vue({})
Vue.prototype.$bus = app;

export default app