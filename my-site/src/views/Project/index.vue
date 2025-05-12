<template>
  <div class="project-container" v-loading="loading" ref="container">
    <div class="pjt-item" v-for="item in data" :key="item.id">
      <a :href="item.url ? item.url : `javascript:alert('内网项目,无法通过外网访问')`" 
      :target="item.url ? '_blank' : '_self'">
        <img v-lazy="item.thumb">
      </a>

      <div class="info">
        <a :href="item.url ? item.url : `javascript:alert('内网项目,无法通过外网访问')`" :target="item.url ? '_blank' : '_self'">
          <h2 class="title">
            {{ item.name }}
          </h2>
        </a>

        <div class="github" v-if="item.github">
          <Icon type="github" />
          <a :href="item.github" target="_blank">在github上打开</a>
        </div>
        <p v-for="(it,i) in item.description" :key="i">
         {{it}}
        </p>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading" text="暂无项目"/>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Empty from '@/components/Empty'
import { mapState } from 'vuex';
import mainScroll from '@/mixins/mainScroll';
export default {
  mixins:[mainScroll('container')],
  components: {
    Icon,
    Empty

  },
  created() {
    this.$store.dispatch('project/fetchData')
  },
  computed: mapState('project', ['data', 'loading'])
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.project-container {
  width: 100%;
  height: 100%;
  padding: 50px;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .pjt-item {
    &:hover{
      scale: (1.03);
    }
    display: flex;
    transition: .3s;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    img {
      width: 300px;
      height: 150px;
      object-fit: cover;
    }

    .info {
      margin-left: 30px;

      .github {
        color: @success;
        font-size: 15x;
        margin-top: 10px;

        a {
          margin-left: 10px;

        }
      }

      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>