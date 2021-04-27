<template>
  <div class="project-container" ref="project" v-loading="loading">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :href="item.url ? item.url : `javascript:alert(该项目无法通过外网访问)`"
        :target="item.url ? '_blank' : '_self'"
        ><img class="thumb" v-lazy="item.thumb"/>
      </a>
      <div class="info">
        <h2>
          {{ item.name }}
          <a :href="item.github" target="_blank" v-if="item.github" class="github">github</a>
        </h2>
        <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import mainScroll from '@/mixins/mainScroll'
import { mapState } from "vuex";
export default {
  mixins: [mainScroll('project')],
  computed: mapState("project", ["loading", "data"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  .project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    margin-bottom: 20px;
    &:hover {
      box-shadow: -1px 1px 5px #000;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }
    .thumb {
      width: 250px;
      min-width: 150px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 15px;
    }
    .info {
      line-height: 1.7;
      flex: 1 1 auto;
      h2 {
        margin: 0;
      }
    }
  }
}
.github {
  font-size: 16px;
  color: @primary;
  cursor: pointer;
}
</style>