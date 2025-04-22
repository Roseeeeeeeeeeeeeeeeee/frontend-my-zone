<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
        <SiteAside/>

        </div> 
      </template>
      <template #default>
        中间主区域
      </template>
      </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'


export default {
  name: 'App',
  components: {
   Layout,SiteAside
  },
 
}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';
.app-container{
    .self-fill(fixed)
}
.aside{
  width: 250px;
}
</style>
