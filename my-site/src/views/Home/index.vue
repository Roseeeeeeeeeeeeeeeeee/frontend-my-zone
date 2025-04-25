<template>
    <div class="home-container" ref="container" @wheel="handleWheel">
        <ul class="carousel-container" :style="{
            marginTop,
        }" 
        @transitionend="handleTransitionEnd"
        >
            <li v-for="(item, i) in banners" :key="item.id">
                <Carousel :carousel="item" />
            </li>
        </ul>
        <div class="arrow arrow-up" @click="moveTo(index - 1)" v-show="index > 0">
            <Icon type="arrowUp" />
        </div>
        <div class="arrow arrow-down" @click="moveTo(index + 1)" v-show="index < banners.length - 1">
            <Icon type="arrowDown" />

        </div>
        <div class="indicater">
            <ul>
                <li v-for="(item, i) in banners" :key="item.id" :class="{
                    active: i === index
                }" @click="moveTo(i)">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import getBanners from '../../api/banner';
import Carousel from './Carouselitem.vue';
import Icon from '@/components/Icon'
export default {
    data() {
        return {
            banners: [],
            index: 0,
            containerHeigh: 0,
            switching: false,

        }
    },
    components: {
        Carousel,
        Icon
    },

    async created() {
        const data = await getBanners()
        this.banners = data;

    },
    mounted() {
        this.containerHeigh = this.$refs.container.clientHeight;
        window.addEventListener('resize', this.handelResize)
    },
    destroyed() {
        window.removeEventListener('resize', this.handelResize);
    },
    methods: {
        moveTo(i) {
            this.index = i;
            this.switching = true
           
            
        },
        handleWheel(e) {
           
            
            if (this.switching) {
                return;
            }
            if (e.deltaY > 5 && this.index < this.banners.length - 1) {
                this.switching = true
                
                
                this.index++;
            }

            if (e.deltaY < -5 && this.index > 0) {
                this.switching = true
                this.index--;
            }

        },
        handleTransitionEnd() {
            this.switching = false
            console.log('trend');
            
        },
        handelResize() {
            this.containerHeigh = this.$refs.container.clientHeight;
        }
    },
    computed: {
        marginTop() {
            
            return -this.index * this.containerHeigh + 'px';
        }
    },
    
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');
@import url('~@/styles/mixin.less');

.home-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    position: relative;
    color: #fff;


    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .carousel-container {
        width: 100%;
        height: 100%;
        transition: 1s;

        li {
            width: 100%;
            height: 100%;
        }
    }

    .arrow {
        .self-center();

        transform: translateX(-50%);
        font-size: 30px;
        @gap: 20px;
        color: @gray;

        &:hover {
            cursor: pointer;
            color: #fff;
        }

        &-up {
            top: @gap;
            animation: jump-up 2s infinite;
        }

        &-down {
            bottom: @gap;
            top: auto;
            animation: jump-down 2s infinite;

        }

        @jump : 5px;

        @keyframes jump-up {
            0% {
                transform: translate(-50%, -@jump);

            }

            50% {
                transform: translate(-50%, @jump);

            }

            100% {
                transform: translate(-50%, -@jump);


            }
        }

        @keyframes jump-down {
            0% {
                transform: translate(-50%, @jump);

            }

            50% {
                transform: translate(-50%, -@jump);

            }

            100% {
                transform: translate(-50%, @jump);

            }
        }
    }

    .indicater {
        .self-center();
        right: 20px;
        left: auto;

        li {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            border: 1px solid #fff;
            margin-bottom: 15px;

            &.active,
            &:hover {
                background-color: #fff;
                cursor: pointer;
            }
        }


    }
}
</style>