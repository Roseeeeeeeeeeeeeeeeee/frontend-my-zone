<template>
    <div v-show="show" @click="handleClick" class="to-top-container">
        TOP
    </div>
</template>

<script>
import { debounce } from '../../utils'
export default {
    methods: {
        handleClick() {
            this.$bus.$emit('setMainScroll', 0)
        },
        handleScroll(dom) {
           
            
            
            if (!dom) { 
                this.show  = false
                return
            }
            const top = dom.scrollTop;
            this.show = top > 500;

        }
    },
    created() {
        this.debounceScroll = debounce(this.handleScroll,50)
        this.$bus.$on('mainScroll', this.debounceScroll)
    },
    destroyed(){
        this.$bus.$off('mainScroll', this.debounceScroll)
    },
    data() {
        return {
            show: false
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.to-top-container {
    cursor: pointer;
    transition: .3s;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: @primary;
    position: fixed;
    bottom: 50px;
    right: 50px;
    color: #fff;

    &:hover {
        scale: 1.3;

    }
}
</style>