<template>
    <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" :style="imgPosition" ref="img">
            <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="showWords" />
        </div>
        <div class="title" ref="title">{{ carousel.title }}</div>
        <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'


export default {
    data() {
        return {
            titleWidth: 0,
            descriptionWidth: 0,
            containerSize: null,
            imgSize: null,
            mouseX: 0,
            mouseY: 0

        }
    },
    props: ['carousel'],
    components: {
        ImageLoader,
    },
    //生命周期钩子
    mounted() {
        this.showWords();
        //
        this.getSize()//得到容器以及图片宽高
        window.addEventListener('resize', this.getSize)//实时更新（页面尺寸变化时）
        //设置鼠标位置一开始在图片中央（虚拟）
        this.mouseX = this.center.x
        this.mouseY = this.center.y

    },
    destroyed() {
        window.removeEventListener('resize', this.getSize);

    },
    methods: {
        createAnimate(dom, index) {
            dom.style.width = 0;
            dom.style.transition = '1s';
            if (!index) {
                dom.style.transition = '1s 1s'; //描述延迟一秒出现
            }
            //强行渲染
            dom.clientWidth;
            dom.style.opacity = 1;
            dom.style.width = index ? this.titleWidth + 'px' : this.descriptionWidth + 'px';

        },
        showWords() {
            const title = this.$refs.title;
            const desc = this.$refs.desc;
            this.titleWidth = title.clientWidth;
            this.descriptionWidth = desc.clientWidth;
            this.createAnimate(title, 1);
            this.createAnimate(desc, 0);
        },
        getSize() {
            this.containerSize = {
                hight: this.$refs.container.clientHeight,
                width: this.$refs.container.clientWidth
            }
            this.imgSize = {
                hight: this.$refs.img.clientHeight,
                width: this.$refs.img.clientWidth
            }
        },
        handleMouseMove(e) {
            const containerPos = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - containerPos.left;
            this.mouseY = e.clientY - containerPos.top;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x
            this.mouseY = this.center.y
        }

    },
    computed: {
        imgPosition() { //得到图片的绝对定位参数
           if(!this.containerSize || !this.imgSize)
           {
                return;
           }
            const left = -this.mouseX * (this.imgSize.width - this.containerSize.width) / this.containerSize.width;
            const top = -this.mouseY * (this.imgSize.hight - this.containerSize.hight) / this.containerSize.hight;

            return {
                transform: `translate(${left}px,${top}px)`
            }
        },
        center(){
            return{
                x:this.containerSize.width / 2,
                y:this.containerSize.hight / 2,
            }
        }
    }
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.carousel-item-container {
    width: 100%;
    height: 100%;
    background-color: @dark;
    position: relative;
    color: #fff;
    overflow: hidden;


}

.carousel-img {
    width: 100%;
    height: 100%;
    //测试
    width: 110%;
    height: 110%;
    transition: .2s;
    position: absolute;
    left: 0;
    top: 0;
}

.title,
.desc {
    position: absolute;
    left: 10%;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
        0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
}

.title {
    top: 60%;
    font-size: 30px;
    letter-spacing: 3px;
}

.desc {
    top: calc(60% + 60px);
    color: lighten(@gray, 20%);
}
</style>