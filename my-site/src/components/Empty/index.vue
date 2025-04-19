<template>

    <div class="empty-container">
        <Icon type="empty" />
        <p class="desc">{{ text }}</p>
    </div>

</template>

<script>
import Icon from '../Icon';

export default {
    components: {
        Icon,
    },
    props: {
        text: {
            type: String,
            // required:false,//默认就是false所以可以不写 
            default: '无数据'
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';

.empty-container{
    //自定义的混入（实现了自居中）
   .self-center() ;
    color: @gray;
    text-align: center;
}
.icon-container{
    font-size: 70px;
}

</style>