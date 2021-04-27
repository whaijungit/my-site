<template>
  <div class="about-container" v-loading="loading || !loaded">
    <iframe @load="loaded = true" v-if="data.src" class="about-content" frameborder="0" :src="data.src"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loaded: true,
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", ['data','loading']),
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .about-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>
