<template>
    <div class="home-container" ref="container">
        主页
        <button @click="handlClick">click</button>
        <h1>dhfk</h1>
        <h1>dhfk</h1>
        <h1>dhfk</h1>
        <h1>dhfk</h1>
        <h1>dhfk</h1>
        <h1>dhfk</h1>
    </div>
</template>

<script>



export default {
    methods: {
        handlClick() {
            this.$showMessage({
                    type: 'info',
                    duration: 2000,
                    container: this.$refs.container,
                    text:'nihao'
                })
        }
    }
}
</script>

<style scoped></style>