<template>
    <div class="test-container">
        <RightList :list="list" @select="handleSelect" />
    </div>
</template>

<script>
import RightList from './index.vue'
export default {
    components: {
        RightList,
    },
    data() {
        return {
            list: [
                { name: 'a', isActive: false },
                {
                    name: 'b', isActive: true, children: [
                        { name: 'b-1', isActive: true },
                        { name: 'b-2', isActive: false }
                    ]
                },
                { name: 'c', isActive: false },
                {
                    name: 'd', isActive: false,
                    children: [
                        { name: 'd-1', isActive: false },
                        { name: 'd-2', isActive: true }
                    ]
                }
            ]
        }
    },
    methods:{
        handleSelect(item){
            console.log(item);
        }
    }

}
</script>

<style scoped lang="less"></style>