<template>
  <div
    class="carouse-item-container"
    ref="carouseContainer"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div class="image" ref="imageLoader" :style="imagePosition">
      <ImageLoader
        @load="showWords(500)"
        :src="carouse.bigImg"
        :palceholder="carouse.midImg"
        :duration="1000"
      />
    </div>
    <!-- <div class="test">横坐标：{{mouseX}} 纵坐标：{{ mouseY }}, {{imagePosition}}</div> -->
    <div class="title" ref="title">{{ carouse.title }}</div>
    <div class="desc" ref="desc">{{ carouse.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  props: ["carouse"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // carouse-item-container容器尺寸
      innerSize: null, // imageLoader容器尺寸
      mouseX: 0, // 鼠标X坐标
      mouseY: 0, // 鼠标Y坐标
    };
  },
  computed: {
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
    imagePosition() {
      if (!this.containerSize || !this.innerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 图片多出来的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; // 图片片多出来的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.innerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords(duration) {
      setTimeout(() => {
        this.$refs.title.style.opacity = 1;
        this.$refs.title.style.width = 0;
        this.$refs.title.clientWidth;
        this.$refs.title.style.transition = "1s";
        this.$refs.title.style.width = this.titleWidth + "px";

        this.$refs.desc.style.opacity = 1;
        this.$refs.desc.style.width = 0;
        this.$refs.desc.clientWidth;
        this.$refs.desc.style.transition = "2s 1s";
        this.$refs.desc.style.width = this.descWidth + "px";
      }, duration);
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.carouseContainer.clientWidth,
        height: this.$refs.carouseContainer.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.imageLoader.clientWidth,
        height: this.$refs.imageLoader.clientHeight,
      };
    },
    handleMousemove(e) {
      const rect = this.$refs.carouseContainer.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseleave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.carouse-item-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .image {
    width: 110%;
    height: 110%;
    transition: .3s;
    left: 0;
    top: 0;
  }
  .title,
  .desc {
    position: absolute;
    white-space: nowrap;
    letter-spacing: 3px;
    overflow: hidden;
    left: 15px;
    color: #fff;
    opacity: 0;
  }
  .title {
    top: calc(50% - 30px);
    font-size: 2em;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  .desc {
    top: calc(50% + 20px);
    font-weight: lighter;
    color: lighten(@gray, 20%);
    transition: 2s 1s;
  }
}
</style>