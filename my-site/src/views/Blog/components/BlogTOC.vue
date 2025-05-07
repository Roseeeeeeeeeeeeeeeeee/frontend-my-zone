<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithActive" @select="handleSelect" />

  </div>
</template>

<script>
import RightList from './RightList'
import { debounce } from '../../../utils'
export default {
  data() {
    return {
      activeAnchor: '',
    }
  },
  props: {
    toc: {
      type: Array,

    }
  },
  components: {
    RightList,
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    },
    setActive() {
      

      this.activeAnchor = ''
      const gap = 200
      for (const dom of this.tocDoms) {
        if(!dom){
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top <= gap) {
          this.activeAnchor = dom.id
        } else if (top > gap) {
          return
        }
      }

    }

  },
  computed: {
    tocWithActive() {
      const getTOC = (toc = []) => {
        return toc.map((t) =>
        (
          {
            ...t,
            isActive: this.activeAnchor === t.anchor,
            children: getTOC(t.children)
          }
        )

        )

      }
      return getTOC(this.toc)
    },
    tocDoms() {
      const doms = []
      const addDoms = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor))
          if (item.children && item.children.length) {
            addDoms(item.children)
          }

        }
      }
      addDoms(this.toc)
      return doms
    }
  },
  created() {
    this.debounceScroll = debounce(this.setActive, 30)
    this.$bus.$on('mainScroll', this.debounceScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.debounceScroll)
  }

}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>