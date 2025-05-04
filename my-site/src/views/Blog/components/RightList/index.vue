<template>
    <ul class="right-list-container">
        <li v-for="(item, i) in list" :key="i" @click.stop="handleClick(item)">
            <span :class="{ active: item.isActive }">
                {{ item.name }}
            </span>
            <span class="aside" :class="{ active: item.isActive }">
                {{ item.aside }}
            </span>
            <RightList :list="item.children" @select="handleClick" />
        </li>
    </ul>
</template>

<script>

export default {
    name: 'RightList', //必须要写，否则无法实现组件递归
    props: {
        list: {
            /**
             * 期望的数据结构是
             *  [
             *  {name : 'a',isActive : false, children :[
             *      name : ..........
             * ]}
             * ]
             */
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleClick(item) {
            if (item.isActive) {
                return;
            }
            this.$emit('select', item)
        }
    }

}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.right-list-container {
    list-style: none;
    padding: 0;

    .right-list-container {
        margin-left: 1em;
    }

    li {
        min-height: 40px;
        line-height: 40px;
        font-size: 13px;

        cursor: pointer;

        span.active {
            font-weight: bold;
            color: @warn;

        }
        .aside{
            color: @gray;
            font-size: 12px;
        }

    }


}
</style>