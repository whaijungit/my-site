<template>
  <Layout>
    <template #main>
      <div class="main-container" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogCommont v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/Blog/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogToc from "./components/BlogToc";
import BlogCommont from "./components/BlogCommont";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogCommont,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
};
</script>

<style scoped lang="less">
.main-container {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
  overflow-x: auto;
}
.right-container {
  position: relative;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  // overflow-x: auto;
  box-sizing: border-box;
}
</style>
