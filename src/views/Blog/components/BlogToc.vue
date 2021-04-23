<template>
  <div class="toc-container">
    <h1>目录</h1>
    <TreeList :list="mapIselect" @select="handleSelect" />
  </div>
</template>

<script>
import TreeList from "./TreeList";
import { debounce } from "@/utils";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  components: {
    TreeList,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  created() {
    this.scrollDebounce = debounce(this.setSelet, 50)
    this.$bus.$on("mainScroll", this.scrollDebounce);
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.scrollDebounce)
  },
  computed: {
    // toc map iselect
    mapIselect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSeleted: t.anchor == this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const addDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addDoms(t.children);
          }
        }
      };
      addDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelet(scrollDom) {
      if(!scrollDom){
        return
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        // console.log(top);
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.toc-container {
  padding: 20px 20px;
}
</style>