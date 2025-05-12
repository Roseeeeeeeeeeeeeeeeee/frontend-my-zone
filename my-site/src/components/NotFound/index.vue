<template>
  <div class="blog-detail-container">
    <h1>404 NOT FOUND</h1>
  </div>
</template>

<script>

export default {


}
</script>

<style scoped lang="less">
@import url('~@/styles/mixin.less');
@import url('~@/styles/var.less');

.blog-detail-container {
  width: 100%;
  height: 100%;
position: relative;
  h1 {
    .self-center();
    color: lighten(@success,20%);
    font-size: 50px;
  }

}
</style>