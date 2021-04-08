<template>
  <Pager
    @pageChange="handlePageChange"
    :current="current"
    :totla="totla"
    :limit="6"
    :visibleNumber="6"
  />
</template>

<script>
import Pager from "./";

export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      totla: 303,
    };
  },
  methods: {
    handlePageChange(newPage) {
      console.log("页码改变了", newPage);
    },
  },
};
</script>

<style>
</style>