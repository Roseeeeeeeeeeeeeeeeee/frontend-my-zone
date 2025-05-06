//用法；就是调用这个函数即可
import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'

/**
 * 
 * @param text 弹窗中的文本
 * @param type 弹窗类型 ：info(普通情况) warn success error 
 * @param duration 弹窗出现时间 为0不消失
 * @param container 弹窗出现的容器
 */
export default function (option = {}) {
   const text = option.text || '';
   const type = option.type || 'info';
   const duration = option.duration || 2000;
   const container = option.container || document.body;
   const callback = option.callback
   //获取图标组件Dom
   const iconDom = getComponentRootDom(Icon, { type })
   //创建消息元素
   const messageDom = document.createElement('div');
   const typeClass = `message-${type}`
   messageDom.className = `${styles.message} ${styles[typeClass]}`;
   messageDom.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><p>${text}<p/>`
   

   if (container !== document.body) {
      if (getComputedStyle(container).position === 'static') {
         container.style.position = 'relative';  //保证弹出消息正确根据容器元素进行绝对定位

      }
   }

   container.appendChild(messageDom)

//强制渲染页面
messageDom.clientHeight; //诱发reflow
   //元素出现时的动画

   

   //上浮效果
   messageDom.style.transform = 'translate(-50%, -50%)'
   messageDom.style.opacity = 1

   //消失效果
   setTimeout(() => {
      messageDom.style.transform = ' translate(-50%, -50%) translateY(-10px)'
      messageDom.style.opacity = 0
      //移除弹出消息dom
      messageDom.addEventListener('transitionend', () => {
         messageDom.remove();
         //执行回调
       callback && callback()
      }, {
         once: true
      })


   }, duration)


}