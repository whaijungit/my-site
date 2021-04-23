<template>
  <div v-show="show" @click="handleClick" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleShow);
  },
  destroyed() {
    this.$bus.$on("mainScroll", this.handleShow);
  },
  methods: {
    handleShow(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 1000;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
</style>