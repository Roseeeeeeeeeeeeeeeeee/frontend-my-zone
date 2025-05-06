<template>
    <div class="message-area-container">
        <DataForm v-on="$listeners" />
        <h3>
            {{title}}
            <span>{{subTitle}}</span>
        </h3>

        <DataList :list="list" />
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>

<script>


import DataList from './DataList.vue';
import DataForm from './DataForm.vue';

export default {

    props: {
        title:{
            type:String,
            default:'',
        },
        subTitle:{
            type:String,
            default:''
        },
        list:{
            type:Array,
            default:()=>[]
        },
        isListLoading:{
            type:Boolean,
            default:false
        }

    },
    components: {
        DataList,
        DataForm,
    },
    methods: {

    }



}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');
.loading{
    position: relative;
    height: 100px;
}
</style>