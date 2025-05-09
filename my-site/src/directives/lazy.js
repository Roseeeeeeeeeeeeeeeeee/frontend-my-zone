import eventBus from '@/eventBus'
import { debounce } from '@/utils';
import loadingImg from '@/assets/img-loading.gif'
eventBus.$on('mainScroll',debounce( setImages , 50))
let imgs = [] // 存储当前需要处理的图片（需要懒加载的）
/**
 * 对每张图片的具体操作
 */
function setImage(img){
    img.dom.src = loadingImg //先加载默认图片，速度快
    const rect = img.dom.getBoundingClientRect()
    const vh = document.documentElement.clientHeight
    const height = rect.height || 150
    
    
    if(rect.top >= -height && rect.top < vh){
     //图片在视口范围内，进行加载
    const tempImg = new Image();
    tempImg.onload = function(){
        img.dom.src = img.src
    }
    tempImg.src = img.src
     imgs = imgs.filter( item => item !== img)
    }
}
function setImages(){
    
    for(const img of imgs){
       setImage(img)
    }
  
}

export default{
    inserted(el,bindings){
        const img = {
            dom: el,
            src :bindings.value
        }
       imgs.push(img)
       //一加载出页面时肯定有几张图是在视口里的，不需要等滑动滚动条再加载，所以
       setImage(img)

    },
    unbind(el){
        imgs = imgs.filter((img)=>{
            return img.dom !== el
        })
    }
}