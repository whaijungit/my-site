<template>
  <div class="test-container">
    <TreeList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import TreeList from "./TreeList";
export default {
  components: {
    TreeList,
  },
  data() {
    return {
      list: [
        { name: "a", isSeleted: false },
        {
          name: "b",
          isSeleted: false,
          children: [
            {
              name: "b-1",
              isSeleted: true,
              children: [
                { name: "b-1", isSeleted: true },
                { name: "b-2", isSeleted: false },
                { name: "b-3", isSeleted: false },
                { name: "b-4", isSeleted: false },
              ],
            },
            { name: "b-2", isSeleted: false },
            { name: "b-3", isSeleted: false },
            { name: "b-4", isSeleted: false },
          ],
        },
        {
          name: "c",
          isSeleted: false,
          children: [
            { name: "c-1", isSeleted: true },
            { name: "c-2", isSeleted: false },
            { name: "c-3", isSeleted: false },
            { name: "c-4", isSeleted: false },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>