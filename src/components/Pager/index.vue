<template>
  <div class="pager-container" v-if="totlaPageNumber">
    <div class="position">
      <Icon
        @click="handleClick(1)"
        type="upLink"
        :class="{
          disabled: current === 1,
        }"
      ></Icon>
      <Icon
        @click="handleClick(current - 1)"
        type="upLink"
        :class="{
          disabled: current === 1,
        }"
      />
      <a
        @click="handleClick(n)"
        class="pager-number"
        v-for="(n, i) in visiblePageNumebrs"
        :class="{ selected: n === current }"
        :key="i"
        >{{ n }}</a
      >

      <Icon
        type="dowLink"
        :class="{ disabled: current === totlaPageNumber }"
        @click="handleClick(current + 1)"
      />
      <Icon
        type="dowLink"
        :class="{ disabled: current === totlaPageNumber }"
        @click="handleClick(totlaPageNumber)"
      />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    totla: {
      type: Number,
      default: 3000,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    totlaPageNumber() {
      return Math.ceil(this.totla / this.limit);
    },
    // 每页显示最小页码
    visiblePageMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      // 如果为负数返回1
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visiblePageMax() {
      let max = this.visiblePageMin + this.visibleNumber - 1;
      if (max > this.totlaPageNumber) {
        max = this.totlaPageNumber;
      }
      return max;
    },
    visiblePageNumebrs() {
      const pagerNumber = [];
      for (
        let index = this.visiblePageMin;
        index <= this.visiblePageMax;
        index++
      ) {
        pagerNumber.push(index);
      }

      return pagerNumber;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.totlaPageNumber) {
        newPage = this.totlaPageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // 通知父组件、页码数据改变了
      this.$emit("pageChange", /**给一个页码数据 */ newPage);
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";

.pager-container {
  display: flex;
  align-items: center;
  justify-content: center;
  // height: 1.7em;
  .icon-container {
    color: @primary;
    margin: @margin;
    cursor: pointer;
  }
  .pager-number {
    margin: @margin;
    box-sizing: @iebox;
    cursor: pointer;
    &.selected {
      color: @primary;
    }
  }
  .iconfont {
    font-size: 24px;
    color: @words;
    &:hover {
      color: @primary;
    }
  }
  .iconfont.disabled {
    color: @gray;
    cursor: not-allowed;
  }
}
</style>