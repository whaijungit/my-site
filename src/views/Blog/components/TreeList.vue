<template>
  <ul class="tree-list-container">
    <li v-for="item in list" :key="item.id" @click="handleClick(item)">
      <span
        :class="{
          selected: item.isSeleted,
        }"
      >
        {{ item.name }}
      </span>
      <span
        class="aside"
        :class="{
          selected: item.isSeleted,
        }"
      >
        {{ item.aside }}
      </span>
      <TreeList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TreeList",
  props: {
    // 数据结构 [{title:'类型',children:[{title:'类型',selected}],selected:true},{},{}]
    // event defualt seleted
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSeleted) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.tree-list-container {
  list-style: none;
  padding: 0;
  .tree-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;

    cursor: pointer;
    .selected {
      color: @warn;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
  font-weight: lighter;
}
</style>