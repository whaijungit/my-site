<template>
  <div class="toc-container">
    <h1>目录</h1>
    <TreeList :list="mapIselect" @select="handleSelect" />
  </div>
</template>

<script>
import TreeList from "./TreeList";
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
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
  },
  computed: {
    // toc map iselect
    mapIselect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          selected: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
  },
};
</script>

<style scoped lang="less">
.toc-container {
  padding: 20px 20px;
}
</style>