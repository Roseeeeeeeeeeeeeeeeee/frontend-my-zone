<template>
  <div id="app">
    <Pager :total="total" :current="current" @page-change="handleChange" />

  </div>
</template>

<script>
import Pager from './components/Pager.vue';


export default {
  name: 'App',
  components: {
    Pager,
  },
  data() {
    return {
      total: 400,
      current: 2
    }
  },
  methods: {
    handleChange(newPage) {
      
      this.current = newPage
    }
  }
}
</script>

<style scoped></style>
