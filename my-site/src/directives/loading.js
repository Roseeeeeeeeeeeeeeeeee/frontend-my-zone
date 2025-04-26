import loadingImg from '@/assets/loading.svg'
import styles from './loading.module.less'



/**
 * 从容器中得到img
 * @param {*} el 
 * @returns 
 */
function getLoadingDom(el) {
    return el.querySelector('[data-role="loading"]')
}
/**
 * 用于在容器元素中创建img
 * @param {*} el 容器元素
 */
function createLoadingDom(el) {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingImg;
    img.className = styles['img-loading']
    el.appendChild(img);
}
export default function (el, binding) {
    const loadingDom = getLoadingDom(el);

    if (!getLoadingDom(el)) {
        //没有加载动画时，添加动画（创建img元素，src是一个动图）
        if (binding.value) {
            createLoadingDom(el);

        }

    } else {
        if (!binding.value) {
            loadingDom.remove();
        }
    }






}