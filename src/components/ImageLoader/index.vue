<template>
  <div class="image-loader-container">
    <img
      class="palceholder"
      v-if="!everythingDone"
      :src="palceholder"
      ref="palceholder"
    />
    <img
      :src="src"
      @load="handleLoad"
      :style="{ opacity: opacityOrigin, transition: `${duration}ms` }"
    />
    {{ opacityOrigin }}
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    palceholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      everythingDone: false, // imageloader组件加载完成l
    };
  },
  computed: {
    opacityOrigin() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.$emit('load');
        this.everythingDone = true;
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/mixins.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .slef-fill(absolute);
    object-fit: cover;
  }

  .palceholder {
    filter: blur(2vw);
  }
}
</style>