<template>
  <div
    class="home-container"
    ref="container"
    v-loading="isLoading"
    @wheel="handleWheel"
  >
    <ul
      class="carouse-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouseItem :carouse="item" />
      </li>
    </ul>
    <ul class="indicator">
      <li
        :class="{ active: index === i }"
        @click="siwtchTo(i)"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>
    <Icon
      v-show="index >= 1"
      @click.native="siwtchTo(index - 1)"
      class="icon arrowUp"
      type="arrowUp"
    />
    <Icon
      v-show="index < data.length - 1"
      @click.native="siwtchTo(index + 1)"
      class="icon arrowDown"
      type="arrowDown"
    />
  </div>
</template>
<style lang="less" scoped>
@import "~@/assets/styles/mixins.less";
@import "~@/assets/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carouse-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .indicator {
    .position-slef;
    left: auto;
    right: 10px;
    cursor: pointer;
    li {
      width: 7px;
      height: 7px;
      background: darken(@dark, 8%);
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: border-box;
      margin: 7px 0;
    }
    .active {
      background: #fff;
      border: 1px solid #fff;
    }
  }
  @top: 2vh;
  .icon {
    .position-slef;
    font-size: 30px;
    color: @gray;
    cursor: pointer;

    :hover {
      color: @gray;
    }
  }
  .arrowUp {
    animation: @jumpUp 1s infinite;
    top: @top + 2px;
  }
  .arrowDown {
    top: auto;
    animation: @jumpDown 2s infinite;
    bottom: @top;
  }
}
</style>

<script>
import ImageLoader from "@/components/ImageLoader";
import CarouseItem from "./components/CarouseItem";
import Icon from "@/components/Icon";
import { getBanners } from "@/api/Blog/banner";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  name: "Home",
  components: {
    ImageLoader,
    Icon,
    CarouseItem,
  },
  data() {
    return {
      index: 0, // 轮播切换数据
      containerHeight: 0,
      siwtching: false, // 是否正在翻页中
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async fetchData() {
      return await getBanners();
    },
    siwtchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.siwtching || (e.deltaY <= -124 && e.deltaY >= 124)) {
        return;
      }
      // 上滚动
      if (e.deltaY < -124 && this.index > 0) {
        this.index--;
        this.siwtching = true;
      }
      // 下滚动
      else if (e.deltaY > 124 && this.index < this.data.length - 1) {
        this.index++;
        this.siwtching = true;
      }
    },
    handleTransitionEnd() {
      this.siwtching = false;
    },
    handleResize() {
      // 该组件窗口改变 重新计算组件高度 之前的containerHeight数据还是之前的数据
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>
